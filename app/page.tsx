import HeroGrid from '@/components/HeroGrid';
import HeroOverlay from '@/components/HeroOverlay';

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Grid */}
      <HeroGrid />
      
      {/* Overlay with text */}
      <HeroOverlay />
    </section>
  );
}
