import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutFounder from '@/components/sections/AboutFounder';
import Team from '@/components/sections/Team';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <AboutFounder />
        <Team />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
