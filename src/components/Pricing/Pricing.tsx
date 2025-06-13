'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl shadow-sm border ${isPopular ? 'border-blue-500' : 'border-gray-200'} p-8 relative`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500">/month</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href="/signup" 
        className={`block text-center py-3 px-6 rounded-full transition-colors ${isPopular ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50 text-gray-800'}`}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 users',
        'Basic AI automation',
        'Standard analytics',
        'Email support',
        '5 integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 20 users',
        'Advanced AI automation',
        'Detailed analytics & reports',
        'Priority support',
        'Unlimited integrations',
        'Custom workflows'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Enterprise-grade AI',
        'Advanced security features',
        'Dedicated account manager',
        'Custom integrations',
        'On-premise deployment option',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing, No Surprises</h2>
          <p className="text-xl text-gray-600 mb-2">Flexible Plans for All</p>
          <p className="text-lg text-gray-600">Choose a plan that fits your goals and scale as you grow</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-gray-600"
        >
          We donate 2% of your membership to pediatric wellbeing
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;