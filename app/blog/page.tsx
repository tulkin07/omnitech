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
  Sparkles,
} from "lucide-react";

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
    currentPage * postsPerPage
  );

  return (
    <section className="bg-[#050505] min-h-screen py-20 sm:py-28 lg:py-32 px-4 sm:px-6 text-white relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#0ABAB5]/5 blur-[120px] rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-[400px] h-64 sm:h-[400px] bg-[#0ABAB5]/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end justify-between mb-14 sm:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-10 bg-[#0ABAB5]" />
              <span className="text-[#0ABAB5] text-[10px] tracking-[5px] font-bold uppercase">
                Global Insights
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.9] lg:leading-[0.85] uppercase">
              Digital <br />
              <span className="bg-gradient-to-r from-[#0ABAB5] to-white/40 bg-clip-text text-transparent">
                Archive.
              </span>
            </h2>
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-96">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search news & articles..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#0ABAB5]/50 transition"
            />
          </div>
        </div>

        {/* CATEGORY CHIPS */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setCurrentPage(1);
              }}
              className={`whitespace-nowrap px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition
                ${
                  activeCat === cat
                    ? "bg-[#0ABAB5] text-black border-[#0ABAB5]"
                    : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {currentPosts.length ? (
              currentPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0ABAB5]/30 transition"
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* IMAGE */}
                    <div className="lg:w-1/3 h-56 lg:h-auto">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-60 hover:opacity-100 transition"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="lg:w-2/3 p-5 flex flex-col justify-between">
                      <div>
                        <span className="text-[#0ABAB5] text-[9px] tracking-[4px] uppercase">
                          {post.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                        <div className="flex gap-4 text-[10px] uppercase text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye size={12} /> {post.views}
                          </span>
                        </div>

                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0ABAB5] hover:text-black transition">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 text-center">
                <Sparkles className="mx-auto mb-4 text-gray-700" size={48} />
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  No entries found in this sector
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-3 border border-white/10 rounded-full disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full text-[10px] font-bold
                  ${
                    currentPage === i + 1
                      ? "bg-white text-black"
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="p-3 border border-white/10 rounded-full disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
