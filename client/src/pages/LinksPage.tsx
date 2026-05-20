import { Mail, ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LinksPage() {
  const careerRadarLinks = [
    {
      title: 'Instagram',
      description: 'Follow for daily tips, opportunities, and community updates',
      url: 'https://www.instagram.com/careerradar.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: '📱',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with professionals and explore career opportunities',
      url: 'https://www.linkedin.com/company/careerradarofficial/',
      icon: '💼',
      color: 'from-blue-600 to-blue-700',
    },
    {
      title: 'WhatsApp Community',
      description: 'Join our active community for daily discussions and support',
      url: 'https://chat.whatsapp.com/Gn9CA29T9lPD1otSwPgjaU',
      icon: '💬',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'WhatsApp Channel',
      description: 'Get instant updates and announcements',
      url: 'https://whatsapp.com/channel/0029VakD7vA8fewly3jkHO3X',
      icon: '📢',
      color: 'from-green-600 to-teal-600',
    },
  ];

  const globalRadarLinks = [
    {
      title: 'Global Radar WhatsApp Channel',
      description: 'Geopolitical coverage on Pakistan, Iran, Afghanistan, Middle East, Israel, and US. Factual reporting with strategic insight.',
      url: 'https://whatsapp.com/channel/0029VbAjS8LEAKWNlCPLpH2S',
      icon: '🌍',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const founderLinks = [
    {
      title: 'Hasnain Shakeel Ahmed - LinkedIn',
      description: 'Connect with the founder on LinkedIn',
      url: 'https://www.linkedin.com/in/hasnainshakeel00',
      icon: '👤',
      color: 'from-blue-600 to-blue-700',
    },
    {
      title: 'Fiverr Profile',
      description: 'Hire for freelance services and projects',
      url: 'https://www.fiverr.com/hasnainshakeell',
      icon: '💼',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'GitHub',
      description: 'Check out code and projects',
      url: 'https://github.com/hasnainshakeelahmed',
      icon: '💻',
      color: 'from-gray-700 to-gray-900',
    },
    {
      title: 'HasnainGPT WhatsApp Channel',
      description: 'AI insights and technical discussions',
      url: 'https://whatsapp.com/channel/0029VbAK0GX6xCSNs5ukZK44',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const LinkCard = ({ link }: { link: typeof careerRadarLinks[0] }) => (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between">
          <span className="text-3xl">{link.icon}</span>
          <ExternalLink size={18} className="text-primary/60 group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-lg font-bold">{link.title}</h3>
        <p className="text-sm text-foreground/70">{link.description}</p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Connect With Us
            </h1>
            <p className="text-lg text-foreground/70">
              Founded in Pakistan, operating globally with members from around the world. Choose your preferred channel to stay connected.
            </p>
          </div>

          {/* Career Radar Links */}
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-primary">Career</span>
                <span className="text-accent">Radar</span>
              </h2>
              <p className="text-foreground/60">Your opportunity scanner - discover, navigate, and accelerate your career</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerRadarLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </div>
          </div>

          {/* Global Radar Links */}
          <div className="mb-20 pt-16 border-t border-border/50">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-accent">Global</span> Radar
              </h2>
              <p className="text-foreground/60">Geopolitical coverage with factual reporting and strategic insight</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalRadarLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </div>
          </div>

          {/* Founder Links */}
          <div className="pt-16 border-t border-border/50">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Hasnain Shakeel Ahmed
              </h2>
              <p className="text-foreground/60">Founder & Visionary - Connect directly</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {founderLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </div>
          </div>

          {/* Email Contact */}
          <div className="mt-20 pt-16 border-t border-border/50">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Prefer Email?</h3>
                <p className="text-foreground/70">Get in touch directly with our team</p>
              </div>
              <a href="mailto:contact@careerradar.ai">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow gap-2">
                  <Mail size={20} />
                  Send us an Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
