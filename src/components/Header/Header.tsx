'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#changelog', label: 'Changelog' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollYRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateShrinkProgress = () => {
      const y = scrollYRef.current;
      // Start animation 100px earlier (at y = 100)
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

    // --- Fix: Initialize header style immediately on mount ---
    scrollYRef.current = window.scrollY;
    if (headerRef.current) {
      const y = scrollYRef.current;
      const progress = Math.min(Math.max((y - 100) / 100, 0), 1);
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
    // --- End fix ---

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
      if (isMenuOpen) {
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
          if (mobileMenuRef.current && !isMenuOpen) {
            mobileMenuRef.current.style.display = 'none';
          }
        }, 500); // Match this with your transition duration
        return () => clearTimeout(timer);
      }
    }
  }, [isMenuOpen]);

  return (
    <div
      ref={headerRef}
      className="fixed top-2 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        transformOrigin: 'center',
        willChange: 'width, borderRadius, background-color, box-shadow',
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none ml-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-white/90 backdrop-blur-lg rounded-b-2xl border-t border-gray-200 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: 0,
          height: 0,
          display: 'none',
          willChange: 'opacity, height',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/signup" 
            className="mt-2 px-5 py-2 bg-[#232B47] text-white rounded-2xl font-semibold shadow flex items-center gap-2 justify-center hover:bg-[#1a2036] transition-colors text-base relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#6C6CE5] to-[#8A2BE2] opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <FaRocket className="text-lg" /> Get Started
            </span>
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;