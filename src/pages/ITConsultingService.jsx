import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const ITConsultingService = () => {
  const useCases = [
    {
      title: 'Digital Transformation',
      description: 'Comprehensive planning to modernize business processes through technology.'
    },
    {
      title: 'Technology Stack Evaluation',
      description: 'Unbiased assessment of tools and platforms best suited for your goals.'
    },
    {
      title: 'Security Audits',
      description: 'Identifying vulnerabilities and recommending robust defense strategies.'
    },
    {
      title: 'Organizational IT Strategy',
      description: 'Aligning technology initiatives with long-term business objectives.'
    }
  ];

  const benefits = [
    {
      title: 'Aligned Investments',
      description: 'Ensure every tech dollar supports your strategic goals.'
    },
    {
      title: 'Reduced Risk',
      description: 'Proactive identification and mitigation of technical risks.'
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamlined operations through better technology utilization.'
    },
    {
      title: 'Future-Proof Infrastructure',
      description: 'Strategies designed to adapt to emerging technologies.'
    }
  ];

  const deliveryApproach = [
    {
      title: 'Discovery Workshops',
      description: 'Collaborative sessions to understand your unique challenges.'
    },
    {
      title: 'Strategic Planning',
      description: 'Developing a comprehensive roadmap for success.'
    },
    {
      title: 'Implementation Roadmap',
      description: 'Phased approach to executing the strategy.'
    },
    {
      title: 'Executive Guidance',
      description: 'Advisory support for leadership decision-making.'
    }
  ];

  return (
    <ServicePageTemplate
      title="IT Consulting & Strategy"
      description="We provide strategic technology guidance to help you navigate complex digital landscapes. Our expert consultants ensure your technology investments are secure, efficient, and perfectly aligned with your business vision."
      useCases={useCases}
      benefits={benefits}
      deliveryApproach={deliveryApproach}
    />
  );
};

export default ITConsultingService;