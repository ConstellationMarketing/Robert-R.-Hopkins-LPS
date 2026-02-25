import React from "react";
import { CheckCircle } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-hopkins-light flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="font-heading text-hopkins-dark text-4xl md:text-5xl font-normal mb-6">
            Your Request Has Been Received
          </h1>

          <p className="font-body text-hopkins-dark text-lg mb-8">
            Attorney Robert Hopkins or a member of our team will contact you shortly.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
            <p className="font-body text-hopkins-dark font-semibold mb-4">Next Steps:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-hopkins-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="font-body text-gray-700 text-base">Watch for a call or email reply from our office</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-hopkins-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="font-body text-gray-700 text-base">Gather any relevant family or financial documents</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-hopkins-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="font-body text-gray-700 text-base">We will discuss your goals and outline the best path forward</span>
              </li>
            </ul>
          </div>

          <div className="bg-hopkins-accent/10 border border-hopkins-accent/30 rounded-lg p-6 mb-8">
            <p className="font-body text-hopkins-dark font-semibold mb-2">
              Need Immediate Assistance?
            </p>
            <a
              href="tel:4842616770"
              className="font-heading text-hopkins-accent text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              (484) 261-6770
            </a>
          </div>

          <a
            href="/"
            className="inline-block bg-hopkins-accent hover:bg-[#0059b8] text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-hopkins-accent transition-all duration-150 uppercase tracking-[2px]"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};
