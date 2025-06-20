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
      className="bg-[#F6FAFC] p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full"
      style={{ minHeight: '260px' }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-white rounded-xl shadow-md p-3 mr-4 flex items-center justify-center" style={{ boxShadow: '0 4px 16px 0 rgba(16,30,54,0.10)' }}>
          <span className="text-[#8B5CF6] text-3xl">{icon}</span>
        </div>
        <h3 className="text-2xl  text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{title}</h3>
      </div>
      <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiActivity />,
      title: "Campaign Automation",
      description: "Create and execute campaigns with ease using AI-driven automation for maximum efficiency"
    },
    {
      icon: <FiDatabase />,
      title: "Personalized Outreach",
      description: "Deliver tailored messages to each customer for more impactful and engaging communication"
    },
    {
      icon: <FiSettings />,
      title: "Data Optimization",
      description: "Analyze performance with detailed analytics to fine-tune campaigns and boost results"
    },
    {
      icon: <FiEye />,
      title: "Seamless Collaboration",
      description: "Seamlessly integrate with existing tools to enhance team productivity and coordination"
    },
    {
      icon: <FiBarChart2 />,
      title: "Real-Time Insights",
      description: "Monitor customer interactions and adapt strategies in real time for optimal engagement"
    },
    {
      icon: <FiLayers />,
      title: "Future-Proof Solutions",
      description: "Stay ahead with continuous updates, and built-in adaptability for evolving needs"
    }
  ];

  return (
    <section id="features" className="py-20 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="rounded-3xl bg-[#D8DFE5] shadow-xl border border-gray-200 p-10 md:p-16 flex flex-col items-center" style={{boxShadow: '0 6px 32px 0 rgba(16,30,54,0.10)'}}>
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium shadow-sm border-2 border-gray-300" style={{ minWidth: 'fit-content', minHeight: 'fit-content', boxShadow: '0 0 0 2px #e5e7eb' }}>
              <img src="/effortless-deployment.png" alt="Effortless Deployment" className="w-5 h-5" />
              <span className="text-gray-800 font-medium">Effortless Deployment</span>
            </span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-4 text-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '56px',  }}>AI-Powered Marketing</h2>
            <p className="text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}>Simplify deployment for unmatched scalability and impact</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
          <div className="w-full flex justify-center items-center gap-8 mt-12">
            <div className="flex items-center w-full max-w-xs">
              <div className="flex-1 h-3 border-t-3 border-dotted border-gray-400 opacity-60"></div>
              <div className="flex items-center gap-2 px-4">
                <img src="/reshot-icon-handshake-FWPX82A9T3.svg" alt="Expert Collaboration" className="w-8 h-8" />
                <span className="text-lg font-medium text-gray-800">Expert Collaboration</span>
              </div>
              <div className="flex-1 h-3 border-t-3 border-dotted border-gray-400 opacity-60"></div>
            </div>
            <div className="flex items-center w-full max-w-xs">
              <div className="flex-1 h-3 border-t-3 border-dotted border-gray-400 opacity-60"></div>
              <div className="flex items-center gap-2 px-4">
                <img src="/plug.svg" alt="Seamless Integration" className="w-8 h-8" />
                <span className="text-lg font-medium text-gray-800">Seamless Integration</span>
              </div>
              <div className="flex-1 h-3 border-t-3 border-dotted border-gray-400 opacity-60"></div>
            </div>
            <div className="flex items-center w-full max-w-xs">
              <div className="flex-1 h-3 border-t-3 border-dotted border-gray-400 opacity-60"></div>
              <div className="flex items-center gap-2 px-4">
                <img src="/stat.svg" alt="Scalable Solutions" className="w-8 h-8" />
                <span className="text-lg font-medium text-gray-800">Scalable Solutions</span>
              </div>
              <div className="flex-1 h-3 border-t-3 border-dotted border-gray-400 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default Features;