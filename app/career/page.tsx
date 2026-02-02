"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Send, Users, Sparkles, Zap, ArrowRight } from "lucide-react";

// Vacancy list - set to [] to show the "Empty State"
const vacancies = [
  {
    title: "Senior Fullstack Engineer",
    type: "Remote / Full-time",
    salary: "$4k - $7k",
    tags: ["Next.js", "Node.js", "AWS"],
    subTitle: "Architecture"
  },
  {
    title: "UI/UX Product Designer",
    type: "Hybrid / Full-time",
    salary: "$2.5k - $4.5k",
    tags: ["Figma", "Design Systems", "Motion"],
    subTitle: "Creative"
  }
];

export default function Career() {
  const isEmpty = vacancies.length === 0;

  return (
    <section className="bg-[#050505] py-32 px-6 text-white font-sans selection:bg-[#0ABAB5]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION - SAME AS SERVICES STYLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[5px] uppercase">Join Our Team</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Build The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Future.
              </span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md border-l border-[#0ABAB5]/30 pl-8">
              We are constantly looking for world-class talent to join our mission in redefining digital excellence.
            </p>
          </div>
        </div>

        {isEmpty ? (
          /* EMPTY STATE - NO VACANCIES */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative p-12 md:p-24 rounded-[50px] bg-[#0D0D0D] border border-white/10 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-start text-left">
              <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 text-[#0ABAB5]">
                <Sparkles size={40} className="animate-pulse" />
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">Talent Pool is Open.</h3>
              <p className="text-gray-500 max-w-xl leading-relaxed mb-10 text-lg">
                Currently, all seats are filled. However, we are always hungry for exceptional minds. 
                Drop your CV into our talent pool, and let's create something legendary together.
              </p>
              <button className="group relative px-10 py-5 bg-transparent border border-[#0ABAB5]/50 rounded-full overflow-hidden transition-all">
                <span className="relative z-10 text-[#0ABAB5] group-hover:text-black font-black text-[10px] uppercase tracking-[4px] flex items-center gap-3">
                  Submit Resume <Send size={14} />
                </span>
                <div className="absolute inset-0 bg-[#0ABAB5] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
            {/* Background decorative number */}
            <span className="absolute -right-10 -bottom-20 text-[300px] font-black text-white/[0.02] select-none pointer-events-none">
              00
            </span>
          </motion.div>
        ) : (
          /* ACTIVE VACANCIES LIST */
          <div className="grid grid-cols-1 gap-[1px] bg-white/5 border border-white/5 overflow-hidden rounded-[40px]">
            {vacancies.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0D0D0D] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 hover:bg-[#111111]"
              >
                {/* Background Number */}
                <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] font-black text-white/[0.02] group-hover:text-[#0ABAB5]/[0.05] transition-all duration-1000 select-none pointer-events-none">
                  {(i + 1).toString().padStart(2, '0')}
                </span>

                <div className="relative z-10 flex items-center gap-10 flex-1 w-full">
                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 text-white group-hover:border-[#0ABAB5] group-hover:text-[#0ABAB5] transition-all duration-500 bg-[#0D0D0D]">
                      <Briefcase size={24} />
                   </div>
                   <div>
                      <span className="text-[10px] font-mono tracking-[4px] text-[#0ABAB5]/60 uppercase mb-2 block">
                        {job.subTitle}
                      </span>
                      <h3 className="text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {job.title}
                      </h3>
                   </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-4 items-center">
                   <div className="flex flex-col items-end">
                      <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{job.type}</span>
                      <span className="text-[#0ABAB5] text-lg font-bold">{job.salary}</span>
                   </div>
                   <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0ABAB5] group-hover:text-black transition-all duration-500">
                      <ArrowRight size={20} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* BOTTOM DECORATION */}
        <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}