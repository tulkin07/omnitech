"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Elena Petrova",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974",
    social: { linkedin: "#", twitter: "#", github: "#" }
  }
];

export default function Team() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ABAB5]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[4px] uppercase">The Visionaries</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
              Meet The <br /> 
              <span className="text-[#0ABAB5]">Minds Behind.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-[320px] leading-relaxed border-l border-white/10 pl-6">
            Our leadership team brings decades of global experience, driving the next wave of digital evolution.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[28px] overflow-hidden bg-[#0D0D0D] border border-white/5 cursor-crosshair"
            >
              {/* Image Layer */}
              <div className="absolute inset-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
              </div>

              {/* Top Right "Action" Icon */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                 <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                   <ArrowUpRight size={18} className="text-[#0ABAB5]" />
                 </div>
              </div>

              {/* Information Content */}
              <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#0ABAB5] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-black tracking-[3px] uppercase mb-6">
                    {member.role}
                  </p>

                  {/* Social Links Reveal */}
                  <div className="flex items-center gap-5 h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <a href={member.social.linkedin} className="text-white hover:text-[#0ABAB5] transition-colors">
                      <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-[#0ABAB5] transition-colors">
                      <Twitter size={18} strokeWidth={1.5} />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-[#0ABAB5] transition-colors">
                      <Github size={18} strokeWidth={1.5} />
                    </a>
                  </div>

                  {/* Creative Line Animation */}
                  <div className="mt-4 w-0 h-[1px] bg-gradient-to-r from-[#0ABAB5] to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              {/* Interactive Glow Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#0ABAB5]/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">
            Want to join our vision? <span className="text-white cursor-pointer hover:text-[#0ABAB5] underline underline-offset-8 transition-colors ml-2">Check open positions</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}