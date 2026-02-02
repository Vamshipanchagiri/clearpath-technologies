import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, Shield, Target, TrendingUp } from 'lucide-react';

const WhyUsPage = () => {
  const differentiators = [
    {
      icon: ClipboardCheck,
      title: 'Structured Processes',
      description: 'We follow documented development methodologies with clear phases, deliverables, and checkpoints. Each project includes requirement documentation, design reviews, and regular progress updates to ensure alignment with objectives.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Regular status meetings, written progress reports, and accessible project documentation provide visibility into project status. We maintain open channels for questions and issues, ensuring prompt responses to client inquiries.'
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'We establish clear ownership for deliverables, timelines, and outcomes. When issues arise, we communicate them directly with proposed solutions, rather than obscuring problems. Our commitment includes taking responsibility for results.'
    },
    {
      icon: Target,
      title: 'Quality-Focused Delivery',
      description: 'Code reviews, testing protocols, and quality assurance processes are standard components of our delivery. We prioritize producing maintainable, documented solutions over rapid but incomplete implementations.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Partnership Approach',
      description: 'Our goal is building relationships that extend beyond single projects. We invest time in understanding your business context, technology landscape, and organizational constraints to provide relevant recommendations and support.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Clearpath Technologies - Our Approach to Technology Partnerships</title>
        <meta name="description" content="Clearpath Technologies differentiates through structured processes, clear communication, accountability, quality-focused delivery, and long-term partnership approach." />
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
                Why Clearpath Technologies
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We differentiate through consistent execution, transparent communication, 
                and a commitment to delivering reliable technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-blue-100 rounded-lg">
                        <Icon className="text-blue-600" size={32} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Organizations choose to work with Clearpath Technologies when they value 
                transparency, structured delivery, and accountability in their technology partnerships. 
                We recognize that successful projects require not just technical capability, 
                but also clear communication, realistic planning, and follow-through on commitments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyUsPage;