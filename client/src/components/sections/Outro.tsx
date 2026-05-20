import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

export default function Outro() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Ready to upgrade
                <br />
                <span className="text-gradient">your career?</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Join our community and get daily updates on internships, AI hacks, and freelancing wins.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap size={24} className="text-primary" />
                </div>
                <span className="font-semibold">Daily AI Hacks</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users size={24} className="text-accent" />
                </div>
                <span className="font-semibold">Active Community</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp size={24} className="text-primary" />
                </div>
                <span className="font-semibold">Real Opportunities</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="/community">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow gap-2 px-8 py-6 text-lg">
                  Join Community
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="/links">
                <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 gap-2 px-8 py-6 text-lg">
                  All Channels
                  <ArrowRight size={20} />
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-12 border-t border-border/50">
              <p className="text-sm text-foreground/60 mb-4">Trusted by thousands of students and freelancers worldwide</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">5K+</p>
                  <p className="text-xs text-foreground/60">Members</p>
                </div>
                <div className="w-px h-8 bg-border/50"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-xs text-foreground/60">Opportunities</p>
                </div>
                <div className="w-px h-8 bg-border/50"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-foreground/60">Free Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
