import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { MainContent } from "@/components/sections/MainContent";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { IngredientsSection } from "@/components/sections/IngredientsSection";
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryItems } from "@/data/galleryItems";

export default function VitaminLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E2F5FB] to-white">
      <Header />
      <Hero />
      <MainContent />
      <FeaturesGrid />
      <IngredientsSection />
      <GalleryGrid items={galleryItems} />
      <Footer />
    </div>
  );
}
