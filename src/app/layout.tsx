'use client'
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/ChatBot/chat";
import { useState, useEffect } from "react"


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <html lang="en" className={`${josefinSans.variable} font-sans overflow-x-hidden`}>
      <body className={`${josefinSans.className} overflow-x-hidden`}>
        <div className="relative min-h-screen flex flex-col">
        <div
        className="fixed z-[9999] w-4 h-4 rounded-full bg-white shadow-lg shadow-white/50 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <div>
          <div className="flex-grow flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
              <Chatbot />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      </body>
    </html>
  );
}
