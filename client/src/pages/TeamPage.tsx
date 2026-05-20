import Navigation from '@/components/Navigation';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Team />
      </main>
      <Footer />
    </div>
  );
}
