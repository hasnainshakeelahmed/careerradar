import { MessageCircle, Instagram, Mail, Linkedin, Youtube, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const channels = [
  {
    name: 'WhatsApp Community',
    description: 'Join our active WhatsApp community for daily opportunities and discussions.',
    icon: MessageCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '#',
    members: '2.5K+',
  },
  {
    name: 'Instagram',
    description: 'Follow us for daily tips, success stories, and career insights.',
    icon: Instagram,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: '#',
    followers: '8K+',
  },
  {
    name: 'Email Newsletter',
    description: 'Get weekly curated opportunities and resources delivered to your inbox.',
    icon: Mail,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    href: 'mailto:hello@careerradar.pk',
    frequency: 'Weekly',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with professionals and stay updated with industry news.',
    icon: Linkedin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600/10',
    href: '#',
    followers: '3K+',
  },
  {
    name: 'Discord (Coming Soon)',
    description: 'Join our Discord server for real-time collaboration and networking.',
    icon: Github,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    href: '#',
    status: 'Launching Q3',
  },
  {
    name: 'YouTube',
    description: 'Watch tutorials, webinars, and career development content.',
    icon: Youtube,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    href: '#',
    videos: '50+',
  },
];

export default function Channels() {
  return (
    <section id="channels" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 radar-pattern opacity-30"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            Connect With <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Join our thriving community across multiple platforms. Choose your preferred channel and stay connected.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 card-hover animate-fadeInUp group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className={`inline-block p-3 rounded-lg mb-4 ${channel.bgColor} group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className={channel.color} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{channel.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{channel.description}</p>

                {/* Stats */}
                <div className="mb-4 text-xs text-foreground/50">
                  {channel.members && `${channel.members} members`}
                  {channel.followers && `${channel.followers} followers`}
                  {channel.frequency && `${channel.frequency} updates`}
                  {channel.videos && `${channel.videos} videos`}
                  {channel.status && <span className="text-accent">{channel.status}</span>}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                  onClick={() => window.open(channel.href)}
                  disabled={channel.status === 'Launching Q3'}
                >
                  {channel.status === 'Launching Q3' ? 'Coming Soon' : 'Join Now'}
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't Miss Out</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Join thousands of students and freelancers who are already transforming their careers with Career Radar.
            </p>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
              size="lg"
            >
              Join All Communities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
