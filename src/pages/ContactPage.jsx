import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Received",
        description: "Thank you for contacting us. We will respond to your inquiry shortly.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Clearpath Technologies</title>
        <meta name="description" content="Contact Clearpath Technologies for technology services inquiries. Located in Hyderabad, India. Email: info@clearpathtechnologies.in" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We're here to discuss your technology needs and explore how we can support 
                your organization's objectives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-navy-900 mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {/* Company Name */}
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Clearpath Technologies Private Limited
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">Address</p>
                      <p className="text-slate-600">
                        6th Floor Tower 2, Knowledge City<br />
                        Raidurg, Hyderabad 500032<br />
                        Telangana, India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">Email</p>
                      <a 
                        href="mailto:info@clearpathtechnologies.in"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        info@clearpathtechnologies.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 leading-relaxed">
                    We typically respond to inquiries within one business day. For urgent matters, 
                    please indicate this in your message.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-slate-900"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-slate-900"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white text-slate-900"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;