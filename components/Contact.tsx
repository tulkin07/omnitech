"use client";

import React, { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Container from "./Container";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formStep, setFormStep] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStep("sending");
    setTimeout(() => setFormStep("success"), 2000);
  };

  const TIF = "#0ABAB5";

  return (
    <Container>
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl shadow-black/5 rounded-[24px] lg:rounded-[40px] overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Chap taraf: Forma */}
            <div className="flex-[1.4] p-6 sm:p-10 lg:p-16">
              <div className="max-w-md">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#02021E] mb-2">
                  Loyihani muhokama qilamiz
                </h2>
                <p className="text-gray-500 mb-8 sm:mb-12">
                  G'oyangizni qoldiring, biz 24 soat ichida bog'lanamiz.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        required
                        type="text"
                        placeholder="Ismingiz"
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 px-1 outline-none focus:border-[#0ABAB5] transition-all text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        required
                        type="tel"
                        placeholder="Telefon raqam *"
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 px-1 outline-none focus:border-[#0ABAB5] transition-all text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      rows={1}
                      placeholder="Loyihangiz haqida qisqacha..."
                      className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 px-1 outline-none focus:border-[#0ABAB5] transition-all text-gray-800 placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    disabled={formStep !== "idle"}
                    type="submit"
                    className="group relative flex items-center justify-center gap-3 bg-[#02021E] text-white font-bold px-8 py-4 rounded-xl overflow-hidden transition-all active:scale-95 disabled:opacity-70"
                  >
                    <span className="relative z-10">
                      {formStep === "idle" && "Xabar yuborish"}
                      {formStep === "sending" && "Yuborilmoqda..."}
                      {formStep === "success" && "Yuborildi!"}
                    </span>
                    <Send size={18} className={`relative z-10 transition-transform ${formStep === 'success' ? 'translate-x-10 opacity-0' : ''}`} />
                    <div className="absolute inset-0 bg-[#0ABAB5] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

            {/* O'ng taraf: Kontaktlar (Kreativ gradient) */}
            <div className="flex-1 bg-gray-50 p-6 sm:p-10 lg:p-16 flex flex-col justify-between border-l border-gray-100">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#02021E] mb-6">Kontaktlar</h3>
                  <div className="space-y-6">
                    <a href="mailto:info@omnitech.uz" className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#0ABAB5] group-hover:text-white transition-all">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Email</p>
                        <p className="text-gray-700 font-medium group-hover:text-[#0ABAB5]">info@omnitech.uz</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#0ABAB5] group-hover:text-white transition-all">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Manzil</p>
                        <p className="text-gray-700 font-medium">Toshkent, Bog'ishamol 112</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-[180px] grayscale hover:grayscale-0 transition-all duration-700 border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.11059489503!2d69.3175863!3d41.3281781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzQxLjQiTiA2OcKwMTknMDMuMyJF!5e0!3m2!1suz!2s!4v1625123456789"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-8">
                © 2026 OmniTech IT Solutions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Container>
  );
};