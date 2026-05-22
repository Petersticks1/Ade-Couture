import { useState } from 'react';
import Button from '../ui/Button';
import { openWhatsApp, buildCustomDesignMessage } from '../../lib/whatsapp';
import SectionLabel from '../ui/SectionLabel';

const budgetOptions = [
  'Under ₦20,000', '₦20,000 – ₦50,000', '₦50,000 – ₦100,000',
  '₦100,000 – ₦200,000', 'Above ₦200,000',
];
const timelineOptions = ['Within 2 weeks', '2–4 weeks', '1–2 months', 'Flexible'];

export default function CustomDesignForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', gender: 'women',
    clothingType: '', description: '', fabric: '',
    bust: '', waist: '', hips: '', height: '',
    budget: '', timeline: '', contactMethod: 'whatsapp',
  });
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleWhatsApp = () => {
    openWhatsApp(buildCustomDesignMessage(form));
    setStatus('success');
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      handleWhatsApp();
    }, 800);
  };

  const inputClass = "w-full border border-brand-border px-4 py-3 font-body text-[14px] text-charcoal focus:outline-none focus:border-black transition-colors placeholder:text-light-gray";
  const labelClass = "block font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-charcoal mb-2";

  return (
    <section id="custom-design" aria-label="Request a custom design" className="py-20 lg:py-28 bg-off-white">
      <div className="max-w-[800px] mx-auto px-6 lg:px-10">
        <SectionLabel>Bespoke Service</SectionLabel>
        <h2 className="font-display text-[32px] lg:text-[44px] text-black font-light leading-tight mb-4">
          Request a Custom Design
        </h2>
        <p className="font-body text-[15px] text-mid-gray leading-[1.8] mb-12 max-w-[520px]">
          Tell us your vision. Our team will work with you to create something truly one-of-a-kind, crafted to your exact measurements and style.
        </p>

        <form onSubmit={handleEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="design-name" className={labelClass}>Full Name *</label>
              <input id="design-name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="design-phone" className={labelClass}>WhatsApp Number *</label>
              <input id="design-phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} placeholder="+234..." />
            </div>
          </div>

          <div>
            <label htmlFor="design-email" className={labelClass}>Email</label>
            <input id="design-email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} placeholder="your@email.com" />
          </div>

          {/* Gender */}
          <div>
            <p className={labelClass}>Gender *</p>
            <div className="flex gap-3 flex-wrap">
              {["women's", "men's", 'unisex'].map((g) => (
                <label key={g}
                  className={`flex items-center gap-2 font-body text-[13px] cursor-pointer px-4 py-2 border transition-all duration-200
                    ${form.gender === g ? 'bg-black text-white border-black' : 'bg-white text-black border-brand-border hover:border-black'}`}
                >
                  <input type="radio" name="design-gender" value={g} checked={form.gender === g} onChange={() => update('gender', g)} className="sr-only" />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="design-type" className={labelClass}>Type of Clothing *</label>
            <input id="design-type" type="text" required value={form.clothingType} onChange={(e) => update('clothingType', e.target.value)} className={inputClass} placeholder="e.g. Dress, Suit, Matching Set..." />
          </div>

          <div>
            <label htmlFor="design-desc" className={labelClass}>Describe Your Design Idea *</label>
            <textarea id="design-desc" required rows={5} value={form.description} onChange={(e) => update('description', e.target.value)} className={`${inputClass} resize-none`} placeholder="Describe the style, silhouette, occasion, any inspiration or reference..." />
          </div>

          <div>
            <label htmlFor="design-fabric" className={labelClass}>Preferred Fabric / Material</label>
            <input id="design-fabric" type="text" value={form.fabric} onChange={(e) => update('fabric', e.target.value)} className={inputClass} placeholder="e.g. Silk, Linen, Chiffon (optional)" />
          </div>

          {/* Measurements toggle */}
          <div>
            <button
              type="button"
              onClick={() => setShowMeasurements((s) => !s)}
              className="font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-black underline underline-offset-4 hover:no-underline transition-all cursor-pointer"
            >
              {showMeasurements ? '− Hide Measurements' : '+ Add Measurements (optional)'}
            </button>
            {showMeasurements && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[['bust', 'Bust/Chest (cm)'], ['waist', 'Waist (cm)'], ['hips', 'Hips (cm)'], ['height', 'Height (cm)']].map(([k, label]) => (
                  <div key={k}>
                    <label htmlFor={`design-${k}`} className={labelClass}>{label}</label>
                    <input id={`design-${k}`} type="number" value={form[k as keyof typeof form]} onChange={(e) => update(k, e.target.value)} className={inputClass} placeholder="0" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="design-budget" className={labelClass}>Budget Range *</label>
              <select id="design-budget" required value={form.budget} onChange={(e) => update('budget', e.target.value)} className={`${inputClass} cursor-pointer`}>
                <option value="">Select a range</option>
                {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="design-timeline" className={labelClass}>Preferred Timeline</label>
              <select id="design-timeline" value={form.timeline} onChange={(e) => update('timeline', e.target.value)} className={`${inputClass} cursor-pointer`}>
                <option value="">Select timeline</option>
                {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Contact method */}
          <div>
            <p className={labelClass}>Preferred Contact *</p>
            <div className="flex flex-wrap gap-3">
              {['whatsapp', 'email', 'phone'].map((m) => (
                <label key={m}
                  className={`flex items-center gap-2 font-body text-[13px] cursor-pointer px-4 py-2 border transition-all duration-200
                    ${form.contactMethod === m ? 'bg-black text-white border-black' : 'bg-white text-black border-brand-border hover:border-black'}`}
                >
                  <input type="radio" name="design-contact" value={m} checked={form.contactMethod === m} onChange={() => update('contactMethod', m)} className="sr-only" />
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {status === 'success' && (
            <p className="font-body text-[14px] text-green-700 bg-green-50 border border-green-200 px-4 py-3">
              ✓ Your design request has been sent! We'll reach out via your preferred channel shortly.
            </p>
          )}

          {/* Submit buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send via Email'}
            </Button>
            <Button type="button" variant="secondary" size="lg" fullWidth onClick={handleWhatsApp}>
              Send via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
