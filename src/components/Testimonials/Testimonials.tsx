'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center mb-6">
        {/* Placeholder for avatar */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Alter has completely transformed how we approach marketing. The AI-powered features have saved us countless hours and improved our conversion rates by 40%.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc."
    },
    {
      quote: "The integration capabilities are seamless. We connected all our existing tools in minutes, and the real-time data sync has made our campaigns much more effective.",
      author: "Michael Chen",
      role: "CMO",
      company: "Innovate Solutions"
    },
    {
      quote: "As a small business, we needed an affordable solution that could scale with us. Alter has been perfect - easy to use yet powerful enough for all our needs.",
      author: "Jessica Williams",
      role: "Founder",
      company: "Bright Startups"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovators Worldwide</h2>
          <p className="text-xl text-gray-600">What Our Users Say</p>
          <p className="text-lg text-gray-600">Hear from businesses who&apos;ve transformed their workflows with our solutions</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-3">Trusted by</p>
          <p className="text-4xl font-bold mb-1">1,000+</p>
          <p className="text-xl text-gray-600">innovators worldwide</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;