'use client';

import React from 'react';
import {
  Header,
  Hero,
  Features,
  Integrations,
  Pricing,
  Testimonials,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
