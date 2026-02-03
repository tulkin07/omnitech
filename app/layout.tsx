import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Google Fonts orqali Nunito Sans
const nunitoSans = Space_Grotesk({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  // Asosiy ma'lumotlar
  title: {
    default: "Omnitech — Innovatsion IT Yechimlar va Raqamli Transformatsiya",
    template: "%s | Omnitech",
  },
  description: "Omnitech - murakkab biznes jarayonlarini avtomatlashtirish, FinTech ilovalar, CRM/ERP tizimlari va yuqori sifatli mobil ilovalar yaratish bo'yicha ekspert IT kompaniya.",
  keywords: [
    "Omnitech", 
    "IT kompaniya O'zbekiston", 
    "dasturlash xizmatlari", 
    "FinTech", 
    "CRM yaratish", 
    "ERP tizimlari", 
    "mobil ilovalar", 
    "web development", 
    "SaaS yechimlar"
  ],
  authors: [{ name: "Omnitech Team", url: "https://omnitech.uz" }],
  creator: "Omnitech LLC",
  publisher: "Omnitech",

  // Open Graph (Facebook, Telegram, LinkedIn uchun)
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://omnitech.uz",
    siteName: "Omnitech",
    title: "Omnitech — Raqamli Kelajakni Biz bilan Quring",
    description: "Biznesingizni avtomatlashtirish va innovatsion dasturiy yechimlar orqali yangi darajaga olib chiqing.",
    images: [
      {
        url: "/assets/images/og-image.jpg", // Siz ko'rsatgan rasm manzili
        width: 1200,
        height: 630,
        alt: "Omnitech IT Solutions Banner",
      },
    ],
  },

  // Twitter (X) uchun
  twitter: {
    card: "summary_large_image",
    title: "Omnitech — Innovatsion IT Yechimlar",
    description: "Murakkab tizimlar va mobil ilovalar yaratish bo'yicha O'zbekistondagi yetakchi kompaniya.",
    images: ["/assets/images/omnitech.jpg"],
    creator: "@omnitech_uz",
  },

  // Robotlar (Google botlari) uchun ko'rsatma
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Faviconlar va boshqa ikonlar
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  // Qidiruv tizimlari uchun qo'shimcha tasdiqlash (agar bo'lsa)
  verification: {
    google: "google-site-verification-kodini-bu-yerga-qo'ying", // Agar Google Search Console bo'lsa
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased min-h-screen`}>
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
