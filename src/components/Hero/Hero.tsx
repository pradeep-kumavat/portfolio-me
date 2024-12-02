"use client"

import Image from 'next/image'
import { ReactTyped } from 'react-typed'
import { FlipWords } from '../ui/flip-words'

export default function Hero() {
  const words = ["MERN", "FullStack", "NextJS"];
  return (
    <div className="bg-gray-950 text-white min-h-screen flex items-center">
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes colorChange {
          0%, 100% {
            color: #E6B9A6;
          }
          50% {
            color: #C7FFD8;
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-color-change {
          animation: colorChange 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(45deg, #FFD09B, #C7FFD8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-left space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
              Hi👋🏻 <br />
              <span>I am </span>
              <span className="text-[#E6B9A6]">
              <ReactTyped 
                  strings={['Pradeep Kumavat']} 
                  typeSpeed={100}
                  backSpeed={50}
                  loop={true}
                  cursorChar=";"
                  showCursor={true}
                />
              </span>
            </h1> 
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              <span className="bg-gradient-to-r from-[#E6B9A6] to-[#E6B9B3] text-transparent bg-clip-text">
                <FlipWords words={words} />
              </span>
              <span className="gradient-text"> Developer</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 mx-auto transition-transform transform hover:scale-105">
              <Image
                src="/images/background-image.jpg" 
                alt="Profile Avatar"
                width={700}
                height={600}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}