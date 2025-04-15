"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-secondary-black relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red/5 dark:bg-red/10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-second/5 dark:bg-red-second/10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-primary-black rounded-lg shadow-md p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I'm Soumita Jana, a third-year Electronics and Communication Engineering student at Techno Main
              Salt Lake, Kolkata. I'm passionate about exploring the intersection of hardware and software technologies.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 mb-4">
              My academic journey has equipped me with a strong foundation in electronics principles, circuit design,
              and communication systems. I enjoy solving complex problems and am constantly seeking opportunities to
              expand my knowledge in emerging technologies.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300">
              Beyond academics, I'm an active member of Eclectica, the Literary Committee at my college, where I
              contribute to fostering a culture of creative expression and communication. I'm also passionate about
              open-source contributions, as demonstrated by my participation in Hacktoberfest 2024.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
