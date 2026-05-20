'use client';

import { Calendar, TrendingUp, Eye, Share2, ArrowRight } from 'lucide-react';
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
    id: 1,
    title: 'Top 5 AI Tools That Will Change Your Workflow in 2024',
    category: 'AI Tools',
    description: 'Discover the latest AI tools that are revolutionizing productivity and automation across industries.',
    fullContent: `
# Top 5 AI Tools That Will Change Your Workflow in 2024

The AI landscape is evolving rapidly. Here are the 5 most impactful tools you should know about:

## 1. Claude 3.5 Sonnet
Advanced reasoning and coding capabilities with improved context understanding.

## 2. GPT-4o
Multimodal AI with vision, audio, and text processing in a single model.

## 3. Gemini 2.0
Google's latest model with improved reasoning and real-time information access.

## 4. Perplexity AI
Real-time search with AI reasoning for accurate, up-to-date information.

## 5. Cursor IDE
AI-powered code editor that understands your codebase and suggests improvements.

These tools are transforming how professionals work, from content creation to software development.
    `,
    image: '🤖',
    date: '2024-01-15',
    readTime: '5 min read',
    views: 2340,
    tags: ['AI', 'Tools', 'Productivity', 'Automation'],
  },
  {
    id: 2,
    title: 'Remote Internship Opportunities in Tech - January 2024',
    category: 'Internships',
    description: 'Explore the best remote internship opportunities available this month for students and freshers.',
    fullContent: `
# Remote Internship Opportunities in Tech - January 2024

Remote internships are now more accessible than ever. Here are the top opportunities:

## Featured Opportunities

### 1. Google Summer of Code
- Duration: 3-4 months
- Stipend: $1500-$3000
- Focus: Open source projects

### 2. Microsoft TEALS Program
- Duration: 3-6 months
- Focus: AI and cloud computing
- Location: Remote

### 3. Amazon Internship Program
- Duration: 3-4 months
- Stipend: Competitive
- Focus: Software development

### 4. Meta Internship
- Duration: 12 weeks
- Stipend: $8000-$10000
- Focus: Engineering and product

### 5. Stripe Internship
- Duration: 3-4 months
- Stipend: $7000-$9000
- Focus: Software engineering

## How to Apply
1. Update your resume
2. Build a portfolio project
3. Practice coding interviews
4. Apply early - deadlines are coming!

Don't miss these opportunities!
    `,
    image: '💼',
    date: '2024-01-14',
    readTime: '7 min read',
    views: 3120,
    tags: ['Internships', 'Remote', 'Tech', 'Opportunities'],
  },
  {
    id: 3,
    title: 'Freelancing Skills That Earn $5000+ Per Month',
    category: 'Skills',
    description: 'Learn which skills are most in-demand for high-earning freelancers in 2024.',
    fullContent: `
# Freelancing Skills That Earn $5000+ Per Month

Not all freelancing skills are equal. Here are the ones that command premium rates:

## High-Demand Skills

### 1. AI Prompt Engineering
- Rate: $50-150/hour
- Demand: Extremely High
- Learning time: 2-4 weeks

### 2. Full-Stack Web Development
- Rate: $75-200/hour
- Demand: Very High
- Learning time: 6-12 months

### 3. AI/ML Development
- Rate: $100-250/hour
- Demand: Extremely High
- Learning time: 12-18 months

### 4. Technical Writing
- Rate: $50-150/hour
- Demand: High
- Learning time: 4-8 weeks

### 5. Video Editing
- Rate: $30-100/hour
- Demand: Very High
- Learning time: 2-3 months

## Strategy to Earn $5000+/Month
1. Master one high-demand skill
2. Build a strong portfolio
3. Specialize in a niche
4. Charge premium rates
5. Build recurring clients

Start today and reach your income goals!
    `,
    image: '💰',
    date: '2024-01-13',
    readTime: '6 min read',
    views: 4560,
    tags: ['Freelancing', 'Skills', 'Income', 'Career'],
  },
  {
    id: 4,
    title: 'Trending: AI Agents Are The Next Big Thing',
    category: 'Trending',
    description: 'AI agents are becoming autonomous, and they\'re changing everything. Here\'s what you need to know.',
    fullContent: `
# Trending: AI Agents Are The Next Big Thing

AI agents represent the next evolution in artificial intelligence. They're moving beyond chatbots to autonomous systems.

## What Are AI Agents?

AI agents are autonomous systems that can:
- Make decisions independently
- Take actions without human intervention
- Learn from their environment
- Adapt to new situations

## Real-World Applications

### 1. Customer Service
Autonomous agents handling complex customer issues 24/7.

### 2. Software Development
AI agents writing code and debugging automatically.

### 3. Research
Autonomous research agents discovering new insights.

### 4. Business Operations
Agents managing workflows and optimizing processes.

## Why This Matters

The AI agent market is projected to reach $47 billion by 2030. Early adopters and builders will have significant advantages.

## How to Get Started

1. Learn about multi-agent systems
2. Study frameworks like CrewAI and AutoGPT
3. Build simple agents
4. Join the AI agent revolution

The future is autonomous. Are you ready?
    `,
    image: '🚀',
    date: '2024-01-12',
    readTime: '5 min read',
    views: 5890,
    tags: ['AI', 'Agents', 'Trending', 'Future'],
  },
  {
    id: 5,
    title: 'Best Resources to Learn Data Science in 2024',
    category: 'Resources',
    description: 'Curated list of the best platforms and courses for learning data science this year.',
    fullContent: `
# Best Resources to Learn Data Science in 2024

Data science is one of the most in-demand fields. Here are the best resources to get started:

## Online Platforms

### 1. Coursera
- Courses: 500+
- Cost: $39-79/month
- Best for: Structured learning

### 2. DataCamp
- Courses: 300+
- Cost: $29/month
- Best for: Hands-on practice

### 3. Fast.ai
- Courses: 10+
- Cost: Free
- Best for: Practical deep learning

### 4. Kaggle
- Courses: 50+
- Cost: Free
- Best for: Competitions and projects

### 5. Udacity
- Nanodegrees: 15+
- Cost: $399-499/month
- Best for: Career switching

## Learning Path

1. **Month 1-2**: Python fundamentals
2. **Month 2-3**: Statistics and math
3. **Month 3-4**: Data manipulation
4. **Month 4-6**: Machine learning
5. **Month 6-8**: Deep learning
6. **Month 8+**: Specialization

## Pro Tips
- Build projects as you learn
- Participate in Kaggle competitions
- Join data science communities
- Network with other learners

Start your data science journey today!
    `,
    image: '📊',
    date: '2024-01-11',
    readTime: '6 min read',
    views: 2100,
    tags: ['Data Science', 'Learning', 'Resources', 'Education'],
  },
];

function ContentCard({ post }: { post: ContentPost }) {
  const categoryColors: Record<string, string> = {
    'AI Tools': 'bg-blue-500/20 text-blue-300',
    'Internships': 'bg-green-500/20 text-green-300',
    'Opportunities': 'bg-purple-500/20 text-purple-300',
    'Skills': 'bg-yellow-500/20 text-yellow-300',
    'Resources': 'bg-pink-500/20 text-pink-300',
    'Trending': 'bg-red-500/20 text-red-300',
  };

  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
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
          >
            Read More
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function WeeklyContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
              <ContentCard key={post.id} post={post} />
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
    </div>
  );
}
