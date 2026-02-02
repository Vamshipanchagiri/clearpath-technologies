import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Layout, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Requirement Analysis',
    description: 'We document objectives, functional requirements, and constraints.'
  },
  {
    icon: Layout,
    title: 'Architecture & Planning',
    description: 'We design the technical foundation and roadmap.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Iterative coding with regular demos and feedback loops.'
  },
  {
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Comprehensive testing for bugs, performance, and security.'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Smooth rollout to production environments.'
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Monitoring, maintenance, and continuous improvement.'
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Process</h2>
          <p className="text-lg text-slate-600">
            A structured lifecycle ensuring visibility and quality at every stage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                    {step.description}
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

export default ProcessSection;