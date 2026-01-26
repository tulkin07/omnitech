import React from "react";
import Container from "./Container";

const FinalSection = () => {
  return (
    <Container>
        {/* 3. FOOTER */}
        <footer className="mt-[64px] pb-[32px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
              <div className="text-3xl font-bold tracking-tighter text-white">
                OmniTech
              </div>
              <nav className="flex gap-8 text-sm font-medium text-gray-400">
                <a href="#" className="text-white transition-colors hover:text-gray-300 text-[16px]">
                  О нас
                </a>
                <a href="#" className="text-white transition-colors hover:text-gray-300 text-[16px]">
                  Проекты
                </a>
                <a href="#" className="text-white transition-colors hover:text-gray-300 text-[16px]">
                  Команда
                </a>
              </nav>
            </div>

            <div className="flex flex-col md:flex-row items-center pt-8 border-t border-[#D7D7DF4D] text-[11px] text-[#D7D7DF] uppercase tracking-widest gap-4">
              <p>2025 © OOO &quot;Omnitech&quot; Все права защищены</p>
              <a
                href="#"
                className="hover:text-gray-300 underline decoration-[#D7D7DF] underline-offset-4"
              >
                Пользовательское соглашение
                
              </a>
            </div>
          </div>
        </footer>
    </Container>
  );
};

export default FinalSection;
