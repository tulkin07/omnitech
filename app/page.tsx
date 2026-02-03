"use client";
import React from "react";
import Hero from "@/components/Hero";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import About from "@/components/About";
import OurMission from "@/components/OurMission";
import WhatWeDo from "@/components/WhatWeDo";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Portfolio from "@/components/Portfolio";
const Badge = ({ text }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="inline-block border border-[#0ABAB5]/30 px-4 py-1.5 rounded-full mb-6 bg-[#0ABAB5]/5 backdrop-blur-md"
  >
    <span className="text-[10px] tracking-[3px] text-[#0ABAB5] uppercase font-bold">
      {text}
    </span>
  </motion.div>
);
export default function HomePage() {
  const statsData = [
    { value: "10+", label: "YEARS EXPERIENCE", icon: "◈" },
    { value: "500+", label: "PROJECTS DELIVERED", icon: "⌬" },
    { value: "98%", label: "CLIENT SUCCESS", icon: "◇" },
    { value: "24/7", label: "GLOBAL SUPPORT", icon: "⊕" },
  ];
  const coreValues = [
    "Innovation First",
    "Radical Transparency",
    "User-Centric Design",
    "Sustainable Code",
  ];
  const services = [
    {
      title: "Cloud Architecture",
      description:
        "Scalable, resilient cloud infrastructure design using AWS, Azure, and Google Cloud platforms.",
      icon: "🌐",
    },
    {
      title: "Cybersecurity",
      description:
        "Bank-grade security protocols, penetration testing, and 24/7 threat monitoring systems.",
      icon: "🛡️",
    },
    {
      title: "AI & Automation",
      description:
        "Leveraging machine learning models to automate complex business workflows and data analysis.",
      icon: " </> ",
    },
  ];
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", // O'zingizni rasm manzilingizni qo'ying
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Michael Ross",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Architect",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974&auto=format&fit=crop",
    },
  ];
  const values = [
    {
      title: "Innovation",
      description:
        "Continuously pushing boundaries with fresh ideas and groundbreaking solutions.",
      icon: "💡",
      color: "#0ABAB5",
    },
    {
      title: "Excellence",
      description:
        "Commitment to delivering superior quality and exceptional results in every project.",
      icon: "📈",
      color: "#F59E0B", // Excellence uchun biroz iliqroq rang (rasmdagidek)
    },
    {
      title: "Integrity",
      description:
        "Operating with honesty, transparency, and ethical practices in all our endeavors.",
      icon: "🛡️",
      color: "#10B981",
    },
  ];
  return (
    <main>
      <Hero />
      <section className="relative z-[110] bg-[#050505] border-t border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 sm:gap-y-12 md:gap-y-0">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center sm:items-center md:items-start px-6 sm:px-10 ${
                i !== statsData.length - 1 ? "md:border-r border-white/10" : ""
              }`}
            >
              {/* Icon */}
              <span className="text-[#0ABAB5] text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-60">
                {stat.icon}
              </span>

              {/* Value */}
              <h2 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3 tracking-tighter text-white">
                {stat.value}
              </h2>

              {/* Label */}
              <p className="text-gray-500 text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[3px] uppercase text-center md:text-left">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <About />
      <OurMission />
      <WhatWeDo />
      <Team />
      <Vision />
      <Portfolio />
      <section className="bg-[#050505] py-24 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-7xl bg-[#0D0D0D] border border-white/5 rounded-[28px] p-12 md:p-24 overflow-hidden text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* FON EFFEKTI (Tiffany Glow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#0ABAB5]/20 via-[#7C3AED]/10 to-[#0ABAB5]/10 blur-[120px] rounded-full pointer-events-none" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
              Ready to Transform <br /> Your Digital Future?
            </h2>

            <p className="text-gray-500 text-base md:text-lg max-w-3xl mb-12 leading-relaxed">
              Let’s build something extraordinary together. Reach out to our
              experts and discover how OmniTech can elevate your business with
              bespoke technological solutions.
            </p>  
            <div className="flex items-center justify-center">
              <Button
                className="py-3 sm:py-4 px-6 sm:px-10"
                text="Get in Touch"
              />
            </div>
          </div>

          {/* DEKORATIV ELEMENTLAR */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#0ABAB5]/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-[#7C3AED]/20 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-5 h-5 bg-[#0ABAB5]/10 rounded-full animate-ping" />
          <div className="absolute bottom-24 left-24 w-4 h-4 bg-[#7C3AED]/10 rounded-full animate-ping" />
        </motion.div>
      </section>
    </main>
  );
}
