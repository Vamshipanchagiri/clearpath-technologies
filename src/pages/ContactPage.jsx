import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Clearpath Technologies</title>
        <meta name="description" content="Contact Clearpath Technologies Private Limited in Hyderabad for IT consulting, software development, and cloud infrastructure services." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Get in touch with our team to discuss your technology requirements. We are located in Hyderabad, India.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Company Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                    Company Information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-[#1e3a5f]">
                      Clearpath Technologies Private Limited
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <MapPin className="text-[#4a7ba7] mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                      Address
                    </h3>
                    <address className="text-gray-600 leading-relaxed not-italic">
                      6th Floor Tower 2<br />
                      Knowledge City Raidurg<br />
                      Hyderabad 500032<br />
                      Telangana<br />
                      India
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-[#4a7ba7] mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@clearpathtechnologies.in"
                      className="text-[#4a7ba7] hover:text-[#1e3a5f] transition-colors duration-200"
                    >
                      info@clearpathtechnologies.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Map or Additional Info */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">
                  Business Inquiries
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For project inquiries, service questions, or partnership opportunities, please contact us via email. Our team will respond to your message and schedule a discussion to understand your requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work with organizations across various industries to deliver software development, cloud infrastructure, IT consulting, and ongoing support services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                Business Hours
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM IST
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                We respond to email inquiries within one business day.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;