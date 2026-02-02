import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ITConsultingPage = () => {
  return (
    <>
      <Helmet>
        <title>IT Consulting & Technology Advisory - Clearpath Technologies</title>
        <meta name="description" content="Strategic technology consulting to align IT initiatives with business objectives and support informed decision-making." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              IT Consulting & Technology Advisory
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We provide strategic technology consulting to help organizations align IT initiatives with business objectives. Our advisory services support informed decision-making around technology investments, digital transformation, and IT strategy.
            </p>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee"
              alt="Technology consulting"
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
                Our IT consulting services provide objective analysis and recommendations on technology decisions, system selection, and strategic planning. We work with organizations to evaluate options, assess risks, and develop practical implementation roadmaps.
              </p>
              <p className="mb-4">
                We offer expertise in technology assessment, vendor evaluation, architecture review, and digital transformation planning. Our consultants bring experience across industries and technology domains to support your strategic initiatives.
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
                  IT Strategy Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Creating IT roadmaps aligned with business goals, identifying technology initiatives, and establishing implementation priorities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Technology Selection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evaluating software platforms, infrastructure options, and vendor solutions to support informed procurement decisions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Digital Transformation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Planning and guidance for digital initiatives including process automation, data analytics, and technology modernization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Architecture Review
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Assessment of system architecture, integration approaches, and technical designs to identify improvement opportunities.
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
                  Objective Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Independent assessment of technology options and strategies without vendor bias to support informed decision-making.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Risk Mitigation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Identification of technical and implementation risks early in planning, with recommended mitigation strategies.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Cost Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analysis of total cost of ownership and recommendations for cost-effective technology investments.
                </p>
              </div>
              <div className="border-l-4 border-[#4a7ba7] pl-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Strategic Alignment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensuring technology initiatives support business objectives and contribute to organizational goals.
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
                  Discovery and Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding current state, business objectives, constraints, and requirements through stakeholder interviews and documentation review.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Options Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evaluation of potential solutions, technologies, and approaches against established criteria and business requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Recommendations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Documented recommendations with rationale, risk analysis, and estimated costs to support decision-making.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Implementation Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Development of detailed implementation roadmaps, resource requirements, and project plans for approved initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                  Advisory Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing consultation during implementation phases to address issues and ensure alignment with strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Discuss Your Technology Strategy
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to explore how our consulting services can support your strategic IT initiatives.
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

export default ITConsultingPage;