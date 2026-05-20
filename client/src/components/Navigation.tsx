import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Resources', href: '#resources' },
    { label: 'Community', href: '#community' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-primary/50 animate-radarSweep"></div>
          </div>
          <span className="text-lg md:text-xl font-bold font-poppins">
            Career<span className="text-primary">Radar</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 ease-out"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card/50 backdrop-blur-sm animate-fadeInUp">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-background rounded-lg transition-all duration-300 ease-out"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
