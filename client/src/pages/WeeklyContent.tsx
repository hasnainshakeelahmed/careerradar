'use client';

import { Calendar, TrendingUp, Eye, ArrowRight, X, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ContentPost {
  id: string;
  title: string;
  description: string;
  category: 'AI Tools' | 'Internships' | 'Opportunities' | 'Skills' | 'Resources' | 'Trending';
  image: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  fullContent: string;
}

const weeklyContent: ContentPost[] = [
  {
    id: '1',
    title: 'Top 10 AI Tools Dominating 2026',
    description: 'The most powerful AI tools reshaping work and creativity in May 2026.',
    category: 'AI Tools',
    image: '🤖',
    date: '2026-05-20',
    readTime: '8 min read',
    views: 12450,
    tags: ['AI', 'Tools', 'Productivity'],
    fullContent: `# Top 10 AI Tools Dominating 2026

## 1. ChatGPT 5 Pro
- Advanced reasoning and multimodal capabilities
- Real-time internet access
- Custom AI agents
- Cost: $30/month

## 2. Claude 4 (Anthropic)
- Superior code generation
- Long context windows (200K tokens)
- Excellent for technical work
- Cost: $20/month

## 3. Gemini Pro (Google)
- Multimodal AI (text, image, video, audio)
- Real-time information access
- Excellent for research
- Cost: Free tier + $20/month Pro

## 4. Perplexity AI
- Real-time search with AI
- Academic research focus
- Citation and source tracking
- Cost: Free + $20/month Pro

## 5. Cursor IDE
- AI-powered code editor
- Built-in ChatGPT integration
- Autonomous code generation
- Cost: Free + $20/month Pro

## 6. Midjourney
- Advanced image generation
- Consistent character generation
- Style customization
- Cost: $10-120/month

## 7. Runway ML
- Video generation and editing
- AI motion capture
- Professional video tools
- Cost: $12-76/month

## 8. Suno AI
- AI music generation
- Full song creation
- Commercial license available
- Cost: Free + $10-32/month

## 9. ElevenLabs
- AI voice generation
- 32+ languages supported
- Natural sounding voices
- Cost: Free + $11-330/month

## 10. Dify
- No-code AI app builder
- LLM orchestration
- Open source option
- Cost: Free + enterprise plans

## Why These Matter in 2026

The AI tool landscape has matured significantly. These aren't just novelty tools—they're production-ready solutions used by millions of professionals. The key trend is specialization: each tool excels in specific domains rather than trying to do everything.

## Pro Tips

1. **Combine tools**: Use ChatGPT for ideation, Cursor for coding, Midjourney for visuals
2. **Automate workflows**: Connect tools with Zapier or Make
3. **Stay updated**: AI tools release new features weekly
4. **Cost optimization**: Most tools have free tiers to start
5. **Learn the APIs**: Programmatic access unlocks more power`,
  },
  {
    id: '2',
    title: 'Top Remote Internships May 2026',
    description: 'Best remote internship opportunities with real stipends and learning.',
    category: 'Internships',
    image: '💼',
    date: '2026-05-18',
    readTime: '10 min read',
    views: 8920,
    tags: ['Internships', 'Remote', 'Opportunities'],
    fullContent: `# Top Remote Internships May 2026

## 1. Google Summer of Code (GSoC)
- Stipend: $3,500 USD
- Duration: 12 weeks
- Focus: Open source development
- Deadline: Usually March-April

## 2. Meta University Internship
- Stipend: $6,000+ USD
- Duration: 12 weeks
- Focus: Software engineering
- Locations: Remote available

## 3. Microsoft Internship Program
- Stipend: $5,500+ USD
- Duration: 12 weeks
- Focus: Various tech roles
- Remote: Fully remote options

## 4. Amazon Internship
- Stipend: $5,000-6,000 USD
- Duration: 12 weeks
- Focus: Software development
- Remote: Hybrid/Remote available

## 5. OpenAI Internship
- Stipend: $6,000+ USD
- Duration: 12 weeks
- Focus: AI/ML research
- Remote: Remote available

## 6. Stripe Internship
- Stipend: $5,500+ USD
- Duration: 12 weeks
- Focus: Engineering, design, product
- Remote: Remote available

## 7. Anthropic Research Internship
- Stipend: $6,000+ USD
- Duration: 12 weeks
- Focus: AI safety, research
- Remote: Remote available

## 8. DeepMind Internship
- Stipend: $6,500+ USD
- Duration: 12 weeks
- Focus: AI research
- Remote: London-based, some remote

## How to Apply

1. **Build a portfolio**: GitHub projects, personal website
2. **Prepare for interviews**: LeetCode, system design
3. **Apply early**: Most internships open 6 months in advance
4. **Tailor your resume**: Highlight relevant projects
5. **Network**: Connect with current interns on LinkedIn

## Timeline for 2026

- **June-July**: Fall internship applications open
- **August-September**: Fall internship interviews
- **October-December**: Fall internships
- **December-January**: Spring internship applications
- **February-March**: Spring internship interviews
- **April-June**: Spring internships

## Pro Tips

1. Start applying 6 months before the internship starts
2. Most companies prefer candidates with previous internship experience
3. Build projects that align with the company's tech stack
4. Practice coding interviews on LeetCode
5. Prepare behavioral questions using STAR method`,
  },
  {
    id: '3',
    title: 'Highest-Paying Freelance Skills 2026',
    description: 'The most lucrative skills for freelancers in 2026 with real rates.',
    category: 'Skills',
    image: '💰',
    date: '2026-05-15',
    readTime: '9 min read',
    views: 15680,
    tags: ['Freelancing', 'Skills', 'Income'],
    fullContent: `# Highest-Paying Freelance Skills 2026

## 1. AI Agent Development
- Rate: $150-300/hour
- Demand: Extremely high
- Skills: Python, LLMs, automation
- Platforms: Upwork, Toptal, direct clients

## 2. LLM Fine-tuning & Prompt Engineering
- Rate: $200-400/hour
- Demand: Very high
- Skills: ML, Python, domain expertise
- Platforms: Upwork, specialized agencies

## 3. Full-Stack AI Development
- Rate: $150-350/hour
- Demand: Very high
- Skills: React, Node.js, Python, ML
- Platforms: Toptal, Gun.io, direct clients

## 4. Blockchain Development
- Rate: $100-250/hour
- Demand: High (crypto recovery)
- Skills: Solidity, Web3.js, DeFi
- Platforms: Upwork, specialized platforms

## 5. Cloud Architecture
- Rate: $120-280/hour
- Demand: High
- Skills: AWS, GCP, Azure, DevOps
- Platforms: Toptal, Gun.io, direct clients

## 6. Data Science & Analytics
- Rate: $100-250/hour
- Demand: High
- Skills: Python, SQL, ML, visualization
- Platforms: Upwork, Toptal, Kaggle

## 7. Mobile App Development
- Rate: $80-200/hour
- Demand: Medium-high
- Skills: React Native, Flutter, Swift
- Platforms: Upwork, Toptal, Gun.io

## 8. UI/UX Design
- Rate: $75-200/hour
- Demand: Medium-high
- Skills: Figma, design systems, prototyping
- Platforms: Dribbble, Toptal, Upwork

## 9. Content Writing (AI-focused)
- Rate: $50-150/hour
- Demand: High
- Skills: Technical writing, SEO, AI knowledge
- Platforms: Upwork, Contently, Medium

## 10. Video Editing & Motion Graphics
- Rate: $60-150/hour
- Demand: High
- Skills: Premiere Pro, After Effects, DaVinci
- Platforms: Upwork, Fiverr, direct clients

## How to Command High Rates

1. **Build expertise**: Specialize in 1-2 high-demand skills
2. **Create portfolio**: Showcase best work on GitHub/Dribbble
3. **Get testimonials**: Excellent reviews = higher rates
4. **Network**: Direct clients pay 2-3x more than platforms
5. **Continuous learning**: Stay updated with latest technologies

## Income Potential

- **Beginner**: $20-50/hour
- **Intermediate**: $50-100/hour
- **Advanced**: $100-200/hour
- **Expert**: $200-500+/hour

## Pro Tips

1. Specialize rather than generalize
2. Build long-term client relationships
3. Create passive income: courses, templates, tools
4. Negotiate retainers instead of hourly rates
5. Invest in marketing yourself`,
  },
  {
    id: '4',
    title: 'AI Agents Are Now Mainstream',
    description: 'How AI agents are transforming work in 2026 and what this means for you.',
    category: 'Trending',
    image: '🚀',
    date: '2026-05-12',
    readTime: '12 min read',
    views: 22340,
    tags: ['AI', 'Agents', 'Future'],
    fullContent: `# AI Agents Are Now Mainstream - May 2026

## The Shift

In 2025, AI agents were experimental. In 2026, they're production-ready and deployed at scale across industries.

## What Changed

### 1. Reliability Improvements
- Error rates dropped 60% year-over-year
- Better handling of edge cases
- Improved reasoning capabilities
- More predictable outputs

### 2. Cost Reduction
- API costs down 70% since 2024
- Batch processing options available
- Open-source alternatives mature
- Enterprise pricing models

### 3. Enterprise Adoption
- 45% of Fortune 500 now use AI agents
- $25B market in 2026 (was $5B in 2024)
- Dedicated AI agent platforms emerging
- Regulatory frameworks established

## Real-World Applications

### Customer Service
- 60% of support tickets handled by AI agents
- 24/7 availability
- 85% resolution rate
- Cost savings: 70%

### Sales & Lead Generation
- Automated outreach and qualification
- Personalized follow-ups
- Meeting scheduling
- Pipeline management

### Content Creation
- Blog post generation
- Social media content
- Video script writing
- Email campaigns

### Code Generation
- 40% of code written by AI agents
- Bug detection and fixing
- Code review automation
- Documentation generation

### Data Analysis
- Automated reporting
- Anomaly detection
- Predictive analytics
- Business intelligence

## The Job Market Impact

### Jobs Being Automated
- Data entry: 80% automation
- Customer service: 60% automation
- Report writing: 70% automation
- Basic coding: 50% automation

### Jobs Growing
- AI agent development: +300%
- AI prompt engineering: +250%
- AI ethics & safety: +200%
- AI training & fine-tuning: +180%

## Skills You Need Now

1. **Prompt Engineering**: $150-300/hour
2. **Agent Architecture**: $200-400/hour
3. **Fine-tuning**: $200-350/hour
4. **Integration**: $150-300/hour
5. **Monitoring & Optimization**: $120-250/hour

## How to Prepare

1. **Learn the fundamentals**: Start with ChatGPT API
2. **Build projects**: Create working agents
3. **Understand limitations**: Know when agents fail
4. **Study frameworks**: LangChain, AutoGPT, CrewAI
5. **Stay updated**: Follow AI research papers

## The Reality

AI agents won't replace all jobs. They'll augment human work and create new opportunities. The key is to position yourself as someone who can work WITH AI agents, not against them.

## Opportunities for 2026

1. **Freelance agent development**: $5K-50K per project
2. **Corporate AI implementation**: $100K-500K contracts
3. **AI training & consulting**: $10K-100K per engagement
4. **Agent marketplace**: Sell pre-built agents
5. **AI education**: Create courses and content

## Bottom Line

If you're not learning about AI agents in 2026, you're falling behind. The good news? It's still early enough to build expertise and command premium rates.`,
  },
  {
    id: '5',
    title: 'Best AI & Data Science Learning Resources 2026',
    description: 'The most effective resources for learning AI and data science in 2026.',
    category: 'Resources',
    image: '📊',
    date: '2026-05-10',
    readTime: '11 min read',
    views: 18760,
    tags: ['Learning', 'AI', 'Resources'],
    fullContent: `# Best AI & Data Science Learning Resources 2026

## Free Tier Resources

### Fast.ai
- Cost: Free
- Focus: Practical deep learning
- Format: Video lectures + Jupyter notebooks
- Time: 7 weeks
- Best for: Hands-on learners

### DeepLearning.AI
- Cost: Free courses + paid specializations
- Focus: LLMs, generative AI, ML fundamentals
- Format: Video + interactive labs
- Time: Variable
- Best for: Structured learning

### Kaggle
- Cost: Free
- Focus: Practical data science
- Format: Competitions + datasets + notebooks
- Time: Self-paced
- Best for: Portfolio building

### Hugging Face
- Cost: Free
- Focus: Transformers, NLP, LLMs
- Format: Documentation + tutorials + models
- Time: Self-paced
- Best for: NLP enthusiasts

### Google Colab
- Cost: Free
- Focus: Jupyter notebooks in cloud
- Format: Notebooks
- Time: Self-paced
- Best for: Experimentation

## Paid Specializations

### Coursera - Machine Learning Specialization
- Cost: $39-49/month
- Duration: 3 months
- Focus: ML fundamentals
- Certificate: Yes
- Best for: Beginners

### Andrew Ng's Deep Learning Specialization
- Cost: $39-49/month
- Duration: 5 months
- Focus: Deep learning
- Certificate: Yes
- Best for: Intermediate learners

### Udacity Nanodegrees
- Cost: $1,200-1,500
- Duration: 3-6 months
- Focus: Specialized tracks
- Certificate: Yes
- Best for: Career changers

### DataCamp
- Cost: $30-35/month
- Duration: Self-paced
- Focus: Data science fundamentals
- Certificate: Yes
- Best for: Beginners

### Pluralsight
- Cost: $29-49/month
- Duration: Self-paced
- Focus: Technical skills
- Certificate: Yes
- Best for: Intermediate learners

## Advanced Resources

### Stanford CS224N (NLP)
- Cost: Free (audit)
- Duration: 10 weeks
- Focus: Natural language processing
- Format: Video lectures + assignments
- Best for: Advanced learners

### MIT 6.S191 (Deep Learning)
- Cost: Free (audit)
- Duration: 9 weeks
- Focus: Deep learning
- Format: Video lectures + labs
- Best for: Advanced learners

### Berkeley CS188 (AI)
- Cost: Free (audit)
- Duration: 15 weeks
- Focus: AI fundamentals
- Format: Video lectures + projects
- Best for: Advanced learners

## Learning Path for 2026

### Month 1-2: Foundations
- Linear algebra and calculus (Khan Academy)
- Python programming (Codecademy)
- Statistics basics (StatQuest)

### Month 3-4: Machine Learning
- Fast.ai practical deep learning
- Kaggle competitions
- Build first projects

### Month 5-6: Deep Learning
- Andrew Ng's Deep Learning Specialization
- Implement papers from scratch
- Build portfolio projects

### Month 7-8: Specialization
- Choose: NLP, Computer Vision, or Reinforcement Learning
- Take advanced course
- Build specialized projects

### Month 9-10: LLMs & Agents
- DeepLearning.AI LLM courses
- Hugging Face tutorials
- Build LLM-based projects

### Month 11-12: Production & Deployment
- Learn MLOps
- Deploy models to production
- Build end-to-end projects

## Pro Tips

1. **Learn by doing**: Build projects, don't just watch videos
2. **Join communities**: Kaggle, Reddit, Discord communities
3. **Read papers**: Start with popular papers, understand key concepts
4. **Contribute to open source**: Gain real experience
5. **Network**: Connect with practitioners on LinkedIn

## Investment Summary

- **Free path**: $0 (requires discipline)
- **Beginner path**: $50-100/month
- **Comprehensive path**: $200-500/month
- **Bootcamp path**: $5,000-15,000 one-time

## Time Investment

- **Beginner to intermediate**: 6-12 months (20 hours/week)
- **Intermediate to advanced**: 12-24 months (30 hours/week)
- **Advanced to expert**: 24+ months (40+ hours/week)

## The Reality

You don't need expensive bootcamps to learn AI in 2026. Free resources are excellent. What matters is consistency, practice, and building real projects.`,
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
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

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
              {subscriptionSuccess ? (
                <div className="flex items-center justify-center gap-3 py-3 px-6 bg-green-500/20 border border-green-500/50 rounded-lg animate-in fade-in">
                  <CheckCircle2 size={24} className="text-green-400 animate-bounce" />
                  <span className="text-green-300 font-semibold">Successfully subscribed! Check your email.</span>
                </div>
              ) : (
                <div className="flex gap-3 justify-center flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubscribing}
                    className="px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary outline-none transition-colors disabled:opacity-50"
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
                          setSubscriptionSuccess(true);
                          setTimeout(() => {
                            setSubscriptionSuccess(false);
                            setEmail('');
                          }, 3000);
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
                    className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 gap-2 transition-all"
                  >
                    {isSubscribing ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </div>
              )}
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
