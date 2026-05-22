import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import SectionLabel from '../ui/SectionLabel';

const testimonials = [
  {
    id: 1,
    name: 'Chidinma O.',
    location: 'Abeokuta, Ogun State',
    rating: 5,
    text: "I bought the blue crop tee and jogger set and I genuinely haven't taken it off. The quality is insane for the price. AC is the real deal — Nigerian fashion at its finest.",
    item: 'AC Blue Crop Tee & Jogger Set',
  },
  {
    id: 2,
    name: 'Tunde B.',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: "Got the white flame tracksuit and it's everything. The fabric is thick, the stitching is perfect, and the branding is clean. I've gotten compliments every single time I've worn it.",
    item: 'White Flame Hoodie Tracksuit',
  },
  {
    id: 3,
    name: 'Funmilayo A.',
    location: 'Ibadan, Oyo State',
    rating: 5,
    text: "The AC leather jacket is a showstopper. I wore it to an event and people were stopping me to ask where I got it. Delivery was fast too. Highly recommend!",
    item: 'AC Drip Leather Jacket',
  },
  {
    id: 4,
    name: 'Emmanuel K.',
    location: 'Abuja, FCT',
    rating: 5,
    text: "Ordered the orange suit set for a function and I looked like the most dressed person in the room. Quality is premium, fit was perfect. Ade's Couture never disappoints.",
    item: 'Orange AC Suit Set',
  },
  {
    id: 5,
    name: 'Blessing N.',
    location: 'Port Harcourt, Rivers State',
    rating: 5,
    text: "Customer service via WhatsApp was so smooth. They replied quickly, confirmed my size, and the item arrived well packaged. The camo set is exactly what I wanted. Will be ordering again.",
    item: 'Black AC Mesh Tee & Camo Set',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const { name, location, rating, text, item } = testimonials[active];

  return (
    <section aria-label="Customer testimonials" className="py-20 lg:py-28 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>What Our Customers Say</SectionLabel>
          <h2 className="font-display text-[32px] lg:text-[44px] text-black font-light">
            Loved Across Nigeria
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-[840px] mx-auto">
          <div
            className="bg-white p-10 lg:p-14 relative transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-black/5 rounded-2xl overflow-hidden"
            key={active}
            style={{ animation: 'fadeSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Massive background quote */}
            <div className="absolute -top-10 left-4 lg:left-10 text-[240px] leading-none text-black/[0.03] font-display select-none pointer-events-none">
              "
            </div>

            <div className="relative z-10">
              {/* Header: Avatar and Details */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-display text-[22px] italic">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-[20px] text-black leading-tight">{name}</p>
                    <p className="font-body text-[13px] text-mid-gray mt-0.5">{location}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <FaStar key={i} size={14} className="text-[#f68b1e]" />
                  ))}
                </div>
              </div>

              {/* Review text */}
              <p className="font-display text-[22px] lg:text-[28px] text-charcoal leading-[1.6] mb-10 italic">
                "{text}"
              </p>

              {/* Divider & Item */}
              <div className="pt-6 border-t border-black/5 flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full" />
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-black/40 font-semibold">
                  Purchased: <span className="text-black/80 ml-1">{item}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Line Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-[2px] transition-all duration-300 ${
                    i === active ? 'bg-black w-12' : 'bg-black/20 w-4 hover:bg-black/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
              >
                <FaChevronLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
              >
                <FaChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex items-center justify-center gap-12 lg:gap-24 mt-20 flex-wrap border-t border-black/5 pt-12">
          {[
            { value: '50+', label: 'Happy Customers' },
            { value: '5★', label: 'Average Rating' },
            { value: '100%', label: 'AC Branded' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-[40px] text-black font-light leading-none">{value}</p>
              <p className="font-body text-[12px] text-mid-gray tracking-[0.15em] uppercase mt-2 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fade animation */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
