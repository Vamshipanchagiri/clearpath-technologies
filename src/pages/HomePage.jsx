import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Clearpath Technologies - Professional IT Solutions & Consulting</title>
        <meta name="description" content="Clearpath Technologies provides enterprise software development, cloud infrastructure, and IT consulting services with structured processes and clear accountability." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                  Reliable Technology Solutions for Enterprise Growth
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Clearpath Technologies delivers structured software development, cloud infrastructure, and IT consulting services. We focus on clear communication, accountability, and quality-driven delivery to help organizations build stable, scalable technology solutions.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded hover:bg-[#2d4a6f] transition-colors duration-200"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1684563983781-ce52a026f139"
                  alt="Corporate office environment"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                Our Service Offerings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive IT services designed to support enterprise operations and digital transformation initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Software Development',
                  description: 'Custom enterprise applications built with proven methodologies and quality standards.',
                },
                {
                  title: 'Web & Application Development',
                  description: 'Scalable web solutions and mobile applications for business operations.',
                },
                {
                  title: 'Cloud & Infrastructure',
                  description: 'Cloud migration, management, and infrastructure optimization services.',
                },
                {
                  title: 'IT Consulting',
                  description: 'Strategic technology advisory to align IT initiatives with business objectives.',
                },
                {
                  title: 'Maintenance & Support',
                  description: 'Ongoing technical support and system maintenance for operational continuity.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center text-[#4a7ba7] font-medium hover:text-[#1e3a5f] transition-colors duration-200"
              >
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn how we can support your technology initiatives with structured processes and reliable delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded hover:bg-[#2d4a6f] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;