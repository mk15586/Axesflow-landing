"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const qnaData = [
	{
		question: 'What is Alter ?',
		answer: 'Alter is a platform designed to simplify your workflow and boost productivity.',
	},
	{
		question: 'Is Alter optimized for SEO ?',
		answer: 'Yes, Alter is built with SEO best practices in mind to help your site rank better.',
	},
	{
		question: 'Do I need coding skills to use Alter ?',
		answer: 'No coding skills are required. Alter is user-friendly and easy to use for everyone.',
	},
	{
		question: 'Can I customize Alter to fit my brand ?',
		answer: 'Absolutely! Alter offers extensive customization options to match your brand.',
	},
	{
		question: 'Does Alter include mobile responsiveness ?',
		answer: 'Yes, Alter is fully responsive and works seamlessly on all devices.',
	},
];

const Qna: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-start py-16 sm:py-20 px-1 sm:px-2 font-['Inter',sans-serif]">
			<div className="w-full max-w-6xl bg-[#dbe2e7] rounded-3xl mx-auto flex flex-col items-center py-6 sm:py-12 px-1 sm:px-4 md:px-8 shadow-lg font-['Inter',sans-serif]">
				<div className="flex items-center gap-2 mb-4">
					<span
						className="relative flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base font-medium border border-[#d8dfe5] bg-[rgba(241,242,251,0.9)]"
						style={{
							boxShadow: '0 0 0 2px rgba(241,242,251,0.9)',
							borderStyle: 'solid',
							borderWidth: '1px',
							borderRadius: '60px',
						}}
					>
						<img src="/icons/question.svg" alt="Question Icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-80" />
						<span className="opacity-80 text-black">Your Queries, Simplified</span>
					</span>
				</div>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0 }}
					className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#0e1c29] text-center mb-2"
				>
					Questions? Answers!
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-sm sm:text-lg text-[#25324B] opacity-80 text-center mb-6 sm:mb-8"
				>
					Find quick answers to the most common questions about our platform
				</motion.p>
				<div className="w-full max-w-2xl flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 font-['Inter',sans-serif]">
					{qnaData.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
							className="rounded-xl shadow-md overflow-hidden"
							style={{ background: '#F6FBFF' }}
						>
							<button
								className="w-full flex justify-between items-center px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-[#25324B] focus:outline-none font-['Inter',sans-serif]"
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
							>
								{item.question}
								<svg
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
									className={`transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
								>
									<path
										d="M12 15.5a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.4-1.42L12 13.09l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-.7.29Z"
										fill="#25324B"
									/>
								</svg>
							</button>
							<div
								className={`transition-all duration-300 ease-in-out px-3 sm:px-6 overflow-hidden font-['Inter',sans-serif] ${openIndex === idx ? 'max-h-40 pb-2 sm:pb-3 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
								style={{
									transitionProperty: 'max-height, opacity, padding-bottom',
								}}
							>
								{openIndex === idx && (
									<motion.div
										initial={{ opacity: 0, filter: 'blur(8px)' }}
										animate={{ opacity: 1, filter: 'blur(0px)' }}
										transition={{ duration: 0.4, ease: 'easeOut' }}
										className="text-[#25324B] text-xs sm:text-sm opacity-80"
									>
										{item.answer}
									</motion.div>
								)}
							</div>
						</motion.div>
					))}
				</div>
				<div className="flex flex-wrap items-center gap-2 mt-2 text-[#25324B] opacity-80 font-['Inter',sans-serif] text-xs sm:text-base">
					<img src="/icons/message.svg" alt="Message Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
					<span>
						Feel free to mail us for any enquiries :{' '}
						<span className="underline break-all">alter@support.com</span>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Qna;
