"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Josefin_Sans } from "@next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { useState, useEffect } from "react";

const josefinSans = Josefin_Sans({
  weight: "400", // Regular 400 weight
  subsets: ["latin"], // Define the subset, e.g., 'latin'
  display: "swap", // Optional for better font rendering performance
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Pradeep Kumavat - Portfolio</title>
        <meta name="description" content="Portfolio website" />
      </Head>
      <body className={josefinSans.className}>
        <div className="relative w-full h-screen overflow-auto">
          {/* Custom Cursor */}
          <div
            className="fixed z-[9999] w-4 h-4 rounded-full bg-white shadow-lg shadow-white/50 transition-transform duration-300 ease-out pointer-events-none"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            }}
          />
          
          {/* Page Content */}
          <div className="relative z-[1]">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
