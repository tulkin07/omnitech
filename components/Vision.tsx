"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Box, ShieldCheck, Zap, Sparkles, ArrowUpRight } from "lucide-react";

const values = [
  {
    title: "Intelligence",
    description: "Deeply integrated AI systems that learn and adapt to your unique business ecosystem.",
    icon: <Sparkles strokeWidth={1.5} size={24} />,
  },
  {
    title: "Security",
    description: "Enterprise-grade protection layered into every line of code we ship to our global partners.",
    icon: <ShieldCheck strokeWidth={1.5} size={24} />,
  },
  {
    title: "Velocity",
    description: "Accelerating your digital transformation with high-speed development and agile deployment.",
    icon: <Zap strokeWidth={1.5} size={24} />,
  }
];

export default function Vision() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* MAIN VISION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0D0D0D] border border-white/5 rounded-[60px] p-10 md:p-20 mb-10 flex flex-col lg:flex-row items-center gap-16 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]"
        >
          {/* Orqa fondagi harakatlanuvchi Glow (Nafis nur) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0ABAB5]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex-1 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <Box size={18} className="text-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[4px] uppercase">Future Roadmap</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              The Future of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-[#0ABAB5]/40">
                Integrated Tech.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              We envision a world seamlessly integrated with intelligent, intuitive, 
              and secure technology. We lead the global shift in AI-driven ecosystems.
            </p>

            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group border-b border-[#0ABAB5]/30 pb-2 transition-all"
            >
              Our Strategy <ArrowUpRight className="text-[#0ABAB5] group-hover:rotate-45 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* 3D GLOBE AREA */}
          <div className="flex-1 flex justify-center relative">
            {/* Pulsatsiya qiluvchi aura (Globus ortidagi nur) */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[350px] h-[350px] bg-[#0ABAB5] blur-[100px] rounded-full pointer-events-none" 
            />
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10 w-80 h-80 md:w-[480px] md:h-[480px] flex items-center justify-center"
            >
              {/* TEXNOLOGIK GLOBUS RASMI */}
              <img
                src="https://ouch-cdn2.icons8.com/XbeN6_398_W-fD5B6S4R6O9Z0Z2p0E0m0_vV0Y-0Y3E/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTk2/LzQ1ZWMzMzY0LTk4/YmUtNDY4Ni04YzE3/LWExNTVmYmQyNjg3/My5wbmc.png" 
                alt="Digital Globe"
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(10,186,181,0.5)]"
                onError={(e) => {
                  e.target.style.display = 'none'; // Rasm yuklanmasa yashiriladi
                }}
              />
              
              {/* Rasmsiz ham chiroyli ko'rinishi uchun yordamchi Neon doiralar */}
              <div className="absolute inset-4 border border-[#0ABAB5]/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-10 border border-[#0ABAB5]/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </motion.div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-[#0D0D0D] border border-white/5 p-12 rounded-[45px] transition-all duration-500 overflow-hidden"
            >
              {/* Hoverda chiqadigan Neon top line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0ABAB5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-[#151515] text-[#0ABAB5] border border-white/5 group-hover:bg-[#0ABAB5] group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#0ABAB5] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#0ABAB5]/5 blur-2xl rounded-full group-hover:bg-[#0ABAB5]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}