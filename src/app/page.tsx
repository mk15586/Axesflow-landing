'use client';

import React from 'react';
import {
  Header,
  Hero,
  Features,
  Integrations,
  Pricing,
  Testimonials,
  CTA,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
