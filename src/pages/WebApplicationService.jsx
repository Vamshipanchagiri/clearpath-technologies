import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const WebApplicationService = () => {
  const useCases = [
    {
      title: 'Customer-Facing Portals',
      description: 'Secure, intuitive portals that enhance customer self-service and engagement.'
    },
    {
      title: 'Internal Dashboards',
      description: 'Data-rich dashboards that provide real-time insights for better decision making.'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Robust online sales platforms with seamless payment and inventory integration.'
    },
    {
      title: 'SaaS Applications',
      description: 'Multi-tenant cloud applications built for scale and subscription-based models.'
    }
  ];

  const benefits = [
    {
      title: 'Improved User Engagement',
      description: 'Intuitive interfaces that keep users active and satisfied.'
    },
    {
      title: 'Cross-Platform Accessibility',
      description: 'Seamless experiences across desktops, tablets, and mobile devices.'
    },
    {
      title: 'Real-time Data Processing',
      description: 'Immediate updates and synchronization for accurate information.'
    },
    {
      title: 'Seamless Integration',
      description: 'Easy connection with existing tools and third-party APIs.'
    }
  ];

  const deliveryApproach = [
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring usability on all devices.'
    },
    {
      title: 'Modern Frameworks',
      description: 'Utilizing React, Node.js, and other cutting-edge technologies.'
    },
    {
      title: 'API-First Architecture',
      description: 'Decoupled backend and frontend for flexibility.'
    },
    {
      title: 'Performance Optimization',
      description: 'Fast load times and smooth interactions.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Web Application Development"
      description="We build responsive, high-performance web solutions and mobile-friendly applications. Utilizing modern frameworks, we ensure your digital presence supports business operations and drives customer engagement."
      useCases={useCases}
      benefits={benefits}
      deliveryApproach={deliveryApproach}
    />
  );
};

export default WebApplicationService;