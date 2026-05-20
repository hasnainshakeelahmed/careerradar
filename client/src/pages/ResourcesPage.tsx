import Navigation from '@/components/Navigation';
import Resources from '@/components/sections/Resources';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
