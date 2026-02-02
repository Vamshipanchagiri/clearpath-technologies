import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const OurProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Process - Clearpath Technologies</title>
        <meta name="description" content="Learn about our structured project workflow covering requirements, planning, design, development, testing, deployment, and ongoing support." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Our Process
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We follow a structured project workflow designed to deliver well-designed, stable, and scalable technology solutions. Our process ensures clear requirements, proper planning, thorough testing, and reliable deployment.
            </p>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our end-to-end project workflow covers all phases from initial requirements gathering through deployment and ongoing support. Each phase includes specific activities, deliverables, and review points to ensure quality and alignment with objectives.
            </p>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Requirement Understanding
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We begin by gathering detailed requirements through stakeholder interviews, documentation review, and analysis of existing systems. This phase establishes the project scope, objectives, and success criteria.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Activities include requirements workshops, documentation of functional and non-functional requirements, and validation sessions with stakeholders to ensure shared understanding of project goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Planning & Architecture
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Based on requirements, we develop project plans, technical architecture, and implementation approach. This includes timeline estimates, resource allocation, and identification of technical dependencies.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We design system architecture, database schemas, integration points, and deployment infrastructure. This phase produces technical specifications and detailed project plans.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      User interface design and user experience planning ensure intuitive, accessible applications. We create wireframes, mockups, and prototypes for stakeholder review and feedback.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Design phase includes information architecture, screen flows, and interface specifications. We ensure designs meet usability standards and align with business requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Development
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Implementation follows established coding standards and development practices. We use version control, conduct code reviews, and maintain development documentation throughout the build process.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Development proceeds in planned iterations with regular progress reviews. We build components incrementally, integrate them systematically, and maintain quality through peer reviews and automated checks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Testing
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Comprehensive testing validates functionality, performance, and reliability. Testing includes unit tests, integration tests, system tests, and user acceptance testing to verify all requirements are met.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We document test cases, track issues, and verify fixes before proceeding to deployment. Testing ensures applications function correctly under various conditions and meet quality standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      6
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Deployment
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Deployment follows a controlled process with planning, staging environment validation, and production rollout. We prepare deployment documentation, backup procedures, and rollback plans.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Post-deployment monitoring verifies system stability and performance. We provide knowledge transfer, user training materials, and operational documentation to support the transition to production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white border-l-4 border-[#4a7ba7] p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-lg">
                      7
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      After deployment, we provide ongoing support including issue resolution, performance monitoring, and regular maintenance. Support services ensure operational continuity and system reliability.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We maintain communication channels for issue reporting, provide regular system health reports, and handle updates, patches, and enhancements as needed to keep systems running effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
              How Our Process Ensures Quality
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Well-Designed Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thorough planning and architecture phases ensure solutions are properly designed before development begins, reducing rework and technical debt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Stable Implementation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive testing and quality checks at each phase ensure stable, reliable systems that function correctly in production environments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proper architectural planning and design create systems that can handle growth in users, data, and functionality without major rebuilds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Start Your Project
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your project requirements and learn how our structured process can support your technology initiatives.
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

export default OurProcessPage;