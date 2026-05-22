import { useState } from 'react';
import type { Product } from '../../types';
import { formatPrice } from '../../lib/whatsapp';
import { useCart } from '../../context/CartContext';
import ProductModal from './ProductModal';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.isAvailable) return;
    const availableSize = product.sizes.find(s => product.sizeAvailability[s] !== false);
    if (availableSize) {
      addItem({ product, size: availableSize, quantity: 1 });
      openCart();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <article
        className="product-card group cursor-pointer animate-fade-up"
        style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both', opacity: 0 }}
        onClick={() => setModalOpen(true)}
        aria-label={`View ${product.name}`}
      >
        {/* Image area */}
        <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: '3/4' }}>
          {imgError ? (
            <div className="w-full h-full skeleton" />
          ) : (
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-image w-full h-full object-cover transition-transform duration-500"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          )}

          {/* Sold out badge */}
          {!product.isAvailable && (
            <div className="absolute top-3 right-3">
              <Badge variant="sold-out">Sold Out</Badge>
            </div>
          )}

          {/* Add to cart bar */}
          {product.isAvailable && (
            <div className="add-to-cart-bar">
              <button
                aria-label={`Quick add ${product.name} to cart`}
                onClick={handleQuickAdd}
                className="w-full bg-black text-white font-body text-[11px] font-semibold
                           tracking-[0.15em] uppercase py-3.5 hover:bg-charcoal
                           transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-1">
            {product.gender === 'women' ? "Women's" : "Men's"} · {product.category}
          </p>
          <h3 className="font-display text-[17px] text-charcoal leading-snug mb-2">
            {product.name}
          </h3>
          {/* Size chips */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.sizes.map((size) => {
              const avail = product.sizeAvailability[size] !== false;
              return (
                <span
                  key={size}
                  className={`font-body text-[10px] font-semibold tracking-wider uppercase
                              px-1.5 py-0.5 border
                              ${avail ? 'border-charcoal text-charcoal' : 'border-light-gray text-light-gray line-through'}`}
                >
                  {size}
                </span>
              );
            })}
          </div>
          <p className="font-body text-[16px] font-bold text-black">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>

      {modalOpen && (
        <ProductModal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
