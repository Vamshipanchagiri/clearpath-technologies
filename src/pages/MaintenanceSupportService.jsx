import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const MaintenanceSupportService = () => {
  const useCases = [
    {
      title: '24/7 System Monitoring',
      description: 'Round-the-clock surveillance to detect anomalies instantly.'
    },
    {
      title: 'Incident Response',
      description: 'Rapid mobilization to resolve critical issues and restore service.'
    },
    {
      title: 'Performance Optimization',
      description: 'Fine-tuning databases and applications for peak efficiency.'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Regular updates and patches to prevent future failures.'
    }
  ];

  const benefits = [
    {
      title: 'Minimized Downtime',
      description: 'Keep your business running smoothly without interruptions.'
    },
    {
      title: 'Proactive Resolution',
      description: 'Fixing issues before they impact your users.'
    },
    {
      title: 'Cost Predictability',
      description: 'Fixed support costs eliminate surprise emergency expenses.'
    },
    {
      title: 'Peace of Mind',
      description: 'Focus on your core business while we handle the tech.'
    }
  ];

  const deliveryApproach = [
    {
      title: 'SLA-Based Support',
      description: 'Guaranteed response and resolution times.'
    },
    {
      title: 'Monitoring Dashboards',
      description: 'Transparent view into system health and metrics.'
    },
    {
      title: 'Rapid Response Protocols',
      description: 'Standardized procedures for quick issue handling.'
    },
    {
      title: 'Continuous Optimization',
      description: 'Ongoing improvements to system stability.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Maintenance & Support"
      description="Our proactive maintenance and support services ensure your systems are always available, secure, and performing at their best. We act as your dedicated technical partner for operational continuity."
      useCases={useCases}
      benefits={benefits}
      deliveryApproach={deliveryApproach}
    />
  );
};

export default MaintenanceSupportService;