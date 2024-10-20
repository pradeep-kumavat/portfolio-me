"use client";
import { motion } from "framer-motion"
import { skillCategories } from "@/constants/data"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function TechSkills() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-[#E6B9A6]">My Skills</h1>
        <p className="text-md text-center mb-12 text-gray-300">
          Data Structures and Algorithms, Frontend Development, Backend Development,
          Database Management.
        </p>
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}