"use client";
import React from 'react';
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Search, 
  Share2, 
  Cpu, 
  FileText, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "DataSite Technology presents professional website development services in Tashkent, creating high-performance digital ecosystems.",
    icon: <Globe strokeWidth={1.5} size={32} />,
    tag: "Next.js / React"
  },
  {
    title: "Mobile Apps",
    desc: "Essential mobile solutions for those who demand real-time responsiveness and seamless access to information on the go.",
    icon: <Smartphone strokeWidth={1.5} size={32} />,
    tag: "iOS / Android"
  },
  {
    title: "CRM & ERP Systems",
    desc: "Tailor-made systems designed to automate and manage complex internal workflows, optimizing your business efficiency.",
    icon: <Database strokeWidth={1.5} size={32} />,
    tag: "Automation"
  },
  {
    title: "SEO Optimization",
    desc: "Mastering search engine marketing to elevate your presence on Google and Yandex through data-driven promotion strategies.",
    icon: <Search strokeWidth={1.5} size={32} />,
    tag: "Search Engines"
  },
  {
    title: "SMM Marketing",
    desc: "We craft powerful social media campaigns that build pre-established positive brand perceptions before users even visit your site.",
    icon: <Share2 strokeWidth={1.5} size={32} />,
    tag: "Social Media"
  },
  {
    title: "Software Engineering",
    desc: "From GUI applications to complex data processing tools, we develop robust software complexes for any scale.",
    icon: <Cpu strokeWidth={1.5} size={32} />,
    tag: "Custom Dev"
  },
  {
    title: "Technical Specs",
    desc: "Comprehensive documentation covering technical and design nuances, coordinating specialist workflows and legal transparency.",
    icon: <FileText strokeWidth={1.5} size={32} />,
    tag: "Consulting"
  }
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#000] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[4px] uppercase">Our Expertise</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9]">
              Strategic <span className="text-gray-500">Digital</span> <br /> 
              <span className="text-[#0ABAB5]">Capabilities.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-[300px] leading-relaxed border-l border-white/10 pl-6">
            We deliver end-to-end IT solutions that bridge the gap between business vision and technological reality.
          </p>
        </div>

        {/* SERVICES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-10 rounded-[20px] border border-white/5 bg-[#080808] transition-all duration-500 hover:bg-[#0c0c0c] hover:border-[#0ABAB5]/20 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0ABAB5]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    {/* ICON CONTAINER */}
                    <div className="w-16 h-16 bg-[#111] rounded-2xl flex items-center justify-center text-[#0ABAB5] border border-white/5 group-hover:border-[#0ABAB5]/30 group-hover:bg-[#0ABAB5]/10 group-hover:shadow-[0_0_20px_rgba(10,186,181,0.1)] transition-all duration-500">
                      {service.icon}
                    </div>
                    <span className="text-[9px] font-bold text-gray-600 tracking-widest uppercase py-1.5 px-4 border border-white/10 rounded-full bg-white/[0.02]">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#0ABAB5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400/70 text-sm leading-relaxed mb-8 font-light">
                    {service.desc}
                  </p>
                </div>

                <button className="flex items-center gap-2 text-white text-[10px] font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-all">
                  Learn more <ArrowUpRight size={14} className="text-[#0ABAB5]" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Card */}
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="p-10 rounded-[20px] bg-gradient-to-br from-[#0ABAB5] to-[#088f8a] flex flex-col justify-center items-center text-center group cursor-pointer relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
                <h3 className="text-2xl font-black text-black mb-4">Need a Custom <br/> Architecture?</h3>
                <p className="text-black/60 text-xs mb-8 font-bold uppercase tracking-tight">Let's build your unique solution</p>
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight size={24} />
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}