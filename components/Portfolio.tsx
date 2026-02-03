"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code2,
  Monitor,
  Smartphone,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";

const projects = [
  {
    title: "Quantum Banking UI",
    category: "Fintech Solution",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    link: "https://example.com",
    github: "#",
    size: "large",
    tags: ["React", "D3.js"],
    icon: <Monitor size={18} />,
  },
  {
    title: "EcoTrack App",
    category: "Mobile Design",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    link: "https://example.com",
    github: "#",
    size: "small",
    tags: ["Flutter"],
    icon: <Smartphone size={18} />,
  },
  {
    title: "AI Neural Network",
    category: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    link: "https://example.com",
    github: "#",
    size: "small",
    tags: ["Python", "TensorFlow"],
    icon: <Code2 size={18} />,
  },
  {
    title: "Cyber Security Hub",
    category: "Security Platform",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    link: "https://example.com",
    github: "#",
    size: "small",
    tags: ["Go", "Next.js"],
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Omni Store Pro",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
    link: "https://example.com",
    github: "#",
    size: "large",
    tags: ["Node.js", "Stripe"],
    icon: <ExternalLink size={18} />,
  },
  {
    title: "Smart Home OS",
    category: "IoT Systems",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070",
    link: "https://example.com",
    github: "#",
    size: "small",
    tags: ["C++", "Vue.js"],
    icon: <Cpu size={18} />,
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#050505] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] tracking-[4px] uppercase font-bold">
                Selected Works
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-gray-500">
                Masterpieces.
              </span>
            </h2>
          </div>

          <p className="text-gray-500 text-sm max-w-sm border-l border-white/10 pl-6 mt-4 lg:mt-0">
            We craft digital experiences that redefine industry standards and
            user engagement.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px] sm:auto-rows-[300px] lg:auto-rows-[350px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0D0D0D]
                hover:border-[#0ABAB5]/30 transition-all duration-700
                ${project.size === "large" ? "lg:col-span-2" : ""}`}
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale lg:group-hover:grayscale-0
                           transition-all duration-1000 opacity-40 lg:group-hover:opacity-100 lg:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* ACTIONS (hover faqat desktopda) */}
              <div className="absolute top-4 right-4 flex gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#0ABAB5] hover:text-black transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#0ABAB5] hover:text-black transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 sm:p-8 z-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="p-2 bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 rounded-xl text-[#0ABAB5]">
                    {project.icon}
                  </div>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#0ABAB5] text-[10px] uppercase tracking-[3px]">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="mt-20 flex justify-center" whileInView={{ opacity: 1 }}>
          <Link href="/portfolio">
            <Button text="View All Archives" className="px-10 py-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
