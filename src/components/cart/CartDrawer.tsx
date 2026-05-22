import { useState } from 'react';
import { FaTimes, FaWhatsapp, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import Button from '../ui/Button';
import { buildOrderMessage, openWhatsApp } from '../../lib/whatsapp';

export default function CartDrawer() {
  const { state, closeCart, clearCart, subtotal, totalItems } = useCart();
  const [note, setNote] = useState('');
  const [checking, setChecking] = useState(false);

  if (!state.isOpen) return null;

  const handleCheckout = () => {
    setChecking(true);
    setTimeout(() => {
      openWhatsApp(buildOrderMessage(state.items, note));
      clearCart();
      closeCart();
      setChecking(false);
    }, 1000);
  };

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={closeCart} />

      {/* Drawer */}
      <div
        role="dialog"
        aria-label="Shopping cart"
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[999]
                   flex flex-col shadow-2xl animate-slide-in-r"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <h2 className="font-body text-[13px] font-bold tracking-[0.2em] uppercase text-black">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center font-body text-[10px] font-bold">
                {totalItems}
              </span>
            )}
          </div>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="text-charcoal hover:text-black transition-colors cursor-pointer"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Items or empty state */}
        <div className="flex-1 overflow-y-auto px-6">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <FaShoppingBag size={44} className="text-light-gray mb-4" />
              <p className="font-display text-[22px] text-charcoal/50 mb-2">Your cart is empty.</p>
              <p className="font-body text-[14px] text-mid-gray mb-8">Discover pieces made for you.</p>
              <Button variant="secondary" onClick={closeCart}>
                <Link to="/shop">Explore Collection</Link>
              </Button>
            </div>
          ) : (
            <div>
              {state.items.map((item) => (
                <CartItem key={`${item.product.id}-${item.size}`} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-brand-border px-6 pt-4 pb-6 space-y-4">
            {/* Note */}
            <textarea
              id="cart-note"
              aria-label="Add a note to your order"
              placeholder="Add a note to your order..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className="w-full font-body text-[13px] text-charcoal border border-brand-border px-3 py-2
                         placeholder:text-light-gray resize-none focus:outline-none focus:border-black transition-colors"
            />

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <p className="font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-mid-gray">Subtotal</p>
              <p className="font-body text-[20px] font-bold text-black">{subtotal}</p>
            </div>

            {/* Checkout button */}
            <Button
              id="checkout-whatsapp"
              variant="whatsapp"
              size="lg"
              fullWidth
              onClick={handleCheckout}
              disabled={checking}
            >
              {checking ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Preparing order...
                </span>
              ) : (
                <>
                  <FaWhatsapp size={17} />
                  Checkout via WhatsApp
                </>
              )}
            </Button>
            <p className="font-body text-[11px] text-mid-gray text-center">
              Your order will be sent as a WhatsApp message
            </p>
          </div>
        )}
      </div>
    </>
  );
}
