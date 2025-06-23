'use client';

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/contacts', label: 'Contact' }, // updated to redirect to contacts page
];

const Header: React.FC = () => {
  const [isHeadbarOpen, setIsHeadbarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // NEW: track mount
  const scrollYRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true); // Enable transition after mount
  }, []);

  // Use useLayoutEffect for instant style application before paint
  useLayoutEffect(() => {
    scrollYRef.current = window.scrollY;
    if (headerRef.current) {
      const y = scrollYRef.current;
      const progress = Math.min(Math.max((y - 100) / 100, 0), 1);
      const width = 110 - 15 * progress;
      const borderRadius = 2.5 - 1.25 * progress;
      const bgOpacity = progress * 0.8;
      const maxWidth = 1200 - 300 * progress;
      headerRef.current.style.transition = 'none';
      headerRef.current.style.width = `${width}vw`;
      headerRef.current.style.borderRadius = `${borderRadius}rem`;
      headerRef.current.style.backgroundColor = `rgba(255,255,255,${bgOpacity})`;
      headerRef.current.style.maxWidth = `${maxWidth}px`;
      headerRef.current.style.boxShadow = progress > 0 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none';
      // Force reflow to apply styles instantly
      void headerRef.current.offsetHeight;
    }
  }, []);

  useEffect(() => {
    // Enable transition after first paint
    if (headerRef.current) {
      setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.style.transition = '';
        }
      }, 0);
    }

    const updateShrinkProgress = () => {
      const y = scrollYRef.current;
      const progress = Math.min(Math.max((y - 100) / 100, 0), 1);
      if (headerRef.current) {
        const width = 110 - 15 * progress;
        const borderRadius = 2.5 - 1.25 * progress;
        const bgOpacity = progress * 0.8;
        const maxWidth = 1200 - 300 * progress;
        headerRef.current.style.width = `${width}vw`;
        headerRef.current.style.borderRadius = `${borderRadius}rem`;
        headerRef.current.style.backgroundColor = `rgba(255,255,255,${bgOpacity})`;
        headerRef.current.style.maxWidth = `${maxWidth}px`;
        headerRef.current.style.boxShadow = progress > 0 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none';
      }
      animationRef.current = requestAnimationFrame(updateShrinkProgress);
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    animationRef.current = requestAnimationFrame(updateShrinkProgress);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isHeadbarOpen) {
        mobileMenuRef.current.style.display = 'block';
        // Trigger reflow to reset animation
        void mobileMenuRef.current.offsetHeight;
        mobileMenuRef.current.style.opacity = '1';
        mobileMenuRef.current.style.height = mobileMenuRef.current.scrollHeight + 'px';
      } else {
        mobileMenuRef.current.style.opacity = '0';
        mobileMenuRef.current.style.height = '0';
        // Set display none after animation completes
        const timer = setTimeout(() => {
          if (mobileMenuRef.current && !isHeadbarOpen) {
            mobileMenuRef.current.style.display = 'none';
          }
        }, 500); // Match this with your transition duration
        return () => clearTimeout(timer);
      }
    }
  }, [isHeadbarOpen]);

  return (
    <>
      {/* Desktop & Tablet Header (hidden on mobile) */}
      <div
        ref={headerRef}
        className={`hidden md:block fixed top-2 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]${isMounted ? ' transition-all' : ''}`}
        style={{
          transformOrigin: 'center',
          willChange: 'width, borderRadius, background-color, box-shadow',
          transition: isMounted ? 'all 0.3s cubic-bezier(0.4,0,0.2,1)' : 'none', // Only transition after mount
          width: '110vw', // Default unshrunk
          borderRadius: '2.5rem',
          backgroundColor: 'rgba(255,255,255,0)',
          maxWidth: '1200px',
          boxShadow: 'none',
        }}
      >
        <div className="px-6 py-0 h-15 flex items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none min-w-[120px]">
            <Link href="/" className="flex items-center gap-2 select-none">
              <img src="/logo.png" alt="AxesFlow Logo" className="h-18 w-auto" />
            </Link>
          </div>

          {/* Centered nav links */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-gray-700 hover:text-black transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Get Started button with glass effect */}
          <div className="ml-auto">
            <a
              href="https://framer.link/Vu5MARe"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-6 py-2 font-semibold text-white shadow-lg"
              style={{
                background: 'linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)',
                borderRadius: '10px',
                boxShadow: 'rgb(184, 193, 230) 0px 1px 2px 0px inset, rgba(46, 64, 128, 0.35) 0px 0.71px 0.71px -0.58px, rgba(46, 64, 128, 0.34) 0px 1.81px 1.81px -1.17px, rgba(46, 64, 128, 0.33) 0px 3.62px 3.62px -1.75px, rgba(46, 64, 128, 0.3) 0px 6.87px 6.87px -2.33px, rgba(46, 64, 128, 0.26) 0px 13.65px 13.65px -2.92px, rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px',
                opacity: 1,
                transition: 'box-shadow 0.2s, opacity 0.2s',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {/* SVG icon from Framer button */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" style={{ marginRight: 8, fill: 'white' }}>
                  <g>
                    <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                  </g>
                </svg>
                <span style={{ fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.01em' }}>Get Started</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Headbar (only on mobile) */}
      <header
        className="md:hidden w-full bg-[#f6fbff] rounded-[16px] shadow-[0_10px_17px_-5px_rgba(76,80,133,0.2)] mx-auto mt-2 px-4 py-2 flex items-center justify-between"
        style={{
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          backgroundColor: 'rgb(246, 251, 255)',
          borderRadius: 16,
          boxShadow: 'rgba(76, 80, 133, 0.2) 0px 10px 17px -5px',
          width: '100%',
          transform: 'none',
          transformOrigin: '50% 50% 0px',
          willChange: 'auto',
          zIndex: 50,
          position: 'relative',
        }}
      >
        {/* Logo */}
        <div className="flex items-center min-w-[85px] h-10">
          <img src="/logo.png" alt="AxesFlow Logo" className="h-full w-auto object-contain" />
        </div>
        {/* Hamburger */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10 p-0 border-none bg-transparent outline-none focus:outline-none"
          aria-label="Open menu"
          onClick={() => setIsHeadbarOpen(v => !v)}
          tabIndex={0}
        >
          <div className={`w-7 h-1 bg-black rounded transition-all mb-1 ${isHeadbarOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-7 h-1 bg-black rounded transition-all mb-1 ${isHeadbarOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-7 h-1 bg-black rounded transition-all ${isHeadbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
        {/* Dropdown menu (if open) */}
        {isHeadbarOpen && (
          <div className="absolute top-[110%] left-0 w-full bg-white rounded-2xl shadow-2xl flex flex-col items-stretch px-4 pt-6 pb-4 animate-fadeIn z-50">
            <nav className="flex flex-col gap-3 mb-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#18181b] text-[0.98rem] font-normal py-2 px-3 rounded-[10px] bg-[#d8dfe600] hover:bg-[#d8dfe6] transition-colors font-['Plus Jakarta Sans',sans-serif]"
                  style={{
                    border: '1px solid rgba(33,33,33,0)',
                    width: '100%',
                    display: 'block',
                  }}
                  onClick={() => setIsHeadbarOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://framer.link/Vu5MARe"
              target="_blank"
              rel="noopener"
              className="mt-2 w-full flex items-center justify-between gap-2 px-5 py-2 font-semibold text-white shadow-lg"
              style={{
                background: 'linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)',
                borderRadius: '10px',
                boxShadow:
                  'rgb(184, 193, 230) 0px 1px 2px 0px inset, rgba(46, 64, 128, 0.35) 0px 0.71px 0.71px -0.58px, rgba(46, 64, 128, 0.34) 0px 1.81px 1.81px -1.17px, rgba(46, 64, 128, 0.33) 0px 3.62px 3.62px -1.75px, rgba(46, 64, 128, 0.3) 0px 6.87px 6.87px -2.33px, rgba(46, 64, 128, 0.26) 0px 13.65px 13.65px -2.92px, rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px',
                width: '100%',
                transition: 'box-shadow 0.2s, opacity 0.2s',
              }}
              tabIndex={0}
            >
              <span className="flex-1 text-center text-base font-semibold font-['Plus Jakarta Sans',sans-serif]">Get Started</span>
              <span className="flex items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" style={{ fill: 'white' }}>
                  <g>
                    <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                  </g>
                </svg>
              </span>
            </a>
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-16px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.25s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;