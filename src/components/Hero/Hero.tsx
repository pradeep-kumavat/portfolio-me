"use client"

import Image from 'next/image'
import {ReactTyped} from 'react-typed'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div 
              className="inline-block bg-green-400 text-black font-semibold px-4 py-2 rounded-xl text-sm mb-5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              A Fullstack Developer
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Hi, I am <br />
              <span className="text-green-400">
                <ReactTyped 
                  strings={['Pradeep Kumavat']} 
                  typeSpeed={100}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </motion.h1>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              className="w-52 h-52 sm:w-64 sm:h-64 lg:w-[25rem] lg:h-[25rem] mx-auto"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.01 }}
              whileHover={{ scale: 1.05 }}  // Slight zoom-in on hover
            >
              <Image
                src="/images/background-image.jpg" 
                alt="Profile Avatar"
                width={700}
                height={600}
                className="rounded-2xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>  
      </div>
    </div>
  )
}