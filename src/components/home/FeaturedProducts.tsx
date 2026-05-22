import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';
import SectionLabel from '../ui/SectionLabel';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section aria-label="Featured products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <SectionLabel>Featured Pieces</SectionLabel>
            <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light leading-tight">
              Curated for You
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-black
                       flex items-center gap-2 hover:gap-3 transition-all duration-300 hidden sm:flex"
            aria-label="View full collection"
          >
            View All <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/shop"
            className="font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-black
                       flex items-center justify-center gap-2"
          >
            View Full Collection <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
