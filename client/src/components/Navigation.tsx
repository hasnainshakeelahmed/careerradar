import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Community', href: '/community' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Founder', href: '/founder' },
    { label: 'Team', href: '/team' },
    { label: 'Links', href: '/links' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/manus-storage/career-radar-logo_70b9fe36.jpeg" alt="Career Radar Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
          <span className="text-lg md:text-xl font-bold font-poppins">
            Career<span className="text-primary">Radar</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 ease-out ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Premium & CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="/payment">
            <Button className="bg-accent text-background hover:bg-accent/90 btn-glow">
              💎 Premium
            </Button>
          </a>
          <a href="/#contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow">
              Get Started
            </Button>
          </a>
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
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ease-out ${
                  isActive(item.href)
                    ? 'text-primary bg-background'
                    : 'text-foreground/70 hover:text-primary hover:bg-background'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="space-y-2 pt-2 border-t border-border/50">
              <a href="/payment" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-background hover:bg-accent/90">
                  💎 Premium
                </Button>
              </a>
              <a href="/#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
