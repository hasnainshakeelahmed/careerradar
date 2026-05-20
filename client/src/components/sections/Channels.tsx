import { MessageCircle, Instagram, Mail, Linkedin, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const channels = [
  {
    name: 'WhatsApp Community',
    description: 'Join our active WhatsApp community for daily opportunities and discussions.',
    icon: MessageCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: 'https://chat.whatsapp.com/Gn9CA29T9lPD1otSwPgjaU',
    members: '2.5K+',
  },
  {
    name: 'Instagram',
    description: 'Follow us for daily tips, success stories, and career insights.',
    icon: Instagram,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: 'https://www.instagram.com/careerradar.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    followers: '8K+',
  },
  {
    name: 'Email Newsletter',
    description: 'Get weekly curated opportunities and resources delivered to your inbox.',
    icon: Mail,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    href: 'mailto:hasnainshakeel893@gmail.com',
    frequency: 'Weekly',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with professionals and stay updated with industry news.',
    icon: Linkedin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600/10',
    href: 'https://www.linkedin.com/company/careerradarofficial/',
    followers: '3K+',
  },
  {
    name: 'WhatsApp Channel',
    description: 'Get instant updates and announcements directly to your phone.',
    icon: MessageCircle,
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    href: 'https://whatsapp.com/channel/0029VakD7vA8fewly3jkHO3X',
    status: 'Active',
  },
  {
    name: 'Discord',
    description: 'Join our Discord server for real-time collaboration and networking.',
    icon: Github,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    href: '#',
    status: 'Coming Soon',
  },
];

export default function Channels() {
  return (
    <section id="channels" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            Connect With <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Join our thriving global community across multiple platforms. Choose your preferred channel and stay connected.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            const isComingSoon = channel.status === 'Coming Soon';

            return (
              <a
                key={index}
                href={isComingSoon ? '#' : channel.href}
                target={isComingSoon ? undefined : '_blank'}
                rel={isComingSoon ? undefined : 'noopener noreferrer'}
                className={`group relative overflow-hidden rounded-2xl border border-primary/20 p-6 transition-all duration-300 ${
                  isComingSoon
                    ? 'bg-card/30 cursor-not-allowed opacity-60'
                    : 'bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20'
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 opacity-0 ${!isComingSoon && 'group-hover:opacity-10'} transition-opacity duration-300 bg-gradient-to-br ${channel.bgColor}`} />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${channel.bgColor} flex items-center justify-center`}>
                    <Icon size={24} className={channel.color} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">{channel.name}</h3>
                    <p className="text-sm text-foreground/70">{channel.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-foreground/50">
                      {channel.members || channel.followers || channel.frequency || channel.status}
                    </span>
                    {!isComingSoon && (
                      <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Join →
                      </span>
                    )}
                    {isComingSoon && (
                      <span className="text-accent text-xs font-medium">Soon</span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6 p-8 rounded-2xl border border-primary/20 bg-card/30">
          <h3 className="text-2xl font-bold">Not sure where to start?</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Check out our Links page to see all available channels and find the best way to connect with us.
          </p>
          <a href="/links">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow">
              View All Links
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
