import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, Cloud, Briefcase, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Software Development',
    description: 'Custom enterprise software solutions designed to meet specific business requirements with proven methodologies.',
    link: '/services/software-development'
  },
  {
    icon: <Globe size={32} />,
    title: 'Web & Application Development',
    description: 'Scalable web applications and mobile solutions built with modern frameworks to support business operations.',
    link: '/services/web-application-development'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud & Infrastructure Support',
    description: 'Cloud migration, infrastructure management, and optimization services for reliable, scalable technology.',
    link: '/services/cloud-infrastructure-support'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'IT Consulting & Technology Advisory',
    description: 'Strategic technology consulting to align IT initiatives with business objectives and support decision-making.',
    link: '/services/it-consulting'
  },
  {
    icon: <Wrench size={32} />,
    title: 'Maintenance & Support Services',
    description: 'Ongoing technical support, system maintenance, and performance monitoring to ensure operational continuity.',
    link: '/services/maintenance-support'
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology services tailored for the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="block h-full p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#4a7ba7] mb-6 group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-[#4a7ba7] font-medium text-sm group-hover:text-[#1e3a5f] transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#1e3a5f] group-hover:w-full transition-all duration-300"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;