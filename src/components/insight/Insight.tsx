import React from 'react';
import Image from 'next/image';
import './InsightMarquee.css';

const leftLabels = [
  'Personalized Engagement',
  'Customer Retention',
  'Seamless Integrations',
  'Real-Time Reports',
  'Personalized Engagement',
  'Customer Retention',
  'Seamless Integrations',
  'Real-Time Reports',
];

const rightLabels = [
  'Cost-Effective',
  'Smart Spending',
  'Data-Driven Decisions',
  'Increased Efficiency',
  'Cost-Effective',
  'Smart Spending',
  'Data-Driven Decisions',
  'Increased Efficiency',
];

const Insight: React.FC = () => {
  return (
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      {/* Live Oversight Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, }}>
        <button
          style={{
            border: '2px solid #e0e7ef',
            borderRadius: 9999,
            padding: '6px 24px',
            background: '#fff',
            fontWeight: 600,
            fontSize: 16,
            color: '#222',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            position: 'relative',
            outline: '4px double #e0e7ef', // changed to double border
            outlineOffset: '-6px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <img src="/magnifying-glass.svg" alt="Live Oversight" style={{ width: 16, height: 16, marginRight: 8 }} />
          Live Oversight
        </button>
      </div>
      {/* Heading */}
      <h2
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 300,
          fontSize: 52.8,
          lineHeight: '64px',
          color: '#18181b',
          textAlign: 'center',
          width: 900, // increased from 640
          margin: '0 auto',
        }}
      >
        Comprehensive Insights
      </h2>
      {/* Subheading */}
      <p
        style={{
          fontFamily: 'sans-serif',
          color: '#18181b',
          textAlign: 'center',
          fontSize: 18,
          margin: '16px auto 40px',
          width: 900, // increased from 640
        }}
      >
        Track every campaign and customer interaction to refine engagement strategies
      </p>
      {/* Chart Containers */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 48 }}>
        {/* Real-Time Insights Card */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 40, width: 540, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ boxShadow: '0 8px 32px rgba(99,102,241,0.15)', borderRadius: 16, marginBottom: 40, background: '#fff' }}>
            <Image src="/charts/real-time-insight.png" alt="Real-Time Insight Chart" width={520} height={260} style={{ borderRadius: 16, display: 'block', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 8, width: '100%' }}>
            {/* Stats Icon */}
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28" style={{ marginRight: 8 }}>
              <path d="M4 20l5-6 5 4 6-8 4 6" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, margin: 0, color: '#18181b' }}>Real-Time Insights</h4>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#52525b', fontSize: 16, textAlign: 'left', margin: 0 }}>
            Monitor your campaigns in real time to ensure maximum effectiveness and identify areas for improvement
          </p>
        </div>
        {/* Actionable Data Card */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 40, width: 540, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ boxShadow: '0 8px 32px rgba(162,28,175,0.15)', borderRadius: 16, marginBottom: 40, background: '#fff' }}>
            <Image src="/charts/actionable-data.png" alt="Actionable Data Chart" width={520} height={260} style={{ borderRadius: 16, display: 'block', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 8, width: '100%' }}>
            {/* Bar Graph Icon */}
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28" style={{ marginRight: 8 }}>
              <rect x="4" y="16" width="4" height="8" rx="2" fill="#a21caf"/>
              <rect x="12" y="10" width="4" height="14" rx="2" fill="#a21caf"/>
              <rect x="20" y="6" width="4" height="18" rx="2" fill="#a21caf"/>
            </svg>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, margin: 0, color: '#18181b' }}>Actionable Data</h4>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#52525b', fontSize: 16, textAlign: 'left', margin: 0 }}>
            Leverage analytics to enhance workflows, boost engagement, and make informed marketing decisions
          </p>
        </div>
      </div>
      {/* Marquee Section */}
      <div className="wrapper">
        {leftLabels.map((label, idx) => (
          <div className={`itemLeft item${idx + 1}`} key={idx}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'black',
              fontWeight: 200,
              fontSize: 14,
              letterSpacing: 0.5,
              fontFamily: 'Inter, sans-serif',
            }}>{label}</span>
          </div>
        ))}
      </div>
      <div className="wrapper" style={{ marginTop: -16 }}>
        {rightLabels.map((label, idx) => (
          <div className={`itemRight item${idx + 1}`} key={idx}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'black',
              fontWeight: 200,
              fontSize: 14,
              letterSpacing: 0.5,
              fontFamily: 'Inter, sans-serif',
            }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
