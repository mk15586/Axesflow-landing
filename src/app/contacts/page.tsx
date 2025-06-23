"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Qna from '../../components/qna/Qna';
import Footer from '../../components/Footer/Footer';

const contacts = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={36}
				height={36}
				fill="#774be5"
			>
				<g>
					<path d="M224,56l-96,88L32,56Z" opacity="0.2"></path>
					<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
				</g>
			</svg>
		),
		title: 'Email Us',
		desc: 'Facing technical challenges or product concerns? We’re here to assist',
		link: 'mailto:alter@support.com',
		linkText: 'alter@support.com',
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={36}
				height={36}
				fill="#774be5"
			>
				<g>
					<path d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z" opacity="0.2"></path>
					<path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
				</g>
			</svg>
		),
		title: 'Contact Sales',
		desc: 'Let’s collaborate on custom solutions or discuss product insights',
		link: 'https://calendly.com/',
		linkText: 'Book a call',
	},
];

export default function ContactsPage() {
	return (
		<div
			className="min-h-screen w-full relative flex flex-col items-center justify-center py-16 px-4"
		>
			<Header />
			<div className="flex-1 flex flex-col justify-start max-w-2xl w-full mx-auto text-center mb-10" style={{ minHeight: '40vh', paddingTop: '12vh' }}>
				<div className="framer-xuakio-container flex flex-col items-center gap-6">
					<div
						className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#d8dfe5] shadow"
						style={{
							background: 'rgba(241,242,251,0.9)',
							borderRadius: 60,
							boxShadow: '0px 0px 0px 2px rgba(241,242,251,0.9)',
							borderStyle: 'solid',
							borderWidth: 1,
							borderColor: '#d8dfe5',
							opacity: 1,
							width: 'fit-content',
							minWidth: 0,
							maxWidth: '100%',
						}}
					>
						<div style={{ opacity: 0.8, display: 'flex', alignItems: 'center' }}>
							<img src="/icons/phone.svg" alt="Phone" width={20} height={20} style={{ display: 'inline-block', flexShrink: 0 }} />
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0 }}>
							<p className="font-semibold text-sm text-[#23263b]" style={{ margin: 0 }}>Contact</p>
						</div>
					</div>
					<div className="framer-ax3v8w flex flex-col items-center gap-2 w-full">
						<motion.div
							initial={{ opacity: 0, x: -60 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className="w-full"
						>
							<motion.h1
								className="text-[#18181b] flex flex-wrap justify-center gap-x-2"
								style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 55, fontWeight: 100, letterSpacing: '-0.01em', lineHeight: 1.1, margin: 0 }}
								initial={{ opacity: 0, x: -60 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
							>
								<span style={{ display: 'inline-block', willChange: 'transform' }}>Reach</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>Us</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>Anytime</span>
							</motion.h1>
							<motion.p
								className="text-lg text-[#18181b] flex flex-wrap justify-center gap-x-1"
								initial={{ opacity: 0, x: -60 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
							>
								<span style={{ display: 'inline-block', willChange: 'transform' }}>Have</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>questions</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>or</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>need</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>help?</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>We’re</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>here</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>for</span>{' '}
								<span style={{ display: 'inline-block', willChange: 'transform' }}>you</span>
							</motion.p>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-stretch justify-center mx-auto relative">
					{/* Left: Cards */}
					<motion.div
						className="flex flex-col gap-6 flex-1 max-w-md sticky top-8 self-start transition-all duration-500"
						style={{ zIndex: 1, transition: 'top 0.5s cubic-bezier(0.4,0,0.2,1)' }}
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						{contacts.map((c, i) => (
							<motion.div
								key={i}
								className="bg-[#f6fbff] rounded-2xl shadow-lg p-8 flex flex-col items-start border border-[#e0e7ef]"
								style={{
									borderRadius: 16,
									boxShadow:
										'rgba(16,49,77,0.055) 0px 0.7px 0.7px -0.29px, rgba(16,49,77,0.055) 0px 1.8px 1.8px -0.58px, rgba(16,49,77,0.06) 0px 3.6px 3.6px -0.87px, rgba(16,49,77,0.063) 0px 6.8px 6.8px -1.16px, rgba(16,49,77,0.075) 0px 13.6px 13.6px -1.45px, rgba(16,49,77,0.098) 0px 30px 30px -1.75px',
									backgroundColor: '#f6fbff',
								}}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
							>
								<div className="flex items-center gap-3 mb-2">
									<span
										className="bg-white rounded-lg p-2 shadow"
										style={{
											backgroundColor: '#f6fbff',
											borderRadius: 8,
											boxShadow:
												'rgba(16,49,77,0.204) 0px 0.8px 1.4px -0.87px, rgba(16,49,77,0.196) 0px 2.4px 4.3px -1.75px, rgba(16,49,77,0.173) 0px 6.3px 11.4px -2.62px, rgba(16,49,77,0.09) 0px 20px 36px -3.5px',
										}}
									>
										{c.icon}
									</span>
									<h4 className="text-xl font-semibold text-[#23263b]">
										{c.title}
									</h4>
								</div>
								<p className="text-[#52525b] mb-2 opacity-80 text-left">{c.desc}</p>
								<a
									href={c.link}
									target="_blank"
									rel="noopener"
									className="font-medium underline text-left"
									style={{ color: '#23263b' }}
								>
									{c.linkText}
								</a>
							</motion.div>
						))}
					</motion.div>
					{/* Right: Form */}
					<motion.form
						className="bg-[#f6fbff] rounded-2xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-6 border border-[#e0e7ef] flex-1 transition-all duration-500"
						style={{
							borderRadius: 16,
							backgroundColor: '#f6fbff', // lighter than pure white
							boxShadow:
								'rgba(16,49,77,0.055) 0px 0.7px 0.7px -0.29px, rgba(16,49,77,0.055) 0px 1.8px 1.8px -0.58px, rgba(16,49,77,0.06) 0px 3.6px 3.6px -0.87px, rgba(16,49,77,0.063) 0px 6.8px 6.8px -1.16px, rgba(16,49,77,0.075) 0px 13.6px 13.6px -1.45px, rgba(16,49,77,0.098) 0px 30px 30px -1.75px',
							transition: 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border-radius 0.5s cubic-bezier(0.4,0,0.2,1)'
						}}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
					>
						<div className="flex flex-col items-center gap-2 mb-2">
							<motion.span
								className="bg-white rounded-lg p-2 shadow"
								style={{ backgroundColor: '#f6fbff', borderRadius: 8, boxShadow: 'rgba(16,49,77,0.204) 0px 0.8px 1.4px -0.87px, rgba(16,49,77,0.196) 0px 2.4px 4.3px -1.75px, rgba(16,49,77,0.173) 0px 6.3px 11.4px -2.62px, rgba(16,49,77,0.09) 0px 20px 36px -3.5px', marginTop: '-6px' }}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={36} height={36} fill="#774be5">
									<g>
										<path d="M80,144v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128H64A16,16,0,0,1,80,144Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z" opacity="0.2"></path>
										<path d="M201.89,54.66A104.08,104.08,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
									</g>
								</svg>
							</motion.span>
							<motion.h4
								className="text-2xl font-semibold text-center mb-2"
								style={{ margin: 0, color: '#0E1C29', lineHeight: 1.2 }}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
							>
								We’d love to help! Let us know how
							</motion.h4>
						</div>
						<div className="flex flex-col gap-4">
							{["Full Name", "Email Address", "Subject Of Interest", "How may we assist you?"].map((label, idx) => (
								<motion.label
									key={label}
									className="flex flex-col gap-1"
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, ease: 'easeOut' }}
								>
									<span className="text-base font-medium" style={{ color: '#0E1C29' }}>{label}</span>
									{label === "How may we assist you?" ? (
										<textarea
											name="message"
											placeholder="Give us more info.."
											className="framer-form-input border border-[#d8dfe5] rounded-lg px-3 py-3 min-h-[90px] focus:outline-none focus:ring-2 focus:ring-[#774be5] w-full bg-[#f6fbff] text-[#0E1C29] placeholder-[#b0b8c1] text-base"
											style={{ boxShadow: '0 1px 2px 0 #e0e7ef', resize: 'vertical' }}
										/>
									) : (
										<input
											type={label === "Email Address" ? "email" : "text"}
											name={label.toLowerCase().replace(/ /g, "_")}
											placeholder={label === "Email Address" ? "alter@support.com" : `Regarding ${label}`}
											required={label === "Email Address"}
											className="framer-form-input border border-[#d8dfe5] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#774be5] w-full bg-[#f6fbff] text-[#0E1C29] placeholder-[#b0b8c1] text-base"
											style={{ boxShadow: '0 1px 2px 0 #e0e7ef' }}
										/>
									)}
								</motion.label>
							))}
						</div>
						<motion.button
							type="submit"
							className="mt-2 bg-gradient-to-r from-[#0e1c29] to-[#323d68] text-white font-semibold rounded-lg py-3 shadow-lg hover:opacity-90 transition w-full text-base"
							style={{ borderRadius: 10, boxShadow: 'rgb(184,193,230) 0px 1px 2px 0px inset, rgba(46,64,128,0.345) 0px 0.7px 0.7px -0.58px, rgba(46,64,128,0.337) 0px 1.8px 1.8px -1.16px, rgba(46,64,128,0.325) 0px 3.6px 3.6px -1.75px, rgba(46,64,128,0.306) 0px 6.8px 6.8px -2.33px, rgba(46,64,128,0.26) 0px 13.6px 13.6px -2.91px, rgba(46,64,128,0.15) 0px 30px 30px -3.5px' }}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
						>
							Send Your Message
						</motion.button>
					</motion.form>
				</div>
			</div>
			<Qna />
			<Footer />
		</div>
	);
}
