import Navigation from '@/components/Navigation';
import Opportunities from '@/components/sections/Opportunities';
import Footer from '@/components/Footer';

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Opportunities />
      </main>
      <Footer />
    </div>
  );
}
