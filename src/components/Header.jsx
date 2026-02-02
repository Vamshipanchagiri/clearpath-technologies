import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Home', sectionId: 'home', path: '/' },
    { name: 'Services', sectionId: 'services', path: '/' },
    { name: 'Why Clearpath', sectionId: 'why-clearpath', path: '/' },
    { name: 'Our Process', sectionId: 'our-process', path: '/' },
    { name: 'Contact', sectionId: 'contact', path: '/' },
  ];

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = navigation.map(nav => nav.sectionId);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavigation = (e, item) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHomePage) {
      scrollToSection(item.sectionId);
    } else {
      // Navigate to home and hash
      navigate(`/#${item.sectionId}`);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={(e) => {
               if (isHomePage) handleNavigation(e, { sectionId: 'home' });
            }}
          >
            <span className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#4a7ba7] transition-colors">
              Clearpath Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={isHomePage ? `#${item.sectionId}` : `/#${item.sectionId}`}
                onClick={(e) => handleNavigation(e, item)}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isHomePage && activeSection === item.sectionId
                    ? 'text-[#1e3a5f] font-semibold'
                    : 'text-gray-500 hover:text-[#4a7ba7]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white absolute left-0 right-0 shadow-lg px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={isHomePage ? `#${item.sectionId}` : `/#${item.sectionId}`}
                onClick={(e) => handleNavigation(e, item)}
                className={`block px-4 py-3 text-base font-medium rounded-md mb-1 cursor-pointer ${
                  isHomePage && activeSection === item.sectionId
                    ? 'text-[#1e3a5f] bg-gray-50'
                    : 'text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;