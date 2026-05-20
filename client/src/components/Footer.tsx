import { Instagram, Linkedin, MessageCircle, Mail, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/careerradar.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      color: 'hover:text-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/careerradarofficial/',
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://chat.whatsapp.com/Gn9CA29T9lPD1otSwPgjaU',
      color: 'hover:text-green-500',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:contact@careerradar.ai',
      color: 'hover:text-primary',
    },
  ];

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Opportunities', href: '/opportunities' },
        { label: 'Resources', href: '/resources' },
        { label: 'Community', href: '/community' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Founder', href: '/founder' },
        { label: 'Team', href: '/team' },
        { label: 'Links', href: '/links' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-primary/50"></div>
              </div>
              <span className="text-lg font-bold">
                Career<span className="text-primary">Radar</span>
              </span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Founded in Pakistan, operating globally. Your opportunity scanner for discovering, navigating, and accelerating your career.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-foreground/60 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Global Radar */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Global Radar</h3>
            <p className="text-sm text-foreground/60">
              Geopolitical coverage with factual reporting and strategic insight.
            </p>
            <a
              href="https://whatsapp.com/channel/0029VbAjS8LEAKWNlCPLpH2S"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <MessageCircle size={16} />
              Join Channel
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Career Radar. All rights reserved. Founded by Hasnain Shakeel Ahmed.
            </p>
            <div className="flex gap-6">
              <a href="/links" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                All Links
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
