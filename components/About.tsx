"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#000000] py-24 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: CREATIVE IMAGE STACK (Rasmdagi kabi) */}
        <div className="relative">
          {/* Asosiy katta rasm */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[85%] h-[550px] rounded-[40px] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974" 
              className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
              alt="Team leader"
            />
          </motion.div>

          {/* Floating rasm 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-4 z-20 w-[200px] h-[250px] rounded-[30px] overflow-hidden border-4 border-[#000] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              className="w-full h-full object-cover"
              alt="Collaboration"
            />
          </motion.div>

          {/* Aylanuvchi matn effekti (Rasmdagi aylana matn) */}
          <div className="absolute -top-10 right-[0] z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative w-40 h-40 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] uppercase font-bold tracking-[2px] fill-[#0ABAB5]/70">
                  <textPath xlinkHref="#circlePath">
                    Innovative Minds • Building Future • Friendly Team • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Statistik ko'rsatkich (Pastki qism) */}
          <div className="mt-10 flex items-baseline gap-4">
            <span className="text-7xl font-bold text-white tracking-tighter">20+</span>
            <div className="text-[#0ABAB5] font-bold text-sm tracking-widest uppercase">
              Years of <br /> Innovation
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-[#0ABAB5]" />
            <span className="text-[#0ABAB5] text-[10px] font-black tracking-[4px] uppercase">
              Our Journey
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-10 leading-[0.9]">
            Who <br /> <span className="text-[#0ABAB5]">We Are</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
            We are a team of passionate innovators specialized in creating bespoke digital experiences. 
            We don't just build software; we craft lasting partnerships and scalable technological ecosystems 
            that drive global enterprises forward.
          </p>

          {/* Key Points - Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0ABAB5]/10 rounded-2xl text-[#0ABAB5] text-xl">🚀</div>
              <div>
                <h4 className="font-bold text-lg">Rapid Solutions</h4>
                <p className="text-gray-500 text-sm mt-1">Agile development and high-speed deployment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0ABAB5]/10 rounded-2xl text-[#0ABAB5] text-xl">⚙️</div>
              <div>
                <h4 className="font-bold text-lg">Tailored Projects</h4>
                <p className="text-gray-500 text-sm mt-1">Custom-built to solve unique challenges.</p>
              </div>
            </div>
          </div> */}

          {/* Buttons */}
          {/* <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-[#0ABAB5] text-black font-bold rounded-2xl hover:bg-white transition-all flex items-center gap-2 group">
              Explore Our Values
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
              Meet The Team
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default About;