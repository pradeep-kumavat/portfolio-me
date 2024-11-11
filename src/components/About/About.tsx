"use client";
import { Code, Lightbulb } from 'lucide-react';
import Image from "next/image";
import { RainbowButton } from "../ui/rainbow-button";
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gray-950 min-h-screen text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-full lg:w-1/3 reveal">
            <Image
              src="/images/background-image.jpg"
              alt="Pradeep Kumavat"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <section className="">
                <h2 className="text-2xl font-semibold mb-3 flex items-center">
                  <Code className="mr-2 text-[#E6B9A6]" /> About Me
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Hello everyone, I&apos;m Pradeep Kumavat, a Full-stack web developer with experience in the MERN stack, along with Next.js and TypeScript for building modern, scalable applications. I also possess strong skills in Data Structures and Algorithms (DSA). I&apos;m passionate about coding and constantly learning new technologies, and I enjoy working on innovative projects that solve real-world problems.
                </p>
              </section>

              <section className="">
                <h2 className="text-2xl font-semibold mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-[#E6B9A6]" /> My Approach
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  I believe in creating web experiences that are not only visually appealing but also intuitive and accessible. My approach combines cutting-edge technologies with user-centered design principles. I&apos;m passionate about staying up-to-date with the latest web development trends and best practices, ensuring that the solutions I deliver are modern, efficient, and scalable.
                </p>
              </section>

              <section className="">
                <h2 className="text-2xl font-semibold mb-3">What I Offer</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Responsive and mobile-first web design</li>
                  <li>Custom web application development</li>
                  <li>Performance optimization and SEO</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
              </section>
            </div>

            <div className="pt-6 ">
                <Link href='/projects'><RainbowButton>View my projects</RainbowButton></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
