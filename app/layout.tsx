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
  title: "Next.js 15 App",
  description: "Next.js 15 + Gilroy + Nunito Sans setup",
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
