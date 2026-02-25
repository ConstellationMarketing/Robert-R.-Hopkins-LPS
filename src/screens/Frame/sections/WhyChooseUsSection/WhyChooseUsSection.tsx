import React from "react";
import { Scale, Users, Briefcase, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      text: "No two marriages are the same, and no two divorces should be treated the same. We pride ourselves on being truly empathetic with our clients. We take the time to listen to your specific goals before formulating a strategy—whether that requires a swift, amicable negotiation for an uncontested divorce or aggressive protection of your assets in a contested court battle."
    },
    {
      icon: Users,
      text: "You won't see us on billboards, and you won't see us on TV. Where you will see us is in person, standing by your side in Delaware County courts, providing you with the best advice as an individual."
    },
    {
      icon: Briefcase,
      text: "We believe in full transparency. Family law matters are handled on an hourly basis, and we fully disclose all retainer requirements and fee structures at our initial consultation so there are no surprises."
    },
    {
      icon: Award,
      text: "Our ultimate goal is to achieve a resolution that permits you to step into your new journey with a clear head."
    }
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-hopkins-dark text-3xl md:text-4xl font-normal text-center mb-3">
          Why Choose Us for Your Divorce Matter
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          A small firm dedicated to providing individual representation with professional results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-hopkins-accent p-6 rounded-lg flex flex-col items-center text-center"
              >
                <IconComponent className="w-12 h-12 text-white mb-4" />
                <p className="font-body text-white text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
