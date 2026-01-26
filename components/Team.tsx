// components/TeamSection.tsx
import React from "react";
import Image from "next/image";
import Container from "./Container";
import { teamMembers } from "../data/projects";

const TeamSection = () => {
  return (
    <Container>
      <section className="mt-20 lg:mt-[140px]">
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
              max-w-full text-white font-medium
              text-base leading-6
              sm:text-lg
              lg:max-w-[360px] lg:text-[24px] lg:leading-[24px]
            "
          >
            Опытные специалисты, создающие инновационные решения для вашего
            бизнеса
          </p>

          <h2
            className="
              text-white font-semibold
              text-3xl leading-tight
              sm:text-4xl
              lg:text-[60px] lg:leading-[72px]
            "
          >
            Эксперты, создающие будущее технологий
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                relative p-[1px] rounded-[24px] overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                bg-[linear-gradient(114.62deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
              "
            >
              <div className="rounded-[23px] p-3 h-full flex flex-col bg-[#0E0A3D]">
                {/* Image */}
                <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden rounded-[18px]">
                  <div
                    className={`w-full h-full ${
                      member.highlight
                        ? "bg-lime-500/20"
                        : "bg-gray-800"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="mt-auto">
                  <h4
                    className="
                      font-bold mb-1 capitalize text-[#FDC448]
                      text-sm
                      lg:text-[16px]
                    "
                  >
                    {member.name}
                  </h4>
                  <p
                    className="
                      text-white
                      text-sm
                      lg:text-[16px]
                    "
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default TeamSection;
