"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';

// Badge komponenti (Layout ichida bo'lmasa, shu yerda qolgani ma'qul)
const Badge = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="inline-block border border-[#0ABAB5]/30 px-4 py-1.5 rounded-full mb-6 bg-[#0ABAB5]/5 backdrop-blur-md"
  >
    <span className="text-[10px] tracking-[3px] text-[#0ABAB5] uppercase font-bold">
      {text}
    </span>
  </motion.div>
);

export default function OurMission() {
  const coreValues = [
    { title: "Innovation First", desc: "Pushing boundaries daily." },
    { title: "Radical Transparency", desc: "Openness in every process." },
    { title: "User-Centric Design", desc: "Building for humans." },
    { title: "Sustainable Code", desc: "Future-proof architecture." },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Orqa fondagi nafis nur effekti */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#0ABAB5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
        
        {/* 1. ASOSIY MISSION CARD (Katta blok) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative group overflow-hidden bg-[#0a0a0a] border border-white/5 p-10 md:p-16 rounded-[28px] flex flex-col justify-between transition-all duration-500 hover:border-[#0ABAB5]/20"
        >
          {/* Spotlight effekti (Hover bo'lganda rasm ustida nur yurgandek bo'ladi) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div>
            <Badge text="Our Mission" />
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Empowering enterprises with{" "}
              <span className="text-[#0ABAB5] relative">
                scalable
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 10" 
                  initial={{ pathLength: 0 }} 
                  whileInView={{ pathLength: 1 }} 
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="#0ABAB5" strokeWidth="2" />
                </motion.svg>
              </span>, 
              <span className="text-white"> secure</span>, and{" "}
              <span className="italic font-light text-gray-400">intelligent</span> tech.
            </h2>
            <p className="text-gray-500 text-xl max-w-xl leading-relaxed font-light">
              We believe technology is the backbone of modern civilization. 
              Our mission is to strengthen that backbone with resilient code and visionary architecture.
            </p>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <button className="flex items-center gap-3 text-white font-bold tracking-widest text-xs uppercase group-hover:text-[#0ABAB5] transition-colors">
              Read Our Story 
              <span className="w-12 h-[1px] bg-white group-hover:bg-[#0ABAB5] group-hover:w-16 transition-all duration-500" />
            </button>
          </div>
        </motion.div>

        {/* 2. O'NG TOMONDAGI STACK CARDLAR */}
        <div className="flex flex-col gap-8">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0D0D0D] border border-white/5 p-10 rounded-[20px] flex-1 relative overflow-hidden group transition-all"
          >
            
            <div className="relative z-10">
  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#0ABAB5]/50 group-hover:bg-[#0ABAB5]/10 transition-all duration-500">
    {/* Clean, bold icon instead of italic text */}
    <ArrowUpRight className="text-[#0ABAB5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={24} strokeWidth={2.5} />
  </div>
  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Our Vision</h3>
  <p className="text-gray-500 text-sm leading-relaxed">
    To become the universal standard for enterprise-grade digital transformation by 2030, 
    redefining how business and tech merge.
  </p>
</div>
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0ABAB5]/10 blur-3xl rounded-full" />
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0D0D0D] border border-white/5 p-10 rounded-[20px] flex-1 group hover:border-[#0ABAB5]/10 transition-all"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Core Values
              <div className="h-[1px] flex-1 bg-white/5" />
            </h3>
            <ul className="space-y-6">
              {coreValues.map((val, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="group/item flex items-center gap-4 cursor-default"
                >
                  <div className="w-1.5 h-1.5 bg-[#0ABAB5] rounded-full group-hover/item:scale-[2] transition-transform shadow-[0_0_8px_#0ABAB5]" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 group-hover/item:text-white transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-[10px] text-gray-600 uppercase tracking-tighter mt-0.5">
                      {val.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}