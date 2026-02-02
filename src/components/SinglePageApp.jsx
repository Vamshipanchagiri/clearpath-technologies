import React from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import WhyUsSection from '../sections/WhyUsSection';
import ProcessSection from '../sections/ProcessSection';
import ContactSection from '../sections/ContactSection';
import { Helmet } from 'react-helmet';

const SinglePageApp = () => {
  return (
    <>
      <Helmet>
        <title>Clearpath Technologies - Enterprise Technology Solutions</title>
        <meta
          name="description"
          content="Clearpath Technologies delivers reliable software development, cloud infrastructure, and IT consulting services with structured processes and clear communication."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <WhyUsSection />
          <ProcessSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default SinglePageApp;
