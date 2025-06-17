'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiDatabase, FiSettings, FiEye, FiBarChart2, FiLayers } from 'react-icons/fi';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiActivity />,
      title: "Seamless Automation",
      description: "Automate your marketing workflows with AI-powered tools that save time and increase efficiency."
    },
    {
      icon: <FiDatabase />,
      title: "Real-Time Data Sync",
      description: "Keep all your marketing data synchronized across platforms for consistent messaging."
    },
    {
      icon: <FiSettings />,
      title: "Customizable Solutions",
      description: "Tailor your marketing automation to fit your specific business needs and goals."
    },
    {
      icon: <FiEye />,
      title: "Live Oversight",
      description: "Monitor your campaigns in real-time and make adjustments on the fly for optimal performance."
    },
    {
      icon: <FiBarChart2 />,
      title: "Comprehensive Insights",
      description: "Track every campaign and customer interaction to refine engagement strategies."
    },
    {
      icon: <FiLayers />,
      title: "Effortless Deployment",
      description: "Get up and running quickly with easy-to-implement solutions that integrate with your existing stack."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl rounded-2xl p-10 md:p-16 shadow-2xl" style={{ background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">AI-Powered Marketing</h2>
          <p className="text-xl text-gray-600">Simplify deployment for unmatched scalability and impact</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;