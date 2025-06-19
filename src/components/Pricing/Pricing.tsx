'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const plans = [
  	{
		name: 'Starter',
		period: 'user/month',
		description: 'Everything in starter plan',
		features: [
			'Unlimited AI usage here',
			'Premium support',
			'Customer care on point',
			'Collaboration tools',
		],
		buttonBg:
			'linear-gradient(125deg, rgba(94, 120, 143, 0.5) -44%, rgba(240, 248, 255, 0.9) 100%)',
		buttonTextColor: 'rgb(14, 28, 41)',
	},
	{
		name: 'Pro',
		period: 'user/month',
		tag: 'Popular',
		description: 'Everything in Pro plan',
		features: [
			'Integrations with 3rd-party',
			'Advanced analytics',
			'Team performance tracking',
			'Top grade security',
			'Customizable Solutions',
		],
		buttonBg:
			'linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)',
		buttonTextColor: 'rgb(255, 255, 255)',
	},
	{
		name: 'Enterprise',
		period: 'user/month',
		description: 'Dedicated account manager',
		features: [
			'Custom reports & dashboards',
			'Most performance usage',
			'Enterprise-grade security',
			'Customizable Solutions',
			'Seamless Integration',
			'Dedicated account manager',
		],
		buttonBg:
			'linear-gradient(125deg, rgba(94, 120, 143, 0.5) -44%, rgba(240, 248, 255, 0.9) 100%)',
		buttonTextColor: 'rgb(14, 28, 41)',
	},
];

const monthlyPrices = ['$12', '$17', '$97'];
const yearlyPrices = ['$9', '$12', '$80'];

