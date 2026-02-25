import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-hopkins-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Meet Attorney Robert R. Hopkins
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px] bg-hopkins-dark/10 rounded-lg flex items-center justify-center">
            <span className="font-body text-hopkins-dark/40 text-sm">Attorney photo coming soon</span>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              Robert ("Rob") R. Hopkins is the Managing Partner of The Law Offices of Robert R. Hopkins, LLC. A graduate of the Thomas R. Kline School of Law at Drexel University, Rob has dedicated his career to guiding individuals through some of the most challenging moments of their lives.
            </p>

            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              Before founding his own firm to help individuals in family law and personal injury matters, Rob spent twelve years representing the interests of insurance companies. This background provided him with invaluable "inside knowledge" of how large entities and opposing counsel evaluate cases, allowing him to build stronger, more strategic approaches for his clients today.
            </p>

            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              Rob brings a unique level of calm and compassion to his legal practice, rooted in his background as a former Paramedic and Firefighter. He is accustomed to helping people navigate high-stress emergencies with a steady hand and clear direction.
            </p>

            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              Today, Rob uses his diverse experience to assist people coming face-to-face with the difficult decisions concerning their marriages and their children, ensuring they are never taken advantage of in the legal system.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-hopkins-accent hover:bg-[#0059b8] text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-hopkins-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
