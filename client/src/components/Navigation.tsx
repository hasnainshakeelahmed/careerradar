import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Founder', href: '/founder' },
    { label: 'Team', href: '/team' },
    { label: 'Resources', href: '/resources' },
    { label: 'Community', href: '/community' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Links', href: '/links' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-primary/50 animate-radarSweep"></div>
          </div>
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

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="/login">
            <Button variant="outline" className="border-border/50 text-foreground hover:bg-card">
              Log In
            </Button>
          </a>
          <a href="/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow">
              Sign Up
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
            <a href="/login" onClick={() => setIsOpen(false)} className="block">
              <Button variant="outline" className="w-full border-border/50 text-foreground hover:bg-card">
                Log In
              </Button>
            </a>
            <a href="/signup" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Sign Up
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
