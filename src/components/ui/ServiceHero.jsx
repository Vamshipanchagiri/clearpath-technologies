import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceHero = ({ title, description, patternType }) => {
  const getPattern = () => {
    switch (patternType) {
      case 'software':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid-software" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-software)" />
          </svg>
        );

      case 'web':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
            <circle cx="400" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
            <circle cx="400" cy="300" r="140" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400" />
          </svg>
        );

      case 'cloud':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
            <circle cx="200" cy="200" r="120" className="text-blue-600" fill="currentColor" opacity="0.3" />
            <circle cx="600" cy="400" r="140" className="text-indigo-600" fill="currentColor" opacity="0.3" />
          </svg>
        );

      case 'consulting':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100">
            <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.5" className="text-blue-400" />
          </svg>
        );

      case 'maintenance':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
            <circle cx="400" cy="300" r="250" stroke="currentColor" fill="none" strokeDasharray="10 10" className="text-blue-300" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative bg-navy-900 text-white pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-blue-900" />
        {getPattern()}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-white transition"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl">
            {description}
          </p>

          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Start Your Project
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHero;
