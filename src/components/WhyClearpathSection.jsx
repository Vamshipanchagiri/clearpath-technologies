import React from 'react';
import { ShieldCheck, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Reliability & Accountability',
    description: 'We take full ownership of our deliverables. Our structured approach ensures consistent quality and dependable timelines for every project.',
  },
  {
    icon: <Users size={28} />,
    title: 'Customer-Centric Focus',
    description: 'Your business goals drive our technical decisions. We maintain clear, transparent communication throughout the entire engagement lifecycle.',
  },
  {
    icon: <Target size={28} />,
    title: 'Proven Expertise',
    description: 'Our team brings deep technical knowledge across diverse domains, ensuring you get practical, scalable solutions that work in the real world.',
  },
  {
    icon: <Award size={28} />,
    title: 'Professional Standards',
    description: 'We adhere to rigorous industry standards in coding, security, and project management to deliver enterprise-grade software.',
  },
];

const WhyClearpathSection = () => {
  return (
    <section id="why-clearpath" className="py-24 bg-[#1e3a5f]/5 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why Clearpath Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We differentiate ourselves through unwavering commitment to quality and a structured, professional approach to IT delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1e3a5f] shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClearpathSection;