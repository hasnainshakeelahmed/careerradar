import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 radar-pattern opacity-40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Discover.</span>
                <br />
                <span className="text-accent">Navigate.</span>
                <br />
                <span className="text-primary">Accelerate.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl">
                Your career journey. Our radar. Infinite possibilities ahead. Scan for opportunities, connect with mentors, and accelerate your growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
              >
                Explore Opportunities
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-primary">5K+</div>
                <p className="text-sm text-foreground/60">Students & Freelancers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <p className="text-sm text-foreground/60">Opportunities Listed</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-sm text-foreground/60">Free Community</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96 animate-slideInRight">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Radar Circle Animation */}
              <div className="relative w-full h-full max-w-md">
                {/* Outer circles */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border-2 border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-16 border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Center point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"></div>

                {/* Scanning line */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent animate-radarSweep opacity-50"></div>

                {/* Opportunity markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-0 right-0 bg-card border border-primary/30 rounded-lg p-4 w-48 animate-scaleIn shadow-lg">
              <div className="text-sm font-medium text-primary mb-2">AI-Powered Insights</div>
              <p className="text-xs text-foreground/60">Personalized recommendations tailored for you</p>
            </div>

            <div className="absolute bottom-0 left-0 bg-card border border-accent/30 rounded-lg p-4 w-48 animate-scaleIn shadow-lg" style={{ animationDelay: '0.2s' }}>
              <div className="text-sm font-medium text-accent mb-2">Real Opportunities</div>
              <p className="text-xs text-foreground/60">Internships, jobs, and projects waiting for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
