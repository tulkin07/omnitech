"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users, Rocket, Globe, Award, Briefcase,
  Cpu, BarChart3, Fingerprint, Layers
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
    <section className="bg-[#050505] py-24 sm:py-24 lg:py-32 px-4 sm:px-6 text-white font-sans selection:bg-[#0ABAB5]/30">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6 lg:mb-8 text-[#0ABAB5]">
              <div className="w-12 h-[1px] bg-current" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[6px]">
                Omnitech Ecosystem
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] lg:leading-[0.85]">
              Defining Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Standards.
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed border-l-4 border-[#0ABAB5] pl-6 sm:pl-8 lg:pl-10 max-w-xl mt-6">
              OMNITECH is a premier technology conglomerate specializing in high-load software engineering. We bridge the gap between complex business logic and seamless user experiences through rigorous engineering and international quality standards.
            </p>
          </motion.div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0D0D0D] border border-white/5 p-8 sm:p-10 rounded-[20px] hover:bg-[#111] hover:border-[#0ABAB5]/30 transition-all group"
              >
                <div className="text-gray-500 group-hover:text-[#0ABAB5] mb-6 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mb-24 lg:mb-40">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 lg:mb-16 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
              Technical Proficiency
            </h2>
            <div className="text-gray-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[4px]">
              OMNITECH Core / 2026
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 lg:p-12 bg-[#0D0D0D] border border-white/5 rounded-[28px]"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 lg:mb-10">
                  {cap.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 uppercase tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-24 lg:mb-40">
          <div className="lg:col-span-8 bg-[#0D0D0D] border border-white/5 p-8 sm:p-12 lg:p-16 rounded-[20px] relative overflow-hidden">
            <Layers className="absolute -right-20 -bottom-20 text-white/[0.02]" size={300} />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 uppercase tracking-tighter">
              Strategic Roadmap
            </h3>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
              Our objective is the total systematization of business environments...
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Cloud Native", "FinTech", "Scalability", "Security"].map(tag => (
                <div
                  key={tag}
                  className="py-3 px-4 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-center"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#0ABAB5] p-8 sm:p-12 lg:p-16 rounded-[20px] text-black flex flex-col justify-between">
            <div>
              <Award size={44} className="mb-6" />
              <h3 className="text-2xl lg:text-3xl font-black uppercase mb-4">
                Intelligence Award 2024
              </h3>
              <p className="font-bold text-sm opacity-90">
                Ranked as the most innovative tech firm in the regional Business Intelligence Summit.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-black/10 text-[9px] font-black uppercase tracking-widest">
              Verified / Excellence
            </div>
          </div>
        </div>

        {/* GLOBAL */}
        <div className="bg-[#0D0D0D] border border-white/5 rounded-[30px] p-10 sm:p-16 lg:p-24 text-center">
          <Globe className="mx-auto text-[#0ABAB5] mb-10" size={56} />
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8 uppercase tracking-tighter">
            International <br /> Expansion
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-base lg:text-lg">
            OMNITECH maintains strategic memorandums with global partners...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Singapore Alliance", "SAS Ecosystem", "ISO 27001", "PMP Framework"].map(item => (
              <span
                key={item}
                className="px-6 sm:px-10 py-3 sm:py-4 bg-black rounded-full text-[9px] font-black uppercase tracking-[4px] border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
