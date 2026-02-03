"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Code2, Layers, Cpu, Shield } from "lucide-react";

// 15 ta loyiha ma'lumotlari
const projects = [
  { title: "Quantum Banking", category: "Fintech", size: "large", icon: <Layers size={20}/>, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
  { title: "EcoTrack", category: "Mobile", size: "small", icon: <Smartphone size={20}/>, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800" },
  { title: "Neural Mesh", category: "AI", size: "small", icon: <Cpu size={20}/>, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800" },
  { title: "Cyber Shield", category: "Security", size: "medium", icon: <Shield size={20}/>, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" },
  { title: "Omni Store", category: "E-comm", size: "medium", icon: <Globe size={20}/>, image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800" },
  { title: "Cloud Scale", category: "DevOps", size: "small", icon: <Code2 size={20}/>, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" },
  { title: "Holo UI", category: "Design", size: "large", icon: <Layers size={20}/>, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800" },
  { title: "Vision AI", category: "ML", size: "small", icon: <Cpu size={20}/>, image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800" },
  { title: "Swift Pay", category: "Fintech", size: "small", icon: <Smartphone size={20}/>, image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
  { title: "Vault OS", category: "Security", size: "medium", icon: <Shield size={20}/>, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800" },
  { title: "Meta Hub", category: "Web3", size: "medium", icon: <Globe size={20}/>, image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800" },
  { title: "Bio Metrics", category: "App", size: "small", icon: <Smartphone size={20}/>, image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800" },
  { title: "Orbit Dash", category: "SaaS", size: "large", icon: <Layers size={20}/>, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
  { title: "Graph Engine", category: "Data", size: "small", icon: <Code2 size={20}/>, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
  { title: "Z-Crypt", category: "Crypto", size: "small", icon: <Shield size={20}/>, image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800" },
];

export default function Portfolio() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[6px] uppercase">Live Archive</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Portfolio.
              </span>
            </h2>
          </div>
        </div>

        {/* MASONRY BENTO GRID - DEFAULT ACTIVE STATE */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 5) * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[20px] overflow-hidden border border-[#0ABAB5]/30 bg-[#0D0D0D] transition-all duration-500 hover:scale-[0.98] hover:border-white/20
                ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${project.size === "medium" ? "md:col-span-2 md:row-span-1" : ""}
                ${project.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
              `}
            >
              {/* Active Image Layer (Not Grayscale) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-30 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Background Number (Visible by Default) */}
              <span className="absolute top-8 right-8 text-[60px] font-black text-[#0ABAB5]/10 select-none pointer-events-none">
                {(i + 1).toString().padStart(2, '0')}
              </span>

              {/* Content Layer (Always Visible) */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#0ABAB5] text-black flex items-center justify-center shadow-[0_0_20px_rgba(10,186,181,0.4)]">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[4px] text-[#0ABAB5]">{project.category}</span>
                    <div className="h-[1px] w-8 bg-[#0ABAB5]/50" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Permanent Glow */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0ABAB5]/10 blur-[60px] rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="mt-20 flex justify-center">
            <button className="px-14 py-6 bg-white text-black font-black text-xs uppercase tracking-[5px] rounded-full hover:bg-[#0ABAB5] hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                Load More Projects
            </button>
        </div>
      </div>
    </section>
  );
}