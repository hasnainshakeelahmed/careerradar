import { useState, useEffect } from 'react';
import { Zap, Lock, Rocket, TrendingUp, Users, Star, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface VaultResource {
  icon: string;
  title: string;
  description: string;
  items: number;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function GrowthVault() {
  const [stats, setStats] = useState({ users: 0, resources: 0, satisfaction: 0 });
  const [selectedTab, setSelectedTab] = useState('all');

  // Animated counter effect
  useEffect(() => {
    const intervals = [
      setInterval(() => setStats(s => ({ ...s, users: Math.min(s.users + 50, 5234) })), 30),
      setInterval(() => setStats(s => ({ ...s, resources: Math.min(s.resources + 5, 500) })), 30),
      setInterval(() => setStats(s => ({ ...s, satisfaction: Math.min(s.satisfaction + 1, 98) })), 30),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  const vaultResources: VaultResource[] = [
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
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
                Unlock The Ultimate Growth Vault
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Access premium learning resources, AI tools, creator assets, productivity materials, courses, software resources, and digital growth tools in one exclusive vault.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  <Lock size={20} />
                  Unlock Growth Vault Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button variant="outline" className="px-8 py-4 border-primary/50 hover:bg-primary/10 rounded-xl font-semibold">
                View All Resources
              </Button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
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

                  <div className="space-y-3">
                    <Button className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group">
                      <span className="flex items-center justify-center gap-2">
                        <Zap size={20} />
                        Get Instant Access
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <p className="text-center text-sm text-foreground/60">
                      ✓ Money-back guarantee • ✓ No hidden fees
                    </p>
                  </div>
                </div>
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
                className="group relative bg-gradient-to-br from-card to-card/50 border border-primary/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-xl transition-all duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{resource.icon}</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                      {resource.items} items
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-foreground/70 text-sm">{resource.description}</p>
                  </div>

                  <div className="pt-4 border-t border-border/30">
                    <button className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container max-w-6xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Loved By 5000+ Members</h2>
            <p className="text-foreground/70 text-lg">See what our community says</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-card to-card/50 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full" />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-foreground/60 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-4xl mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-12 text-center space-y-6 backdrop-blur-sm">
              <h2 className="text-4xl font-bold">Ready to Transform Your Career?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Join 5000+ students, freelancers, and creators who are already using the Growth Vault to accelerate their success.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap size={20} />
                    Get Lifetime Access - PKR 2000
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <p className="text-sm text-foreground/60 pt-4">
                30-day money-back guarantee • No questions asked
              </p>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container max-w-6xl">
          <div className="bg-card/30 border border-border/30 rounded-xl p-8 text-center space-y-4">
            <p className="text-foreground/70 font-semibold">Trusted by leading companies and creators</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              <span className="font-bold">Freelancers</span>
              <span>•</span>
              <span className="font-bold">Developers</span>
              <span>•</span>
              <span className="font-bold">Content Creators</span>
              <span>•</span>
              <span className="font-bold">AI Enthusiasts</span>
              <span>•</span>
              <span className="font-bold">Students</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
