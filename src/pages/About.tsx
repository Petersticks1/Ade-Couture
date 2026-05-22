import { Link } from 'react-router-dom';
import { FaAward, FaCut, FaHeart, FaGlobe, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import Button from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';
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
    <div className="pt-[72px]">
      {/* Hero */}
      <section aria-label="About hero" className="bg-black py-24 lg:py-36 text-center">
        <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-4">
          Who We Are
        </p>
        <h1 className="font-display text-[56px] lg:text-[80px] text-white font-light leading-[0.95]">
          Our Story
        </h1>
      </section>

      {/* Brand story */}
      <section aria-label="Brand story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionLabel>Founded in Abeokuta</SectionLabel>
              <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light leading-tight mb-6">
                Wear the Brand. Own the Look.
              </h2>
              <div className="space-y-5 font-body text-[15px] text-mid-gray leading-[1.8]">
                <p>
                  Ade's Couture is a Nigerian fashion brand built on one simple belief: that everyone deserves to wear something they’re proud of. We create and sell our own line of AC-branded clothing — bold, quality pieces for men and women who know their style.
                </p>
                <p>
                  From signature tracksuits and graphic tees to leather sets and co-ords, every item in our collection carries the AC identity. No middlemen. No generic fashion. Just our brand, our vision, and pieces made to stand out.
                </p>
                <p>
                  Whether you're shopping online or reaching us directly, every AC piece you own is a statement — and we stand behind every single one.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[#f5f5f5]">
                <img
                  src={aboutImg}
                  alt="Ade's Couture — founder and studio"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Decorative offset block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-black hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Brand values" className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 border border-black flex items-center justify-center mb-5">
                  <Icon size={18} strokeWidth={1.5} className="text-black" />
                </div>
                <h3 className="font-body text-[14px] font-semibold tracking-[0.1em] uppercase text-black mb-3">
                  {title}
                </h3>
                <p className="font-body text-[14px] text-mid-gray leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand promise strip */}
      <section aria-label="Brand promise" className="bg-black py-20 lg:py-28 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="font-display italic text-white text-[24px] lg:text-[32px] font-light leading-[1.5]">
            "We don't just sell clothes.<br />We sell the AC experience."
          </p>
        </div>
      </section>

      {/* Visit Our Store */}
      <section aria-label="Visit Our Store" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Info */}
            <div>
              <SectionLabel>Location</SectionLabel>
              <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light leading-tight mb-10">
                Visit Our Store
              </h2>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt size={18} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-body text-[15px] font-semibold text-black mb-1">Address</h3>
                    <p className="font-body text-[14px] text-mid-gray leading-relaxed max-w-[300px]">
                      Ita Eko Surulere Ore Meji Junction, Abeokuta, Ogun State
                    </p>
                  </div>
                </div>
                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center shrink-0">
                    <FaClock size={18} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-body text-[15px] font-semibold text-black mb-1">Hours</h3>
                    <p className="font-body text-[14px] text-mid-gray leading-relaxed">
                      Monday – Saturday, 9:00am – 7:00pm WAT
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center shrink-0">
                    <FaPhone size={18} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-body text-[15px] font-semibold text-black mb-1">Phone</h3>
                    <p className="font-body text-[14px] text-mid-gray leading-relaxed">
                      +{WA_NUMBER}
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center shrink-0">
                    <FaEnvelope size={18} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-body text-[15px] font-semibold text-black mb-1">Email</h3>
                    <p className="font-body text-[14px] text-mid-gray leading-relaxed">
                      hello@adescouture.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ita+Eko+Surulere+Ore+Meji+Junction,+Abeokuta,+Ogun+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="lg">Get Directions</Button>
                </a>
              </div>
            </div>
            {/* Map Embed */}
            <div className="w-full h-[400px] lg:h-[600px] bg-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8475200384877!2d3.3320703!3d7.1436154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b001a1c3e91%3A0x6e2c1e84a229cb0!2sIta%20Eko%2C%20Abeokuta!5e0!3m2!1sen!2sng!4v1716301234567!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ade's Couture Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Shop call to action" className="py-20 lg:py-24 bg-off-white text-center">
        <SectionLabel>Explore the Range</SectionLabel>
        <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light mb-8">
          Shop the Collection
        </h2>
        <Link to="/shop">
          <Button variant="primary" size="lg">Browse All Pieces</Button>
        </Link>
      </section>
    </div>
  );
}
