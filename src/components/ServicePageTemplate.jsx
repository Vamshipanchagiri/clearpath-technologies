import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Layers, ArrowRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicePageTemplate = ({ title, description, useCases, benefits, deliveryApproach }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] text-white py-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#4a7ba7] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#4a7ba7] opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4a7ba7] font-semibold tracking-wider text-sm uppercase">Applications</span>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mt-2">Business Use Cases</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-lg flex items-center justify-center text-[#1e3a5f] mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4a7ba7] font-semibold tracking-wider text-sm uppercase">Why Choose Us</span>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mt-2 mb-6">Key Enterprise Benefits</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our solutions are designed to deliver measurable value to your organization, focusing on efficiency, scalability, and long-term success.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="text-[#4a7ba7] mt-1 mr-4 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-[#1e3a5f]">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a5f]/10 to-[#4a7ba7]/10 rounded-2xl transform rotate-3"></div>
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 relative shadow-lg">
                <Settings className="text-[#1e3a5f] mb-6" size={48} />
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Engineered for Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We combine technical expertise with deep industry knowledge to solve complex challenges. Our commitment to quality ensures that every solution we deliver is robust, secure, and ready for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4a7ba7] font-semibold tracking-wider text-sm uppercase">Methodology</span>
            <h2 className="text-3xl font-bold mt-2">Our Delivery Approach</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {deliveryApproach.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < deliveryApproach.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#4a7ba7]/30"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a5f] border-2 border-[#4a7ba7] flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_15px_rgba(74,123,167,0.3)]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Contact us today to discuss your requirements and discover how our expertise can drive your success.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center px-8 py-4 bg-[#1e3a5f] text-white font-medium rounded-lg hover:bg-[#2d4a6f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;