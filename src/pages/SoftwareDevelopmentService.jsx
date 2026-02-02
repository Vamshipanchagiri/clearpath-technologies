import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const SoftwareDevelopmentService = () => {
  const useCases = [
    {
      title: 'Enterprise Automation',
      description: 'Streamline complex workflows and reduce manual effort with custom automated solutions tailored to your operations.'
    },
    {
      title: 'Legacy Modernization',
      description: 'Upgrade outdated systems to modern architectures, improving performance, security, and maintainability.'
    },
    {
      title: 'Custom Business Apps',
      description: 'Purpose-built applications that address specific business challenges not met by off-the-shelf software.'
    },
    {
      title: 'Scalable Platforms',
      description: 'High-performance platforms designed to handle growing user bases and increasing data volumes.'
    }
  ];

  const benefits = [
    {
      title: 'Reduced Operational Costs',
      description: 'Automation and efficiency improvements directly impact your bottom line.'
    },
    {
      title: 'Faster Time-to-Market',
      description: 'Agile development cycles ensure rapid delivery of valuable features.'
    },
    {
      title: 'Competitive Advantage',
      description: 'Unique features and capabilities that differentiate you from competitors.'
    },
    {
      title: 'Long-term Scalability',
      description: 'Architecture designed to grow with your business needs.'
    }
  ];

  const deliveryApproach = [
    {
      title: 'Agile Methodology',
      description: 'Iterative development with regular feedback loops.'
    },
    {
      title: 'Iterative Development',
      description: 'Building features in manageable sprints for faster value.'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing at every stage to ensure reliability.'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous maintenance and improvements post-launch.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Custom Software Development"
      description="We deliver tailored enterprise software solutions designed to meet your specific business requirements. Our proven methodologies and quality assurance processes ensure robust, scalable, and secure applications."
      useCases={useCases}
      benefits={benefits}
      deliveryApproach={deliveryApproach}
    />
  );
};

export default SoftwareDevelopmentService;