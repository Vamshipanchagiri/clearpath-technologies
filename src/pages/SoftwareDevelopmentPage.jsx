import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Software Development - Clearpath Technologies</title>
        <meta name="description" content="Custom enterprise software development services with proven methodologies, quality assurance, and structured delivery processes." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Software Development
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We develop custom enterprise software solutions designed to address specific business requirements. Our development process emphasizes requirements analysis, structured design, and quality assurance to deliver reliable, maintainable applications.
            </p>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee"
              alt="Data center infrastructure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Service Explanation */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
              What We Deliver
            </h2>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our software development services cover the full lifecycle from requirements gathering to deployment and ongoing maintenance. We work with organizations to build custom applications that integrate with existing systems and support business processes.
              </p>
              <p className="mb-4">
                We use established development methodologies, version control, and testing frameworks to ensure code quality and maintainability. Our approach includes thorough documentation, code reviews, and quality assurance at each stage.
              </p>
            </div>
          </div>
        </section>

        {/* Business Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Business Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Enterprise Resource Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom ERP modules and integrations to manage business operations, inventory, financials, and reporting across departments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Business Process Automation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated workflows and process management systems to improve operational efficiency and reduce manual tasks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Data Management Systems
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Database applications for data collection, processing, analysis, and reporting to support business intelligence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Legacy System Modernization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Migration of legacy applications to modern platforms with improved performance, security, and maintainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Enterprise Benefits
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Tailored to Business Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom solutions designed around your specific processes, eliminating the need for workarounds or compromises inherent in off-the-shelf software.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Integration Capability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Applications built to integrate seamlessly with existing enterprise systems, databases, and third-party services.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Scalability and Performance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Architecture designed to handle growing data volumes and user loads while maintaining responsive performance.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Long-term Maintainability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean code structure, comprehensive documentation, and standard practices to support ongoing maintenance and enhancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Approach */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Our Delivery Approach
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Requirements Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed analysis of business requirements, user needs, and technical constraints to establish clear project scope and objectives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Architecture and Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  System architecture planning, database design, and interface specifications to establish the technical foundation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Iterative Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Development in planned iterations with regular reviews and adjustments based on testing and stakeholder feedback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive testing including unit tests, integration tests, and user acceptance testing to verify functionality and reliability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Deployment and Handover
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Controlled deployment process with documentation, training materials, and knowledge transfer to ensure smooth transition to operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Discuss Your Software Development Needs
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to explore how custom software development can support your business objectives.
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

export default SoftwareDevelopmentPage;