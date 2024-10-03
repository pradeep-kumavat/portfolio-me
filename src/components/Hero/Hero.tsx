"use client"

import Image from 'next/image'
import { ReactTyped } from 'react-typed'

export default function Hero() {
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
            color: #4FD1C5;
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
      `}</style>
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-left">
            <div 
              className="inline-block bg-[#E6B9A6] text-black font-semibold px-3 py-1 rounded-xl text-xs mb-4"
            >
              A Fullstack Developer
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Hi, I am <br />
              <span className="animate-color-change">
                <ReactTyped 
                  strings={['Pradeep Kumavat']} 
                  typeSpeed={100}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </h1> 
          </div>

          <div className="relative flex justify-center">
            <div
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 mx-auto transition-transform transform hover:scale-105 animate-float"
            >
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