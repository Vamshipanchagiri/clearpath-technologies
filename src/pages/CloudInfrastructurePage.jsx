import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CloudInfrastructurePage = () => {
  return (
    <>
      <Helmet>
        <title>Cloud & Infrastructure Support - Clearpath Technologies</title>
        <meta name="description" content="Cloud migration, infrastructure management, and optimization services to ensure reliable, scalable technology infrastructure." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Cloud & Infrastructure Support
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We provide cloud migration, infrastructure management, and optimization services to help organizations build reliable, scalable technology infrastructure. Our approach emphasizes stability, security, and cost-effectiveness.
            </p>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee"
              alt="Cloud data center infrastructure"
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
                Our cloud and infrastructure services include cloud platform assessment, migration planning, implementation, and ongoing management. We work with major cloud providers to design infrastructure that meets performance, security, and compliance requirements.
              </p>
              <p className="mb-4">
                We manage the technical aspects of cloud infrastructure including compute resources, storage, networking, security configurations, and backup systems. Our services include monitoring, performance optimization, and capacity planning to ensure reliable operations.
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
                  Cloud Migration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Moving applications and data from on-premises infrastructure to cloud platforms to improve scalability and reduce capital costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Infrastructure Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analysis and optimization of cloud resources to improve performance and reduce operational costs through right-sizing and efficient resource allocation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Disaster Recovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implementation of backup and recovery systems to protect data and ensure business continuity in case of system failures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Hybrid Cloud Setup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integration of cloud services with existing on-premises systems to create flexible, cost-effective infrastructure solutions.
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
                  Scalability and Flexibility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ability to adjust computing resources based on demand, avoiding over-provisioning and reducing infrastructure costs.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Reduced Capital Expenditure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shift from capital-intensive hardware purchases to operational expenses with pay-as-you-go cloud services.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Improved Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built-in redundancy and automated failover mechanisms provided by cloud platforms to maintain service availability.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enterprise-grade security features including encryption, access controls, and compliance certifications.
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
                  Infrastructure Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analysis of current infrastructure, workloads, and requirements to develop appropriate cloud strategy and migration plan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Architecture Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Design of cloud infrastructure including network architecture, security configurations, and resource allocation based on requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Migration Execution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Phased migration approach with testing at each stage to minimize risk and ensure continuity of business operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Monitoring and Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implementation of monitoring tools, alert systems, and management processes to maintain infrastructure performance and availability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Optimization and Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing optimization of resources, cost management, and technical support to ensure efficient cloud operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Plan Your Cloud Infrastructure
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your cloud migration or infrastructure optimization needs.
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

export default CloudInfrastructurePage;