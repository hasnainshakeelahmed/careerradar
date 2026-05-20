'use client';

import { useState, useEffect } from 'react';
import { Zap, Lock, Rocket, TrendingUp, Users, Star, Check, ArrowRight, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface VaultResource {
  icon: string;
  title: string;
  description: string;
  items: number;
  content?: string[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const categoryDetails: Record<string, string[]> = {
  'AI & Automation': [
    '🤖 AI Automation Courses',
    '💬 ChatGPT Prompts Library (500+ prompts)',
    '🏢 AI Agency Resources & Templates',
    '⚡ Productivity AI Tools Guide',
    '🔄 Automation Workflows & Zapier Setup',
    '🎯 AI Content Generation Tools',
    '📊 AI Data Analysis Resources',
    '🔐 AI Security & Privacy Guide',
  ],
  'Freelancing Materials': [
    '📖 Complete Freelancing Guides',
    '🎨 SMMA (Social Media Marketing Agency) Resources',
    '👥 Client Acquisition Strategies',
    '💼 Upwork & Fiverr Mastery Guides',
    '📱 Marketing Materials & Templates',
    '💰 Pricing Strategies & Rate Cards',
    '📧 Email Outreach Templates',
    '🤝 Contract Templates & Legal Docs',
  ],
  'Programming Courses': [
    '🐍 Python Complete Course',
    '☕ Java Programming Masterclass',
    '⚙️ C++ Advanced Programming',
    '📊 Data Science & Machine Learning',
    '🎯 DSA & Algorithms Guide',
    '🌐 Web Development (HTML, CSS, JS)',
    '⚛️ React & Modern Frameworks',
    '🗄️ Database Design & SQL',
  ],
  'Video Editing': [
    '📱 CapCut Pro Resources & Templates',
    '🎬 Premiere Pro Presets & Effects',
    '✨ After Effects Animations Pack',
    '🎞️ Editing Templates (100+ templates)',
    '📹 Reels Editing Packs',
    '🎵 Music & Sound Effects Library',
    '🎨 Color Grading Presets',
    '🖼️ Transition Pack (50+ transitions)',
  ],
  'Creator Assets': [
    '📱 Social Media Templates (Canva)',
    '🎨 Graphics Packs (1000+ designs)',
    '🔤 Premium Fonts Collection',
    '📹 Reels Bundles & Starters',
    '😂 Meme Packs & Trending Content',
    '🖼️ Instagram Story Templates',
    '📊 Infographic Templates',
    '🎭 TikTok Trending Sounds Pack',
  ],
  'Productivity Tools': [
    '📝 Premium Notion Templates',
    '🗂️ Organization Systems',
    '⏰ Workflow Automation Tools',
    '📚 Study Resources & Note-taking',
    '🎯 Goal Tracking Systems',
    '📅 Calendar & Scheduling Tools',
    '✅ Task Management Templates',
    '💡 Productivity Hacks Guide',
  ],
  'Marketing Resources': [
    '📘 Facebook Ads Masterclass',
    '📺 YouTube Automation Guide',
    '🎵 TikTok Growth Strategies',
    '🎨 Branding Resources & Guidelines',
    '📝 Content Strategy Frameworks',
    '📊 Analytics & Tracking Tools',
    '💌 Email Marketing Templates',
    '🔍 SEO & Keyword Research Tools',
  ],
  'Premium Apps': [
    '🎬 Video Editing Apps (Premium)',
    '🛠️ Utility Applications',
    '🎨 Design & Creator Applications',
    '📱 Mobile Productivity Tools',
    '🔐 Security & Privacy Apps',
    '💼 Business Management Software',
    '📊 Analytics & Tracking Apps',
    '🎮 Productivity Gamification Apps',
  ],
  'Growth Methods': [
    '📈 Audience Growth Systems',
    '🎬 Creator Growth Strategies',
    '⚡ Productivity Methods & Hacks',
    '🚀 Growth Guides & Frameworks',
    '💡 Scaling Strategies',
    '🎯 Viral Content Methods',
    '👥 Community Building Guide',
    '💰 Monetization Strategies',
  ],
};

export default function GrowthVault() {
  const [stats, setStats] = useState({ users: 0, resources: 0, satisfaction: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Animated counter effect
  useEffect(() => {
    const intervals = [
      setInterval(() => setStats(s => ({ ...s, users: Math.min(s.users + 50, 5234) })), 30),
      setInterval(() => setStats(s => ({ ...s, resources: Math.min(s.resources + 5, 500) })), 30),
      setInterval(() => setStats(s => ({ ...s, satisfaction: Math.min(s.satisfaction + 1, 98) })), 30),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  const vaultResources = [
    { icon: '🤖', title: 'AI & Automation', description: 'ChatGPT prompts, AI tools, automation workflows', items: 45 },
    { icon: '💼', title: 'Freelancing Materials', description: 'Pitch templates, contracts, client scripts', items: 38 },
    { icon: '💻', title: 'Programming Courses', description: 'Web dev, Python, JavaScript, React tutorials', items: 52 },
    { icon: '🎬', title: 'Video Editing', description: 'Premiere Pro presets, effects, templates', items: 28 },
    { icon: '🎨', title: 'Creator Assets', description: 'Canva templates, fonts, design resources', items: 67 },
    { icon: '⚡', title: 'Productivity Tools', description: 'Notion templates, workflows, time management', items: 41 },
    { icon: '📱', title: 'Marketing Resources', description: 'Social media templates, copywriting guides', items: 35 },
    { icon: '🔧', title: 'Premium Apps', description: 'Software licenses, tools, subscriptions', items: 22 },
    { icon: '📈', title: 'Growth Methods', description: 'Scaling guides, business strategies, frameworks', items: 33 },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Ahmed Hassan',
      role: 'Freelance Developer',
      content: 'The Growth Vault saved me hundreds of hours. The resources are top-tier and the value is insane!',
      rating: 5,
    },
    {
      name: 'Zainab Khan',
      role: 'Content Creator',
      content: 'Finally found everything I need in one place. Worth every penny and more!',
      rating: 5,
    },
    {
      name: 'Bilal Ahmed',
      role: 'AI Enthusiast',
      content: 'The AI resources alone are worth the price. Amazing collection and constantly updated.',
      rating: 5,
    },
  ];

  const features = [
    { icon: <Lock size={20} />, text: 'Lifetime Access' },
    { icon: <Rocket size={20} />, text: 'Instant Delivery' },
    { icon: <TrendingUp size={20} />, text: 'Regular Updates' },
    { icon: <Users size={20} />, text: 'Community Support' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        {/* Hero Section */}
        <section className="container max-w-6xl mb-20">
          <div className="text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-block">
              <div className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-full backdrop-blur-sm">
                <p className="text-sm font-semibold text-primary flex items-center gap-2">
                  <Sparkles size={16} />
                  Exclusive Premium Bundle
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Unlock The Ultimate Growth Vault
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Access premium learning resources, AI tools, creator assets, productivity materials, courses, software resources, and digital growth tools in one place.
            </p>
          </div>

          {/* Pricing & Features Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            {/* Left Side - Features */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Premium Bundle Includes</h2>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Pricing */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-foreground/60">One-time investment</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-primary">PKR 2000</span>
                  <span className="text-2xl text-foreground/50 line-through">PKR 5000</span>
                </div>
                <p className="text-accent font-bold">or $8 USD</p>
              </div>

              {/* Payment Methods */}
              <div className="bg-background/50 border border-primary/20 rounded-lg p-4 space-y-3">
                <p className="text-sm font-semibold text-foreground/80">💳 Payment Methods:</p>
                
                {/* Binance */}
                <div className="space-y-2">
                  <p className="text-xs text-accent font-bold">🪙 Binance (International)</p>
                  <div className="bg-background rounded px-3 py-2 border border-border/50">
                    <p className="text-xs font-mono text-foreground/70">ID: 1053511840</p>
                  </div>
                </div>

                {/* Nayapay/Easypaisa */}
                <div className="space-y-2">
                  <p className="text-xs text-primary font-bold">📱 Nayapay / Easypaisa (Pakistan)</p>
                  <div className="bg-background rounded px-3 py-2 border border-border/50">
                    <p className="text-xs font-mono text-foreground/70">03275878584</p>
                  </div>
                </div>

                <p className="text-xs text-foreground/60 pt-2 border-t border-border/30">
                  Send payment & screenshot to WhatsApp: +92 370 7519482
                </p>
              </div>

              <div className="space-y-3">
                <a href="https://wa.me/923707519482?text=Growth%20Vault" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group">
                    <span className="flex items-center justify-center gap-2">
                      <Zap size={20} />
                      Get Instant Access via WhatsApp
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </a>
                <p className="text-center text-sm text-foreground/60">
                  ✓ Money-back guarantee • ✓ No hidden fees • ✓ Instant delivery
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-20">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <p className="text-3xl font-bold text-primary">{stats.users.toLocaleString()}</p>
              <p className="text-sm text-foreground/60 mt-2">Active Members</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300">
              <p className="text-3xl font-bold text-accent">{stats.resources}+</p>
              <p className="text-sm text-foreground/60 mt-2">Premium Resources</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
              <p className="text-3xl font-bold text-green-400">{stats.satisfaction}%</p>
              <p className="text-sm text-foreground/60 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="container max-w-6xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What's Inside The Vault</h2>
            <p className="text-foreground/70 text-lg">9 premium categories with 300+ resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {vaultResources.map((resource, i) => (
              <div
                key={i}
                onClick={() => setSelectedCategory(resource.title)}
                className="group bg-gradient-to-br from-background to-background/50 border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{resource.items} items</span>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(resource.title);
                    }}
                    className="bg-primary/20 text-primary hover:bg-primary/40 text-sm group-hover:bg-primary/50 transition-all"
                  >
                    Explore →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container max-w-6xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Members Say</h2>
            <p className="text-foreground/70">Join thousands of satisfied users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-background/50 border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container max-w-4xl mb-20">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Unlock Your Growth?</h2>
            <p className="text-lg text-foreground/70">Get lifetime access to 300+ premium resources for just PKR 2000</p>
            <a href="https://wa.me/923707519482?text=Growth%20Vault" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-primary to-accent text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all">
                Unlock Growth Vault Now →
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Category Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-background border border-primary/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scaleIn shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background/95 border-b border-primary/20 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">{selectedCategory}</h3>
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {categoryDetails[selectedCategory]?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-background/50 border border-primary/10 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-pointer"
                >
                  <div className="text-2xl mt-1">{item.split(' ')[0]}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.substring(item.indexOf(' ') + 1)}
                    </p>
                  </div>
                  <Check size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}

              {/* Modal CTA */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <a href="https://wa.me/923707519482?text=Growth%20Vault" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all">
                    Get Access to {selectedCategory} →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
