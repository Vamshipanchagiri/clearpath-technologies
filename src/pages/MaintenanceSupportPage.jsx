import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const MaintenanceSupportPage = () => {
  return (
    <>
      <Helmet>
        <title>Maintenance & Support Services - Clearpath Technologies</title>
        <meta name="description" content="Ongoing technical support, system maintenance, and performance monitoring to ensure operational continuity." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Maintenance & Support Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We provide ongoing technical support and system maintenance to ensure reliable operation of business applications and infrastructure. Our support services include monitoring, issue resolution, updates, and performance optimization.
            </p>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee"
              alt="IT support infrastructure"
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
                Our maintenance and support services cover application support, infrastructure monitoring, issue resolution, and regular system updates. We provide structured support processes with defined response times and escalation procedures.
              </p>
              <p className="mb-4">
                We handle bug fixes, security patches, performance optimization, and minor enhancements to keep systems operating efficiently. Our services include proactive monitoring to identify and address issues before they impact operations.
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
                  Application Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing support for business applications including issue resolution, bug fixes, and assistance with application usage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  System Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous monitoring of systems and infrastructure to detect performance issues, security threats, and potential failures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Security Updates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular application of security patches and updates to protect systems from vulnerabilities and security threats.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analysis and optimization of system performance including database tuning, code optimization, and resource management.
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
                  Operational Continuity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Minimized downtime through proactive monitoring and rapid issue resolution to maintain business operations.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Predictable Costs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fixed monthly support costs providing budget predictability compared to ad-hoc technical support arrangements.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  System Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular maintenance and updates improving system stability and reducing the likelihood of unexpected failures.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Access to Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Technical expertise available when needed without maintaining full-time specialized staff for all technology areas.
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
                  Support Structure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Defined support levels with clear response times, escalation procedures, and communication protocols.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Proactive Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous monitoring of systems with automated alerts to identify and address issues before they impact users.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Issue Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Structured issue tracking and resolution process with status updates and documentation of all support activities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Scheduled Maintenance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular maintenance windows for updates, patches, and optimization activities with advance notification and planning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Performance Reporting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular reports on system performance, support activities, and recommendations for improvements or optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Ensure Reliable System Operations
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your maintenance and support requirements.
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

export default MaintenanceSupportPage;