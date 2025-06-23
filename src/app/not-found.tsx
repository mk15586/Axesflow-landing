"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative px-4"
      style={{ zIndex: 1 }}
    >
      <Header />
      {/* Faded 404 background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.13, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontSize: "clamp(6rem, 30vw, 16rem)",
            fontWeight: 700,
            color: "#23263b",
            letterSpacing: "-0.04em",
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          404
        </span>
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-[#18181b] mb-2 text-center"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span style={{ display: 'inline-block', willChange: 'transform' }}>Whoa!</span>
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl font-light text-[#18181b] mb-4 text-center"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <span style={{ display: 'inline-block', willChange: 'transform' }}>That</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>didn’t</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>work</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>out.</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#23263b] mb-8 text-center font-normal"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', opacity: 0.85, maxWidth: 600 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}

        >
          <span style={{ display: 'inline-block', willChange: 'transform' }}>The</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>page</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>you</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>are</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>looking</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>for</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>either</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>doesn’t</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>exist</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>or</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>currently</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>not</span>{' '}
          <span style={{ display: 'inline-block', willChange: 'transform' }}>available</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        >
          <Link href="/" passHref legacyBehavior>
            <a
              className="flex items-center gap-2 px-7 py-3 text-white font-semibold text-base rounded-lg shadow-lg hover:opacity-90 transition"
              style={{
                background: "linear-gradient(127deg, #0e1c29 -68%, #323d68 100%)",
                borderRadius: 10,
                boxShadow:
                  "rgb(184,193,230) 0px 1px 2px 0px inset, rgba(46,64,128,0.345) 0px 0.7px 0.7px -0.58px, rgba(46,64,128,0.337) 0px 1.8px 1.8px -1.16px, rgba(46,64,128,0.325) 0px 3.6px 3.6px -1.75px, rgba(46,64,128,0.306) 0px 6.8px 6.8px -2.33px, rgba(46,64,128,0.26) 0px 13.6px 13.6px -2.91px, rgba(46,64,128,0.15) 0px 30px 30px -3.5px",
                outline: "none",
              }}
            >
              <span>Go Back Home</span>
              <span style={{ display: 'flex', alignItems: 'center', marginLeft: 4 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={22} height={22} fill="#fff" style={{ display: 'inline-block', flexShrink: 0 }}>
                  <g>
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                  </g>
                </svg>
              </span>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
