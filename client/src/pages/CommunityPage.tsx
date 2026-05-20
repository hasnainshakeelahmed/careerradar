import Navigation from '@/components/Navigation';
import Community from '@/components/sections/Community';
import Channels from '@/components/sections/Channels';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.4s' }}></div>
      </div>
      <Navigation />
      <main className="relative z-10">
        <Community />
        <Channels />
      </main>
      <Footer />
    </div>
  );
}
