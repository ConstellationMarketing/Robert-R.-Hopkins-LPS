import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-hopkins-dark text-3xl md:text-4xl font-normal text-center mb-12">
          About The Law Offices of Robert R. Hopkins, LLC
        </h2>

        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-6 text-center max-w-3xl">
            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              The Law Offices of Robert R. Hopkins, LLC is a Media, PA-based law firm dedicated to representing individuals, not corporations. We understand that people facing difficult decisions relating to their family need more than just legal advice—they need a steadfast advocate.
            </p>

            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              Our firm was built on a simple philosophy: clients are not numbers. You will not be shuffled from team to team or assigned to an intake coordinator. When you work with us, you will always know the lawyer representing you, and your lawyer will always know the unique details of your case.
            </p>

            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              We leverage modern technology to keep your case organized and ensure you are regularly updated as your matter moves through the stages of development. We will offer you our clear, honest advice so that you are empowered to make the best decisions on how to proceed.
            </p>

            <p className="font-body text-hopkins-dark text-base leading-relaxed">
              Located in Media, Pennsylvania, we proudly serve clients throughout Delaware County. Whether you are navigating a complex divorce or a sensitive custody matter, we are ready to help you protect your future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
