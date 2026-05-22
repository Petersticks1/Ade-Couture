import { FaWhatsapp, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';
import CustomDesignForm from '../components/contact/CustomDesignForm';
import SectionLabel from '../components/ui/SectionLabel';
import { WA_NUMBER, buildInquiryMessage, openWhatsApp } from '../lib/whatsapp';

const phone = `+${WA_NUMBER}`;

export default function Contact() {
  return (
    <div className="pt-[72px]">
      {/* Page hero */}
      <section aria-label="Contact page header" className="bg-black py-20 lg:py-28 text-center">
        <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-4">
          Get in Touch
        </p>
        <h1 className="font-display text-[40px] lg:text-[64px] text-white font-light">Contact Us</h1>
      </section>

      {/* Contact section */}
      <section aria-label="Contact information and form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Left — contact info */}
            <div>
              <SectionLabel>Reach Us</SectionLabel>
              <h2 className="font-display text-[28px] lg:text-[36px] text-black font-light leading-tight mb-8">
                We'd love to hear from you.
              </h2>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-1">WhatsApp</p>
                    <button
                      onClick={() => openWhatsApp(buildInquiryMessage())}
                      className="font-body text-[16px] text-black hover:underline cursor-pointer"
                      aria-label="Open WhatsApp chat"
                    >
                      {phone}
                    </button>
                    <p className="font-body text-[13px] text-mid-gray mt-0.5">Tap to open WhatsApp chat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-1">Email</p>
                    <a href="mailto:hello@adescouture.com" className="font-body text-[16px] text-black hover:underline">
                      hello@adescouture.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-1">Phone</p>
                    <a href={`tel:${phone}`} className="font-body text-[16px] text-black hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-1">Business Hours</p>
                    <p className="font-body text-[15px] text-charcoal">Monday – Saturday: 9am – 7pm WAT</p>
                    <p className="font-body text-[13px] text-mid-gray">Response within 1–2 hours during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-1">Location</p>
                    <p className="font-body text-[15px] text-charcoal">Lagos, Nigeria</p>
                    <p className="font-body text-[13px] text-mid-gray">Ships Nationwide · International available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-display text-[28px] lg:text-[36px] text-black font-light leading-tight mb-8">
                General Inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Custom design form */}
      <CustomDesignForm />
    </div>
  );
}
