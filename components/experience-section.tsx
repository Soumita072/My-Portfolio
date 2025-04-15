"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar } from "lucide-react"

const experiences = [
  {
    role: "Member",
    organization: "Eclectica – Literary Committee",
    location: "Techno Main Salt Lake",
    period: "Mar 2023 - Present",
    description:
      "Active member of the college literary committee, organizing events, workshops, and contributing to the college magazine. Collaborate with team members to promote literary activities on campus.",
  },
  {
    role: "Contributor",
    organization: "Hacktoberfest 2024",
    location: "Remote",
    period: "Oct 2024",
    description:
      "Participated in Hacktoberfest 2024, contributing to open-source projects. Collaborated with developers globally to improve code quality and add new features to various repositories.",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-secondary-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-red/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-red-second/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 12,
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
          Experience
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white dark:bg-primary-black rounded-lg shadow-md p-6 border-l-4 border-red transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <motion.h3 className="text-xl font-bold" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                      {exp.role}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-red"
                      animate={{
                        color: ["#d00b02", "#661511", "#d00b02"],
                      }}
                      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      {exp.organization}
                    </motion.p>
                    <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
