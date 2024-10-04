'use client'

import About from '@/components/About/About'
import Hero from '@/components/Hero/Hero'
import { useState, useEffect } from "react"

export default function Home() {
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
    <div className="relative min-h-screen flex flex-col">
      <div
        className="fixed z-[9999] w-4 h-4 rounded-full bg-white shadow-lg shadow-white/50 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <div>
        <Hero />
        <About />
      </div>
    </div>
  )
}