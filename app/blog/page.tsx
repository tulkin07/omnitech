"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Eye,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Sparkles,
} from "lucide-react";

// Updated Categories from your request
const categories = [
  "All Stories",
  "Holidays",
  "Advice",
  "Programming",
  "Articles",
  "News",
  "Our Projects",
  "Team Members",
  "About Us",
];

const allPosts = [
  {
    id: 1,
    category: "News",
    title: "OMNITECH team in Fergana!",
    excerpt:
      "Team leads shared insights on building IT companies with students of TATU and Fergana Polytechnic.",
    date: "20.03.2024",
    views: "3172",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800",
  },
  {
    id: 2,
    category: "News",
    title: "Join the professional team as a Developer!",
    excerpt:
      "We are looking for passionate Frontend, Backend and Flutter developers to join our leading IT company.",
    date: "13.03.2024",
    views: "2376",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
  },
  {
    id: 3,
    category: "Advice",
    title: "Time for process automation!",
    excerpt:
      "SAS solutions play a crucial role in automating business processes including ERP and CRM systems.",
    date: "16.05.2023",
    views: "2005",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
  {
    id: 4,
    category: "Our Projects",
    title: "Ready-made solutions for FinTech apps",
    excerpt:
      "We offer ready solutions for developing FinTech apps that allow you to track expenses and manage accounts.",
    date: "25.04.2023",
    views: "2126",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
  },
  {
    id: 5,
    category: "News",
    title: "International memorandum in Singapore!",
    excerpt:
      "A meeting was held between OMNITECH and Singaporean entrepreneurs to establish global cooperation.",
    date: "30.05.2023",
    views: "2412",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800",
  },
  {
    id: 6,
    category: "Team Members",
    title: "OMNITECH at Zaamin Ultra Marathon",
    excerpt:
      "Our team actively participates in marathons to boost family spirit and healthy lifestyle focus.",
    date: "20.06.2023",
    views: "2858",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    id: 7,
    category: "Articles",
    title: "Project Management Masterclass at UIC",
    excerpt:
      "18-year expert Iskandar Yusupov shared his knowledge on product management with our staff.",
    date: "07.05.2023",
    views: "2375",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    id: 8,
    category: "News",
    title: "Technical Director at PDP University",
    excerpt:
      "Amon Olimov shared his experience on how to prepare for IT interviews and build a successful career.",
    date: "02.05.2023",
    views: "2297",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  },
];

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All Stories");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 4;

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCat =
        activeCat === "All Stories" || post.category === activeCat;
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCat, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <section className="bg-[#050505] py-32 px-6 text-white font-sans overflow-hidden min-h-screen relative">
      {/* BACKGROUND GLOBE ELEMENT (Reflects your first image) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0ABAB5]/5 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0ABAB5]/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="p-2 bg-[#0ABAB5]/10 rounded-lg text-[#0ABAB5]">
                <Globe2 size={18} />
              </span>
              <span className="text-[#0ABAB5] text-[10px] font-bold tracking-[6px] uppercase italic">
                Global Insights
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Digital <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-white/40">
                Archive.
              </span>
            </h2>
          </div>

          <div className="relative w-full lg:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search news & articles..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-5 pl-12 pr-6 text-sm outline-none focus:border-[#0ABAB5]/40 transition-all placeholder:text-gray-700"
            />
          </div>
        </div>

        {/* CATEGORY CHIPS (Glass Style) */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border
                ${
                  activeCat === cat
                    ? "bg-[#0ABAB5] border-[#0ABAB5] text-black shadow-[0_10px_20px_rgba(10,186,181,0.2)]"
                    : "bg-white/[0.03] border-white/5 text-gray-500 hover:border-white/20 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {currentPosts.length > 0 ? (
              currentPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-[#0D0D0D] border border-white/5 rounded-[40px] overflow-hidden hover:border-[#0ABAB5]/30 transition-all duration-700"
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-50 group-hover:opacity-100"
                      />
                      <div className="absolute top-6 left-6 lg:hidden">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[#0ABAB5] text-[10px] font-bold uppercase">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="lg:w-2/3 p-10 flex flex-col justify-between">
                      <div>
                        <span className="hidden lg:inline-block text-[#0ABAB5] text-[9px] font-black uppercase tracking-[4px] mb-4">
                          {post.category}
                        </span>
                        <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-[#0ABAB5] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-3 font-light mb-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex gap-6 text-[10px] font-bold text-gray-600 uppercase">
                          <span className="flex items-center gap-2">
                            <Calendar size={12} className="text-[#0ABAB5]" />{" "}
                            {post.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Eye size={12} className="text-[#0ABAB5]" />{" "}
                            {post.views}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0ABAB5] group-hover:text-black transition-all">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <Sparkles className="mx-auto text-gray-800 mb-4" size={48} />
                <p className="text-gray-600 font-bold uppercase tracking-widest text-xs">
                  No entries found in this sector
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="p-4 rounded-full border border-white/5 hover:bg-[#0ABAB5] hover:text-black transition-all disabled:opacity-20"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-full font-black text-[10px] transition-all
                    ${currentPage === i + 1 ? "bg-white text-black" : "bg-white/5 text-gray-500 hover:text-white"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              className="p-4 rounded-full border border-white/5 hover:bg-[#0ABAB5] hover:text-black transition-all disabled:opacity-20"
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
