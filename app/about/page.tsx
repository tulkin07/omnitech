"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users, Target, Rocket, Shield, Globe, Award, Briefcase, Zap, 
  Cpu, Code2, Database, Layout, BarChart3, Fingerprint, Layers
} from "lucide-react";

const stats = [
  { label: "Global Deployments", value: "120+", icon: <Rocket size={24} /> },
  { label: "Engineering Lead", value: "18 Yrs", icon: <Briefcase size={24} /> },
  { label: "Elite Developers", value: "75+", icon: <Users size={24} /> },
  { label: "Strategic Alliances", value: "10+", icon: <Globe size={24} /> },
];

const capabilities = [
  {
    title: "FinTech Architecture",
    desc: "Developing secure, high-concurrency payment gateways and ledger systems that handle millions of transactions with zero latency.",
    icon: <BarChart3 className="text-[#0ABAB5]" />
  },
  {
    title: "Enterprise Automation",
    desc: "Implementing SAS and ERP solutions that streamline organizational workflows, reducing operational costs by up to 40%.",
    icon: <Cpu className="text-[#0ABAB5]" />
  },
  {
    title: "AI & Data Analytics",
    desc: "Leveraging machine learning models to provide predictive insights and data-driven decision-making for complex business environments.",
    icon: <Fingerprint className="text-[#0ABAB5]" />
  }
];

export default function About() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white font-sans selection:bg-[#0ABAB5]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HERO SECTION: CORPORATE IDENTITY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-8 text-[#0ABAB5]">
              <div className="w-12 h-[2px] bg-current" />
              <span className="text-[11px] font-black uppercase tracking-[6px]">Omnitech Ecosystem</span>
            </div>
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Defining Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Standards.
              </span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed border-l-4 border-[#0ABAB5] pl-10 max-w-xl mt-4">
              OMNITECH is a premier technology conglomerate specializing in high-load software engineering. We bridge the gap between complex business logic and seamless user experiences through rigorous engineering and international quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#0D0D0D] border border-white/5 p-10 rounded-[20px] hover:bg-[#111] hover:border-[#0ABAB5]/30 transition-all group">
                <div className="text-gray-500 group-hover:text-[#0ABAB5] mb-6 transition-colors">{stat.icon}</div>
                <div className="text-4xl font-black mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TECHNOLOGY STACK & EXPERTISE --- */}
        <div className="mb-40">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tight">Technical Proficiency</h2>
            <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[4px]">OMNITECH Core / 2026</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-12 bg-[#0D0D0D] border border-white/5 rounded-[28px] relative overflow-hidden group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0ABAB5]/10 transition-all">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight text-white">{cap.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- STRATEGIC MISSION & RECOGNITION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-40">
          <div className="lg:col-span-8 bg-[#0D0D0D] border border-white/5 p-16 rounded-[20px] relative overflow-hidden">
            <Layers className="absolute -right-20 -bottom-20 text-white/[0.02]" size={400} />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Strategic Roadmap</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
                Our objective is the total systematization of business environments. We utilize a proprietary development lifecycle that integrates Continuous Integration (CI/CD) with PMP-certified project management to ensure every deployment is a benchmark of reliability.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Cloud Native", "FinTech", "Scalability", "Security"].map((tag) => (
                  <div key={tag} className="py-3 px-6 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-[#0ABAB5] p-16 rounded-[20px] text-black flex flex-col justify-between">
            <div>
              <Award size={50} strokeWidth={2.5} className="mb-8" />
              <h3 className="text-3xl font-black uppercase leading-none mb-6">Intelligence Award 2024</h3>
              <p className="font-bold text-sm opacity-90 leading-relaxed">
                Ranked as the most innovative tech firm in the regional Business Intelligence Summit.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-black/10 text-[10px] font-black uppercase tracking-widest">
              Verified / Excellence
            </div>
          </div>
        </div>

        {/* --- GLOBAL PARTNERSHIP & INFRASTRUCTURE --- */}
        <div className="bg-[#0D0D0D] border border-white/5 rounded-[30px] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(10,186,181,0.1)_0%,_transparent_70%)] opacity-50" />
          <Globe className="mx-auto text-[#0ABAB5] mb-12 opacity-80" size={64} />
          <h2 className="text-5xl md:text-7xl font-black mb-10 relative z-10 uppercase tracking-tighter">
            International <br /> Expansion
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-16 relative z-10 text-lg leading-relaxed">
            OMNITECH maintains strategic memorandums with Singaporean technology hubs and global SAS providers. By adhering to ISO and PMI standards, we export high-end software solutions to the global market, ensuring that our infrastructure is resilient and borderless.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Singapore Alliance", "SAS Ecosystem", "ISO 27001", "PMP Framework"].map((item) => (
              <span key={item} className="px-10 py-4 bg-black rounded-full text-[10px] font-black uppercase tracking-[4px] border border-white/10 group hover:border-[#0ABAB5] transition-all cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}