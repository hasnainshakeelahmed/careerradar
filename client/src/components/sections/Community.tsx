import { Users, Heart, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Users,
    title: 'Network & Connect',
    description: 'Meet like-minded students and freelancers from across Pakistan and beyond.',
    color: 'text-accent',
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'Get help, advice, and encouragement from community members and mentors.',
    color: 'text-primary',
  },
  {
    icon: Zap,
    title: 'Exclusive Opportunities',
    description: 'Access job postings, projects, and opportunities shared only with community members.',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    title: 'Accelerated Growth',
    description: 'Learn from others, share experiences, and grow together as a community.',
    color: 'text-primary',
  },
];

export default function Community() {
  return (
    <section id="community" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 radar-pattern opacity-30"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Join Our <span className="text-gradient">Community</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Career Radar isn't just a platform—it's a thriving community of ambitious students and freelancers supporting each other's growth.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 p-3 bg-card border border-border/50 rounded-lg group-hover:border-primary/50 transition-colors">
                      <Icon size={20} className={benefit.color} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-foreground/60">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
                size="lg"
              >
                Join the Community Today
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 animate-slideInRight">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-sm">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/50">
                  <Users size={48} className="text-primary-foreground" />
                </div>

                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i / 6) * Math.PI * 2;
                  const x = Math.cos(angle) * 120;
                  const y = Math.sin(angle) * 120;
                  return (
                    <div
                      key={i}
                      className="absolute w-16 h-16 bg-card border-2 border-primary/50 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `orbit 20s linear infinite`,
                        animationDelay: `${-i * 3.33}s`,
                      }}
                    >
                      <span className="text-2xl">👥</span>
                    </div>
                  );
                })}

                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    const x = Math.cos(angle) * 120;
                    const y = Math.sin(angle) * 120;
                    return (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F4B860" />
                      <stop offset="100%" stopColor="#00D9FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
