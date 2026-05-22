import { useState, useEffect } from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../lib/whatsapp';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const budgets = [
  'Under ₦20,000', '₦20,000 – ₦50,000', '₦50,000 – ₦100,000',
  '₦100,000 – ₦200,000', 'Above ₦200,000',
];

export default function CustomOrderModal({ isOpen, onClose }: CustomOrderModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',

    description: '',
    colors: '',
    budget: '',
  });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `👗 *Custom AC Piece Request — Ade's Couture*\n\n` +
      `*Name:* ${form.name}\n` +
      `*WhatsApp:* ${form.phone}\n` +

      `*Budget:* ${form.budget}\n` +
      `*Colour Preference:* ${form.colors || 'Not specified'}\n\n` +
      `*Description:*\n${form.description}\n\n` +
      `*(Please attach any reference images or sketches of the style you want here!)*`;

    openWhatsApp(msg);
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    setForm({ name: '', phone: '', description: '', colors: '', budget: '' });
    onClose();
  };

  if (!isOpen) return null;

  const inputCls = `w-full border border-black/10 px-4 py-3.5 font-body text-[14px] text-charcoal
    focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-black/30 bg-[#fafafa] hover:bg-white`;
  const labelCls = 'block font-body text-[11px] font-bold tracking-[0.15em] uppercase text-black mb-2';

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-[200] backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Custom order request"
        className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
      >
        <div data-lenis-prevent className="
          bg-white w-full max-w-[580px] max-h-[90vh] overflow-y-auto
          pointer-events-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]
          animate-fade-up
        ">
          {/* Header */}
          <div className="flex items-start justify-between px-8 pt-10 pb-8 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/50 to-black pointer-events-none" />
            <div className="relative z-10">
              <p className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50 mb-2">
                Custom AC Piece
              </p>
              <h2 className="font-display text-[28px] text-white font-light leading-tight">
                Design Your Perfect Fit
              </h2>
              <p className="font-body text-[13px] text-white/70 mt-2 leading-relaxed">
                Describe your ideal branded AC piece — we'll bring it to life for you.
              </p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="relative z-10 text-white/50 hover:text-white transition-colors cursor-pointer mt-1 ml-4 shrink-0 bg-white/10 p-2.5 rounded-full hover:bg-white/20"
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* Body */}
          <div className="px-8 py-6">
            {sent ? (
              /* Success state */
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-5">
                  <FaWhatsapp size={32} className="text-white" />
                </div>
                <h3 className="font-display text-[22px] text-black font-light mb-3">
                  Request Sent!
                </h3>
                <p className="font-body text-[14px] text-mid-gray leading-relaxed mb-8">
                  Your custom order description has been sent to WhatsApp.
                  We'll get back to you shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-black underline underline-offset-4 cursor-pointer hover:no-underline transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-name" className={labelCls}>Your Name *</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      className={inputCls}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className={labelCls}>WhatsApp Number *</label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                      className={inputCls}
                      placeholder="+234..."
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="modal-desc" className={labelCls}>Describe What You Have in Mind *</label>
                  <textarea
                    id="modal-desc"
                    required
                    rows={4}
                    value={form.description}
                    onChange={e => update('description', e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="e.g. I want a custom branded AC tracksuit in a specific color, or a personalized graphic tee design..."
                  />
                </div>

                {/* Colour + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-colors" className={labelCls}>Colour Preference</label>
                    <input
                      id="modal-colors"
                      type="text"
                      value={form.colors}
                      onChange={e => update('colors', e.target.value)}
                      className={inputCls}
                      placeholder="e.g. Nude, Black, Burgundy..."
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-budget" className={labelCls}>Budget Range *</label>
                    <select
                      id="modal-budget"
                      required
                      value={form.budget}
                      onChange={e => update('budget', e.target.value)}
                      className={`${inputCls} cursor-pointer`}
                    >
                      <option value="">Select range...</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    w-full flex items-center justify-center gap-3 mt-2
                    bg-[#25D366] text-white font-body text-[13px] font-semibold
                    tracking-[0.15em] uppercase py-4
                    hover:bg-[#1ebe5d] transition-colors duration-300 cursor-pointer
                  "
                >
                  <FaWhatsapp size={18} />
                  Send Request via WhatsApp
                </button>
                <p className="font-body text-[11px] text-mid-gray text-center">
                  Your request will open WhatsApp — we'll reply within a few hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
