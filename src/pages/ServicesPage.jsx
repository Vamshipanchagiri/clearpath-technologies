import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Globe, Cloud, Lightbulb, Settings } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions designed to meet specific business requirements, built with modern technologies and development practices.',
      icon: Code,
      link: '/software-development'
    },
    {
      title: 'Web & Application Development',
      description: 'Web applications and mobile solutions that deliver functionality across platforms, with focus on user experience and performance.',
      icon: Globe,
      link: '/web-application'
    },
    {
      title: 'Cloud & Infrastructure Support',
      description: 'Cloud infrastructure setup, migration, and ongoing management to ensure reliable operation and scalability of your systems.',
      icon: Cloud,
      link: '/cloud-infrastructure'
    },
    {
      title: 'IT Consulting & Technology Advisory',
      description: 'Strategic technology guidance to help organizations make informed decisions about software architecture, tools, and implementation approaches.',
      icon: Lightbulb,
      link: '/it-consulting'
    },
    {
      title: 'Maintenance & Support Services',
      description: 'Ongoing maintenance, updates, and technical support to keep your systems running smoothly and address issues promptly.',
      icon: Settings,
      link: '/maintenance-support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Clearpath Technologies</title>
        <meta name="description" content="Clearpath Technologies provides software development, web applications, cloud infrastructure, IT consulting, and maintenance support services for enterprise organizations." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We provide technology services across the full project lifecycle, 
                from initial planning through deployment and ongoing support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={service.link}
                      className="block h-full p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all duration-200"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <Icon className="text-blue-600" size={28} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;