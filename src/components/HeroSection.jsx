import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Abstract Geometric Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#4a7ba7] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#1e3a5f] opacity-[0.03] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e3a5f]/5 text-[#1e3a5f] text-sm font-semibold mb-6 tracking-wide">
            ENTERPRISE IT SOLUTIONS
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-6 tracking-tight leading-tight">
            Clearpath Technologies
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-500 font-light mb-8">
            Enterprise IT Solutions & Technology Advisory
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
            We deliver structured, reliable, and scalable technology solutions that drive enterprise growth. Your trusted partner in digital transformation.
          </p>
          
          <button
            onClick={scrollToServices}
            className="inline-flex items-center px-8 py-4 bg-[#1e3a5f] text-white font-medium rounded-lg hover:bg-[#2d4a6f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToServices}
      >
        <ArrowDown className="text-gray-400 hover:text-[#1e3a5f] transition-colors" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;