'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Alter</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-black transition-colors">Features</Link>
          <Link href="#integrations" className="text-gray-600 hover:text-black transition-colors">Integrations</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-black transition-colors">Testimonials</Link>
        </nav>
        
        <div className="hidden md:flex space-x-4">
          <Link 
            href="/login" 
            className="px-4 py-2 text-gray-600 hover:text-black transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#features" className="text-gray-600 hover:text-black transition-colors py-2">Features</Link>
            <Link href="#integrations" className="text-gray-600 hover:text-black transition-colors py-2">Integrations</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors py-2">Pricing</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-black transition-colors py-2">Testimonials</Link>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Link 
                href="/login" 
                className="px-4 py-2 text-gray-600 hover:text-black transition-colors text-center"
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;