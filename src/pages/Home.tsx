import { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryTiles from '../components/home/CategoryTiles';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandStripSection from '../components/home/BrandStripSection';
import Testimonials from '../components/home/Testimonials';
import CustomDesignCTA from '../components/home/CustomDesignCTA';
import CustomOrderModal from '../components/ui/CustomOrderModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <HeroSection onRequestDesign={() => setModalOpen(true)} />
      <CategoryTiles />
      <FeaturedProducts />
      <BrandStripSection />
      <Testimonials />
      <CustomDesignCTA onRequestDesign={() => setModalOpen(true)} />

      <CustomOrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
