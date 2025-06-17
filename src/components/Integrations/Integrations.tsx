"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-20 flex justify-center">
      <div className="w-full max-w-6xl bg-[#D8DFE5] rounded-2xl p-10 md:p-16 shadow-2xl">
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
          <Image src="/panel.png" alt="Panel" width={1000} height={300} className="rounded-xl s" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <div className="flex items-center gap-3 border border-[#D8DFE5] rounded-xl px-6 py-4 min-w-[120px] bg-transparent">
            <Image src="/seamless-automation.png" alt="Seamless Automation" width={250} height={250} />
          </div>
          <div className="flex items-center gap-3 border border-[#D8DFE5] rounded-xl px-6 py-4 min-w-[120px] bg-transparent">
            <Image src="/data-sync.png" alt="Real-Time Data Sync" width={200} height={200} />
          </div>
          <div className="flex items-center gap-3 border border-[#D8DFE5] rounded-xl px-6 py-4 min-w-[120px] bg-transparent ">
            <Image src="/customize-solution.png" alt="Customizable Solutions" width={250} height={250} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

