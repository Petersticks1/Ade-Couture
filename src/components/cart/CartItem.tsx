import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import type { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/whatsapp';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, dispatch } = useCart();
  const { product, size, quantity } = item;

  const updateQty = (qty: number) => {
    if (qty < 1) {
      removeItem(product.id, size);
    } else {
      dispatch({ type: 'UPDATE_QTY', payload: { id: product.id, size, quantity: qty } });
    }
  };

  return (
    <div className="flex gap-4 py-5 border-b border-brand-border">
      {/* Thumbnail */}
      <div className="w-16 flex-shrink-0 bg-[#f5f5f5]" style={{ aspectRatio: '3/4' }}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-[15px] text-charcoal leading-snug">{product.name}</h4>
          <button
            aria-label={`Remove ${product.name} from cart`}
            onClick={() => removeItem(product.id, size)}
            className="text-light-gray hover:text-black transition-colors cursor-pointer flex-shrink-0"
          >
            <FaTimes size={14} />
          </button>
        </div>
        <p className="font-body text-[12px] text-mid-gray tracking-wider uppercase mt-1 mb-3">
          Size: {size}
        </p>

        <div className="flex items-center justify-between">
          {/* Qty controls */}
          <div className="flex items-center border border-black">
            <button
              aria-label="Decrease quantity"
              onClick={() => updateQty(quantity - 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <FaMinus size={11} />
            </button>
            <span className="w-8 text-center font-body text-[13px] font-semibold">{quantity}</span>
            <button
              aria-label="Increase quantity"
              onClick={() => updateQty(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <FaPlus size={11} />
            </button>
          </div>
          <p className="font-body text-[15px] font-bold text-black">
            {formatPrice(product.price * quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
