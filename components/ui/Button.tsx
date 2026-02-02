"use client";
import React from "react";
import { motion } from "framer-motion";

// Props turlari (TypeScript ishlatayotgan bo'lsangiz foydali)
interface CreativeButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({ 
  text = "Get Started", 
  onClick, 
  className = "", 
  type = "button",
  disabled = false 
}: CreativeButtonProps) {
  
  const TIF = "#0ABAB5";

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      
      // 1. Hover & Tap (Zoom) animatsiyalari
      whileHover={!disabled ? { 
        scale: 1.05, 
        boxShadow: `0px 0px 25px 5px rgba(10, 186, 181, 0.4)`,
      } : {}}
      whileTap={!disabled ? { scale: 0.95, y: 2 } : {}}
      
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15 
      }}

      // ClassName prop orqali tashqaridan stil berish imkoniyati
      className={`relative overflow-hidden group px-6 py-3 bg-white text-black rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed  z-1 ${className}`}
    >
      {/* 2. Tugma ichidagi matn */}
      <span className="relative z-10 transition-colors duration-300">
        {text}
      </span>

      {/* 3. Strelka animatsiyasi */}
      <motion.span 
        className="relative z-10"
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        →
      </motion.span>

      {/* 4. HOVER EFFECT: Tifany rangidagi to'lqin */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="absolute inset-0 opacity-[0.2]"
          style={{ backgroundColor: TIF }}
        />
      </div>

      {/* 5. GLINT (Nur) EFFECT: Yaltirab o'tish */}
      <motion.div
        initial={{ x: "-150%", skewX: "-45deg" }}
        whileHover={{ x: "150%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent z-20"
      />

      {/* 6. BORDER GLOW */}
      <div 
        className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#0ABAB5]/40 transition-all duration-300"
      />

      {/* 7. CLICK RIPPLE EFFECT (Mantiqiy Click bo'lganda ko'rinadi) */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 4, opacity: 0.3 }}
        transition={{ duration: 0.5 }}
        className="absolute w-10 h-10 rounded-full z-0"
        style={{ backgroundColor: TIF }}
      />
    </motion.button>
  );
}