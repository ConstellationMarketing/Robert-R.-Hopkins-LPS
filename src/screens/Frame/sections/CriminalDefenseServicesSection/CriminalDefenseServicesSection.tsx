import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const practiceAreas = [
    {
      title: "Uncontested Divorce",
      description: "Streamlined, efficient guidance for couples who agree on the terms of their separation."
    },
    {
      title: "Contested Divorce",
      description: "Strong, strategic advocacy when you and your spouse cannot agree on custody, support, or the division of assets."
    },
    {
      title: "High-Asset Divorce",
      description: "Meticulous financial review to protect businesses, investments, retirement accounts, and real estate."
    },
    {
      title: "Child Custody & Support",
      description: "Compassionate representation focused on protecting what matters most—your family."
    },
  ];

  return (
    <section id="practice-areas" className="w-full bg-hopkins-light py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-hopkins-dark text-3xl md:text-4xl font-normal mb-4">
            Focused Divorce &amp; Family Law Representation
          </h2>
          <p className="font-body text-hopkins-dark/70 text-base max-w-3xl mx-auto mb-8">
            We understand that the decision to end a marriage leads to both difficult transitions and new opportunities. Our firm provides dedicated, one-on-one guidance to protect you through the legal process.
          </p>
          <h3 className="font-heading text-hopkins-dark text-2xl font-normal">
            Family Law Services We Provide:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg py-5 px-6"
            >
              <p className="font-body text-hopkins-dark text-base font-semibold mb-1">{area.title}</p>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-hopkins-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-white text-2xl md:text-3xl font-normal mb-6">
            Connect With Our Divorce Legal Team Today
          </h3>

          <a
            href="tel:4842616770"
            className="inline-block font-heading text-white text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (484) 261-6770
          </a>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-white/90 text-hopkins-accent font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Book a Consult
            </button>

            <p className="font-body text-white text-base">
              Speak directly with a dedicated family law attorney who knows you by name, not by a file number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
