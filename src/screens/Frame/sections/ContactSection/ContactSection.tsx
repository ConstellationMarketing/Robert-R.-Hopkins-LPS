import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="w-full bg-hopkins-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-hopkins-dark text-3xl md:text-4xl font-normal mb-4">
            Connect With Us
          </h2>
          <p className="font-body text-hopkins-dark text-lg">
            You do not have to go through this alone. We are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-hopkins-dark text-2xl font-normal mb-6">
              Request Your Consultation
            </h3>
            <form
              id="contact-form"
              name="contact-form"
              action="https://usebasin.com/f/700c92dca26f"
              method="POST"
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-hopkins-accent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-hopkins-accent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-hopkins-accent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message *"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-hopkins-accent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-hopkins-accent hover:bg-[#0059b8] text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-hopkins-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-hopkins-dark text-2xl font-normal mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-hopkins-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:hopkins@rhopkins-law.com"
                      className="font-body text-hopkins-dark font-medium hover:text-hopkins-accent transition-colors"
                    >
                      hopkins@rhopkins-law.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-hopkins-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:4842616770"
                      className="font-body text-hopkins-dark font-medium hover:text-hopkins-accent transition-colors"
                    >
                      (484) 261-6770
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-hopkins-dark text-2xl font-normal mb-6">
                Office Location
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-hopkins-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-hopkins-dark font-medium mb-1">Delaware County Location:</p>
                    <p className="font-body text-hopkins-dark">24 Veterans Square, V165</p>
                    <p className="font-body text-hopkins-dark">Media, PA 19063</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=24+Veterans+Square,+Media,+PA+19063&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Law Offices of Robert R. Hopkins, LLC — Media, PA"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
