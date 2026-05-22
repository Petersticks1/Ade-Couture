import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingBag, FaBars, FaTimes, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import logoSrc from '../../assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevCount, setPrevCount] = useState(totalItems);
  const [badgeAnimating, setBadgeAnimating] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (totalItems > prevCount) {
      setBadgeAnimating(true);
      setTimeout(() => setBadgeAnimating(false), 300);
    }
    setPrevCount(totalItems);
  }, [totalItems, prevCount]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[100]
          transition-all duration-500
          ${scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10'
            : 'bg-black'
          }
        `}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300 group -ml-4 lg:-ml-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Ade's Couture — Home"
          >
            <img
              src={logoSrc}
              alt="Ade's Couture monogram"
              className="h-14 lg:h-16 w-auto invert"
            />
            <span className="font-display italic text-white text-[18px] lg:text-[20px] tracking-wide leading-none -ml-5 lg:-ml-6">
              Ade's Couture
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link font-body text-[11px] font-semibold tracking-[0.15em] uppercase
                   text-white transition-opacity duration-300
                   ${isActive ? 'active opacity-100' : 'opacity-70 hover:opacity-100'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              id="cart-toggle"
              aria-label={`Open cart — ${totalItems} items`}
              onClick={openCart}
              className="relative text-white hover:opacity-70 transition-opacity duration-300 cursor-pointer"
            >
              <FaShoppingBag size={20} />
              {totalItems > 0 && (
                <span
                  className={`
                    absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1
                    bg-white text-black ring-2 ring-black
                    rounded-full flex items-center justify-center
                    font-body text-[10px] font-bold
                    ${badgeAnimating ? 'animate-badge-pop' : ''}
                  `}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle mobile menu"
              className="lg:hidden text-white hover:opacity-70 transition-opacity duration-300 cursor-pointer"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-black flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-[72px]">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
              aria-label="Ade's Couture — Home"
            >
              <img
                src={logoSrc}
                alt="Ade's Couture monogram"
                className="h-9 w-auto invert"
              />
              <span className="font-display italic text-white text-[20px] tracking-wide">
                Ade's Couture
              </span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-white cursor-pointer"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col justify-center px-10 gap-8">
            {navLinks.map(({ to, label }, i) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-display text-[48px] font-light text-white
                   transition-opacity duration-300 animate-fade-up
                   ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
                   delay-${(i + 1) * 100}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Bottom social */}
          <div className="px-10 pb-10 flex items-center gap-6">
            <a href="https://www.instagram.com/ade_scouture?igsh=d3B3dWkwZ2llamh3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
              <FaFacebookF size={18} />
            </a>
            <span className="font-body text-white/40 text-[12px] tracking-widest uppercase ml-auto">
              Abeokuta, Ogun State
            </span>
          </div>
        </div>
      )}
    </>
  );
}
