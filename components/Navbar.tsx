"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const links = [
    { name: "О нас", href: "#" },
    { name: "Проекты", href: "#" },
    { name: "Команда", href: "#" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full text-white left-0 z-50 transition-all duration-300
      ${isFixed ? "fixed top-0 bg-gray-900 shadow-lg" : "relative mt-8"}`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="shrink-0 z-50">
            <Link href="#" className="text-2xl font-bold">
              OmniTech
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center mx-auto">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gray-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="hidden md:flex flex-shrink-0">
            <button className="border border-[#FDC448] hover:bg-[#FDC448] transition px-6 py-3 rounded-lg cursor-pointer text-[#FDC448] hover:text-white">
              Связаться
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex-shrink-0 z-50">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col justify-center items-center z-[100]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-8 text-2xl text-center">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="border border-[#FDC448] hover:bg-[#FDC448] transition px-6 py-3 rounded-lg cursor-pointer text-[#FDC448] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Связаться
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
