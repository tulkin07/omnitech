"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // optional icon, react-icons kerak bo'ladi

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-[50px] h-[50px] flex items-center justify-center bg-[#0ABAB5] text-white rounded-md shadow-lg hover:bg-[#09a9a0] transition-colors z-500 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
