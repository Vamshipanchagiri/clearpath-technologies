import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyClearpathSection from '../components/WhyClearpathSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';

const SinglePageApp = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Clearpath Technologies | Enterprise IT Solutions</title>
        <meta name="description" content="Clearpath Technologies provides enterprise software development, cloud infrastructure, and IT consulting services with structured processes and clear accountability." />
      </Helmet>
      
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <WhyClearpathSection />
          <ProcessSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SinglePageApp;