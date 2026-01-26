"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";
import Container from "./Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[index];

  return (
    <Container>
      <section className="bg-white rounded-2xl mt-20 lg:mt-[140px] p-6 sm:p-8 lg:p-10">
        {/* Title */}
        <h2
          className="
            font-semibold text-[#02021E] mb-6
            text-2xl
            sm:text-3xl
            lg:text-[60px]
          "
        >
          Разработанные проекты
        </h2>

        {/* Content */}
        <div
          className="
            bg-[#E6EAFC] rounded-xl text-[#02021E]
            grid grid-cols-1 gap-6
            lg:grid-cols-[40%_58%] lg:gap-[2%]
            items-center
            p-5 sm:p-6
          "
        >
          {/* LEFT TEXT */}
          <div>
            <span
              className="
                block
                text-sm
                sm:text-base
                lg:text-[20px] lg:leading-[28px]
              "
            >
              {project.category}
            </span>

            <h3
              className="
                font-semibold mt-4
                text-2xl
                sm:text-3xl
                lg:text-[48px] lg:mt-8
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-3
                text-sm leading-6
                sm:text-base
                lg:text-[20px] lg:leading-[28px]
              "
            >
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-5 lg:mt-6">
              <button
                onClick={prev}
                className="
                  w-10 h-10 rounded-full bg-white
                  flex items-center justify-center
                  hover:bg-gray-300 transition
                "
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="
                  w-10 h-10 rounded-full bg-white
                  flex items-center justify-center
                  hover:bg-gray-300 transition
                "
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative overflow-hidden rounded-lg bg-white
              h-[200px]
              sm:h-[280px]
              lg:h-[448px]
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
