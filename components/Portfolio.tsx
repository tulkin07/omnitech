"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
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
    icon: <Monitor size={20} />,
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
    icon: <Smartphone size={20} />,
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
    icon: <Code2 size={20} />,
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
    icon: <ShieldCheck size={20} />,
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
    icon: <ExternalLink size={20} />,
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
    icon: <Cpu size={20} />,
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#050505] py-32 px-6 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[4px] uppercase">
                Selected Works
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-gray-500">
                Masterpieces.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-[300px] leading-relaxed border-l border-white/10 pl-6">
            We don't just build software; we craft digital experiences that
            redefine industry standards and user engagement.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative rounded-[50px] overflow-hidden border border-white/5 bg-[#0D0D0D] transition-all duration-700 hover:border-[#0ABAB5]/30 ${
                project.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 opacity-30 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Action Buttons */}
              <div className="absolute top-10 right-10 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                <a
                  href={project.github}
                  className="p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-[#0ABAB5] hover:text-black transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.link}
                  className="p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-[#0ABAB5] hover:text-black transition-all"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Content Layer */}
              <div className="absolute bottom-0 left-0 p-12 w-full z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="text-[#0ABAB5] bg-[#0ABAB5]/10 p-3 rounded-2xl border border-[#0ABAB5]/20">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-[#0ABAB5] text-[10px] font-black uppercase tracking-[3px] opacity-80">
                  {project.category}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0ABAB5]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* <button className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-full border border-white/10">
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-white group-hover:text-black font-black text-xs uppercase tracking-[5px] transition-colors">
              View All Archives
            </span>
          </button> */}
          <Link href={"/portfolio"}>
            <Button className="py-4 px-10" text="    View All Archives" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
