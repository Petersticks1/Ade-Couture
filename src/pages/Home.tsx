import HeroSection from '../components/home/HeroSection';
import CategoryTiles from '../components/home/CategoryTiles';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandStripSection from '../components/home/BrandStripSection';
import CustomDesignCTA from '../components/home/CustomDesignCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryTiles />
      <FeaturedProducts />
      <BrandStripSection />
      <CustomDesignCTA />
    </main>
  );
}
