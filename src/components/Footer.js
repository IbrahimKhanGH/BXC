import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiLink, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import bxcLogo from '../assets/BXC Logo Preview.png';

function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white/70 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* CTA strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-14 border-b border-white/10">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-4">
              <span className="w-10 h-px bg-royal-500" />
              <span>Ready when you are</span>
            </div>
            <h3 className="display-xxl text-4xl md:text-6xl text-white">
              Let's get you a <span className="text-royal-400">free roof inspection.</span>
            </h3>
          </div>
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-3 bg-royal-600 hover:bg-royal-500 text-white px-8 py-5 text-[13px] uppercase tracking-eyebrow font-bold transition-colors whitespace-nowrap shadow-[0_8px_30px_rgba(37,99,235,0.35)]"
          >
            Book Free Inspection
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">
          <div className="md:col-span-5">
            <img src={bxcLogo} alt="BXC Roofing" className="w-48 h-auto mb-5" />
            <p className="max-w-sm leading-relaxed text-white/65">
              Professional roofing services in East Texas. Licensed, insured, and trusted by homeowners since 2008.
            </p>
            <div className="flex items-center gap-3 mt-7">
              {[
                { Icon: FaFacebookF, href: 'https://www.facebook.com/bxcroofing/', label: 'Facebook' },
                { Icon: FaInstagram, href: 'https://www.instagram.com/bxcroofing/', label: 'Instagram' },
                { Icon: FiLink, href: 'https://linktr.ee/bxcroofing', label: 'Linktree' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 border border-white/20 hover:bg-royal-600 hover:border-royal-500 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {['Residential Roofing', 'Commercial Roofing', 'Roof Repairs', 'Emergency Services', 'Free Inspection'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FiPhone className="text-royal-400" size={15} />
                <a href="tel:+19033203030" className="hover:text-white font-bold transition-colors">
                  (903) 320-3030
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-royal-400" size={15} />
                <a href="mailto:info@bxcroofing.com" className="hover:text-white transition-colors">
                  info@bxcroofing.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-royal-400" size={15} />
                <span>East Texas Service Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[10px] uppercase tracking-eyebrow font-bold text-white/45">
          <div>© {new Date().getFullYear()} BXC Roofing — Licensed & Insured</div>
          <div>Locally owned & operated in East Texas</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
