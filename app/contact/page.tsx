"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Smartphone,
  Terminal,
  Shield,
  Globe,
} from "lucide-react";

export default function Contact() {
  const [formStep, setFormStep] = useState("idle");
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("sending");
    setTimeout(() => setFormStep("success"), 2500);
  };

  const contactCards = [
    {
      icon: <Phone size={20} />,
      label: "Voice",
      value: "+998 71 200 70 07",
      color: "text-blue-400",
    },
    {
      icon: <Mail size={20} />,
      label: "Inquiry",
      value: "hello@omnitech.uz",
      color: "text-[#0ABAB5]",
    },
    {
      icon: <MapPin size={20} />,
      label: "HQ",
      value: "Tashkent, Uzbekistan",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-[#050505] py-34 px-6 text-white font-sans relative overflow-hidden selection:bg-[#0ABAB5]/30">
      {/* Dynamic Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0ABAB5 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#0ABAB5]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#0ABAB5]" />
              <span className="text-[10px] font-black uppercase tracking-[8px] text-[#0ABAB5]">
                Encrypted Connection
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Get In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] via-white to-white/40">
                Touch.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: STATUS & INFO */}
          <div className="lg:col-span-4 space-y-6">
            {/* System Status Card */}
            <div className="bg-[#0D0D0D] border border-white/5 p-8 rounded-[40px] relative overflow-hidden group">
              <Terminal
                className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-[#0ABAB5]/10 transition-colors"
                size={140}
              />
              <h4 className="text-[10px] font-black uppercase tracking-[4px] text-gray-500 mb-6">
                System Status
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0ABAB5] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Servers: Online
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Agents: Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Bento */}
            <div className="grid grid-cols-1 gap-4">
              {contactCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-[#0D0D0D] border border-white/5 p-6 rounded-[30px] flex items-center gap-5 group transition-all"
                >
                  <div
                    className={`p-4 rounded-2xl bg-white/5 ${card.color} group-hover:bg-[#0ABAB5] group-hover:text-black transition-all duration-500`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-600">
                      {card.label}
                    </p>
                    <p className="text-sm font-bold group-hover:text-white transition-colors">
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: THE INTERFACE (FORM) */}
          <div className="lg:col-span-8">
            <div className="bg-[#0D0D0D] border border-white/5 rounded-[50px] p-8 md:p-16 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0ABAB5] to-transparent opacity-20" />

              <AnimatePresence mode="wait">
                {formStep === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-[#0ABAB5]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} className="text-[#0ABAB5]" />
                    </div>
                    <h3 className="text-4xl font-black uppercase tracking-tight mb-4">
                      Transmission Success
                    </h3>
                    <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
                      Your data has been encrypted and sent to our HQ. Expect a
                      response within 2-4 hours.
                    </p>
                    <button
                      onClick={() => setFormStep("idle")}
                      className="mt-10 text-[10px] font-black uppercase tracking-[4px] text-[#0ABAB5] hover:underline"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Field: Name */}
                      <div className="relative group">
                        <label
                          className={`text-[9px] font-black uppercase tracking-[3px] absolute -top-6 left-2 transition-all ${activeField === "name" ? "text-[#0ABAB5]" : "text-gray-600"}`}
                        >
                          Operator Name
                        </label>
                        <input
                          required
                          onFocus={() => setActiveField("name")}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#0ABAB5] transition-all font-bold text-lg"
                          placeholder="Identify yourself"
                        />
                      </div>

                      {/* Field: Phone */}
                      <div className="relative group">
                        <label
                          className={`text-[9px] font-black uppercase tracking-[3px] absolute -top-6 left-2 transition-all ${activeField === "phone" ? "text-[#0ABAB5]" : "text-gray-600"}`}
                        >
                          Direct Line
                        </label>
                        <div className="flex items-center gap-3 border-b-2 border-white/10 focus-within:border-[#0ABAB5] transition-all">
                          <Smartphone size={18} className="text-gray-600" />
                          <input
                            required
                            type="tel"
                            onFocus={() => setActiveField("phone")}
                            onBlur={() => setActiveField(null)}
                            className="w-full bg-transparent py-4 outline-none font-mono text-base"
                            placeholder="+998 -- --- -- --"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <label
                        className={`text-[9px] font-black uppercase tracking-[3px] absolute -top-6 left-2 transition-all ${activeField === "email" ? "text-[#0ABAB5]" : "text-gray-600"}`}
                      >
                        Digital Address
                      </label>
                      <input
                        required
                        type="email"
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#0ABAB5] transition-all font-bold text-lg"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="relative group">
                      <label
                        className={`text-[9px] font-black uppercase tracking-[3px] absolute -top-6 left-2 transition-all ${activeField === "msg" ? "text-[#0ABAB5]" : "text-gray-600"}`}
                      >
                        Objective Details
                      </label>
                      <textarea
                        rows={3}
                        onFocus={() => setActiveField("msg")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#0ABAB5] transition-all font-bold text-lg resize-none"
                        placeholder="Describe your project goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStep === "sending"}
                      className="group relative w-full h-20 bg-white text-black overflow-hidden rounded-2xl transition-all active:scale-95"
                    >
                      <div className="absolute inset-0 bg-[#0ABAB5] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 font-black uppercase tracking-[6px] text-xs flex items-center justify-center gap-4 group-hover:text-black transition-colors">
                        {formStep === "sending" ? (
                          "Processing..."
                        ) : (
                          <>
                            Initialize Inquiry <Send size={16} />
                          </>
                        )}
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all">
                      <Shield size={16} />
                      <Globe size={16} />
                      <span className="text-[8px] font-black tracking-widest uppercase">
                        Secure Protocol v2.0
                      </span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
