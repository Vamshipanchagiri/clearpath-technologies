import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Settings, Code2, RefreshCw, Layers, ShieldCheck, Zap } from 'lucide-react';
import ServiceHero from '@/components/ui/ServiceHero';
import TechStack from '@/components/ui/TechStack';
import SectionDivider from '@/components/ui/SectionDivider';
import { Link } from 'react-router-dom';

const SoftwareDevelopmentPage = () => {
  const techStack = {
    Frontend: ['React', 'Vue.js', 'Angular', 'TypeScript'],
    Backend: ['Node.js', 'Python', 'Java', '.NET Core'],
    Database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    DevOps: ['Docker', 'Kubernetes', 'CI/CD Pipelines']
  };

  const benefits = [
    { icon: Settings, title: 'Custom Fit', description: 'Solutions tailored exactly to your unique workflows.' },
    { icon: Layers, title: 'Scalability', description: 'Architectures designed to handle exponential growth.' },
    { icon: ShieldCheck, title: 'Security', description: 'Enterprise-grade security protocols built-in.' },
    { icon: Zap, title: 'Integration', description: 'Seamless connectivity with your ecosystem.' }
  ];

  const methodology = [
    { title: 'Discovery', desc: 'Requirements gathering & analysis' },
    { title: 'Design', desc: 'Architecture & UI/UX prototyping' },
    { title: 'Development', desc: 'Agile sprints & code reviews' },
    { title: 'QA Testing', desc: 'Automated & manual testing' },
    { title: 'Deployment', desc: 'CI/CD pipeline execution' }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software Development - Clearpath Technologies</title>
        <meta name="description" content="Enterprise-grade custom software development services tailored to your business needs." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <ServiceHero 
          title="Custom Software Development" 
          description="We build robust, scalable, and secure enterprise software tailored to streamline your operations and drive business growth."
          patternType="software"
        />

        {/* Intro Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
            >
              Engineering Excellence for Enterprise Needs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
            >
              Off-the-shelf software often falls short. Our custom development service creates 
              tailored solutions that align perfectly with your operational processes, 
              ensuring maximum efficiency.
            </motion.p>
          </div>
        </div>

        <SectionDivider type="wave" className="text-slate-50" />

        {/* Use Cases */}
        <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Business Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Layers, title: 'ERP Systems', desc: 'Centralized platforms for managing core business processes.' },
                { icon: RefreshCw, title: 'Process Automation', desc: 'Tools to reduce manual effort and eliminate errors.' },
                { icon: Code2, title: 'Legacy Modernization', desc: 'Upgrading outdated systems to modern tech stacks.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider type="slope" className="text-slate-50" flip />

        {/* Benefits */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Why Choose Custom Solutions?</h2>
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

        {/* Tech Stack */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStack technologies={techStack} />
        </div>

        {/* Implementation Process */}
        <div className="bg-slate-50 py-24 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Implementation Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Connecting line for desktop */}
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

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-navy-900 to-blue-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Build Your Solution?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg relative z-10">
              Let's discuss how our custom software development services can transform your business operations.
            </p>
            <Link 
              to="/" 
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 font-bold shadow-lg relative z-10 hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareDevelopmentPage;