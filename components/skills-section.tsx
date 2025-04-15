"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Calculator, Code, Cpu, Database, GitBranch } from "lucide-react"

const skills = [
  {
    name: "Microsoft Office",
    icon: <FileText className="w-8 h-8 text-red" />,
    description: "Proficient in Word, Excel, PowerPoint, and other Office applications",
  },
  {
    name: "Mathematics",
    icon: <Calculator className="w-8 h-8 text-red" />,
    description: "Strong foundation in calculus, linear algebra, and discrete mathematics",
  },
  {
    name: "Circuit Design",
    icon: <Cpu className="w-8 h-8 text-red" />,
    description: "Experience with analog and digital circuit design and simulation",
  },
  {
    name: "Programming",
    icon: <Code className="w-8 h-8 text-red" />,
    description: "Familiar with C, C++, and Python programming languages",
  },
  {
    name: "Database Management",
    icon: <Database className="w-8 h-8 text-red" />,
    description: "Basic knowledge of SQL and database concepts",
  },
  {
    name: "Version Control",
    icon: <GitBranch className="w-8 h-8 text-red" />,
    description: "Experience with Git and GitHub for collaborative development",
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-red/5 to-red-second/5 dark:from-red/10 dark:to-red-second/10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-red-second/5 to-red/5 dark:from-red-second/10 dark:to-red/10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="bg-white dark:bg-secondary-black rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="mb-4 p-3 bg-gray-50 dark:bg-primary-black rounded-full"
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
