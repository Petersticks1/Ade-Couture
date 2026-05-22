import { useState } from 'react';
import Button from '../ui/Button';
import { openWhatsApp, buildInquiryMessage, WA_NUMBER } from '../../lib/whatsapp';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '', contactMethod: 'whatsapp',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Fallback to WhatsApp if EmailJS not configured
    try {
      // Try EmailJS here if configured
      throw new Error('EmailJS not configured — using WhatsApp fallback');
    } catch {
      setTimeout(() => {
        const msg = `Hello Ade's Couture! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nSubject: ${form.subject}\n\n${form.message}\n\nPreferred contact: ${form.contactMethod}`;
        openWhatsApp(msg);
        setStatus('success');
      }, 800);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-2">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full border border-brand-border px-4 py-3 font-body text-[14px] text-charcoal
                       focus:outline-none focus:border-black transition-colors placeholder:text-light-gray"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-2">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="w-full border border-brand-border px-4 py-3 font-body text-[14px] text-charcoal
                       focus:outline-none focus:border-black transition-colors placeholder:text-light-gray"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-2">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="w-full border border-brand-border px-4 py-3 font-body text-[14px] text-charcoal
                       focus:outline-none focus:border-black transition-colors placeholder:text-light-gray"
            placeholder="+234..."
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-2">
            Subject *
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
            className="w-full border border-brand-border px-4 py-3 font-body text-[14px] text-charcoal
                       focus:outline-none focus:border-black transition-colors placeholder:text-light-gray"
            placeholder="What's on your mind?"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full border border-brand-border px-4 py-3 font-body text-[14px] text-charcoal
                     focus:outline-none focus:border-black transition-colors placeholder:text-light-gray resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      {/* Preferred contact */}
      <div>
        <p className="font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-3">
          Preferred Contact
        </p>
        <div className="flex flex-wrap gap-3">
          {['whatsapp', 'email', 'phone'].map((method) => (
            <label
              key={method}
              className={`flex items-center gap-2 font-body text-[13px] cursor-pointer px-4 py-2 border transition-all duration-200
                ${form.contactMethod === method ? 'bg-black text-white border-black' : 'bg-white text-black border-brand-border hover:border-black'}`}
            >
              <input
                type="radio"
                name="contact-method"
                value={method}
                checked={form.contactMethod === method}
                onChange={() => update('contactMethod', method)}
                className="sr-only"
              />
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {status === 'success' && (
        <p className="font-body text-[14px] text-green-700 bg-green-50 border border-green-200 px-4 py-3">
          ✓ Message sent via WhatsApp! We'll be in touch shortly.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
