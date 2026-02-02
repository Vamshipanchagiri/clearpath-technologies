import React, { useState } from 'react';
import { MapPin, Mail, Send, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Company is optional based on placeholder
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Check your inputs",
        description: "Please correct the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We've received your inquiry and will get back to you shortly.",
      variant: "default",
      className: "bg-[#1e3a5f] text-white border-none"
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setErrors({});
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're here to answer your questions and discuss how our technology solutions can help your business grow.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-white p-3 rounded-lg shadow-sm text-[#4a7ba7]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#1e3a5f] mb-1">Our Office</h4>
                <p className="text-gray-600 leading-relaxed">
                  Clearpath Technologies Private Limited<br />
                  6th Floor, Tower 2, Knowledge City<br />
                  Raidurg, Hyderabad – 500032<br />
                  Telangana, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-white p-3 rounded-lg shadow-sm text-[#4a7ba7]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#1e3a5f] mb-1">Email Us</h4>
                <a href="mailto:info@clearpathtechnologies.in" className="text-gray-600 hover:text-[#4a7ba7] transition-colors">
                  info@clearpathtechnologies.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#4a7ba7] focus:ring-[#4a7ba7]/20'} focus:ring-2 outline-none transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                      <AlertCircle size={18} />
                    </div>
                  )}
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#4a7ba7] focus:ring-[#4a7ba7]/20'} focus:ring-2 outline-none transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Your email address"
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                      <AlertCircle size={18} />
                    </div>
                  )}
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4a7ba7] focus:ring-2 focus:ring-[#4a7ba7]/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#4a7ba7] focus:ring-[#4a7ba7]/20'} focus:ring-2 outline-none transition-all resize-none text-gray-900 placeholder-gray-400`}
                    placeholder="Describe your project or inquiry"
                  ></textarea>
                  {errors.message && (
                    <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                      <AlertCircle size={18} />
                    </div>
                  )}
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white font-medium text-lg rounded-lg transition-all duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;