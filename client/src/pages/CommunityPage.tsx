import Navigation from '@/components/Navigation';
import Community from '@/components/sections/Community';
import Channels from '@/components/sections/Channels';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Community />
        <Channels />
      </main>
      <Footer />
    </div>
  );
}
