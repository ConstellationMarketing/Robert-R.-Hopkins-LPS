import React from "react";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#384450] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-white text-3xl md:text-4xl font-normal mb-6">
          Connect With Our Divorce Legal Team Today
        </h2>
        <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Speak directly with a dedicated family law attorney who knows you by name, not by a file number.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:4842616770"
            className="bg-white text-hopkins-dark font-body font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Call Now: (484) 261-6770
          </a>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-hopkins-accent text-white border-2 border-hopkins-accent font-body font-semibold px-8 py-4 rounded-lg hover:bg-[#0059b8] hover:border-[#0059b8] transition-all"
          >
            Book a Consult
          </button>
        </div>
      </div>
    </section>
  );
};
