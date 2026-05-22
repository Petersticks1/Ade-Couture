import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const tiles = [
  {
    label: "Women's Collection",
    to: '/shop?gender=women',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop&q=80',
    alt: "Women's fashion collection",
  },
  {
    label: "Men's Collection",
    to: '/shop?gender=men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    alt: "Men's fashion collection",
  },
];

export default function CategoryTiles() {
  return (
    <section aria-label="Shop by category" className="grid grid-cols-1 md:grid-cols-2">
      {tiles.map(({ label, to, image, alt }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          className="group relative overflow-hidden block"
          style={{ aspectRatio: '4/3' }}
        >
          {/* Background image */}
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />

          {/* Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <h2 className="font-display text-white text-[28px] lg:text-[36px] font-light text-center px-4 leading-tight">
              {label}
            </h2>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="font-body text-white text-[12px] font-semibold tracking-[0.15em] uppercase">
                Explore
              </span>
              <ArrowRight size={14} className="text-white" strokeWidth={2} />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
