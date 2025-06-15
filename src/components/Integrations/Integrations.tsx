"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Integrations: React.FC = () => {
  // Placeholder for integration logos
  const integrations = [
    { name: 'Slack', logo: '/images/integrations/slack-placeholder.svg' },
    { name: 'Google', logo: '/images/integrations/google-placeholder.svg' },
    { name: 'Microsoft', logo: '/images/integrations/microsoft-placeholder.svg' },
    { name: 'Salesforce', logo: '/images/integrations/salesforce-placeholder.svg' },
    { name: 'Hubspot', logo: '/images/integrations/hubspot-placeholder.svg' },
    { name: 'Zapier', logo: '/images/integrations/zapier-placeholder.svg' },
  ];

  return (
    <section id="integrations" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations</h2>
          <p className="text-xl text-gray-600 mb-2">Integrates with</p>
          <p className="text-lg text-gray-600">Seamlessly integrate with your favorite tools</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Placeholder for actual logos */}
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                {/* When you have actual logos, use this: */}
                {/* <Image 
                  src={integration.logo} 
                  alt={`${integration.name} logo`} 
                  width={48} 
                  height={48} 
                /> */}
                <span className="text-gray-400 text-xs">{integration.name[0]}</span>
              </div>
              <p className="text-sm text-gray-600">{integration.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;