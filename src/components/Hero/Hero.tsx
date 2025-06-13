'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Automate. Engage. Convert.
            <span className="block text-blue-600">Powered by AI.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10">
            Your journey to AI-powered marketing starts here
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Get Started Free
            </Link>
            <Link 
              href="#features" 
              className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">Adopted by renowned, trusted, and leading enterprises</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {/* Company logos would go here - using gray placeholders for now */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded-md opacity-60"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;