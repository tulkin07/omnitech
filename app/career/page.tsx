"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Send, Sparkles, ArrowRight } from "lucide-react";

const vacancies = [
  {
    title: "Senior Fullstack Engineer",
    type: "Remote / Full-time",
    salary: "$4k - $7k",
    tags: ["Next.js", "Node.js", "AWS"],
    subTitle: "Architecture",
  },
  {
    title: "UI/UX Product Designer",
    type: "Hybrid / Full-time",
    salary: "$2.5k - $4.5k",
    tags: ["Figma", "Design Systems", "Motion"],
    subTitle: "Creative",
  },
];

export default function Career() {
  const isEmpty = vacancies.length === 0;

  return (
    <section className="bg-[#050505] py-24 sm:py-24 lg:py-32 px-4 sm:px-6 text-white selection:bg-[#0ABAB5]/30">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end mb-16 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4 lg:mb-6"
            >
              <div className="w-10 lg:w-12 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[5px] uppercase">
                Join Our Team
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] lg:leading-[0.85]">
              Build The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Future.
              </span>
            </h2>
          </div>

          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-md border-l border-[#0ABAB5]/30 pl-6 lg:pl-8">
            We are constantly looking for world-class talent to join our mission
            in redefining digital excellence.
          </p>
        </div>

        {isEmpty ? (
          /* EMPTY STATE */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative p-8 sm:p-12 lg:p-24 rounded-[20px] bg-[#0D0D0D] border border-white/10 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 sm:mb-8 text-[#0ABAB5]">
                <Sparkles size={32} className="animate-pulse" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Talent Pool is Open.
              </h3>

              <p className="text-gray-500 max-w-xl leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
                Currently, all seats are filled. Drop your CV into our talent
                pool, and let's create something legendary together.
              </p>

              <button className="group relative px-8 sm:px-10 py-4 sm:py-5 border border-[#0ABAB5]/50 rounded-full overflow-hidden">
                <span className="relative z-10 text-[#0ABAB5] group-hover:text-black font-black text-[10px] uppercase tracking-[4px] flex items-center gap-3">
                  Submit Resume <Send size={14} />
                </span>
                <div className="absolute inset-0 bg-[#0ABAB5] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>

            <span className="absolute -right-10 -bottom-20 text-[180px] sm:text-[240px] lg:text-[300px] font-black text-white/[0.02] select-none">
              00
            </span>
          </motion.div>
        ) : (
          /* VACANCIES */
          <div className="grid grid-cols-1 gap-[1px] bg-white/5 border border-white/5 rounded-[20px] overflow-hidden">
            {vacancies.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0D0D0D] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col md:flex-row gap-6 md:gap-8 justify-between hover:bg-[#111]"
              >
                <span className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 text-[80px] sm:text-[100px] lg:text-[120px] font-black text-white/[0.02] group-hover:text-[#0ABAB5]/[0.05] transition-all select-none">
                  {(i + 1).toString().padStart(2, "0")}
                </span>

                <div className="flex items-center gap-6 flex-1">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#0ABAB5] group-hover:text-[#0ABAB5] transition bg-[#0D0D0D]">
                    <Briefcase size={22} />
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[4px] text-[#0ABAB5]/60 uppercase block mb-1">
                      {job.subTitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                      {job.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <div className="text-left md:text-right">
                    <span className="block text-gray-500 text-[10px] uppercase tracking-widest">
                      {job.type}
                    </span>
                    <span className="text-[#0ABAB5] font-bold text-base sm:text-lg">
                      {job.salary}
                    </span>
                  </div>

                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0ABAB5] group-hover:text-black transition">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-20 lg:mt-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
