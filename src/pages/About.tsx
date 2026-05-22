import { Link } from 'react-router-dom';
import { FaAward, FaCut, FaHeart, FaGlobe, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import Button from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';
import heroImg from '../assets/image2.jpeg';
import aboutImg from '../assets/image29.jpeg';
import { WA_NUMBER } from '../lib/whatsapp';

const values = [
  { icon: FaAward,  title: 'Premium Quality',   desc: 'Every AC piece is made from top-tier fabrics and materials — built to look sharp and last long.' },
  { icon: FaCut,    title: 'AC Brand',           desc: 'All our clothing carries the Ade\'s Couture identity — bold logo graphics, distinctive silhouettes, and signature branding.' },
  { icon: FaHeart,  title: 'For Everyone',       desc: 'AC drops are designed for both men and women. Style has no gender — our collections reflect that.' },
  { icon: FaGlobe,  title: 'Made in Abeokuta',   desc: 'Proudly Nigerian. Our brand is rooted in Abeokuta, Ogun State, with a vision that stretches across Africa and beyond.' },
];

export default function About() {
  return (
    <div className="pt-[72px] overflow-hidden">
      {/* Hero */}
      <section 
        aria-label="About hero" 
        className="relative bg-black text-center"
        style={{ clipPath: 'inset(0)' }}
      >
        <div className="fixed inset-0 z-0 opacity-90 lg:opacity-50 pointer-events-none">
          <div 
            className="w-full h-full bg-contain lg:bg-cover bg-no-repeat bg-[center_top] lg:bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black opacity-70 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-32 lg:py-48">
          <p className="font-body text-[12px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-6">
            Who We Are
          </p>
          <h1 className="font-display text-[60px] sm:text-[80px] lg:text-[110px] text-white font-light leading-[0.9] tracking-tight">
            The AC <span className="italic text-white/80">Identity</span>
          </h1>
        </div>
      </section>

      {/* Brand story */}
      <section aria-label="Brand story" className="py-24 lg:py-36 bg-white relative">
        <div className="absolute top-0 right-0 text-[200px] lg:text-[300px] font-display text-black/[0.02] leading-none pointer-events-none select-none">
          AC
        </div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] overflow-hidden bg-off-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] rounded-2xl">
                <img
                  src={aboutImg}
                  alt="Ade's Couture — founder and studio"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-black/5 rounded-full blur-3xl -z-10" />
            </div>

            {/* Text */}
            <div className="lg:col-span-7 lg:pl-10">
              <SectionLabel>Founded in Abeokuta</SectionLabel>
              <h2 className="font-display text-[36px] lg:text-[48px] text-black font-light leading-tight mb-8">
                Wear the Brand. <br className="hidden lg:block"/> <span className="italic">Own the Look.</span>
              </h2>
              <div className="space-y-6 font-body text-[16px] lg:text-[18px] text-mid-gray leading-[1.8] font-light">
                <p>
                  Ade's Couture is a Nigerian fashion brand built on one simple belief: that everyone deserves to wear something they’re proud of. We create and sell our own line of AC-branded clothing — bold, quality pieces for men and women who know their style.
                </p>
                <p>
                  From signature tracksuits and graphic tees to leather sets and co-ords, every item in our collection carries the AC identity. No middlemen. No generic fashion. Just our brand, our vision, and pieces made to stand out.
                </p>
                <p className="text-black font-medium border-l-2 border-black pl-5 mt-8 italic">
                  "Every AC piece you own is a statement — and we stand behind every single one."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Brand values" className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 lg:mb-20">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-display text-[36px] lg:text-[48px] text-black font-light">Our Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-y-2 transition-transform duration-500">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/10">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-[22px] text-black mb-4">
                  {title}
                </h3>
                <p className="font-body text-[14px] text-mid-gray leading-[1.7] font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Store */}
      <section aria-label="Visit Our Store" className="py-24 lg:py-36 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Info */}
            <div className="order-2 lg:order-1">
              <SectionLabel>Location</SectionLabel>
              <h2 className="font-display text-[36px] lg:text-[48px] text-black font-light leading-tight mb-12">
                The AC Flagship
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaMapMarkerAlt size={16} className="text-black/40" />
                    <h3 className="font-body text-[12px] font-bold tracking-[0.15em] uppercase text-black">Address</h3>
                  </div>
                  <p className="font-body text-[15px] text-mid-gray leading-relaxed font-light">
                    Ita Eko Surulere Ore Meji Junction,<br/> Abeokuta, Ogun State
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaClock size={16} className="text-black/40" />
                    <h3 className="font-body text-[12px] font-bold tracking-[0.15em] uppercase text-black">Hours</h3>
                  </div>
                  <p className="font-body text-[15px] text-mid-gray leading-relaxed font-light">
                    Monday – Saturday<br/> 9:00am – 7:00pm WAT
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaPhone size={16} className="text-black/40" />
                    <h3 className="font-body text-[12px] font-bold tracking-[0.15em] uppercase text-black">Contact</h3>
                  </div>
                  <p className="font-body text-[15px] text-mid-gray leading-relaxed font-light">
                    +{WA_NUMBER}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaEnvelope size={16} className="text-black/40" />
                    <h3 className="font-body text-[12px] font-bold tracking-[0.15em] uppercase text-black">Inquiries</h3>
                  </div>
                  <p className="font-body text-[15px] text-mid-gray leading-relaxed font-light">
                    hello@adescouture.com
                  </p>
                </div>
              </div>
              
              <div className="mt-14">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ita+Eko+Surulere+Ore+Meji+Junction,+Abeokuta,+Ogun+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" fullWidth>Get Directions</Button>
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="order-1 lg:order-2 w-full h-[400px] lg:h-[650px] bg-off-white rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8475200384877!2d3.3320703!3d7.1436154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b001a1c3e91%3A0x6e2c1e84a229cb0!2sIta%20Eko%2C%20Abeokuta!5e0!3m2!1sen!2sng!4v1716301234567!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ade's Couture Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Brand promise strip (Now CTA) */}
      <section aria-label="Brand promise" className="relative bg-black py-32 lg:py-48 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-90 z-0" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <p className="font-display italic text-white text-[32px] lg:text-[48px] font-light leading-[1.3] mb-12">
            "We don't just sell clothes.<br />We sell the AC experience."
          </p>
          <Link to="/shop">
            <Button variant="secondary" size="lg" className="px-12">Shop The Collection</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
