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
    <div className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-8">
      {/* Live Oversight Button */}
      <div className="flex justify-center mb-6">
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
            outline: '4px double #e0e7ef',
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
        className="font-['Plus Jakarta Sans',sans-serif] font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mx-auto"
        style={{
          color: '#18181b',
          lineHeight: '1.2',
          maxWidth: 900,
        }}
      >
        Comprehensive Insights
      </h2>
      {/* Subheading */}
      <p
        className="text-base sm:text-lg text-center mx-auto mt-4 mb-10"
        style={{
          color: '#18181b',
          maxWidth: 900,
        }}
      >
        Track every campaign and customer interaction to refine engagement strategies
      </p>
      {/* Chart Containers */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 mb-12">
        {/* Real-Time Insights Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex-1 flex flex-col items-center mb-6 lg:mb-0 max-w-full lg:max-w-[540px]">
          <div className="shadow-lg rounded-2xl mb-6 bg-white w-full">
            <Image src="/charts/real-time-insight.png" alt="Real-Time Insight Chart" width={520} height={260} className="rounded-2xl w-full h-auto object-cover" />
          </div>
          <div className="flex items-center w-full mb-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="mr-2">
              <path d="M4 20l5-6 5 4 6-8 4 6" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h4 className="font-['Inter',sans-serif] font-bold text-base sm:text-lg md:text-xl m-0 text-[#18181b]">Real-Time Insights</h4>
          </div>
          <p className="font-['Inter',sans-serif] text-xs sm:text-sm md:text-base text-[#52525b] text-left w-full m-0">
            Monitor your campaigns in real time to ensure maximum effectiveness and identify areas for improvement
          </p>
        </div>
        {/* Actionable Data Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex-1 flex flex-col items-center max-w-full lg:max-w-[540px]">
          <div className="shadow-lg rounded-2xl mb-6 bg-white w-full">
            <Image src="/charts/actionable-data.png" alt="Actionable Data Chart" width={520} height={260} className="rounded-2xl w-full h-auto object-cover" />
          </div>
          <div className="flex items-center w-full mb-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="mr-2">
              <rect x="4" y="16" width="4" height="8" rx="2" fill="#a21caf"/>
              <rect x="12" y="10" width="4" height="14" rx="2" fill="#a21caf"/>
              <rect x="20" y="6" width="4" height="18" rx="2" fill="#a21caf"/>
            </svg>
            <h4 className="font-['Inter',sans-serif] font-bold text-base sm:text-lg md:text-xl m-0 text-[#18181b]">Actionable Data</h4>
          </div>
          <p className="font-['Inter',sans-serif] text-xs sm:text-sm md:text-base text-[#52525b] text-left w-full m-0">
            Leverage analytics to enhance workflows, boost engagement, and make informed marketing decisions
          </p>
        </div>
      </div>
      {/* Marquee Section */}
      <div className="wrapper">
        {leftLabels.map((label, idx) => (
          <div className={`itemLeft item${idx + 1}`} key={idx}>
            <span className="flex items-center justify-center h-full text-black font-extralight text-xs sm:text-sm md:text-base tracking-wide font-['Inter',sans-serif]">
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="wrapper mt-[-12px] sm:mt-[-16px]">
        {rightLabels.map((label, idx) => (
          <div className={`itemRight item${idx + 1}`} key={idx}>
            <span className="flex items-center justify-center h-full text-black font-extralight text-xs sm:text-sm md:text-base tracking-wide font-['Inter',sans-serif]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
