"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#000000] py-16 md:py-24 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: CREATIVE IMAGE STACK */}
        <div className="relative order-2 lg:order-1">
          {/* Asosiy katta rasm */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full sm:w-[85%] h-[400px] md:h-[550px] rounded-[20px] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974" 
              className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
              alt="Team leader"
            />
          </motion.div>

          {/* Floating rasm 1 - Mobil versiyada o'lchami kichraytirildi */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-2 sm:-right-4 z-20 w-[140px] md:w-[200px] h-[180px] md:h-[250px] rounded-[20px] overflow-hidden border-4 border-[#000] shadow-2xl hidden sm:block"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              className="w-full h-full object-cover"
              alt="Collaboration"
            />
          </motion.div>

          {/* Aylanuvchi matn effekti */}
          <div className="absolute -top-6 right-0 sm:-right-10 z-10 scale-75 md:scale-100">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] uppercase font-bold tracking-[2px] fill-[#0ABAB5]">
                  <textPath xlinkHref="#circlePath">
                    Innovative Minds • Building Future • Friendly Team • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Statistik ko'rsatkich */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 flex items-center justify-center sm:justify-start gap-4"
          >
            <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">10+</span>
            <div className="text-[#0ABAB5] font-bold text-xs md:text-sm tracking-widest uppercase leading-tight">
              Years of <br /> Digital Mastery
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="text-white order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[1px] bg-[#0ABAB5]" />
            <span className="text-[#0ABAB5] text-[10px] md:text-xs font-black tracking-[4px] uppercase">
              Our Identity
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 md:mb-10 leading-[1] md:leading-[0.9]">
            Architects of <br /> <span className="text-[#0ABAB5]">Digital Value</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-xl">
            Biz shunchaki kod yozmaymiz, biz sizning g'oyalaringizni barqaror raqamli ekotizimga aylantiramiz. 
            Omnitech jamoasi xalqaro tajriba va innovatsion yondashuvni birlashtirib, 
            global miqyosdagi murakkab biznes muammolaringizga zamonaviy yechimlar topadi.
          </p>

          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-[#0ABAB5] font-bold uppercase text-xs tracking-wider mb-2">Our Vision</h4>
              <p className="text-gray-500 text-sm">Dunyo miqyosidagi texnologik inqilobning bir qismi bo'lish.</p>
            </div>
            <div>
              <h4 className="text-[#0ABAB5] font-bold uppercase text-xs tracking-wider mb-2">Our Mission</h4>
              <p className="text-gray-500 text-sm">Biznesingizni aqlli va avtomatlashgan tizimlar bilan ta'minlash.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;