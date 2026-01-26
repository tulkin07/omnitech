import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/knight.png";
import Container from "./Container";

export default function Hero() {
  return (
    <section
      className="
        text-white relative flex items-center
        lg:h-[calc(100vh-80px)]
        py-20 lg:pb-24
      "
    >
      {/* Hero Image (faqat lg dan boshlab) */}
      {/* 
      <Image
        src={heroImage}
        alt="Knight"
        fill
        className="object-fill hidden lg:block"
      /> 
      */}

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1
            className="
              font-semibold mb-4
              text-3xl sm:text-4xl
              lg:text-[72px]
            "
          >
            Разработка цифровых продуктов полного цикла
          </h1>

          <p
            className="
              font-semibold mb-8
              text-base sm:text-lg
              lg:text-[24px]
            "
          >
            Веб • Мобильные приложения • AI/ML • Облако • Цифровая трансформация
          </p>

          <button
            className="
              bg-[#FDC448] text-[#02021E] font-semibold rounded-md transition
              px-6 py-3 text-sm
              sm:px-8 sm:py-4 sm:text-base
              hover:bg-yellow-600
            "
          >
            Оставить заявку →
          </button>
        </div>
      </Container>
    </section>
  );
}
