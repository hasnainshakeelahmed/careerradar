import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, decimal, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Community Members Table
 * Stores information about users who join the Career Radar community
 */
export const communityMembers = mysqlTable("community_members", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  bio: text("bio"),
  skills: text("skills"), // JSON stringified array
  interests: text("interests"), // JSON stringified array
  location: varchar("location", { length: 255 }),
  socialLinks: text("socialLinks"), // JSON stringified object
  joinedAt: timestamp("joinedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CommunityMember = typeof communityMembers.$inferSelect;
export type InsertCommunityMember = typeof communityMembers.$inferInsert;

/**
 * Contact Submissions Table
 * Stores all contact form submissions
 */
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "replied"]).default("new").notNull(),
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  repliedAt: timestamp("repliedAt"),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Opportunities Table
 * Stores internships, remote jobs, freelance projects, and scholarships
 */
export const opportunities = mysqlTable("opportunities", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  type: mysqlEnum("type", ["internship", "remote_job", "freelance", "scholarship", "course"]).notNull(),
  category: varchar("category", { length: 100 }),
  company: varchar("company", { length: 255 }),
  salary: varchar("salary", { length: 255 }),
  location: varchar("location", { length: 255 }),
  applicationUrl: varchar("applicationUrl", { length: 500 }),
  deadline: timestamp("deadline"),
  requirements: text("requirements"), // JSON stringified array
  benefits: text("benefits"), // JSON stringified array
  featured: boolean("featured").default(false),
  status: mysqlEnum("status", ["active", "closed", "archived"]).default("active").notNull(),
  createdBy: int("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Opportunity = typeof opportunities.$inferSelect;
export type InsertOpportunity = typeof opportunities.$inferInsert;

/**
 * Resources Table
 * Stores PDFs, AI tools, websites, guides, and learning resources
 */
export const resources = mysqlTable("resources", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  type: mysqlEnum("type", ["pdf", "tool", "website", "guide", "course", "video"]).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  url: varchar("url", { length: 500 }),
  fileKey: varchar("fileKey", { length: 500 }), // S3 storage key for PDFs
  icon: varchar("icon", { length: 50 }), // emoji or icon name
  featured: boolean("featured").default(false),
  createdBy: int("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Resource = typeof resources.$inferSelect;
export type InsertResource = typeof resources.$inferInsert;

/**
 * Testimonials Table
 * Stores student and freelancer testimonials
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  authorName: varchar("authorName", { length: 255 }).notNull(),
  authorRole: varchar("authorRole", { length: 100 }).notNull(), // e.g., "Student", "Freelancer"
  authorImage: varchar("authorImage", { length: 500 }), // S3 URL or storage key
  content: text("content").notNull(),
  rating: int("rating").default(5), // 1-5 stars
  featured: boolean("featured").default(false),
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

/**
 * User Uploads Table
 * Stores file uploads from users (resumes, portfolios, etc.)
 */
export const userUploads = mysqlTable("user_uploads", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  fileName: varchar("fileName", { length: 255 }).notNull(),
  fileKey: varchar("fileKey", { length: 500 }).notNull(), // S3 storage key
  fileType: varchar("fileType", { length: 50 }).notNull(), // e.g., "resume", "portfolio"
  fileSize: int("fileSize"), // in bytes
  mimeType: varchar("mimeType", { length: 100 }),
  uploadedAt: timestamp("uploadedAt").defaultNow().notNull(),
});

export type UserUpload = typeof userUploads.$inferSelect;
export type InsertUserUpload = typeof userUploads.$inferInsert;

/**
 * News/Updates Table
 * Stores AI news, career tips, and platform updates
 */
export const newsUpdates = mysqlTable("news_updates", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  category: varchar("category", { length: 100 }).notNull(), // "ai_news", "career_tip", "update"
  imageUrl: varchar("imageUrl", { length: 500 }),
  featured: boolean("featured").default(false),
  status: mysqlEnum("status", ["draft", "published", "archived"]).default("draft").notNull(),
  createdBy: int("createdBy").notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type NewsUpdate = typeof newsUpdates.$inferSelect;
export type InsertNewsUpdate = typeof newsUpdates.$inferInsert;

/**
 * User Applications Table
 * Tracks which opportunities users have applied to
 */
export const userApplications = mysqlTable("user_applications", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  opportunityId: int("opportunityId").notNull(),
  status: mysqlEnum("status", ["applied", "shortlisted", "rejected", "accepted"]).default("applied").notNull(),
  appliedAt: timestamp("appliedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserApplication = typeof userApplications.$inferSelect;
export type InsertUserApplication = typeof userApplications.$inferInsert;

/**
 * User Preferences Table
 * Stores user preferences and settings
 */
export const userPreferences = mysqlTable("user_preferences", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  emailNotifications: boolean("emailNotifications").default(true),
  opportunityNotifications: boolean("opportunityNotifications").default(true),
  newsNotifications: boolean("newsNotifications").default(true),
  preferredCategories: text("preferredCategories"), // JSON stringified array
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserPreference = typeof userPreferences.$inferSelect;
export type InsertUserPreference = typeof userPreferences.$inferInsert;
