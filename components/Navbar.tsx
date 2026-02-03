"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const TIF = "#0ABAB5";

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "about" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Career", href: "career" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(`/${href}`);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between relative">
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-2 z-[110]">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-[#0ABAB5] rounded-lg rotate-45 group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute inset-0 w-8 h-8 bg-[#0ABAB5]/20 blur-md rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              OMNI<span style={{ color: TIF }}>TECH</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md relative">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 uppercase ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0ABAB5] rounded-full z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex items-center gap-8">
            <Button />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-white z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed bottom-0 inset-0 bg-black h-screen flex flex-col justify-center items-center z-[100] text-white"
          >
            <div className="flex flex-col gap-4 text-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold transition-colors ${
                      isActive(link.href)
                        ? "text-[#0ABAB5]"
                        : "hover:text-[#0ABAB5]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
