import { Mail, MapPin, Send } from "lucide-react";
import Container from "./Container";

export const ContactSection = () => {
  return (
    <Container>
      <section className="mt-20 lg:mt-[140px]">
        <div
          className="
            max-w-6xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 lg:p-8
            flex flex-col lg:flex-row gap-8 lg:gap-12
          "
        >
          {/* Chap taraf: Forma */}
          <div className="flex-[2]">
            <h2
              className="
                text-2xl sm:text-3xl lg:text-4xl lg:text-[40px]
                font-bold text-[#02021E] mb-6 sm:mb-8 lg:mb-10
              "
            >
              Готовы обсудить проект?
            </h2>

            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <input
                  type="text"
                  placeholder="Полное имя"
                  className="
                    w-full border-b border-gray-300 pb-2 outline-none
                    focus:border-blue-600 transition-colors text-gray-700
                  "
                />
                <input
                  type="text"
                  placeholder="Телефон *"
                  className="
                    w-full border-b border-gray-300 pb-2 outline-none
                    focus:border-blue-600 transition-colors text-gray-700
                  "
                />
              </div>

              <input
                type="text"
                placeholder="Опишите ваш запрос"
                className="
                  w-full border-b border-gray-300 pb-2 outline-none
                  focus:border-blue-600 transition-colors text-gray-700
                "
              />

              <button
                className="
                  mt-4 sm:mt-6 lg:mt-[40px]
                  bg-[#FDC448] hover:bg-yellow-600 transition
                  font-semibold px-6 sm:px-8 py-3 sm:py-4
                  rounded-md text-[#02021E] cursor-pointer
                "
              >
                Оставить заявку →
              </button>
            </form>
          </div>

          {/* O'ng taraf: Kontaktlar */}
          <div className="flex-1 bg-[#F5F5F7] rounded-3xl p-6 sm:p-8 lg:p-8 flex flex-col justify-center gap-4 sm:gap-6">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#02021E] mb-2">
              Контакты
            </h3>
            <hr className="text-[#D7D7DF]" />

            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.1055285725455!2d69.24262212746436!3d41.28095045474015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0bceb15215%3A0xdd95221329dc1aa3!2sHotel%20Premium!5e1!3m2!1sru!2s!4v1769152674074!5m2!1sru!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} className="text-[#D7D7DF]" />
                <span className="text-sm sm:text-base">info@omnitech.uz</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-[#D7D7DF]" />
                <span className="text-sm sm:text-base">100000, Богишамол 112</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
