import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu } from 'lucide-react';

const TechStack = ({ technologies }) => {
  const getIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'frontend': return <Layout size={20} />;
      case 'backend': return <Server size={20} />;
      case 'database': return <Database size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-navy-900 mb-4">Technology Stack</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We leverage modern, battle-tested technologies to build scalable and maintainable solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(technologies).map(([category, techs], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center mb-6 pb-4 border-b border-slate-200">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                {getIcon(category)}
              </div>
              <h4 className="text-lg font-bold text-navy-900 tracking-wide">
                {category}
              </h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-md shadow-sm border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;