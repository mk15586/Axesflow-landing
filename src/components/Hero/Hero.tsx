'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

const Hero: React.FC = () => {
  // Button shadows
  const primaryButtonShadow = `
    inset 0 1px 2px 0 #c0b0e8,
    0 0.706592px 0.706592px -0.583333px rgba(99,69,173,0.35),
    0 1.80656px 1.80656px -1.16667px rgba(99,69,173,0.34),
    0 3.62176px 3.62176px -1.75px rgba(99,69,173,0.33),
    0 6.8656px 6.8656px -2.33333px rgba(99,69,173,0.3),
    0 13.6468px 13.6468px -2.91667px rgba(99,69,173,0.26),
    0 30px 30px -3.5px rgba(99,69,173,0.15)
  `;

  const secondaryButtonShadow = `
    inset 0 1px 2px 0 #b8c1e6,
    0 0.706592px 0.706592px -0.583333px rgba(46,64,128,0.35),
    0 1.80656px 1.80656px -1.16667px rgba(46,64,128,0.34),
    0 3.62176px 3.62176px -1.75px rgba(46,64,128,0.33),
    0 6.8656px 6.8656px -2.33333px rgba(46,64,128,0.3),
    0 13.6468px 13.6468px -2.91667px rgba(46,64,128,0.26),
    0 30px 30px -3.5px rgba(46,64,128,0.15)
  `;

  // Icon components
  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 md:w-6 md:h-6">
      <path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z" fill="currentColor" />
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 md:w-6 md:h-6">
      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" fill="currentColor" />
    </svg>
  );
  
  // Sales chart data
  const salesData = [
    { name: '5k', sales: 10500 },
    { name: '10k', sales: 18000 },
    { name: '15k', sales: 15500 },
    { name: '20k', sales: 22000 },
    { name: '25k', sales: 17000 },
    { name: '30k', sales: 26500 },
    { name: '35k', sales: 21000 },
    { name: '40k', sales: 32000 },
    { name: '45k', sales: 25000 },
    { name: '50k', sales: 37000 },
    { name: '55k', sales: 29000 },
    { name: '60k', sales: 34000 },
  ];
  
  // Customers chart data
  const customerData = [
    { name: 'New Customers', value: 34249 },
    { name: 'Repeated', value: 1420 },
  ];
  
  const COLORS = ['#6366f1', '#a78bfa'];
  
  // Deals data
  const dealsData = [
    {
      product: 'Apple Watch',
      location: '6096 Marjolaine Landing',
      date: '12.09.2019 - 12.53 PM',
      pieces: 423
    },
    {
      product: 'MacBook Pro',
      location: '3857 Kshlerin Square',
      date: '15.09.2019 - 10.22 AM',
      pieces: 198
    },
    {
      product: 'AirPods Pro',
      location: '8921 Emard Centers',
      date: '18.09.2019 - 03.45 PM',
      pieces: 256
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      className="pt-32 md:pt-44 pb-12 md:pb-20 px-4 md:px-6 lg:px-8 overflow-x-hidden" 
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative"
        >
          {/* Logo */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-8 z-10"
          >
            <div
              className="rounded-[20px] flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
              style={{
                boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10), 0 1.5px 0 0 #38a9ff',
                border: '1.5px solid #e3f0fa',
                background: 'linear-gradient(180deg, #f6fbff 80%, #eaf6ff 100%)',
              }}
            >
              <img
                src="/axesflow-logo-icon.png"
                alt="AxesFlow Logo"
                className="w-8 md:w-14"
                style={{ filter: 'drop-shadow(0 2px 6px rgba(139,92,246,0.10))' }}
              />
            </div>
          </motion.div>
          
          <div className="h-12 md:h-16"></div>
          
          {/* Hero Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-['Plus Jakarta Sans'] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal mb-4 md:mb-6 leading-tight text-gray-800"
            style={{ letterSpacing: '-0.01em' }}
          >
            <span className="block">
              <span className="inline">Automate.</span>
              <span className="inline ml-2">Engage.</span>
              <span className="block sm:inline ml-0 sm:ml-2">Convert.</span>
            </span>
            <span className="block text-gray-800">Powered by AI.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            Your journey to AI-powered marketing starts here. Transform your business with our cutting-edge automation platform.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/signup"
                className="px-5 py-2.5 md:px-6 md:py-3 text-white rounded-lg md:rounded-[10px] flex items-center gap-2 text-base md:text-lg font-medium whitespace-nowrap"
                style={{
                  background: 'linear-gradient(125deg, #774be5 -4%, #774be5 100%)',
                  boxShadow: primaryButtonShadow,
                }}
              >
                Get Started
                <ArrowIcon />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#features"
                className="px-5 py-2.5 md:px-6 md:py-3 text-white rounded-lg md:rounded-[10px] flex items-center gap-2 text-base md:text-lg font-medium whitespace-nowrap"
                style={{
                  background: 'linear-gradient(127deg, #0e1c29 -68%, #323d68 100%)',
                  boxShadow: secondaryButtonShadow,
                }}
              >
                Learn More
                <InfoIcon />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full flex flex-col items-center mb-8 md:mb-10"
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl">
            {/* Total User */}
            <div className="bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] p-5 md:p-7 flex flex-col min-w-0 border border-[#f2f4fa] hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-normal text-sm md:text-base">Total User</span>
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img src="/total-users.png" alt="Total Users" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                </span>
              </div>
              <div className="text-2xl md:text-[2rem] font-medium text-[#23263b] leading-tight">50,789</div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-normal mt-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 19V6M5 13l7-7 7 7" stroke="#1ecb8b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span><span className="text-[#1ecb8b]">8.5%</span> <span className="text-gray-500">Up from yesterday</span></span>
              </div>
            </div>
            
            {/* Total Order */}
            <div className="bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] p-5 md:p-7 flex flex-col min-w-0 border border-[#f2f4fa] hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-normal text-sm md:text-base">Total Order</span>
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img src="/total-orders.png" alt="Total Orders" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                </span>
              </div>
              <div className="text-2xl md:text-[2rem] font-medium text-[#23263b] leading-tight">20,393</div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-normal mt-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 19V6M5 13l7-7 7 7" stroke="#1ecb8b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span><span className="text-[#1ecb8b]">1.3%</span> <span className="text-gray-500">Up from past week</span></span>
              </div>
            </div>
            
            {/* Total Sales */}
            <div className="bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] p-5 md:p-7 flex flex-col min-w-0 border border-[#f2f4fa] hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-normal text-sm md:text-base">Total Sales</span>
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img src="/total-sales.png" alt="Total Sales" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                </span>
              </div>
              <div className="text-2xl md:text-[2rem] font-medium text-[#23263b] leading-tight">$60,000</div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-normal mt-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 5v13M19 11l-7 7-7-7" stroke="#f25767" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span><span className="text-[#f25767]">4.3%</span> <span className="text-gray-500">Down from yesterday</span></span>
              </div>
            </div>
            
            {/* Total Pending */}
            <div className="bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] p-5 md:p-7 flex flex-col min-w-0 border border-[#f2f4fa] hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-normal text-sm md:text-base">Total Pending</span>
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img src="/total-pending.png" alt="Total Pending" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                </span>
              </div>
              <div className="text-2xl md:text-[2rem] font-medium text-[#23263b] leading-tight">5,040</div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-normal mt-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 19V6M5 13l7-7 7 7" stroke="#1ecb8b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span><span className="text-[#1ecb8b]">1.8%</span> <span className="text-gray-500">Up from yesterday</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sales Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full flex flex-col items-center mb-6 md:mb-8"
        >
          <div className="w-full bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] border border-[#f2f4fa] p-5 md:p-8 max-w-6xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <span className="text-lg md:text-xl font-semibold text-[#23263b]">Sales Details</span>
              <select className="bg-[#f6f8fd] rounded px-3 py-1 text-xs md:text-sm border border-[#e5e7ef] text-[#23263b]">
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="w-full h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    domain={[0, 60000]}
                    tickFormatter={(value) => `${value/1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: 12, 
                      background: '#fff', 
                      border: '1px solid #eee',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }} 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#774be5"
                    strokeWidth={3}
                    dot={{ r: 6, fill: '#fff', stroke: '#774be5', strokeWidth: 3 }}
                    activeDot={{ r: 10, fill: '#774be5', stroke: '#fff', strokeWidth: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Deals and Customers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full flex flex-col items-center mb-8 md:mb-10"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl">
            {/* Deals Table */}
            <div className="bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] border border-[#f2f4fa] p-5 md:p-8 lg:col-span-2 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <span className="text-lg md:text-xl font-semibold text-[#23263b]">Deals Details</span>
                <select className="bg-[#f6f8fd] rounded px-3 py-1 text-xs md:text-sm border border-[#e5e7ef] text-[#23263b]">
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-[#f6f8fd] text-[#23263b] text-sm md:text-base">
                      <th className="py-2 px-3 md:py-3 md:px-4 rounded-l-lg font-medium">Product Name</th>
                      <th className="py-2 px-3 md:py-3 md:px-4 font-medium">Location</th>
                      <th className="py-2 px-3 md:py-3 md:px-4 font-medium">Date - Time</th>
                      <th className="py-2 px-3 md:py-3 md:px-4 rounded-r-lg font-medium">Pieces</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dealsData.map((deal, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="py-2 px-3 md:py-3 md:px-4 flex items-center gap-2">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6 md:w-8 md:h-8" />
                          <span className="font-medium text-[#23263b] text-sm md:text-base">{deal.product}</span>
                        </td>
                        <td className="py-2 px-3 md:py-3 md:px-4 text-[#23263b] text-sm md:text-base">{deal.location}</td>
                        <td className="py-2 px-3 md:py-3 md:px-4 text-[#23263b] text-sm md:text-base">{deal.date}</td>
                        <td className="py-2 px-3 md:py-3 md:px-4 font-medium text-[#23263b] text-sm md:text-base">{deal.pieces}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Customers Chart */}
            <div className="bg-white rounded-xl md:rounded-[20px] shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] border border-[#f2f4fa] p-5 md:p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
              <span className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#23263b]">Customers</span>
              <div className="relative w-full">
                <div className="w-full h-48 md:h-56 lg:h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={customerData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                      >
                        {customerData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend 
                        content={() => (
                          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-3 md:mt-4">
                            <span className="flex items-center gap-1 text-xs text-[#6366f1]">
                              <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#6366f1] inline-block"></span>
                              New Customers
                            </span>
                            <span className="flex items-center gap-1 text-xs text-[#a78bfa]">
                              <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#a78bfa] inline-block"></span>
                              Repeated
                            </span>
                          </div>
                        )}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#23263b]">34,249</div>
                  <div className="text-xs md:text-sm text-gray-500">New Customers</div>
                </div>
              </div>
              <div className="flex justify-center gap-4 md:gap-8 mt-3 md:mt-4 w-full">
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-bold text-[#23263b]">34,249</span>
                  <span className="text-xs md:text-sm text-gray-500">New Customers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-bold text-[#23263b]">1,420</span>
                  <span className="text-xs md:text-sm text-gray-500">Repeated</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 md:mt-10 text-center"
        >
          <div className="flex items-center justify-center mb-4 w-full">
            <div className="hidden md:block flex-1 border-t-3 border-dotted border-gray-400 mr-4" style={{ opacity: 0.3 }} />
            <p className="text-gray-500 text-sm md:text-lg font-medium whitespace-nowrap">Adopted by renowned, trusted, and leading enterprises</p>
            <div className="hidden md:block flex-1 border-t-3 border-dotted border-gray-400 ml-4" style={{ opacity: 0.3 }} />
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-10 items-center">
            <div className="w-32 md:w-48 h-16 md:h-24 relative">
              <Image src="/asterisk.png" alt="Asterisk" fill className="object-contain grayscale opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-32 md:w-48 h-16 md:h-24 relative">
              <Image src="/Oasis.png" alt="Oasis" fill className="object-contain grayscale opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-32 md:w-48 h-16 md:h-24 relative">
              <Image src="/eooks.png" alt="Eooks" fill className="object-contain grayscale opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-32 md:w-48 h-16 md:h-24 relative">
              <Image src="/opal.png" alt="Opal" fill className="object-contain grayscale opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-32 md:w-48 h-16 md:h-24 relative">
              <Image src="/dune.png" alt="Dune" fill className="object-contain grayscale opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;