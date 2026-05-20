import Navigation from '@/components/Navigation';
import AboutFounder from '@/components/sections/AboutFounder';
import Footer from '@/components/Footer';

export default function Founder() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <AboutFounder />
      </main>
      <Footer />
    </div>
  );
}
