import { Zap, Briefcase, Users, TrendingUp, BookOpen, Lightbulb, Target, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Tools',
    description: 'Leverage cutting-edge AI tools to enhance your productivity and decision-making.',
    color: 'text-accent',
  },
  {
    icon: Briefcase,
    title: 'Freelancing',
    description: 'Connect with clients and build your freelance career with real projects.',
    color: 'text-primary',
  },
  {
    icon: Target,
    title: 'Internships',
    description: 'Discover internship opportunities that match your skills and interests.',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    title: 'Remote Jobs',
    description: 'Access remote job listings from top companies worldwide.',
    color: 'text-primary',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access curated learning materials and courses for skill development.',
    color: 'text-accent',
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Get guidance from experienced professionals in your field.',
    color: 'text-primary',
  },
  {
    icon: Lightbulb,
    title: 'Career Guidance',
    description: 'Personalized advice to navigate your career path effectively.',
    color: 'text-accent',
  },
  {
    icon: Rocket,
    title: 'Productivity',
    description: 'Tools and strategies to maximize your productivity and growth.',
    color: 'text-primary',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 radar-pattern opacity-30"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive tools and resources to help you discover, navigate, and accelerate your career journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border/50 rounded-lg p-6 card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className={`${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div className="mt-4 pt-4 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-primary font-medium">Learn more →</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
