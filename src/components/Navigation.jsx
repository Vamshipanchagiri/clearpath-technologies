import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const services = [
    { label: 'Software Development', path: '/software-development' },
    { label: 'Web Applications', path: '/web-application' },
    { label: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { label: 'IT Consulting', path: '/it-consulting' },
    { label: 'Maintenance & Support', path: '/maintenance-support' }
  ];

  // Handle scroll for navbar styling and active section detection (only on home)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ['hero', 'services', 'why-us', 'process', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && 
              element.offsetTop <= scrollPosition && 
              (element.offsetTop + element.offsetHeight) > scrollPosition) {
            setActiveSection(section);
          }
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle navigation click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  // Check if we need to scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo && isHomePage) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear state
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location, isHomePage]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group"
          >
            <span className="text-2xl font-bold text-navy-900 tracking-tight">Clearpath</span>
            <span className="text-2xl font-light text-slate-600 ml-1 group-hover:text-blue-600 transition-colors">Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                 isHomePage && activeSection === 'hero' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServiceDropdownOpen(true)}
              onMouseLeave={() => setServiceDropdownOpen(false)}
            >
              <button 
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (!isHomePage && location.pathname !== '/') || (isHomePage && activeSection === 'services')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
                onClick={(e) => handleNavClick(e, 'services')}
              >
                Services <ChevronDown size={14} className="ml-1" />
              </button>
              
              <AnimatePresence>
                {serviceDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 mt-1"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#why-us"
              onClick={(e) => handleNavClick(e, 'why-us')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                 isHomePage && activeSection === 'why-us' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              Why Us
            </a>

            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                 isHomePage && activeSection === 'process' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              Process
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="ml-4 px-6 py-2 bg-navy-900 text-white rounded-full text-sm font-medium hover:bg-navy-800 transition-all shadow-md hover:shadow-lg"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg rounded-b-lg"
            >
              <div className="py-4 space-y-1 px-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50"
                >
                  Home
                </Link>
                
                <div className="px-4 py-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm text-slate-600 hover:text-blue-700 pl-2 border-l-2 border-transparent hover:border-blue-500"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>

                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, 'why-us')}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50"
                >
                  Why Us
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="block px-4 py-3 rounded-lg text-base font-medium bg-navy-50 text-navy-900 mt-2"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;