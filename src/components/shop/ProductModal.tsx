import { useState, useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaMinus, FaPlus, FaWhatsapp } from 'react-icons/fa';
import type { Product, Size } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatPrice, openWhatsApp, buildInquiryMessage } from '../../lib/whatsapp';
import SizeSelector from './SizeSelector';
import Button from '../ui/Button';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const [sizeError, setSizeError] = useState(false);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem({ product, size: selectedSize, quantity });
    openCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 animate-fade-in"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div data-lenis-prevent className="relative bg-white w-full max-w-[960px] max-h-[90vh] overflow-y-auto animate-fade-up flex flex-col lg:flex-row">
        {/* Close */}
        <button
          aria-label="Close product details"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black text-white flex items-center justify-center hover:bg-charcoal transition-colors cursor-pointer"
        >
          <FaTimes size={14} />
        </button>

        {/* Images */}
        <div className="lg:w-[55%] bg-[#f5f5f5] flex-shrink-0">
          {/* Main image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img
              src={product.images[imgIndex]}
              alt={`${product.name} — view ${imgIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={() => setImgIndex((i) => (i - 1 + product.images.length) % product.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  aria-label="Next image"
                  onClick={() => setImgIndex((i) => (i + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                >
                  <FaChevronRight size={16} />
                </button>
              </>
            )}
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 p-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setImgIndex(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${i === imgIndex ? 'border-black' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 p-8 flex flex-col">
          <p className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-mid-gray mb-2">
            {product.gender === 'women' ? "Women's" : "Men's"} · {product.category}
          </p>
          <h2 className="font-display text-[28px] lg:text-[32px] text-black leading-tight mb-3">
            {product.name}
          </h2>
          <p className="font-body text-[24px] font-bold text-black mb-4">
            {formatPrice(product.price)}
          </p>
          <p className="font-body text-[15px] text-mid-gray leading-[1.7] mb-6">
            {product.description}
          </p>

          {product.material && (
            <p className="font-body text-[13px] text-charcoal/70 mb-1">
              <span className="font-semibold">Material:</span> {product.material}
            </p>
          )}
          {product.careInstructions && (
            <p className="font-body text-[13px] text-charcoal/70 mb-6">
              <span className="font-semibold">Care:</span> {product.careInstructions}
            </p>
          )}

          {product.isAvailable ? (
            <>
              {/* Size selector */}
              <div className="mb-4">
                <SizeSelector
                  sizes={product.sizes}
                  sizeAvailability={product.sizeAvailability}
                  selected={selectedSize}
                  onSelect={(s) => { setSelectedSize(s); setSizeError(false); }}
                />
                {sizeError && (
                  <p className="font-body text-[12px] text-red-500 mt-2">Please select a size.</p>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray">Qty</p>
                <div className="flex items-center border border-black">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="w-10 text-center font-body text-[15px] font-semibold">{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 mt-auto">
                <Button variant="primary" size="lg" fullWidth onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  onClick={() => openWhatsApp(buildInquiryMessage())}
                >
                  <FaWhatsapp size={15} />
                  Enquire on WhatsApp
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-auto">
              <Button variant="primary" size="lg" fullWidth disabled>
                Sold Out
              </Button>
              <p className="font-body text-[13px] text-mid-gray mt-3 text-center">
                Join the waitlist — message us on WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