const Pricing: React.FC = () => {
	const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

	return (
		<section id="pricing" className="py-20">
			<div className="container mx-auto px-4">
				<div className="flex justify-center mb-8">
					<div
						className="flex items-center gap-2 px-4 py-1 border border-gray-200 shadow-sm"
						style={{
							background: 'white',
							borderRadius: 24,
							boxShadow: '0 0 0 2px #e5eaf3, 0 0 0 4px #d8dfe5',
							border: '1.5px solid #e5eaf3',
							fontWeight: 500,
							fontSize: 14,
							color: '#25324B',
							letterSpacing: 0.1,
							minWidth: 0,
							opacity: 1,
						}}
					>
						<span
							style={{
								display: 'flex',
								alignItems: 'center',
								background: 'none',
								borderRadius: '50%',
								width: 28,
								height: 28,
								justifyContent: 'center',
								marginRight: 6,
							}}
						>
							<img
								src="/icons/dollar.svg"
								alt="Dollar Icon"
								width={18}
								height={18}
								style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif' }}
							/>
						</span>
						Transparent Pricing, No Surprises
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<h2
						className="mb-4"
						style={{
							fontFamily: 'Plus Jakarta Sans, sans-serif',
							fontSize: 54,
							color: '#0e1c29',
							fontWeight: 200,
						}}
					>
						Flexible Plans for All
					</h2>
					<p
						className="text-lg text-gray-600"
						style={{ fontFamily: 'Inter, sans-serif' }}
					>
						Choose a plan that fits your goals and scale as you grow
					</p>
					<div className="flex justify-center mt-6 mb-10">
						<div
							style={{
								background: 'rgb(246, 251, 255)',
								borderRadius: 8,
								boxShadow:
									'rgba(16, 49, 77, 0.21) 0px 0.7px 0.7px -0.58px, rgba(16, 49, 77, 0.2) 0px 1.8px 1.8px -1.17px, rgba(16, 49, 77, 0.2) 0px 3.6px 3.6px -1.75px, rgba(16, 49, 77, 0.18) 0px 6.9px 6.9px -2.33px, rgba(16, 49, 77, 0.16) 0px 13.6px 13.6px -2.92px, rgba(16, 49, 77, 0.09) 0px 30px 30px -3.5px',
								padding: 3,
								display: 'flex',
								alignItems: 'center',
								gap: 0,
								minWidth: 340,
								width: 340,
								maxWidth: 400,
								height: 42,
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							{/* Sliding background */}
							<motion.div
								layout
								transition={{ type: 'spring', stiffness: 400, damping: 30 }}
								style={{
									position: 'absolute',
									top: 3,
									left: billing === 'monthly' ? 3 : '50%',
									width: '50%',
									height: 36,
									background: 'rgb(216, 223, 229)',
									borderRadius: 6,
									zIndex: 0, // Lower z-index so text is above the slider
								}}
							/>
							<button
								style={{
									background: 'none',
									borderRadius: 6,
									fontWeight: 500,
									fontSize: 18,
									color: '#25324B',
									padding: '4px 28px',
									border: 'none',
									outline: 'none',
									boxShadow: 'none',
									marginRight: 0,
									transition: 'background 0.2s',
									cursor: 'pointer',
									opacity: billing === 'monthly' ? 1 : 0.65,
									width: '50%',
									height: 36,
									position: 'relative',
									zIndex: 1, // Ensure text is above the slider
								}}
								onClick={() => setBilling('monthly')}
							>
								Monthly
							</button>
							<button
								style={{
									background: 'none',
									borderRadius: 6,
									fontWeight: 500,
									fontSize: 18,
									color: '#25324B',
									padding: '4px 0 4px 28px',
									border: 'none',
									outline: 'none',
									boxShadow: 'none',
									marginRight: 0,
									opacity: billing === 'yearly' ? 1 : 0.65,
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									width: '50%',
									minWidth: 0,
									gap: 2,
									justifyContent: 'flex-start',
									position: 'relative',
									zIndex: 1, // Ensure text is above the slider
								}}
								onClick={() => setBilling('yearly')}
							>
								<span style={{ opacity: billing === 'yearly' ? 1 : 0.65 }}>
									Yearly
								</span>
								<span
									style={{
										background: 'rgba(240, 248, 255, 0.9)',
										borderRadius: 192,
										fontWeight: 500,
										fontSize: 14, // Make text smaller
										color: '#25324B',
										padding: '2px 12px 2px 10px', // Reduce padding
										marginLeft: 8,
										marginRight: 6, // Add right margin for extra space
										opacity: billing === 'yearly' ? 1 : 0.65,
										display: 'inline-flex',
										alignItems: 'center',
										height: 26, // Reduce height
										lineHeight: 'normal',
										whiteSpace: 'nowrap',
										transition: 'background 0.2s',
									}}
								>
									Save 20%
								</span>
							</button>
						</div>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans.map((plan, index) => (
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-[#f6fbff] rounded-2xl shadow-xl p-6 flex flex-col border border-[#e5eaf3]"
							style={{
								boxShadow: 'rgba(16, 49, 77, 0.05) 0px 0.7px 0.7px -0.29px, rgba(16, 49, 77, 0.06) 0px 1.8px 1.8px -0.58px, rgba(16, 49, 77, 0.06) 0px 3.6px 3.6px -0.88px, rgba(16, 49, 77, 0.06) 0px 6.9px 6.9px -1.17px, rgba(16, 49, 77, 0.07) 0px 13.6px 13.6px -1.46px, rgba(16, 49, 77, 0.1) 0px 30px 30px -1.75px',
								height: index === 0 ? 520 : index === 1 ? 570 : 610, // Give first card a little more height
								width: '100%', // Let grid control the width
								maxWidth: 400, // Prevent cards from being too wide
								border: '2px solid #e5eaf3',
								boxSizing: 'border-box',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'flex-start',
							}}
						>
							<div className="flex justify-between items-start">
								<h3 className="text-xl text-[#0e1c29]" style={{ fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
									{plan.name}
								</h3>
								{plan.tag && (
									<div
										className="bg-[#774be5] text-white px-5 py-2 rounded-full text-base flex items-center gap-2 shadow-sm"
										style={{
											boxShadow: 'rgba(99, 69, 173, 0.5) 0px 1px 8px 0px',
											fontWeight: 700,
											letterSpacing: 0.5,
										}}
									>
										<img
											src="/icons/fire.svg"
											alt="Popular"
											width={22}
											height={22}
											style={{ marginRight: 6 }}
										/>
										<span>{plan.tag}</span>
									</div>
								)}
							</div>

							<div className="my-4">
								<h3 className="text-3xl text-[#0e1c29]" style={{ fontWeight: 500, fontFamily: 'Inter Placeholder, Inter, sans-serif' }}>
									{billing === 'yearly' ? yearlyPrices[index] : monthlyPrices[index]}
								</h3>
								<p className="text-[#0e1c29] opacity-80">{plan.period}</p>
							</div>

							<button
								className="w-full py-3 px-4 rounded-lg mb-6 font-medium transition-all"
								style={{
									background: plan.buttonBg,
									color: plan.buttonTextColor,
									boxShadow:
										plan.name === 'Pro'
											? 'rgb(184, 193, 230) 0px 1px 2px 0px inset, rgba(46, 64, 128, 0.35) 0px 0.7px 0.7px -0.58px, rgba(46, 64, 128, 0.34) 0px 1.8px 1.8px -1.17px, rgba(46, 64, 128, 0.33) 0px 3.6px 3.6px -1.75px, rgba(46, 64, 128, 0.3) 0px 6.9px 6.9px -2.33px, rgba(46, 64, 128, 0.26) 0px 13.6px 13.6px -2.92px, rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px'
											: 'inset 0px 1px 2px 0px rgb(216, 223, 229), rgba(121, 152, 189, 0.34) 0px 0.8px 0.8px -0.88px, rgba(121, 152, 189, 0.33) 0px 2.4px 2.4px -1.75px, rgba(121, 152, 189, 0.29) 0px 6.4px 6.4px -2.63px, rgba(121, 152, 189, 0.15) 0px 20px 20px -3.5px',
								}}
							>
								<span
									style={{
										display: 'inline-flex',
										alignItems: 'center',
										gap: 8,
									}}
								>
									{/* Show crown-black.svg for first and third, crown-white.svg for middle (Pro) card */}
									{(index === 0 || index === 2) && (
										<img
											src="/icons/crown-black.svg"
											alt="Crown Icon"
											width={22}
											height={22}
											style={{ display: 'inline-block', marginRight: 4 }}
										/>
									)}
									{index === 1 && (
										<img
											src="/icons/crown-white.svg"
											alt="Crown Icon"
											width={22}
											height={22}
											style={{ display: 'inline-block', marginRight: 4 }}
										/>
									)}
									Get Started
								</span>
							</button>

							<div className="border-t border-dotted border-[#5e788f80] border-opacity-50 my-4"></div>

							<div className="flex-1">
								<p className="text-[#0e1c29] font-medium mb-4">
									{plan.description}
								</p>
								<ul className="space-y-3">
									{plan.features.map((feature, i) => (
										<li key={i} className="flex items-start">
											<FiCheck className="text-[#0e1c29] opacity-50 mt-0.5 mr-2 flex-shrink-0" />
											<span className="text-[#0e1c29] opacity-80">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-center mt-12 text-gray-600 flex items-center justify-center gap-2"
				>
					<img
						src="/icons/donate.svg"
						alt="Donate Icon"
						width={28}
						height={28}
						style={{ display: 'inline-block', marginRight: 6, marginTop: -2 }}
					/>
					<span>We donate 2% of your membership to pediatric wellbeing</span>
				</motion.div>
			</div>
		</section>
	);
};

export default Pricing;