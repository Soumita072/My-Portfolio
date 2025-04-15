"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Techno Main Salt Lake, Kolkata",
    period: "2022 - 2026",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Higher Secondary (Science Stream)",
    institution: "Panchberia Ramchandra Smriti Siksha Mandir",
    period: "2020 - 2022",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Secondary Education",
    institution: "Panchberia Ramchandra Smriti Siksha Mandir",
    period: "Completed 2020",
    icon: <GraduationCap className="w-6 h-6" />,
  },
]

const achievements = [
  {
    title: "Hacktoberfest 2024 Contributor",
    description: "Successfully contributed to open-source projects during Hacktoberfest 2024",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Literary Committee Member",
    description: "Active member of Eclectica, the Literary Committee at Techno Main Salt Lake",
    icon: <Award className="w-6 h-6" />,
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-secondary-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-red/5 to-transparent"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-red-second/5 to-transparent"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
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
          Education & Achievements
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="mr-2 text-red" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-red"
                >
                  <motion.div
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h4 className="text-lg font-semibold" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    {item.degree}
                  </motion.h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Award className="mr-2 text-red" />
              Achievements
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-white dark:bg-primary-black p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <motion.div
                      className="p-2 bg-red/10 rounded-full mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-red">{item.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
