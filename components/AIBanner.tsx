import Image from "next/image";
import aiImage from "@/assets/images/ai-girl.png";
import Container from "./Container";

export default function AIBanner() {
  return (
    <Container>
      <section
        className="
          relative bg-[#140C59] rounded-2xl overflow-hidden
          mt-20 lg:mt-[140px]
          p-6 sm:p-8 lg:p-0
        "
      >
        <div
          className="
            grid grid-cols-1 gap-8 items-center
            lg:grid-cols-[40%_58%] lg:gap-[2%]
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              relative w-full
              h-[220px]
              sm:h-[300px]
              lg:h-[460px]
            "
          >
            <Image
              src={aiImage}
              alt="AI"
              fill
              className="object-contain object-bottom-left"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white">
            <h2
              className="
                font-semibold
                text-2xl leading-tight
                sm:text-3xl
                lg:text-[50px] lg:leading-[60px]
              "
            >
              Искусственный интеллект{" "}
              <br className="hidden lg:block" />
              для вашего бизнеса
            </h2>

            <p
              className="
                mt-4 font-normal text-white/80
                text-sm leading-6
                sm:text-base
                lg:text-[20px] lg:leading-[28px]
              "
            >
              Мы используем искусственный интеллект для автоматизации процессов,
              улучшения поиска и обслуживания, а также предоставления точных
              прогнозов. Наши AI-решения помогают вашему бизнесу быть на шаг
              впереди.
            </p>

            <button
              className="
                mt-6 sm:mt-8 lg:mt-[40px]
                bg-[#FDC448] text-[#02021E] font-semibold rounded-md
                px-6 py-3 text-sm
                sm:px-8 sm:py-4 sm:text-base
                hover:bg-yellow-600 transition
              "
            >
              Оставить заявку →
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
