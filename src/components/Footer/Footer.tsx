'use client';

import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Alter</h3>
            <p className="text-gray-600 mb-4">
              AI-powered marketing automation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">Features</Link></li>
              <li><Link href="#integrations" className="text-gray-600 hover:text-gray-800 transition-colors">Integrations</Link></li>
              <li><Link href="#pricing" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Guides</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Alter. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;