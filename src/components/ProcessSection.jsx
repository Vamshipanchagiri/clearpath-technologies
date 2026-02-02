import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  { id: '01', title: 'Discovery & Assessment', desc: 'Understanding requirements and analyzing current systems.' },
  { id: '02', title: 'Planning & Strategy', desc: 'Developing the roadmap, timeline, and resource allocation.' },
  { id: '03', title: 'Design & Architecture', desc: 'Creating system architecture, UI/UX designs, and prototypes.' },
  { id: '04', title: 'Development & Implementation', desc: 'Writing clean, efficient code with regular progress updates.' },
  { id: '05', title: 'Testing & QA', desc: 'Rigorous testing to ensure functionality, security, and stability.' },
  { id: '06', title: 'Deployment & Launch', desc: 'Controlled release to production with zero-downtime strategies.' },
  { id: '07', title: 'Support & Optimization', desc: 'Ongoing maintenance, monitoring, and performance tuning.' },
];

const ProcessSection = () => {
  return (
    <section id="our-process" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured, end-to-end workflow designed to deliver stable and scalable results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 lg:w-1/2 lg:px-12 mb-6 lg:mb-0 text-center lg:text-left">
                  <div className={`${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] text-white font-bold text-sm shadow-md ring-4 ring-white">
                  {phase.id}
                </div>

                <div className="flex-1 lg:w-1/2 lg:px-12 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;