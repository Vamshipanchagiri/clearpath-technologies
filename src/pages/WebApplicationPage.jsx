import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Smartphone, Globe, Layout, ShoppingCart, Users, Zap } from 'lucide-react';
import ServiceHero from '@/components/ui/ServiceHero';
import TechStack from '@/components/ui/TechStack';
import SectionDivider from '@/components/ui/SectionDivider';
import { Link } from 'react-router-dom';

const WebApplicationPage = () => {
  const techStack = {
    Frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express', 'Django', 'GraphQL'],
    Mobile: ['React Native', 'Flutter', 'PWA'],
    Tools: ['Webpack', 'Vite', 'Figma', 'Jest']
  };

  const benefits = [
    { icon: Smartphone, title: 'Responsive Design', description: 'Flawless experiences across mobile, tablet, and desktop devices.' },
    { icon: Zap, title: 'High Performance', description: 'Optimized loading times and smooth interactions for better engagement.' },
    { icon: Users, title: 'User-Centric', description: 'Intuitive interfaces designed with the end-user in mind.' },
    { icon: Globe, title: 'SEO Friendly', description: 'Built with search engine visibility best practices.' }
  ];

  const methodology = [
    { title: 'UX Research', desc: 'User personas & journeys' },
    { title: 'Wireframing', desc: 'Structural layouts' },
    { title: 'Visual Design', desc: 'High-fidelity mockups' },
    { title: 'Development', desc: 'Frontend & Backend coding' },
    { title: 'Launch', desc: 'Deployment & Analytics' }
  ];

  return (
    <>
      <Helmet>
        <title>Web & Application Development - Clearpath Technologies</title>
        <meta name="description" content="Responsive web and mobile application development. We create user-centric digital experiences." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <ServiceHero 
          title="Web & Application Development" 
          description="Creating intuitive, high-performance web and mobile applications that engage users and deliver measurable results."
          patternType="web"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
            >
              Digital Experiences That Matter
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
            >
              In a digital-first world, your applications are the face of your business. 
              We combine aesthetic design with powerful engineering to build web and mobile 
              apps that are fast, secure, and accessible.
            </motion.p>
          </div>
        </div>

        <SectionDivider type="curve" className="text-slate-50" />

        {/* Use Cases */}
        <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Impactful Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'Customer Portals', desc: 'Secure self-service platforms for your clients.' },
                { icon: ShoppingCart, title: 'E-commerce', desc: 'Robust online stores with seamless payment integration.' },
                { icon: Layout, title: 'SaaS Platforms', desc: 'Scalable software-as-a-service applications.' }
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
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Key Advantages</h2>
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

        {/* Methodology */}
        <div className="bg-slate-50 py-24 mt-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Design to Code Process</h2>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Elevate Your Digital Presence</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg relative z-10">
              Partner with us to build applications that engage and convert.
            </p>
            <Link 
              to="/" 
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 font-bold shadow-lg relative z-10 hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApplicationPage;