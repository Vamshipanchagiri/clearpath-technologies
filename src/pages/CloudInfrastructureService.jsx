import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const CloudInfrastructureService = () => {
  const useCases = [
    {
      title: 'Infrastructure Migration',
      description: 'Seamless transition of on-premise systems to secure cloud environments.'
    },
    {
      title: 'Multi-Cloud Management',
      description: 'Unified management of resources across AWS, Azure, and Google Cloud.'
    },
    {
      title: 'Disaster Recovery',
      description: 'Robust backup and recovery solutions to ensure business continuity.'
    },
    {
      title: 'Cost Optimization',
      description: 'Analyzing and resizing resources to eliminate waste and reduce bills.'
    }
  ];

  const benefits = [
    {
      title: 'Reduced Infrastructure Costs',
      description: 'Pay only for what you use, eliminating hardware cap-ex.'
    },
    {
      title: 'Improved Reliability',
      description: 'High availability architectures with guaranteed uptime SLAs.'
    },
    {
      title: 'Automatic Scaling',
      description: 'Resources that adapt instantly to traffic spikes.'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection and compliance standards.'
    }
  ];

  const deliveryApproach = [
    {
      title: 'Cloud Assessment',
      description: 'Analyzing current infrastructure and readiness.'
    },
    {
      title: 'Migration Planning',
      description: 'Detailed roadmap to minimize downtime during transition.'
    },
    {
      title: 'Infrastructure-as-Code',
      description: 'Automated provisioning for consistency and speed.'
    },
    {
      title: 'Continuous Monitoring',
      description: '24/7 oversight of performance and security.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Cloud Infrastructure Support"
      description="Our scalable cloud solutions empower your organization with flexibility and resilience. From migration to optimization, we manage your infrastructure so you can focus on innovation."
      useCases={useCases}
      benefits={benefits}
      deliveryApproach={deliveryApproach}
    />
  );
};

export default CloudInfrastructureService;