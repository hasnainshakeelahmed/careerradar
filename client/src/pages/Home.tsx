import { useState } from 'react';
import { Menu, X, ArrowRight, Zap, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import AboutFounder from '@/components/sections/AboutFounder';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Channels from '@/components/sections/Channels';
import Resources from '@/components/sections/Resources';
import Community from '@/components/sections/Community';
import Opportunities from '@/components/sections/Opportunities';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Features />
        <About />
        <AboutFounder />
        <Testimonials />
        <Team />
        <Channels />
        <Resources />
        <Community />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
