import React from "react";
import { CheckCircle } from "lucide-react";

export const WhyUsSection = (): JSX.Element => {
  const highlights = [
    "Direct access to your managing attorney",
    "Compassionate, judgment-free counsel",
    "12+ years of complex litigation and financial evaluation experience",
    "Focused strategies for high-asset and contested marital estates",
    "Transparent fee structures and honest guidance",
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-hopkins-dark text-3xl md:text-4xl font-normal text-center mb-4">
          Why Choose Us for Your Divorce Matter
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          A small firm dedicated to providing individual representation with professional results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-hopkins-light rounded-lg p-6 flex flex-col items-center text-center border border-gray-200"
            >
              <CheckCircle className="w-10 h-10 text-hopkins-accent mb-3" />
              <p className="font-body text-hopkins-dark text-sm font-medium leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
