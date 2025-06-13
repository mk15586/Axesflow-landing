'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build AI-Powered Marketing Now!</h2>
          <p className="text-xl text-gray-300 mb-10">
            Automate lead generation and customer engagement in diverse and dynamic real-world settings
          </p>
          
          <Link 
            href="/signup" 
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-lg font-medium"
          >
            Get Started Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;