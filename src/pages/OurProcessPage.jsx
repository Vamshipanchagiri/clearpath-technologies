import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Layout, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const OurProcessPage = () => {
  const processSteps = [
    {
      icon: FileText,
      title: 'Requirement Understanding',
      description: 'We begin by documenting business objectives, functional requirements, and technical constraints. This phase includes stakeholder interviews, current system review, and creation of detailed specification documents that serve as the foundation for the project.'
    },
    {
      icon: Layout,
      title: 'Planning & Architecture',
      description: 'Technical architecture, technology stack, and project timeline are established. We create implementation plans with milestones, resource allocation, and risk identification. This phase results in architectural diagrams and detailed project schedules.'
    },
    {
      icon: Code,
      title: 'Design',
      description: 'User interface designs, database schemas, and API specifications are developed. We create mockups and prototypes for client review, incorporating feedback before proceeding to development. Design documentation guides the development phase.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Code is written following established standards and best practices. We use version control, conduct regular code reviews, and provide progress demonstrations. Development proceeds in iterations with regular client checkpoints.'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Comprehensive testing across functionality, performance, and security is conducted. We execute test cases, document issues, and verify fixes. Testing includes both automated checks and manual verification to ensure quality standards.'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'The solution is deployed to production environments with appropriate monitoring and backup procedures. We provide deployment documentation, conduct user training, and ensure smooth transition to live operation.'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Post-deployment support includes monitoring, maintenance, and addressing issues that arise. We provide regular system updates, performance reviews, and are available for enhancement requests and technical questions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Process - Project Lifecycle at Clearpath Technologies</title>
        <meta name="description" content="Clearpath Technologies follows a structured project lifecycle from requirement understanding through deployment and ongoing support, with clear phases and deliverables." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Our Process
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We follow a structured project lifecycle that provides visibility, accountability, 
                and quality throughout delivery. Each phase has clear objectives and deliverables.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className="space-y-12">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex flex-col md:flex-row gap-6"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="text-white" size={28} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-slate-50 rounded-lg p-6 border border-slate-200">
                        <div className="flex items-center mb-3">
                          <span className="text-sm font-bold text-blue-600 mr-3">
                            STEP {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold text-navy-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Benefits */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Process Benefits
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                This structured approach ensures that projects proceed with clear direction, 
                regular communication, and accountability at each stage. Clients have visibility 
                into progress and can provide input throughout the lifecycle.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                While we adapt the process to fit specific project requirements, the core 
                principles of documentation, testing, and client communication remain consistent 
                across all engagements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurProcessPage;