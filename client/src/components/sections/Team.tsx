import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Hasnain Shakeel Ahmed',
    role: 'Founder & Visionary',
    image: '/manus-storage/hasnain-shakeel-ahmed_9ea76e87.jpg',
    bio: 'Passionate about empowering Pakistani youth. Hasnain founded Career Radar to bridge the gap between talent and opportunity.',
    socials: [
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Mail, href: 'mailto:hasnain@careerradar.pk', label: 'Email' },
    ],
  },
  {
    name: 'Shaheer Ahmed',
    role: 'Core Admin & Community Lead',
    image: '/manus-storage/shaheer-ahmed_681ee7db.png',
    bio: 'Dedicated to building and nurturing the Career Radar community. Shaheer ensures every member gets the support they need.',
    socials: [
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Mail, href: 'mailto:shaheer@careerradar.pk', label: 'Email' },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-card/30 border-y border-border">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Dedicated leaders building the future of career development for Pakistani youth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-primary/30 rounded-lg p-8 card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="mb-6 h-64 rounded-lg overflow-hidden border border-primary/20">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>

                <p className="text-foreground/70 leading-relaxed">{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/30">
                  {member.socials.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                        title={social.label}
                      >
                        <Icon size={18} className="text-primary" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
