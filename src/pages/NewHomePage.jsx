import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const NewHomePage = () => {
  const values = [
    'Structured delivery processes',
    'Clear communication at every stage',
    'Accountability and transparency',
    'Long-term partnership approach'
  ];

  return (
    <>
      <Helmet>
        <title>Clearpath Technologies - Reliable Enterprise Technology Solutions</title>
        <meta name="description" content="Clearpath Technologies delivers reliable software development, cloud infrastructure, and IT consulting services with structured processes and clear communication." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                Enterprise Technology Solutions Built on Reliability and Structure
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Clearpath Technologies partners with organizations to deliver software development, 
                cloud infrastructure, and IT consulting services through proven processes and clear communication.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors duration-200 font-medium"
              >
                Explore Our Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
                Our Approach to Technology Partnerships
              </h2>
              <p className="text-lg text-slate-600 mb-10 text-center">
                We focus on building long-term relationships through consistent delivery, 
                transparent communication, and a commitment to quality outcomes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-4 bg-slate-50 rounded-lg"
                  >
                    <CheckCircle2 className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
                    <span className="text-slate-700 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                About Clearpath Technologies
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Clearpath Technologies Private Limited provides enterprise technology services 
                with a focus on reliable execution and clear project oversight. Based in Hyderabad, 
                we work with organizations across industries to implement software solutions, 
                manage cloud infrastructure, and provide ongoing technology support.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our methodology emphasizes structured delivery, regular communication, and 
                accountability throughout the project lifecycle, ensuring our clients have 
                visibility into progress and outcomes at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-navy-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Discuss Your Technology Needs?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with our team to explore how we can support your organization's 
              technology initiatives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-navy-900 rounded-md hover:bg-slate-100 transition-colors duration-200 font-medium"
            >
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewHomePage;