"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SocialLinksDiagram from './SocialLinksDiagram';

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-[#D8DFE5] rounded-2xl p-6 md:p-10 shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="flex items-center justify-center w-30 h-12 rounded-4xl bg-white mb-4 shadow-md border-2 border-[#dfe3e7] relative">
            <div className="absolute inset-0 rounded-4xl border-1 border-[#adb1b4] pointer-events-none" style={{ zIndex: 1 }}></div>
            <Image src="/integration.png" alt="Integrations" width={180} height={48} className="mx-auto relative z-10" />
          </div>
          <p className="text-2xl md:text-6xl text-black mb-2 font-['Plus Jakarta Sans']">Integrates with</p>
          <p className="text-lg text-black">Seamlessly integrate with your favorite tools</p>
        </motion.div>
        <div className="flex justify-center">
          <SocialLinksDiagram />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8 mt-10 w-full">
          {/* Label 1 */}
          <div className="flex flex-row items-center gap-2 px-3 py-1.5">
            <span className="block w-7 h-7 md:w-8 md:h-8">
              <img src="/icons/automate.svg" alt="Seamless Automation" className="w-full h-full object-contain" />
            </span>
            <span className="text-base md:text-lg text-[#23263b] font-normal">Seamless Automation</span>
          </div>
          {/* Vertical separator */}
          <div className="hidden md:block h-8 border-r border-dashed border-[#bfc9d1] mx-3" style={{ opacity: 0.5 }} />
          {/* Mobile separator */}
          <div className="block md:hidden w-full h-px border-t border-dashed border-[#bfc9d1] my-1.5" style={{ opacity: 0.5 }} />
          {/* Label 2 */}
          <div className="flex flex-row items-center gap-2 px-3 py-1.5">
            <span className="block w-7 h-7 md:w-8 md:h-8">
              <img src="/icons/real-time.svg" alt="Real-Time Data Sync" className="w-full h-full object-contain" />
            </span>
            <span className="text-base md:text-lg text-[#23263b] font-normal">Real-Time Data Sync</span>
          </div>
          {/* Vertical separator */}
          <div className="hidden md:block h-8 border-r border-dashed border-[#bfc9d1] mx-3" style={{ opacity: 0.5 }} />
          {/* Mobile separator */}
          <div className="block md:hidden w-full h-px border-t border-dashed border-[#bfc9d1] my-1.5" style={{ opacity: 0.5 }} />
          {/* Label 3 */}
          <div className="flex flex-row items-center gap-2 px-3 py-1.5">
            <span className="block w-7 h-7 md:w-8 md:h-8">
              <img src="/icons/customize.svg" alt="Customizable Solutions" className="w-full h-full object-contain" />
            </span>
            <span className="text-base md:text-lg text-[#23263b] font-normal">Customizable Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

