import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, Shield, Target } from 'lucide-react';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Structured Processes',
    description: 'We follow documented methodologies with clear phases, deliverables, and checkpoints to ensure project alignment.'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular status meetings and accessible documentation provide full visibility into project status at all times.'
  },
  {
    icon: Shield,
    title: 'Total Accountability',
    description: 'We take ownership of our deliverables. When issues arise, we communicate them directly with proposed solutions.'
  },
  {
    icon: Target,
    title: 'Quality-Focused',
    description: 'Rigorous code reviews, testing protocols, and QA processes are standard. We prioritize maintainable, long-term solutions.'
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-900 rounded-bl-full" />
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-blue-900 rounded-tr-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Why Choose Clearpath?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We differentiate ourselves through consistent execution and a partnership mindset. 
              While others may focus solely on code, we focus on the business outcome and the 
              reliability of the delivery process.
            </p>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <p className="text-navy-900 font-medium italic">
                "Our commitment is to transparency. You will always know where your project stands, 
                what challenges we are facing, and how we are solving them."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;