import { HeroSection } from "./HeroSection";
import { ContactSection } from "./ContactSection";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <section id="inicio">
        <HeroSection onNavigate={onNavigate} />
      </section>
      
      
      <ContactSection onNavigate={onNavigate} />
    </main>
  );
}