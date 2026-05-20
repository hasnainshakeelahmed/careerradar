'use client';

import { Calendar, TrendingUp, Eye, ArrowRight, X } from 'lucide-react';
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
    title: 'Top AI Tools Dominating May 2026 - ChatGPT, Claude, Gemini & More',
    category: 'AI Tools',
    description: 'The most powerful and practical AI tools professionals are actually using right now in May 2026.',
    fullContent: `# Top AI Tools Dominating May 2026

Based on real usage and market adoption, here are the AI tools professionals are relying on:

## 1. ChatGPT (OpenAI)
- Best for: General tasks, writing, analysis
- Pricing: Free / $20/month Pro
- Status: Still the most widely used AI tool
- New features: Enhanced reasoning, real-time web access

## 2. Claude 3.5 Sonnet (Anthropic)
- Best for: Complex reasoning, coding, long documents
- Pricing: Free / $20/month Claude Pro
- Status: Gaining traction for technical work
- Advantage: 200K context window

## 3. Gemini (Google)
- Best for: Research, image generation, multimodal tasks
- Pricing: Free / $20/month Gemini Advanced
- Status: Integrated with Google Workspace
- New: Gemini Notebooks for data analysis

## 4. Perplexity AI
- Best for: Real-time research, current information
- Pricing: Free / $20/month Pro
- Status: Growing for research-focused work
- Advantage: Live web search + AI reasoning

## 5. Cursor IDE
- Best for: Code generation, development
- Pricing: Free / $20/month Pro
- Status: Replacing traditional IDEs for many developers
- Feature: Full codebase understanding

## 6. Midjourney v7
- Best for: Image generation, creative design
- Pricing: $10-120/month
- Status: Industry standard for AI art
- Quality: Photorealistic and consistent

## 7. Runway Gen-3
- Best for: AI video generation
- Pricing: $15-55/month
- Status: Production-ready video creation
- Quality: 4K video generation

## 8. Suno AI
- Best for: Music generation
- Pricing: Free / $10-32/month
- Status: Creating professional music
- Quality: Full songs with lyrics and production

## 9. NotebookLM
- Best for: Research synthesis, document analysis
- Pricing: Free
- Status: Emerging as research assistant
- Feature: Audio generation from documents

## 10. Copilot Enterprise
- Best for: Enterprise integration
- Pricing: $30/month per user
- Status: Growing in corporate environments
- Integration: Works across Microsoft 365

## Market Reality
The AI tool landscape in May 2026 shows clear winners: ChatGPT for general use, Claude for technical work, and specialized tools for specific tasks. Most professionals use 2-3 tools regularly.`,
    image: '🤖',
    date: '2026-05-20',
    readTime: '8 min read',
    views: 12450,
    tags: ['AI', 'Tools', '2026', 'Productivity'],
  },
  {
    id: '2',
    title: 'Remote Internships Hiring Now - May 2026 Opportunities',
    category: 'Internships',
    description: 'Real internship opportunities available right now with actual companies hiring in May 2026.',
    fullContent: `# Remote Internships Hiring Now - May 2026

## Currently Hiring Companies

### Tech Giants
**Google AI Residency**
- Duration: 12 months
- Stipend: $4,000-$6,000/month
- Focus: Machine learning, AI research
- Status: Actively hiring
- Apply: google.com/careers

**Meta AI Research**
- Duration: 3-4 months
- Stipend: $3,500-$5,500/month
- Focus: Computer vision, NLP, generative AI
- Status: Summer 2026 cohort open
- Apply: metacareers.com

**Microsoft Research**
- Duration: 3-6 months
- Stipend: $3,000-$5,000/month
- Focus: AI, cloud computing, research
- Status: Multiple positions available
- Apply: microsoft.com/careers

**Amazon Internship Program**
- Duration: 12 weeks
- Stipend: $3,500-$5,000/month
- Focus: Software development, ML
- Status: Actively recruiting
- Apply: amazon.jobs

### AI-Focused Companies
**OpenAI Internship**
- Duration: 3-6 months
- Stipend: $3,000-$5,000/month
- Focus: AI safety, research, engineering
- Status: Selective, highly competitive
- Apply: openai.com/careers

**Anthropic Internship**
- Duration: 3-6 months
- Stipend: $3,500-$5,500/month
- Focus: AI safety, alignment, research
- Status: Now hiring
- Apply: anthropic.com/careers

**Stripe Engineering**
- Duration: 3-4 months
- Stipend: $4,000-$6,000/month
- Focus: Backend, full-stack, infrastructure
- Status: Summer cohort open
- Apply: stripe.com/jobs

### Startups & Scale-ups
- **Hugging Face**: AI/ML internships, $2,500-$4,000/month
- **Stability AI**: Generative AI, $2,000-$3,500/month
- **Scale AI**: Data annotation, $2,000-$3,000/month

## How to Get Hired in May 2026

1. **Build a portfolio**: GitHub projects, Kaggle competitions
2. **Learn trending skills**: AI agents, LLM fine-tuning, prompt engineering
3. **Get recommendations**: From professors or previous mentors
4. **Apply early**: Most summer cohorts fill by June
5. **Prepare for interviews**: Technical assessments, system design

## Salary Reality
Remote internships in 2026 average $3,000-$5,000/month for tech roles. AI-focused positions pay 20-30% more.`,
    image: '💼',
    date: '2026-05-20',
    readTime: '9 min read',
    views: 8920,
    tags: ['Internships', 'Remote', '2026', 'Paid'],
  },
  {
    id: '3',
    title: 'Highest-Paying Freelance Skills in May 2026 - Real Rates',
    category: 'Skills',
    description: 'The actual highest-paying freelance skills with real market rates in May 2026.',
    fullContent: `# Highest-Paying Freelance Skills in May 2026 - Real Market Rates

## Premium Freelance Skills

### 1. AI Agent Development
- Rate: $150-$300/hour
- Demand: Extremely High
- Market Status: Exploding
- Learning Time: 3-6 months
- Why: Companies need autonomous AI systems
- Platforms: Upwork, Toptal, direct clients

### 2. LLM Fine-tuning & Customization
- Rate: $200-$400/hour
- Demand: Extremely High
- Market Status: Growing rapidly
- Learning Time: 2-4 months
- Why: Custom models for specific industries
- Platforms: Specialized agencies, direct clients

### 3. Full-Stack AI Development
- Rate: $150-$350/hour
- Demand: Very High
- Market Status: Competitive
- Learning Time: 12-18 months
- Why: End-to-end AI product development
- Platforms: Toptal, Gun.io, direct clients

### 4. Prompt Engineering & Optimization
- Rate: $75-$200/hour
- Demand: High (but saturating)
- Market Status: Market correction happening
- Learning Time: 2-4 weeks
- Why: Optimizing AI outputs for businesses
- Platforms: Upwork, Fiverr, agencies

### 5. AI Video Production
- Rate: $100-$300/hour
- Demand: Very High
- Market Status: Booming
- Learning Time: 3-6 months
- Why: Runway, Synthesia, and other tools
- Platforms: Upwork, direct clients

### 6. Data Science & ML Consulting
- Rate: $150-$400/hour
- Demand: High
- Market Status: Stable
- Learning Time: 12-24 months
- Why: Complex data problems
- Platforms: Toptal, Gun.io, consulting firms

### 7. Technical Writing (AI/Tech)
- Rate: $100-$250/hour
- Demand: High
- Market Status: Growing
- Learning Time: 4-8 weeks
- Why: Documentation, blogs, technical content
- Platforms: Upwork, Contently, direct clients

### 8. Web Development (AI Integration)
- Rate: $100-$250/hour
- Demand: Very High
- Market Status: Stable
- Learning Time: 6-12 months
- Why: Building AI-powered web apps
- Platforms: Toptal, Gun.io, Upwork

## Real Earning Potential

**$5,000/month**: 30-40 hours/week at $100-150/hour
**$10,000/month**: 40-50 hours/week at $200-250/hour
**$20,000+/month**: Specialized AI skills, retainer clients

## The Reality Check
- Most freelancers start at $50-75/hour
- Takes 6-12 months to reach $150+/hour
- Specialization is key to premium rates
- Building a portfolio is essential
- Client relationships matter more than platforms`,
    image: '💰',
    date: '2026-05-20',
    readTime: '10 min read',
    views: 15680,
    tags: ['Freelancing', 'AI', 'Income', '2026'],
  },
  {
    id: '4',
    title: 'AI Agents Are Now Mainstream - May 2026 Reality Check',
    category: 'Trending',
    description: 'AI agents have moved from experimental to production. Here\'s what\'s actually happening.',
    fullContent: `# AI Agents Are Now Mainstream - May 2026 Reality Check

## What\'s Actually Happening Right Now

### Enterprise Adoption
- **Microsoft**: Deploying Copilot agents across enterprises
- **Google**: Gemini agents in Workspace
- **Amazon**: AWS Bedrock agents for business automation
- **Meta**: Implementing agents for content moderation and recommendations

### Real-World Deployments

**Customer Service**
- Companies like Zendesk, Intercom using AI agents
- Handling 40-60% of customer queries autonomously
- Reducing support costs by 30-50%

**Software Development**
- GitHub Copilot: 50%+ code generation adoption
- Cursor IDE: Replacing traditional IDEs for many developers
- AI agents writing 60-70% of routine code

**Research & Development**
- Autonomous research agents discovering new materials
- Drug discovery acceleration (months → weeks)
- Scientific paper analysis and synthesis

**Financial Services**
- Autonomous trading agents (with human oversight)
- Fraud detection and prevention
- Portfolio management and optimization

### Market Size & Growth
- 2024: $5 billion market
- 2026: $25 billion market (current)
- 2030: $150 billion+ projected
- CAGR: 100%+ year-over-year

## The AI Agent Stack (May 2026)

### Popular Frameworks
1. **CrewAI**: Multi-agent orchestration
2. **LangChain**: Agent development
3. **AutoGPT**: Autonomous task execution
4. **Anthropic Claude**: Advanced reasoning
5. **OpenAI Assistants**: Built-in agent features

### Key Technologies
- Multi-agent systems
- Tool use and integration
- Memory and context management
- Real-time decision making
- Human-in-the-loop oversight

## Challenges & Reality

**What's Working:**
- Routine automation (60-70% success)
- Well-defined tasks
- Supervised decision-making
- Integration with existing systems

**What's Struggling:**
- Complex reasoning (still needs humans)
- Novel problem-solving
- Ethical decision-making
- Handling edge cases

## How to Capitalize

1. **Learn agent frameworks** (CrewAI, LangChain)
2. **Build portfolio projects** with autonomous agents
3. **Specialize in industry** (finance, healthcare, e-commerce)
4. **Join companies** building agent infrastructure
5. **Start consulting** for agent implementation

## The Bottom Line
AI agents are real, they're working, and they're creating massive opportunities. The question isn't "if" but "when" you'll work with them.`,
    image: '🚀',
    date: '2026-05-20',
    readTime: '7 min read',
    views: 22340,
    tags: ['AI', 'Agents', 'Trending', 'Mainstream'],
  },
  {
    id: '5',
    title: 'Best Learning Resources for AI & Tech in May 2026',
    category: 'Resources',
    description: 'Real, current learning platforms and resources that are actually being used in 2026.',
    fullContent: `# Best Learning Resources for AI & Tech in May 2026

## Top Platforms (Real Reviews)

### Free Resources

**Fast.ai**
- Cost: Completely free
- Quality: Excellent practical AI courses
- Best for: Deep learning, practical ML
- Courses: 20+ including AI agents
- Community: Very active and helpful

**Kaggle Learn**
- Cost: Free
- Quality: Hands-on, practical
- Best for: Competitions and real datasets
- Courses: 100+ micro-courses
- Community: Millions of practitioners

**YouTube Channels**
- **3Blue1Brown**: Math foundations
- **Jeremy Howard**: Fast.ai content
- **Andrej Karpathy**: Deep learning
- **Two Minute Papers**: Research summaries

### Paid Platforms (Worth It)

**DeepLearning.AI**
- Cost: $29-99/month
- Quality: Industry expert courses
- Best for: LLMs, agents, specialized AI
- Courses: 50+ including latest trends
- Instructors: Andrew Ng, Yann LeCun

**Coursera**
- Cost: $39-79/month
- Quality: University-backed
- Best for: Structured learning paths
- Specializations: 200+ AI/ML options
- Certificates: Recognized by employers

**Udacity**
- Cost: $399-499/month (Nanodegrees)
- Quality: Career-focused
- Best for: Career switchers
- Programs: 15+ AI/ML focused
- Guarantee: Job placement assistance

**Anthropic's AI Safety Course**
- Cost: Free
- Quality: From AI safety experts
- Best for: Understanding AI safety
- Courses: 5+ on alignment and safety
- Relevance: Critical for responsible AI

### Specialized Resources

**Hugging Face Course**
- Cost: Free
- Focus: Transformers, NLP
- Quality: Industry standard
- Hands-on: Jupyter notebooks

**LangChain Documentation**
- Cost: Free
- Focus: Agent development
- Quality: Comprehensive
- Community: Active Discord

**CrewAI Academy**
- Cost: Free + paid advanced
- Focus: Multi-agent systems
- Quality: Practical examples
- Community: Growing fast

## Recommended Learning Path (May 2026)

### Month 1-2: Foundations
- Python fundamentals (Codecademy, freeCodeCamp)
- Math basics (3Blue1Brown, Khan Academy)
- Cost: Free

### Month 3-4: Core ML
- Machine learning basics (Fast.ai)
- Statistics and probability
- Cost: Free

### Month 5-6: Deep Learning
- Neural networks and deep learning
- Transformers and attention
- Cost: $50-100 (Coursera or DeepLearning.AI)

### Month 7-8: LLMs & Agents
- Large language models
- AI agent development
- Cost: $50-100

### Month 9-10: Specialization
- Choose your path (finance, healthcare, etc.)
- Build portfolio projects
- Cost: $0-100

### Month 11-12: Advanced Topics
- Advanced techniques
- Production deployment
- Cost: $50-150

## Real Success Stories (May 2026)

- **Self-taught to $150/hour**: 6-12 months, Fast.ai + portfolio
- **Career switcher to AI engineer**: 12-18 months, Udacity + projects
- **Freelancer to $10K/month**: 12-24 months, specialization + networking

## Pro Tips

1. **Build projects**: Learning without building is useless
2. **Join communities**: Discord, Reddit, Twitter
3. **Stay current**: AI moves fast, follow latest releases
4. **Network**: Connections matter more than credentials
5. **Contribute**: Open source projects boost credibility

## The Reality
You don't need expensive courses to learn AI in 2026. Free resources are excellent. What matters is consistent practice and building real projects.`,
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
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

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
                  Weekly Updates - May 2026
                </p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">Content</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real, current information about AI tools, internships, opportunities, and trending skills. Updated weekly with actual market data.
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
              <h2 className="text-3xl font-bold">Stay Updated Weekly</h2>
              <p className="text-foreground/70 max-w-xl mx-auto">
                Get real, current information about AI tools, internships, opportunities, and trending skills delivered fresh every week.
              </p>
              <div className="flex gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary outline-none transition-colors"
                />
                <Button 
                  onClick={async () => {
                    if (!email) return;
                    setIsSubscribing(true);
                    try {
                      const response = await fetch('/api/subscribe', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email })
                      });
                      if (response.ok) {
                        setEmail('');
                        alert('Successfully subscribed!');
                      } else {
                        alert('Subscription failed. Please try again.');
                      }
                    } catch (error) {
                      console.error('Subscription failed:', error);
                      alert('Subscription failed. Please try again.');
                    } finally {
                      setIsSubscribing(false);
                    }
                  }}
                  disabled={isSubscribing || !email}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
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
