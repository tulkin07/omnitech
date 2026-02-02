"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import Link from "next/link";

const footerLinks = {
  company: ["About Us", "Careers", "Partners", "News"],
  services: [
    "Cloud Solutions",
    "Cybersecurity",
    "AI Development",
    "Consulting",
  ],
  resources: ["Blog", "Case Studies", "Whitepapers", "Support"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const TIF = "#0ABAB5";

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* MARKAZDAGI DEKORATIV NUR (Rasmdagi kabi) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0ABAB5] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* BRANDING VA DESCRIPTION */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-2 z-[110]">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-[#0ABAB5] rounded-lg rotate-45 group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 w-8 h-8 bg-[#0ABAB5]/20 blur-md rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                OMNI<span style={{ color: TIF }}>TECH</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs pt-2">
              Pioneering the future of technology with innovative solutions. We
              build digital experiences that empower businesses to thrive in a
              connected world.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-5">
              {[FaTwitter, FaLinkedin, FaGithub, FaDribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-[#0ABAB5] transition-colors text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* NAV LINKS (Rasmdagi tartibda) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
            <div>
              <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[12px]">
            © {currentYear} OmniTech Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-600 text-[12px] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 text-[12px] hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
