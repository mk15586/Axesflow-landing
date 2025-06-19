import React, { useState } from 'react';

const qnaData = [
  {
    question: 'What is Alter ?',
    answer: 'Alter is a platform designed to simplify your workflow and boost productivity.'
  },
  {
    question: 'Is Alter optimized for SEO ?',
    answer: 'Yes, Alter is built with SEO best practices in mind to help your site rank better.'
  },
  {
    question: 'Do I need coding skills to use Alter ?',
    answer: 'No coding skills are required. Alter is user-friendly and easy to use for everyone.'
  },
  {
    question: 'Can I customize Alter to fit my brand ?',
    answer: 'Absolutely! Alter offers extensive customization options to match your brand.'
  },
  {
    question: 'Does Alter include mobile responsiveness ?',
    answer: 'Yes, Alter is fully responsive and works seamlessly on all devices.'
  },
];

const Qna: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-[#e6ebef] py-10 px-2">
      <div className="w-full max-w-5xl bg-[#dbe2e7] rounded-3xl mx-auto flex flex-col items-center py-12 px-2 md:px-0 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#25324B] text-lg border border-gray-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-.75-4.25h1.5v1.5h-1.5v-1.5Zm2.25-5.5c0 1.1-.9 2-2 2a.75.75 0 0 0-.75.75v1h1.5v-.25a2.75 2.75 0 0 0 2.75-2.75c0-1.52-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75h1.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25Z" fill="#25324B"/></svg>
          </span>
          <span className="bg-white text-[#25324B] px-4 py-1 rounded-full text-base font-medium border border-gray-200">Your Queries, Simplified</span>
        </div>
        <h1 className="text-5xl font-light text-[#0e1c29] text-center mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Questions? Answers!</h1>
        <p className="text-lg text-[#25324B] opacity-80 text-center mb-8" style={{fontFamily: 'Inter, sans-serif'}}>Find quick answers to the most common questions about our platform</p>
        <div className="w-full flex flex-col gap-4 mb-8">
          {qnaData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-[#25324B] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{fontFamily: 'Inter, sans-serif'}}
              >
                {item.question}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={`transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}><path d="M12 15.5a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.4-1.42L12 13.09l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-.7.29Z" fill="#25324B"/></svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-[#25324B] text-base opacity-80" style={{fontFamily: 'Inter, sans-serif'}}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2 text-[#25324B] opacity-80" style={{fontFamily: 'Inter, sans-serif'}}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 19v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="#25324B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="#25324B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>Feel free to mail us for any enquiries : <span className="underline">alter@support.com</span></span>
        </div>
      </div>
    </section>
  );
};

export default Qna;
