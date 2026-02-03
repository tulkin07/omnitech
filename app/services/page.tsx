"use client";
import React from 'react';
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  ShieldCheck, 
  Layout, 
  Zap,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    title: "Software Engineering",
    description: "We architect high-performance ecosystems using Microservices and Next.js, designed for complex enterprise requirements.",
    icon: <Globe strokeWidth={1.5} />,
    tags: ["Custom Enterprise", "Next.js Ecosystem", "High-Performance APIs"],
    subTitle: "Scalable Systems"
  },
  {
    title: "Mobile Ecosystems",
    description: "Engineering fluid native and cross-platform applications for iOS and Android with a focus on performance and intuitive UX.",
    icon: <Smartphone strokeWidth={1.5} />,
    tags: ["Real-time Data Sync", "Biometric Security", "Custom Animations"],
    subTitle: "Native Experience"
  },
  {
    title: "UX/UI Architecture",
    description: "Psychology-driven design that ensures seamless navigation. We transform user interactions into meaningful experiences.",
    icon: <Layout strokeWidth={1.5} />,
    tags: ["User Behavior Analysis", "Atomic Design", "Interactive Prototypes"],
    subTitle: "Design Systems"
  },
  {
    title: "Cloud Infrastructure",
    description: "Optimizing business infrastructure on AWS and Azure. We automate deployment pipelines and reduce costs by up to 40%.",
    icon: <Zap strokeWidth={1.5} />,
    tags: ["Zero-Downtime", "Kubernetes", "Cloud Governance"],
    subTitle: "DevOps & CI/CD"
  },
  {
    title: "Cyber Security",
    description: "Securing your digital assets with advanced penetration testing, end-to-end encryption, and security audits.",
    icon: <ShieldCheck strokeWidth={1.5} />,
    tags: ["Threat Detection", "Regulatory Compliance", "Incident Response"],
    subTitle: "Data Integrity"
  },
  {
    title: "Data Intelligence & AI",
    description: "Leveraging machine learning and predictive analytics to transform raw data into a strategic business tool.",
    icon: <Cpu strokeWidth={1.5} />,
    tags: ["ML Model Training", "Data Warehousing", "Predictive Analytics"],
    subTitle: "Neural Networks"
  }
];

export default function Services() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white font-sans selection:bg-[#0ABAB5]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[5px] uppercase">Expertise & Solutions</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Elite Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Services.
              </span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md border-l border-[#0ABAB5]/30 pl-8">
              We deliver cutting-edge technical solutions that merge aesthetic perfection with architectural integrity.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0D0D0D] p-12 h-[540px] flex flex-col justify-between 
                         rounded-[20px] border border-white/10 transition-all duration-500 
                         hover:border-[#0ABAB5]/50 hover:shadow-[0_0_30px_rgba(10,186,181,0.1)] 
                         overflow-hidden"
            >
              {/* XL BLURRED BACKGROUND NUMBER */}
              <span className="absolute -right-4 -bottom-10 text-[240px] font-black text-white/[0.03] select-none pointer-events-none blur-[2px] group-hover:blur-0 group-hover:text-[#0ABAB5]/[0.05] transition-all duration-1000">
                {i + 1}
              </span>

              {/* Top: Icon and Subtitle */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/20 text-white group-hover:border-[#0ABAB5] group-hover:text-[#0ABAB5] transition-all duration-500 bg-[#121212]">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <span className="text-[10px] font-mono tracking-[4px] text-[#0ABAB5]/60 uppercase">
                  {service.subTitle}
                </span>
              </div>

              {/* Middle: Content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-[#0ABAB5] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px] max-w-[95%]">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3">
                  {service.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#0ABAB5]/50 group-hover:bg-[#0ABAB5]" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 group-hover:text-gray-300">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Action Link */}
              <div className="relative z-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[3px] text-white/40 group-hover:text-white transition-all cursor-pointer">
                  <span>Explore Solution</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#0ABAB5] group-hover:border-[#0ABAB5] group-hover:text-black transition-all duration-500">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Background Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 flex flex-col items-center"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#0ABAB5] to-transparent mb-12" />
          <p className="text-[#0ABAB5] text-[10px] font-bold tracking-[10px] uppercase mb-8">Initiate Transformation</p>
          <button className="group relative py-8 px-20 rounded-full border border-white/10 hover:border-[#0ABAB5]/30 transition-all duration-500 bg-transparent overflow-hidden">
             <span className="relative z-10 text-xs font-black tracking-[5px] uppercase group-hover:text-white transition-colors">
               Start a Project
             </span>
             <div className="absolute inset-0 bg-[#0ABAB5]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}