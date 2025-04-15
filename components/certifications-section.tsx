"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BadgeIcon as Certificate } from "lucide-react"

// Placeholder certifications
const certifications = [
  {
    title: "Electronics Circuit Design",
    issuer: "Placeholder Organization",
    date: "2024",
    description: "Comprehensive course on electronic circuit design principles and applications",
  },
  {
    title: "Python Programming",
    issuer: "Placeholder Organization",
    date: "2023",
    description: "Fundamentals of Python programming language and its applications in engineering",
  },
  {
    title: "Digital Signal Processing",
    issuer: "Placeholder Organization",
    date: "2023",
    description: "Introduction to digital signal processing techniques and implementations",
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-red/5 to-red-second/5 dark:from-red/10 dark:to-red-second/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
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
          Certifications
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white dark:bg-secondary-black rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300"
              >
                <motion.div
                  className="p-1 bg-gradient-to-r from-red to-red-second"
                  whileHover={{
                    backgroundPosition: ["0%", "100%"],
                    transition: { duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  }}
                />
                <div className="p-6">
                  <motion.div className="flex items-center mb-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Certificate className="w-6 h-6 text-red mr-3" />
                    </motion.div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                  </motion.div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
