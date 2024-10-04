'use client'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import Image from "next/image"

export default function Education() {
  const data = [
    {
      title: "2022 - Present",
      content: (
        <div className='text-white'>
          <p className="text-white text-sm md:text-base font-normal mb-2">
            Bachelor of Technology in Computer Science and Engineering - 8.9 CGPA
          </p>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
            Shri Vaishnav Vidhyapeeth Vishwavidyalaya, Indore
          </p>
          <div className="w-full flex justify-start"> 
            <div className="w-40 h-20 md:w-48 md:h-32 lg:w-56 lg:h-44 relative">
              <Image
                src="/images/svvv.png"
                alt="College photo"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021-22",
      content: (
        <div className='text-white'>
          <p className="text-white text-sm md:text-base font-normal mb-2">
            12th Grade - 88.8%  |  State Board
          </p>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
            The New Era Public School, Indore
          </p> 
          <div className="w-full flex justify-start">
            <div className="w-40 h-20 md:w-48 md:h-32 lg:w-56 lg:h-44 relative">
              <Image
                src="/images/school2.png"
                alt="12th grade school"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019-20",
      content: (
        <div className='text-white'>
          <p className="text-white text-sm md:text-base font-normal mb-2">
            10th Grade - 91.6%  |  State Board
          </p>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
            Infant Jesus School, Indore
          </p>
          <div className="w-full flex justify-start">
            <div className="w-40 h-20 md:w-48 md:h-32 lg:w-56 lg:h-44 relative">
              <Image
                src="/images/school1.png"
                alt="10th grade school"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full bg-gray-950 px-4 py-8 md:px-8 md:py-12 overflow-hidden">
      <Timeline data={data} />
    </div>
  )
}