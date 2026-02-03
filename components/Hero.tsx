"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { Cpu, Database, Fingerprint, Network, ShieldCheck, ShieldCheckIcon } from "lucide-react";

export default function Hero() {
  const navLinks = ["About us", "Services", "Portfolio", "Career", "Blog"];

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* 1. TOP NAVIGATION (Rasmdagi kabi tartibda) */}

      {/* 2. BACKGROUND ELEMENTS (Asosiy Ark va Oqib turuvchi nur) */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        {/* Markazdagi Tifany Glow (Nur taralishi) */}
        <div className="absolute top-[10%] w-[600px] h-[400px] bg-[#0ABAB5] opacity-[0.15] blur-[120px] rounded-full" />

        {/* VERTIKAL OQIB TURUVCHI NUR (Nafas oluvchi animatsiya) */}
        <div className="absolute top-0 w-[120px] h-full flex justify-center z-10">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#0ABAB5] to-transparent opacity-50" />
          <motion.div
            animate={{
              y: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-[2px] h-[300px] bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>

        {/* ULKAN ARK (Sayyora cheti) */}
        <div className="absolute top-[28%] w-[1800px] h-[1800px] rounded-full bg-[#050505] border-t-[0.5px] border-[#0a2524] shadow-[0_-30px_100px_rgba(10,186,181,0.08)] z-20" />
      </div>

      {/* 3. CONTENT AREA */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        {/* Join Us Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 border border-white/10 px-4 py-1.5 rounded-full mb-10 bg-white/5 backdrop-blur-md cursor-pointer"
        >
          <span className="text-[10px] tracking-[3px] text-gray-400 uppercase">
            ✦ Join us for free world ✦
          </span>
        </motion.div>

        {/* Main Title (Rasmdagi font va o'lchamga yaqin) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-medium tracking-tight leading-[1.1] mb-8"
        >
          Architecting <br />
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="font-normal  bg-gradient-to-r from-gray-400 via-[#0ABAB5] to-gray-400 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
             The Digital Horizon.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-[11px] md:text-[13px] max-w-2xl mb-12 tracking-[2px] uppercase leading-relaxed">
        OmniTech empowers global enterprises with scalable, secure, and intelligent technology solutions designed for the next generation of business.
        </p>

        {/* CTA Button */}
        {/* <Button className="py-4 px-10" text="View Portfolio" />
        <Button className="py-4 px-10" text="View Portfolio" /> */}

        {/* 4. BOTTOM PANELS (Responsive Grid) */}
        <div className="absolute bottom-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {/* 98.2% Card */}
          <div className="bg-[#0a0a0a]/60 border border-white/5 p-8 rounded-[20px] backdrop-blur-2xl text-left border-b-0">
            <div className="text-4xl font-light mb-1">
              98.2% <span className="text-xs text-[#0ABAB5]">↗</span>
            </div>
            <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">
              Spots . WorldWide
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Innovative blockchain technology meets financial expertise to
              empower your investment journey.
            </p>
          </div>

          {/* Center Space (Kichik xarita o'rni) */}
          <div className="flex items-center justify-center">
             <Button className="py-4 px-10" text="View Portfolio" />
        {/* <Button className="py-4 px-10" text="View Portfolio" /> */}
            {/* <div className="w-20 h-20 rounded-full border border-[#0ABAB5]/20 flex items-center justify-center relative">
              <div className="w-1.5 h-1.5 bg-[#0ABAB5] rounded-full animate-ping shadow-[0_0_15px_#0ABAB5]" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20" />
            </div> */}
          </div>

          {/* Icons Card */}
          <div className="bg-[#0a0a0a]/60 border border-white/5 p-8 rounded-[20px] backdrop-blur-2xl flex flex-wrap gap-6 justify-center items-center">
  {[
    <Cpu size={18} strokeWidth={1.5} />, 
    <Fingerprint size={18} strokeWidth={1.5} />, 
    <Network size={18} strokeWidth={1.5} />, 
    <Database size={18} strokeWidth={1.5} />, 
    <ShieldCheckIcon size={18} strokeWidth={1.5} />
  ].map((icon, i) => (
    <div
      key={i}
      className="group w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center hover:text-gray-600 text-[#0ABAB5] hover:border-[#0ABAB5]/30 hover:bg-[#0ABAB5]/5 transition-all duration-500 cursor-none"
    >
      <div className="group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700">
        {icon}
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* Grainy Texture (Rasmdagi o'sha sifatli shovqin effekti) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
