"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { Cpu, Database, Fingerprint, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const navLinks = ["About us", "Services", "Portfolio", "Career", "Blog"];

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        {/* Center Glow */}
        <div className="absolute top-[10%] w-60 sm:w-[400px] md:w-[600px] h-40 sm:h-[300px] md:h-[400px] bg-[#0ABAB5] opacity-[0.15] blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full" />

        {/* Vertical Light Beam */}
        <div className="absolute top-0 w-[60px] sm:w-[80px] md:w-[120px] h-full flex justify-center z-10">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#0ABAB5] to-transparent opacity-50" />
          <motion.div
            animate={{
              y: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-[1px] sm:w-[2px] md:w-[2px] h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>

        {/* Giant Arc */}
        <div className="absolute top-[28%] w-[1200px] sm:w-[1500px] md:w-[1800px] h-[1200px] sm:h-[1500px] md:h-[1800px] rounded-full bg-[#050505] border-t-[0.5px] border-[#0a2524] shadow-[0_-30px_100px_rgba(10,186,181,0.08)] z-20" />
      </div>

      {/* CONTENT AREA */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 pt-20">
        {/* Join Us Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 border border-white/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-8 sm:mb-10 bg-white/5 backdrop-blur-md cursor-pointer"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-gray-400 uppercase">
            ✦ Join us for free world ✦
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6 sm:mb-8"
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
            className="font-normal bg-gradient-to-r from-gray-400 via-[#0ABAB5] to-gray-400 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            The Digital Horizon.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[13px] max-w-xs sm:max-w-xl md:max-w-2xl mb-8 sm:mb-12 tracking-[1px] sm:tracking-[2px] uppercase leading-relaxed">
          OmniTech empowers global enterprises with scalable, secure, and
          intelligent technology solutions designed for the next generation of
          business.
        </p>

        {/* CTA Button */}
        {/* <Button className="py-3 sm:py-4 px-6 sm:px-10 mb-10" text="View Portfolio" /> */}

        {/* BOTTOM PANELS */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-10 bg-[#050505]">
          {/* 98.2% Card */}
          <div className="bg-[#0a0a0a]/60 border border-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-2xl text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-light mb-1">
              98.2% <span className="text-xs sm:text-sm text-[#0ABAB5]">↗</span>
            </div>
            <div className="text-gray-500 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-3 sm:mb-4">
              Spots . WorldWide
            </div>
            <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed">
              Innovative blockchain technology meets financial expertise to
              empower your investment journey.
            </p>
          </div>

          {/* Center Button */}
          <div className="flex items-center justify-center">
            <Link href="/portfolio">
              <Button
                className="py-3 sm:py-4 px-6 sm:px-10"
                text="View Portfolio"
              />
            </Link>
          </div>

          {/* Icons Card */}
          <div className="bg-[#0a0a0a]/60 border border-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-2xl flex flex-wrap gap-3 sm:gap-6 justify-center items-center">
            {[Cpu, Fingerprint, Network, Database, ShieldCheck].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="group w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center hover:text-gray-600 text-[#0ABAB5] hover:border-[#0ABAB5]/30 hover:bg-[#0ABAB5]/5 transition-all duration-500 cursor-pointer"
                >
                  <div className="group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700">
                    <Icon size={14} sm={18} strokeWidth={1.5} />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Grainy Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
