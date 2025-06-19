'use client';

import React from 'react';
import {
  Header,
  Hero,
  Features,
  Integrations,
  Pricing,
  Testimonials,
  Footer,
} from '@/components';
import Insight from '@/components/insight';
import { Qna } from '@/components/qna';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Insight />
        <Features />
        <Pricing />
        <Qna />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}
