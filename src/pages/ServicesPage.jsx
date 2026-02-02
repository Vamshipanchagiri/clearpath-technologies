import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom enterprise software solutions designed to meet specific business requirements with proven development methodologies and quality assurance processes.',
      path: '/software-development',
    },
    {
      title: 'Web & Application Development',
      description: 'Scalable web applications and mobile solutions built with modern frameworks to support business operations and customer engagement.',
      path: '/web-application',
    },
    {
      title: 'Cloud & Infrastructure Support',
      description: 'Cloud migration, infrastructure management, and optimization services to ensure reliable, scalable technology infrastructure.',
      path: '/cloud-infrastructure',
    },
    {
      title: 'IT Consulting & Technology Advisory',
      description: 'Strategic technology consulting to align IT initiatives with business objectives and support informed decision-making.',
      path: '/it-consulting',
    },
    {
      title: 'Maintenance & Support Services',
      description: 'Ongoing technical support, system maintenance, and performance monitoring to ensure operational continuity.',
      path: '/maintenance-support',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Clearpath Technologies</title>
        <meta name="description" content="Comprehensive IT services including software development, cloud infrastructure, IT consulting, and ongoing support for enterprise organizations." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We provide comprehensive IT services designed to support enterprise operations, digital transformation, and technology modernization initiatives. Our structured approach ensures reliable delivery and measurable results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
                >
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-[#4a7ba7] font-medium hover:text-[#1e3a5f] transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your requirements and explore how we can support your technology objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded hover:bg-[#2d4a6f] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;