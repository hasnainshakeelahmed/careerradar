import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'Resources', href: '#resources' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join WhatsApp', href: '#' },
        { label: 'Follow Instagram', href: '#' },
        { label: 'Connect on LinkedIn', href: '#' },
        { label: 'Subscribe YouTube', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '#contact' },
        { label: 'FAQ', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 animate-fadeInUp">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-primary/50"></div>
              </div>
              <span className="text-lg font-bold">
                Career<span className="text-primary">Radar</span>
              </span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Your opportunity scanner. Discover, navigate, and accelerate your career journey with our community.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Mail size={16} />
              <a href="mailto:hello@careerradar.pk" className="hover:text-primary transition-colors">
                hello@careerradar.pk
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4 animate-fadeInUp" style={{ animationDelay: `${(index + 1) * 0.05}s` }}>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-all duration-300 ease-out"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>
            © {currentYear} Career Radar. All rights reserved. Built with{' '}
            <Heart size={14} className="inline text-primary" /> by Hasnain Shakeel Ahmed.
          </p>

          <div className="flex items-center gap-4">
            {[
              { label: 'Instagram', emoji: '📱', href: '#' },
              { label: 'LinkedIn', emoji: '🔗', href: '#' },
              { label: 'Twitter', emoji: '𝕏', href: '#' },
              { label: 'YouTube', emoji: '▶️', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-primary transition-colors"
                title={social.label}
              >
                {social.emoji}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
