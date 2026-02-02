import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Cloud, Server, Shield, TrendingDown, RefreshCcw, Lock } from 'lucide-react';
import ServiceHero from '@/components/ui/ServiceHero';
import TechStack from '@/components/ui/TechStack';
import SectionDivider from '@/components/ui/SectionDivider';
import { Link } from 'react-router-dom';

const CloudInfrastructurePage = () => {
  const techStack = {
    Platforms: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
    IaC: ['Terraform', 'CloudFormation', 'Ansible'],
    Monitoring: ['Prometheus', 'Grafana', 'CloudWatch'],
    Security: ['IAM', 'WAF', 'VPC', 'SSL/TLS']
  };

  const benefits = [
    { icon: RefreshCcw, title: 'High Availability', description: 'Redundant systems ensuring your business stays online 24/7.' },
    { icon: Shield, title: 'Enhanced Security', description: 'Advanced threat protection and compliance management.' },
    { icon: TrendingDown, title: 'Cost Efficiency', description: 'Pay only for what you use with optimized resource allocation.' },
    { icon: Server, title: 'Scalability', description: 'Instantly scale resources up or down based on demand.' }
  ];

  const methodology = [
    { title: 'Assess', desc: 'Infrastructure audit & planning' },
    { title: 'Migrate', desc: 'Secure data transfer & setup' },
    { title: 'Optimize', desc: 'Performance tuning & cost control' },
    { title: 'Secure', desc: 'Compliance & access controls' },
    { title: 'Manage', desc: '24/7 Monitoring & support' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Support - Clearpath Technologies</title>
        <meta name="description" content="Secure, scalable cloud infrastructure services. Migration, management, and optimization." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <ServiceHero 
          title="Cloud & Infrastructure Support" 
          description="Reliable cloud solutions designed for high availability, security, and cost-efficiency."
          patternType="cloud"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
            >
              Foundation for Growth
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
            >
              Modern businesses rely on the cloud. We help you navigate the complexity of 
              cloud infrastructure, ensuring your systems are resilient, secure, and optimized 
              for performance and cost.
            </motion.p>
          </div>
        </div>

        <SectionDivider type="wave" className="text-slate-50" />

        {/* Use Cases */}
        <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Cloud Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Cloud, title: 'Cloud Migration', desc: 'Seamless transition of legacy systems to the cloud with minimal downtime.' },
                { icon: Server, title: 'Infrastructure Management', desc: '24/7 monitoring and management of your cloud resources.' },
                { icon: TrendingDown, title: 'Cost Optimization', desc: 'Analysis and adjustment of resources to reduce cloud spend.' },
                { icon: Lock, title: 'Disaster Recovery', desc: 'Robust backup and recovery strategies to protect business continuity.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex items-start"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 text-blue-600">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider type="slope" className="text-slate-50" flip />

        {/* Benefits */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Infrastructure Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white shadow-md mr-5 flex-shrink-0">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStack technologies={techStack} />
        </div>

        <div className="bg-slate-50 py-24 mt-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Cloud Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
              {methodology.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md border border-slate-100 md:bg-transparent md:shadow-none md:border-none"
                >
                   <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold mb-4 shadow-lg z-10">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-navy-900 to-blue-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Secure Your Infrastructure</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg relative z-10">
              Let our experts optimize your cloud environment for peak performance.
            </p>
            <Link 
              to="/" 
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 font-bold shadow-lg relative z-10 hover:-translate-y-1"
            >
              Consult an Expert
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;