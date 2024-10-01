import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-gray-950 min-h-screen text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
        >
          {/* Left side - Picture */}
          <div className="w-full lg:w-1/3">
            <img
              src="/images/background-image.jpg"
              alt="Pradeep Kumavat"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Text content */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3 flex items-center">
                  <Code className="mr-2 text-[#E6B9A6]" /> About Me
                </h2>
                <p className="text-gray-300 leading-relaxed">
                Hello everyone , I'm Pradeep Kumavat, a Full-stack web developer experince in MERN stack and along with Next.js and typescript for building modern, scalable applications as well as possess strong skills in Data Structures and Algorithms (DSA) also . I'm passionate about coding and constantly learning new technologies, and enjoy working on innovative projects that solve real-world problems."
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-[#E6B9A6]" /> My Approach
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  I believe in creating web experiences that are not only visually appealing but also intuitive and accessible. My approach combines cutting-edge technologies with user-centered design principles. I'm passionate about staying up-to-date with the latest web development trends and best practices, ensuring that the solutions I deliver are modern, efficient, and scalable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">What I Offer</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Responsive and mobile-first web design</li>
                  <li>Custom web application development</li>
                  <li>UI/UX design and prototyping</li>
                  <li>Performance optimization and SEO</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
              </section>
            </div>

            <div className="pt-6 ">
              <Button className="bg-[#E6B9A6] text-gray-900 hover:bg-[#d9a08e]">
                <a className="flex items-center" href="/projects">View My Projects <ArrowRight className="ml-2 h-4 w-4 " /></a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}