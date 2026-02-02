import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Wrench, ShieldAlert, Zap, Clock, Activity, Headphones, RefreshCcw } from 'lucide-react';
import ServiceHero from '@/components/ui/ServiceHero';
import SectionDivider from '@/components/ui/SectionDivider';
import { Link } from 'react-router-dom';

const MaintenanceSupportPage = () => {
  const benefits = [
    { icon: Clock, title: 'Uptime Guarantee', description: 'Minimize downtime with rapid incident response protocols.' },
    { icon: ShieldAlert, title: 'Security Patches', description: 'Keep systems protected against the latest vulnerabilities.' },
    { icon: Zap, title: 'Performance Tuning', description: 'Continuous optimization for speed and efficiency.' },
    { icon: Activity, title: 'Proactive Monitoring', description: 'Identify issues before they impact your users.' }
  ];

  const methodology = [
    { title: 'Monitor', desc: 'Real-time system tracking' },
    { title: 'Detect', desc: 'Automated alert generation' },
    { title: 'Triage', desc: 'Issue prioritization' },
    { title: 'Resolve', desc: 'Fix implementation' },
    { title: 'Report', desc: 'Root cause analysis' }
  ];

  return (
    <>
      <Helmet>
        <title>Maintenance & Support - Clearpath Technologies</title>
        <meta name="description" content="Proactive software maintenance and technical support." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <ServiceHero 
          title="Maintenance & Support" 
          description="Ensuring your critical systems remain secure, performant, and up-to-date with proactive maintenance."
          patternType="maintenance"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
            >
              Reliability You Can Count On
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
            >
              Software requires ongoing care to remain effective. Our support services 
              provide the peace of mind that comes from knowing your systems are monitored, 
              secure, and ready to handle business demands.
            </motion.p>
          </div>
        </div>

        <SectionDivider type="wave" className="text-slate-50" />

        <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Support Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Wrench, title: 'Corrective', desc: 'Rapid bug fixes and issue resolution for production systems.' },
                 { icon: RefreshCcw, title: 'Adaptive', desc: 'Updates to ensure compatibility with new OS versions.' },
                 { icon: Zap, title: 'Perfective', desc: 'Performance optimization and code refactoring.' },
                 { icon: ShieldAlert, title: 'Preventive', desc: 'Proactive monitoring to catch issues early.' }
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
                   <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        <SectionDivider type="slope" className="text-slate-50" flip />

        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Service Value</h2>
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

        <div className="bg-slate-50 py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Support Lifecycle</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Get Reliable Support</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg relative z-10">
              Ensure your business operations never miss a beat.
            </p>
            <Link 
              to="/" 
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 font-bold shadow-lg relative z-10 hover:-translate-y-1"
            >
              Contact Support
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintenanceSupportPage;