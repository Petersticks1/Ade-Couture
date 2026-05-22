import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { WA_NUMBER, buildInquiryMessage, openWhatsApp } from '../../lib/whatsapp';
import logoSrc from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = `+${WA_NUMBER}`;

  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300" aria-label="Ade's Couture — Home">
              <img src={logoSrc} alt="Ade's Couture monogram" className="h-12 w-auto invert" />
              <span className="font-display italic text-white text-[26px] leading-none">
                Ade's Couture
              </span>
            </Link>
            <p className="font-body text-white/60 text-[14px] leading-[1.7] mt-4 max-w-[260px]">
              Dressed for Every Story. Premium fashion crafted with intention, delivered with a personal touch.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300">
                <FaInstagram size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300">
                <FaFacebookF size={15} />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h3 className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Shop' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/contact#custom-design', label: 'Custom Design' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-[14px] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => openWhatsApp(buildInquiryMessage())}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300 group cursor-pointer"
                >
                  <FaWhatsapp size={15} className="mt-0.5 shrink-0 group-hover:text-[#25D366] transition-colors" />
                  <div className="text-left">
                    <p className="font-body text-[12px] text-white/40 tracking-widest uppercase mb-0.5">WhatsApp</p>
                    <p className="font-body text-[14px]">{phone}</p>
                  </div>
                </button>
              </li>
              <li>
                <a href="mailto:hello@adescouture.com" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <FaEnvelope size={15} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-[12px] text-white/40 tracking-widest uppercase mb-0.5">Email</p>
                    <p className="font-body text-[14px]">hello@adescouture.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${phone}`} className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <FaPhone size={15} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-[12px] text-white/40 tracking-widest uppercase mb-0.5">Phone</p>
                    <p className="font-body text-[14px]">{phone}</p>
                  </div>
                </a>
              </li>
              <li className="pt-2">
                <p className="font-body text-[12px] text-white/40 tracking-widest uppercase mb-1">Hours</p>
                <p className="font-body text-[14px] text-white/60">Mon – Sat: 9am – 7pm WAT</p>
                <p className="font-body text-[12px] text-white/40 mt-1">Lagos, Nigeria · Ships Nationwide</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[12px] text-white/40">
            © {currentYear} Ade's Couture. All rights reserved.
          </p>
          <p className="font-body text-[12px] text-white/40">
            Made with ♥ in Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
