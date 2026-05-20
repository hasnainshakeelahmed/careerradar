import { CheckCircle, Heart, Zap, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Community-led',
      description: 'We grow by lifting each other up — referrals, tips, and wins shared daily.',
    },
    {
      icon: Zap,
      title: 'AI-native',
      description: 'We don\'t fear AI — we teach you to ride it.',
    },
    {
      icon: Globe,
      title: 'Globally Pakistani',
      description: 'Rooted at home, paid in dollars.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Main Heading with Highlighted Text */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">About</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Built so that{' '}
            <span className="text-primary">talent without</span>
            {' '}
            <span className="text-accent">access</span>
            {' '}
            stops being a thing.
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Pakistan is overflowing with sharp, ambitious young people. What's missing is a single, trusted place that hands them the modern career toolkit: AI fluency, freelance skills, remote-job leads, and a community that actually responds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-primary/20 bg-card/50 hover:bg-card/80 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-primary/20 bg-card/50">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-foreground/70">
              To empower ambitious youth with AI-driven tools, community support, and real opportunities to build thriving careers in the digital economy.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-accent/20 bg-card/50">
            <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
            <p className="text-foreground/70">
              A world where every student and freelancer has access to the resources, mentorship, and opportunities they need to succeed, regardless of their background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
