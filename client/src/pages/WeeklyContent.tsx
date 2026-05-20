'use client';

import { Calendar, TrendingUp, Eye, ArrowRight, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ContentPost {
  id: string;
  title: string;
  category: 'AI Tools' | 'Internships' | 'Opportunities' | 'Skills' | 'Resources' | 'Trending';
  description: string;
  fullContent: string;
  image: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
}

const weeklyContent: ContentPost[] = [
  {
    id: '1',
    title: 'Top 10 AI Tools Dominating 2026 - Must-Have for Every Professional',
    category: 'AI Tools',
    description: 'Discover the cutting-edge AI tools revolutionizing productivity, automation, and creative work in 2026.',
    fullContent: `# Top 10 AI Tools Dominating 2026 - Must-Have for Every Professional

The AI revolution has reached new heights in 2026. Here are the tools reshaping industries:

## 1. Claude 4 Advanced
Multimodal AI with 200K context window, perfect for complex document analysis and code generation.

## 2. GPT-5 Pro
Next-gen reasoning with real-time web access and advanced multimodal capabilities.

## 3. Gemini 3.0 Ultra
Google's most powerful model with enhanced reasoning and native video understanding.

## 4. Perplexity Pro Max
Real-time AI research with academic paper integration and source verification.

## 5. Cursor v2
AI IDE with full codebase understanding and autonomous refactoring capabilities.

## 6. Midjourney v7
Generative AI with photorealistic rendering and consistent character generation.

## 7. Runway Gen-3
AI video generation with 4K quality and advanced motion control.

## 8. NotebookLM Pro
AI research assistant with real-time collaboration and multi-document synthesis.

## 9. Copilot Enterprise+
Enterprise AI with custom model training and integration across all Microsoft apps.

## 10. OpenAI o1 Pro
Advanced reasoning model for complex problem-solving and scientific research.

These tools are essential for staying competitive in 2026. Early adoption is key!`,
    image: '🤖',
    date: '2026-05-20',
    readTime: '8 min read',
    views: 12450,
    tags: ['AI', 'Tools', '2026', 'Productivity'],
  },
  {
    id: '2',
    title: 'Top Remote Internships May 2026 - Earn While You Learn',
    category: 'Internships',
    description: 'Explore the best paid remote internship opportunities available right now for students and freshers.',
    fullContent: `# Top Remote Internships May 2026 - Earn While You Learn

Remote internships in 2026 offer competitive stipends and real-world experience. Here are the best opportunities:

## Featured Opportunities

### 1. OpenAI Internship Program
- Duration: 3-6 months
- Stipend: $3000-$5000/month
- Focus: AI research and safety
- Apply: openai.com/careers

### 2. Google AI Residency
- Duration: 12 months
- Stipend: $4000-$6000/month
- Focus: Machine learning and AI
- Apply: google.com/careers

### 3. Meta AI Research
- Duration: 3-4 months
- Stipend: $3500-$5500/month
- Focus: Computer vision and NLP
- Apply: metacareers.com

### 4. Microsoft Research Internship
- Duration: 3-6 months
- Stipend: $3000-$5000/month
- Focus: Cloud AI and research
- Apply: microsoft.com/careers

### 5. Stripe Engineering Internship
- Duration: 3-4 months
- Stipend: $4000-$6000/month
- Focus: Backend and full-stack
- Apply: stripe.com/jobs

### 6. Anthropic Research Internship
- Duration: 3-6 months
- Stipend: $3500-$5500/month
- Focus: AI safety and alignment
- Apply: anthropic.com/careers

## Application Strategy for 2026
1. Build AI/ML portfolio projects
2. Contribute to open-source AI projects
3. Get recommendations from professors
4. Apply 2-3 months in advance
5. Prepare for technical interviews

Internships are your gateway to top tech companies!`,
    image: '💼',
    date: '2026-05-20',
    readTime: '9 min read',
    views: 8920,
    tags: ['Internships', 'Remote', '2026', 'Paid'],
  },
  {
    id: '3',
    title: 'Highest-Paying Freelance Skills in 2026 - Earn $10K+/Month',
    category: 'Skills',
    description: 'The most in-demand freelance skills commanding premium rates in 2026.',
    fullContent: `# Highest-Paying Freelance Skills in 2026 - Earn $10K+/Month

The freelance market in 2026 rewards specialized AI and technical skills. Here are the top earners:

## Premium Freelance Skills

### 1. AI Agent Development
- Rate: $150-300/hour
- Demand: Extremely High
- Market: Exploding
- Learning time: 3-6 months

### 2. LLM Fine-tuning & Customization
- Rate: $200-400/hour
- Demand: Extremely High
- Market: Growing rapidly
- Learning time: 2-4 months

### 3. Full-Stack AI Development
- Rate: $150-350/hour
- Demand: Very High
- Market: Competitive
- Learning time: 12-18 months

### 4. AI Content Strategy
- Rate: $100-250/hour
- Demand: Very High
- Market: Emerging
- Learning time: 2-3 months

### 5. Prompt Engineering & Optimization
- Rate: $75-200/hour
- Demand: High
- Market: Saturating
- Learning time: 2-4 weeks

### 6. AI Video Production
- Rate: $100-300/hour
- Demand: Very High
- Market: Booming
- Learning time: 3-6 months

### 7. Data Science & ML Consulting
- Rate: $150-400/hour
- Demand: High
- Market: Stable
- Learning time: 12-24 months

## Path to $10K+/Month in 2026
1. Master AI agent development first
2. Build a portfolio of successful projects
3. Specialize in one industry (finance, healthcare, e-commerce)
4. Charge premium rates ($200+/hour)
5. Build long-term client relationships
6. Create productized services

AI skills are the new currency of freelancing!`,
    image: '💰',
    date: '2026-05-20',
    readTime: '10 min read',
    views: 15680,
    tags: ['Freelancing', 'AI', 'Income', '2026'],
  },
  {
    id: '4',
    title: '🚀 Trending May 2026: AI Agents Are Now Mainstream - Here\'s Why',
    category: 'Trending',
    description: 'AI agents have evolved from experimental to production-ready. Companies are deploying them at scale.',
    fullContent: `# 🚀 Trending May 2026: AI Agents Are Now Mainstream - Here's Why

AI agents have moved from hype to reality in 2026. They're now handling critical business operations across industries.

## The AI Agent Revolution in 2026

Autonomous AI agents are now:
- Managing customer service for Fortune 500 companies
- Writing production code with 95%+ accuracy
- Conducting autonomous research and discovery
- Optimizing business operations in real-time
- Making autonomous financial decisions

## Real-World Impact

### 1. Enterprise Automation
Companies like Microsoft, Google, and Amazon deploying multi-agent systems saving millions in operational costs.

### 2. Software Development
AI agents now handling 60-70% of routine coding tasks, freeing developers for complex problems.

### 3. Scientific Research
Autonomous agents discovering new materials and drug compounds at unprecedented speed.

### 4. Financial Services
AI agents managing portfolios, detecting fraud, and executing trades autonomously.

### 5. Healthcare
Agents assisting in diagnosis, treatment planning, and patient monitoring.

## Market Size & Growth
- 2024: $5 billion market
- 2026: $25 billion market (current)
- 2030: $150 billion+ projected

## How to Capitalize on This Trend
1. Learn AI agent frameworks (CrewAI, AutoGPT, LangChain)
2. Build portfolio projects with autonomous agents
3. Specialize in agent development for specific industries
4. Join companies building agent infrastructure
5. Start your own AI agent business

The AI agent economy is here. Don't get left behind!`,
    image: '🚀',
    date: '2026-05-20',
    readTime: '7 min read',
    views: 22340,
    tags: ['AI', 'Agents', 'Trending', 'Mainstream'],
  },
  {
    id: '5',
    title: 'Best AI & Data Science Learning Resources 2026 - Free & Paid',
    category: 'Resources',
    description: 'Complete guide to learning AI, machine learning, and data science in 2026.',
    fullContent: `# Best AI & Data Science Learning Resources 2026 - Free & Paid

The landscape of AI education has transformed in 2026. Here are the best resources:

## Premium Platforms

### 1. DeepLearning.AI
- Courses: 50+
- Cost: $29-99/month
- Best for: AI and LLM specialization
- New in 2026: Agent development courses

### 2. Fast.ai
- Courses: 20+
- Cost: Free
- Best for: Practical AI and deep learning
- New in 2026: AI agents and multimodal models

### 3. Kaggle Learn
- Courses: 100+
- Cost: Free
- Best for: Hands-on projects and competitions
- New in 2026: AI agent competitions

### 4. Coursera AI Specializations
- Courses: 200+
- Cost: $39-79/month
- Best for: Structured learning paths
- New in 2026: LLM and agent specializations

### 5. Andrew Ng's Courses
- Courses: 15+
- Cost: $39-99/month
- Best for: ML and AI fundamentals
- New in 2026: Agentic AI systems

### 6. Anthropic's AI Safety Course
- Courses: 5+
- Cost: Free
- Best for: AI safety and alignment
- New in 2026: Agent safety frameworks

## Recommended Learning Path for 2026
1. **Month 1**: Python & Math foundations
2. **Month 2-3**: Machine learning basics
3. **Month 4-5**: Deep learning and transformers
4. **Month 6-7**: LLM fine-tuning
5. **Month 8-9**: AI agent development
6. **Month 10+**: Specialization (finance, healthcare, etc.)

## Pro Tips for 2026
- Build AI agent projects
- Contribute to open-source AI projects
- Participate in AI hackathons
- Join AI communities (Discord, Reddit)
- Stay updated with latest models
- Practice with free API credits

Start learning AI today - the future is here!`,
    image: '📊',
    date: '2026-05-20',
    readTime: '11 min read',
    views: 18760,
    tags: ['AI', 'Learning', 'Resources', '2026'],
  },
];

function ContentCard({ post, onRead }: { post: ContentPost; onRead: (post: ContentPost) => void }) {
  const categoryColors: Record<string, string> = {
    'AI Tools': 'bg-blue-500/20 text-blue-300',
    'Internships': 'bg-green-500/20 text-green-300',
    'Opportunities': 'bg-purple-500/20 text-purple-300',
    'Skills': 'bg-yellow-500/20 text-yellow-300',
    'Resources': 'bg-pink-500/20 text-pink-300',
    'Trending': 'bg-red-500/20 text-red-300',
  };

  return (
    <div 
      onClick={() => onRead(post)}
      className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
    >
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
        {post.image}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
            {post.category}
          </span>
          <span className="text-xs text-foreground/60 flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 line-clamp-2">{post.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {post.views.toLocaleString()}
            </span>
            <span>{post.readTime}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/20 gap-2"
            onClick={(e) => {
              e.stopPropagation();
              onRead(post);
            }}
          >
            Read More
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ContentModal({ post, onClose }: { post: ContentPost; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-card border border-border/50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border/30 p-6 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-primary">{post.category}</span>
              <span className="text-sm text-foreground/60">{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{post.title}</h1>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-background rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 prose prose-invert max-w-none">
          <div className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
            {post.fullContent.split('\n').map((line, i) => {
              if (line.startsWith('# ')) {
                return <h1 key={i} className="text-3xl font-bold text-foreground mt-6 mb-4">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-primary mt-5 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-foreground mt-4 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-6 mb-2">{line.replace('- ', '')}</li>;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-2" />;
              }
              return <p key={i} className="mb-3">{line}</p>;
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border/30 p-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <span className="flex items-center gap-2">
              <Eye size={16} />
              {post.views.toLocaleString()} views
            </span>
            <span>{post.readTime}</span>
          </div>
          <Button
            onClick={onClose}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function WeeklyContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<ContentPost | null>(null);

  const categories = ['AI Tools', 'Internships', 'Opportunities', 'Skills', 'Resources', 'Trending'];
  
  const filteredContent = selectedCategory
    ? weeklyContent.filter((post) => post.category === selectedCategory)
    : weeklyContent;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 relative pt-24">
        {/* Background animations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full">
                <p className="text-sm font-semibold text-primary flex items-center gap-2">
                  <TrendingUp size={16} />
                  Weekly Updates
                </p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">Content</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest AI tools, internships, opportunities, and trending skills in tech.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border/50 text-foreground hover:border-primary/50'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border/50 text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((post) => (
              <ContentCard key={post.id} post={post} onRead={setSelectedPost} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-12 space-y-6">
              <h2 className="text-3xl font-bold">Never Miss an Update</h2>
              <p className="text-foreground/70 max-w-xl mx-auto">
                Get weekly content about AI tools, internships, opportunities, and trending skills delivered to your inbox.
              </p>
              <div className="flex gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary outline-none transition-colors"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {selectedPost && (
        <ContentModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
