import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section id="insights" className="w-full flex flex-col lg:flex-row items-center justify-between bg-[#D8DFE5] rounded-3xl px-4 sm:px-8 py-8 sm:py-14 max-w-[1150px] mx-auto mt-8 mb-8 gap-8">
      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center max-w-xl w-full min-w-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center gap-2 px-4 py-1 mb-6 rounded-full border border-[#d8dfe5] bg-[rgba(241,242,251,0.9)] shadow-[0_0_0_2px_rgba(241,242,251,0.9)]"
          style={{ borderRadius: 60 }}
        >
          <Image src="/icons/people.svg" alt="People Icon" width={22} height={22} className="opacity-80 text-[#16101e]" />
          <span className="text-sm font-medium opacity-80 text-[#16101e]">Trusted by 10k + businesses</span>
        </motion.div>
        {/* Heading */}
        <motion.h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light text-[#232b3b] mb-4 leading-tight text-left font-['Plus Jakarta Sans',sans-serif] break-words"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {['Build ', 'AI-Powered ', 'Marketing ', 'Now!'].map((word, i) => (
            <motion.span
              key={i}
              style={{ display: 'inline-block', willChange: 'transform' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        {/* Subheading */}
        <motion.p
          className="text-base xs:text-lg sm:text-xl text-[#232b3b] opacity-80 mb-8 text-left max-w-xl break-words"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          Automate lead generation and customer engagement in diverse and dynamic real-world settings
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-row gap-6 w-full max-w-md mt-2 sm:flex-row sm:gap-6 flex-wrap"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          <a
            href="https://framer.link/Vu5MARe"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white shadow-lg text-lg w-full sm:w-auto"
            style={{
              background: 'linear-gradient(125deg, rgb(119, 75, 229) -4%, rgb(119, 75, 229) 100%)',
              borderRadius: 10,
              boxShadow:
                'rgb(192, 176, 232) 0px 1px 2px 0px inset, rgba(99, 69, 173, 0.35) 0px 0.71px 0.71px -0.58px, rgba(99, 69, 173, 0.34) 0px 1.81px 1.81px -1.17px, rgba(99, 69, 173, 0.33) 0px 3.62px 3.62px -1.75px, rgba(99, 69, 173, 0.3) 0px 6.87px 6.87px -2.33px, rgba(99, 69, 173, 0.26) 0px 13.65px 13.65px -2.92px, rgba(99, 69, 173, 0.15) 0px 30px 30px -3.5px',
              opacity: 1,
            }}
          >
            <span className="font-semibold">Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" fill="white">
              <g><path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path></g>
            </svg>
          </a>
          <a
            href="#features"
            className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white shadow-lg text-lg w-full sm:w-auto"
            style={{
              background: 'linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)',
              borderRadius: 10,
              boxShadow:
                'rgb(184, 193, 230) 0px 1px 2px 0px inset, rgba(46, 64, 128, 0.35) 0px 0.71px 0.71px -0.58px, rgba(46, 64, 128, 0.34) 0px 1.81px 1.81px -1.17px, rgba(46, 64, 128, 0.33) 0px 3.62px 3.62px -1.75px, rgba(46, 64, 128, 0.3) 0px 6.87px 6.87px -2.33px, rgba(46, 64, 128, 0.26) 0px 13.65px 13.65px -2.92px, rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px',
              opacity: 1,
            }}
          >
            <span className="font-semibold">Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" fill="white">
              <g><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></g>
            </svg>
          </a>
        </motion.div>
      </motion.div>
      {/* Right Side */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full max-w-xl min-w-0 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Replace with your own image or chart */}
        <motion.div
          className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-2 sm:p-4 flex items-center justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <Image src="/charts/real-time-insight.png" alt="Widget" width={480} height={240} className="rounded-xl object-cover w-full h-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
