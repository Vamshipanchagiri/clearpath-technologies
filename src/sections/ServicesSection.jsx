import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Cloud, Lightbulb, Settings, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom software solutions designed to meet specific business requirements.',
    link: '/software-development',
    icon: Code
  },
  {
    id: 'web',
    title: 'Web & Applications',
    description: 'High-performance web and mobile applications ensuring exceptional user experiences.',
    link: '/web-application',
    icon: Globe
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Secure and scalable cloud solutions including migration and ongoing management.',
    link: '/cloud-infrastructure',
    icon: Cloud
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic technology advisory to help you make informed decisions.',
    link: '/it-consulting',
    icon: Lightbulb
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Proactive system maintenance and responsive technical support.',
    link: '/maintenance-support',
    icon: Settings
  }
];

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive technology solutions designed to drive efficiency and growth for your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-slate-50 rounded-xl p-8 border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;