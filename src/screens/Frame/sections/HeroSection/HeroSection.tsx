import React from "react";
import { Phone } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px]" style={{ backgroundImage: 'url(/hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a2028]/80 pointer-events-none" />
      {/* Navigation Bar */}
      <div className="relative z-10 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/hopkins-logo.webp"
              alt="The Law Offices of Robert R. Hopkins, LLC"
              className="h-28 w-auto object-contain"
            />
          </div>

          <div className="flex items-center">
            <a
              href="tel:4842616770"
              className="flex items-center gap-2 font-body text-hopkins-dark hover:text-hopkins-accent transition-colors text-2xl font-semibold"
            >
              <Phone className="w-7 h-7 text-hopkins-accent" />
              (484) 261-6770
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
          Experienced Divorce &amp; Family Law Attorney in Delaware County
        </h1>

        <h2 className="font-body text-white/80 text-xl md:text-2xl font-semibold mb-6">
          Strategic, Individualized Representation for Uncontested, Contested, and High-Asset Divorces
        </h2>

        <p className="font-body text-white/70 text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Whether you are mutually parting ways or facing a complex, high-stakes divorce, you deserve a legal advocate who will stand firmly by your side. At The Law Offices of Robert R. Hopkins, LLC, we provide compassionate, steady guidance to protect your financial interests and help you step confidently into your next chapter.
        </p>

        <button
          className="bg-hopkins-accent hover:bg-[#0059b8] text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-hopkins-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book a Consult
        </button>
      </div>
    </section>
  );
};
