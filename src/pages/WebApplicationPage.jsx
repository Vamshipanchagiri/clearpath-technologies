import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WebApplicationPage = () => {
  return (
    <>
      <Helmet>
        <title>Web & Application Development - Clearpath Technologies</title>
        <meta name="description" content="Scalable web applications and mobile solutions built with modern frameworks to support business operations and customer engagement." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Web & Application Development
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We develop web applications and mobile solutions that support business operations and customer engagement. Our development approach focuses on responsive design, performance optimization, and secure implementation using modern frameworks.
            </p>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee"
              alt="Technology infrastructure"
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
                Our web and application development services include responsive web applications, progressive web apps, and native mobile applications. We work with established frameworks and platforms to build solutions that function reliably across devices and browsers.
              </p>
              <p className="mb-4">
                We prioritize user experience, accessibility standards, and performance optimization throughout the development process. Our applications are built with security considerations, including data protection, authentication, and secure communications.
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
                  Customer Portals
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Self-service portals for customers to access information, manage accounts, submit requests, and track service delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Internal Business Applications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Web-based applications for internal teams to manage operations, collaboration, reporting, and workflow management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  E-commerce Platforms
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Online sales platforms with product catalogs, shopping carts, payment processing, and order management functionality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Mobile Workforce Applications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mobile applications for field teams to access data, update records, and communicate while working remotely.
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
                  Cross-Platform Accessibility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Applications that function consistently across desktop, tablet, and mobile devices, enabling access from any location.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Improved User Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intuitive interfaces designed for ease of use, reducing training requirements and improving user adoption rates.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Real-time Data Access
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Live data synchronization enabling users to access current information and make timely decisions.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Reduced Infrastructure Costs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cloud-based deployment minimizing on-premises infrastructure requirements and associated maintenance costs.
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
                  User Experience Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Interface design focused on usability, accessibility, and intuitive navigation based on user research and best practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Responsive Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implementation using responsive design techniques to ensure consistent functionality across different screen sizes and devices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Code optimization, caching strategies, and efficient data handling to ensure fast load times and smooth operation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Security Implementation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Security measures including authentication, authorization, data encryption, and protection against common vulnerabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Cross-Browser Testing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive testing across browsers, devices, and operating systems to verify consistent functionality and appearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your web or mobile application requirements.
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

export default WebApplicationPage;