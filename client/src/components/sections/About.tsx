import { CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    'Empower students and freelancers with knowledge and tools',
    'Build a supportive community for growth and learning',
    'Provide equal opportunities for all',
    'Foster innovation and continuous improvement',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-card/30 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Career Radar</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Career Radar was founded with a mission to revolutionize how Pakistani students, freelancers, and Gen Z learners discover and pursue opportunities.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
                <p className="text-foreground/70">
                  To empower ambitious youth with AI-driven tools, community support, and real opportunities to build thriving careers in the digital economy.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-accent">Our Vision</h3>
                <p className="text-foreground/70">
                  A world where every student and freelancer has access to the resources, mentorship, and opportunities they need to succeed, regardless of their background.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Core Values</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96 animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card border border-primary/30 rounded-2xl p-8 h-full flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Founded 2024</div>
                <p className="text-foreground/60">By Hasnain Shakeel Ahmed</p>
              </div>

              <div className="border-t border-border/50 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Community Members</span>
                  <span className="text-2xl font-bold text-accent">5K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Opportunities Shared</span>
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Countries Reached</span>
                  <span className="text-2xl font-bold text-accent">15+</span>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-foreground/60 italic">
                  "We believe that every individual has the potential to achieve greatness. Our mission is to provide the tools, knowledge, and community support to make that happen."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
