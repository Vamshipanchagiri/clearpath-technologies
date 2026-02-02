import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WhyClearpathPage = () => {
  return (
    <>
      <Helmet>
        <title>Why Clearpath - Clearpath Technologies</title>
        <meta name="description" content="Learn about Clearpath Technologies' approach to software development, cloud services, and IT consulting with structured processes and clear accountability." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Why Clearpath Technologies
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We focus on delivering reliable technology solutions through structured processes, clear communication, and accountability. Our approach emphasizes quality-focused delivery and practical results.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1690192079529-9fd57e5b24d0"
              alt="Corporate meeting and collaboration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                  Structured Processes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We follow established development methodologies and project management practices. Our processes include requirements documentation, design reviews, code standards, testing protocols, and deployment procedures.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This structured approach helps us maintain consistency, manage complexity, and deliver projects that meet technical and business requirements. We adapt our processes to project needs while maintaining quality standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                  Clear Communication
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We maintain regular communication throughout projects with status updates, progress reports, and issue notifications. Our teams provide clear explanations of technical decisions and implementation approaches.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We document requirements, designs, and implementation details to ensure shared understanding. Our communication includes both written documentation and regular meetings with stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12 text-center">
              Key Differentiators
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Accountability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We take ownership of deliverables and timelines. When issues arise, we work to resolve them and communicate impact to stakeholders. Our teams are accountable for code quality, testing, and meeting agreed specifications.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Quality-Focused Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality is built into our development process through code reviews, testing at multiple levels, and adherence to coding standards. We prioritize building maintainable, reliable solutions over rapid but unstable implementations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Practical Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on solutions that work within real-world constraints including budgets, timelines, and technical limitations. Our recommendations consider implementation complexity, ongoing maintenance requirements, and business impact.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Technical Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team has experience across various technology platforms, programming languages, and infrastructure environments. We stay current with established technologies and best practices while avoiding unproven approaches in production systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
              Our Commitment
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                We commit to delivering technology solutions that meet functional requirements, maintain quality standards, and provide value to your organization. Our focus is on building stable, maintainable systems that support business operations over the long term.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in transparent communication about project status, risks, and technical challenges. When problems arise, we work to understand root causes and implement solutions that address underlying issues.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to be a reliable technology partner that delivers consistent results through professional project execution and ongoing support. We measure success by the operational reliability and business value of the solutions we deliver.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Work With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can support your technology initiatives.
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

export default WhyClearpathPage;