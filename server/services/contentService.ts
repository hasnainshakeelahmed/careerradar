import { invokeLLM } from "../_core/llm";
import { generateImage } from "../_core/imageGeneration";
import { getDb } from "../db";
import { contentPosts, contentSchedules, type InsertContentPost, type InsertContentSchedule } from "../../drizzle/schema";

/**
 * Content Service
 * Handles research, generation, and publishing of AI-generated content
 */

interface ResearchData {
  topic: string;
  findings: string[];
  summary: string;
}

interface GeneratedContent {
  title: string;
  summary: string;
  content: string;
  category: "ai_tools" | "internships" | "opportunities" | "earning_methods" | "trending_skills" | "resources";
  tags: string[];
  imagePrompt: string;
}

/**
 * Research latest trends for a given topic
 */
export async function researchTopic(topic: string): Promise<ResearchData> {
  const response = await invokeLLM({
    messages: [
      {
        role: "system",
        content: "You are a research assistant specializing in AI, career development, and technology trends. Provide accurate, current information about emerging opportunities and trends.",
      },
      {
        role: "user",
        content: `Research and summarize the latest trends and opportunities in: ${topic}. Focus on practical, actionable insights for students and freelancers. Provide 3-5 key findings and a brief summary.`,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "research_data",
        strict: true,
        schema: {
          type: "object",
          properties: {
            findings: {
              type: "array",
              items: { type: "string" },
              description: "Key findings from research",
            },
            summary: {
              type: "string",
              description: "Brief summary of the research",
            },
          },
          required: ["findings", "summary"],
          additionalProperties: false,
        },
      },
    },
  });

  const content = response.choices[0]?.message.content;
  if (!content) throw new Error("Failed to get research data from LLM");

  const parsed = JSON.parse(content);
  return {
    topic,
    findings: parsed.findings,
    summary: parsed.summary,
  };
}

/**
 * Generate content from research data
 */
export async function generateContent(
  topic: string,
  category: GeneratedContent["category"],
  research: ResearchData
): Promise<GeneratedContent> {
  const response = await invokeLLM({
    messages: [
      {
        role: "system",
        content:
          "You are an expert content creator specializing in career development and AI trends. Create engaging, informative content that appeals to students and freelancers. Keep tone professional yet accessible.",
      },
      {
        role: "user",
        content: `Create a modern, engaging content post about: ${topic}

Research findings:
${research.findings.map((f) => `- ${f}`).join("\n")}

Summary: ${research.summary}

Generate a compelling title, short summary (2-3 sentences), detailed content (3-4 paragraphs), relevant tags, and a prompt for an attractive image.

Category: ${category}`,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "generated_content",
        strict: true,
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Compelling post title",
            },
            summary: {
              type: "string",
              description: "2-3 sentence summary",
            },
            content: {
              type: "string",
              description: "Detailed content (3-4 paragraphs)",
            },
            tags: {
              type: "array",
              items: { type: "string" },
              description: "Relevant tags for categorization",
            },
            imagePrompt: {
              type: "string",
              description: "Detailed prompt for generating an attractive image",
            },
          },
          required: ["title", "summary", "content", "tags", "imagePrompt"],
          additionalProperties: false,
        },
      },
    },
  });

  const content = response.choices[0]?.message.content;
  if (!content) throw new Error("Failed to generate content from LLM");

  const parsed = JSON.parse(content);
  return {
    title: parsed.title,
    summary: parsed.summary,
    content: parsed.content,
    category,
    tags: parsed.tags,
    imagePrompt: parsed.imagePrompt,
  };
}

/**
 * Generate image for content
 */
export async function generateContentImage(prompt: string): Promise<string> {
  try {
    const result = await generateImage({
      prompt: `Professional, modern design for a career/AI content card: ${prompt}. Style: clean, professional, tech-forward. Colors: blues, cyans, dark backgrounds.`,
    });
    return result.url;
  } catch (error) {
    console.error("Failed to generate image:", error);
    // Return a placeholder if image generation fails
    return "/manus-storage/placeholder-content.png";
  }
}

/**
 * Create and save a content post
 */
export async function createContentPost(
  post: Omit<InsertContentPost, "createdAt" | "updatedAt">,
  userId: number
): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  const result = await db.insert(contentPosts).values({
    ...post,
    createdBy: userId,
  });

  return result[0].insertId;
}

/**
 * Schedule weekly content generation
 */
export async function scheduleWeeklyContent(
  weekNumber: number,
  year: number,
  scheduledDate: Date,
  topics: string[]
): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  const result = await db.insert(contentSchedules).values({
    weekNumber,
    year,
    scheduledDate,
    status: "pending",
    researchTopics: JSON.stringify(topics),
    postsGenerated: 0,
  });

  return result[0].insertId;
}

/**
 * Get pending content schedules
 */
export async function getPendingSchedules() {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  return await db.query.contentSchedules.findMany({
    where: (schedules, { eq }) => eq(schedules.status, "pending"),
  });
}

/**
 * Update schedule status
 */
export async function updateScheduleStatus(
  scheduleId: number,
  status: "pending" | "researching" | "generating" | "ready" | "published" | "failed",
  errorLog?: string
): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  await db.update(contentSchedules).set({
    status,
    errorLog,
    ...(status === "published" && { completedAt: new Date() }),
  });
}

/**
 * Publish scheduled content
 */
export async function publishScheduledContent(scheduleId: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  const now = new Date();
  await db
    .update(contentPosts)
    .set({
      status: "published",
      publishedAt: now,
    })
    .where((posts) => posts.scheduledFor && new Date(posts.scheduledFor) <= now);

  await updateScheduleStatus(scheduleId, "published");
}

/**
 * Get published content for display
 */
export async function getPublishedContent(limit: number = 10) {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  return await db.query.contentPosts.findMany({
    where: (posts) => posts.status === "published",
    limit,
    orderBy: (posts, { desc }) => desc(posts.publishedAt),
  });
}

/**
 * Get content by category
 */
export async function getContentByCategory(
  category: GeneratedContent["category"],
  limit: number = 5
) {
  const db = await getDb();
  if (!db) throw new Error("Database not connected");

  return await db.query.contentPosts.findMany({
    where: (posts) => posts.category === category && posts.status === "published",
    limit,
    orderBy: (posts, { desc }) => desc(posts.publishedAt),
  });
}
