import React from "react";
import Image from "next/image";
import aiIcon from "@/assets/images/ai.png";
import uiIcon from "@/assets/images/ui.png";
import dataIcon from "@/assets/images/data.png";
import Container from "./Container";

const features = [
  {
    title: "Передовые AI-решения",
    desc: "Мы разрабатываем передовые решения на основе искусственного интеллекта, которые трансформируют бизнес-процессы",
    icon: aiIcon,
  },
  {
    title: "Смарт-Интерфейсы",
    desc: "Наши решения предлагают интеллектуальные интерфейсы, которые адаптируются под пользователя",
    icon: uiIcon,
  },
  {
    title: "Дата-Аналитика",
    desc: "Мы используем мощные инструменты для анализа данных и AI-модели, чтобы предоставлять точные прогнозы и рекомендации",
    icon: dataIcon,
  },
];

export default function Features() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-7xl mx-auto px-4 text-white">
          {/* Header */}
          <div
            className="
              mb-12
              flex flex-col gap-4
              lg:flex-row lg:items-center lg:gap-[20px] lg:mb-[64px]
            "
          >
            <p
              className="
                max-w-full text-base leading-6 font-medium
                sm:text-lg
                lg:max-w-[360px] lg:text-[24px] lg:leading-[24px]
              "
            >
              Технологии, комфорт и аналитика для успеха вашего бизнеса
            </p>

            <h2
              className="
                font-semibold
                text-3xl leading-tight
                sm:text-4xl
                lg:text-[60px] lg:leading-[72px]
              "
            >
              Как мы оптимизируем бизнес решения
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="
                  bg-[#140C59] rounded-2xl text-left
                  p-5 sm:p-6 lg:p-6
                "
              >
                <div className="flex justify-center">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    className="w-[160px] h-auto sm:w-[200px] lg:w-[240px]"
                  />
                </div>

                <h3
                  className="
                    font-semibold mt-4 mb-2
                    text-xl
                    sm:text-2xl
                    lg:text-[27px]
                  "
                >
                  {f.title}
                </h3>

                <p
                  className="
                    text-gray-300
                    text-sm leading-6
                    sm:text-base
                    lg:text-[18px] lg:leading-[26px]
                  "
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
