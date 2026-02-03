"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Cpu,
  Smartphone,
  ShieldCheck,
  Layout,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Software Engineering",
    description:
      "We architect high-performance ecosystems using Microservices and Next.js, designed for complex enterprise requirements.",
    icon: <Globe strokeWidth={1.5} />,
    tags: ["Custom Enterprise", "Next.js Ecosystem", "High-Performance APIs"],
    subTitle: "Scalable Systems",
  },
  {
    title: "Mobile Ecosystems",
    description:
      "Engineering fluid native and cross-platform applications for iOS and Android with a focus on performance and intuitive UX.",
    icon: <Smartphone strokeWidth={1.5} />,
    tags: ["Real-time Data Sync", "Biometric Security", "Custom Animations"],
    subTitle: "Native Experience",
  },
  {
    title: "UX/UI Architecture",
    description:
      "Psychology-driven design that ensures seamless navigation. We transform user interactions into meaningful experiences.",
    icon: <Layout strokeWidth={1.5} />,
    tags: ["User Behavior Analysis", "Atomic Design", "Interactive Prototypes"],
    subTitle: "Design Systems",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Optimizing business infrastructure on AWS and Azure. We automate deployment pipelines and reduce costs by up to 40%.",
    icon: <Zap strokeWidth={1.5} />,
    tags: ["Zero-Downtime", "Kubernetes", "Cloud Governance"],
    subTitle: "DevOps & CI/CD",
  },
  {
    title: "Cyber Security",
    description:
      "Securing your digital assets with advanced penetration testing, end-to-end encryption, and security audits.",
    icon: <ShieldCheck strokeWidth={1.5} />,
    tags: ["Threat Detection", "Regulatory Compliance", "Incident Response"],
    subTitle: "Data Integrity",
  },
  {
    title: "Data Intelligence & AI",
    description:
      "Leveraging machine learning and predictive analytics to transform raw data into a strategic business tool.",
    icon: <Cpu strokeWidth={1.5} />,
    tags: ["ML Model Training", "Data Warehousing", "Predictive Analytics"],
    subTitle: "Neural Networks",
  },
];

export default function Services() {
  return (
    <section className="bg-[#050505] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-16 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[4px] uppercase">
                Expertise & Solutions
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              Elite Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Services.
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-md border-l border-[#0ABAB5]/30 pl-6 lg:pl-8">
            We deliver cutting-edge technical solutions that merge aesthetic
            perfection with architectural integrity.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-[#0D0D0D] p-6 sm:p-8 lg:p-12 min-h-[420px] lg:min-h-[540px]
                         flex flex-col justify-between rounded-2xl border border-white/10
                         hover:border-[#0ABAB5]/50 transition-all duration-500 overflow-hidden"
            >
              {/* BG NUMBER */}
              <span className="absolute -right-4 -bottom-8 text-[120px] sm:text-[160px] lg:text-[240px]
                               font-black text-white/[0.03] pointer-events-none">
                {i + 1}
              </span>

              {/* TOP */}
              <div className="flex justify-between">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/20 flex items-center justify-center
                                group-hover:text-[#0ABAB5] group-hover:border-[#0ABAB5] transition">
                  {React.cloneElement(service.icon, { size: 22 })}
                </div>
                <span className="text-[10px] tracking-[3px] text-[#0ABAB5]/60 uppercase">
                  {service.subTitle}
                </span>
              </div>

              {/* CONTENT */}
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#0ABAB5] transition">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#0ABAB5]" />
                      <span className="text-[10px] tracking-widest uppercase text-gray-400">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[10px] tracking-[3px] uppercase">
                <span className="text-white/40 group-hover:text-white transition">
                  Explore Solution
                </span>
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                                group-hover:bg-[#0ABAB5] group-hover:text-black transition">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
