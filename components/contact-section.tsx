"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red/5 dark:to-red/10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-12"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white dark:bg-secondary-black rounded-lg shadow-md p-8 text-center transition-all duration-300"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
            >
              <motion.a
                href="mailto:janasoumita03@gmail.com"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-800 dark:text-gray-200 hover:text-red dark:hover:text-red transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                janasoumita03@gmail.com
              </motion.a>

              <motion.a
                href="https://github.com/Soumita072"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-800 dark:text-gray-200 hover:text-red dark:hover:text-red transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                github.com/Soumita072
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/soumita-jana-5235bb252"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-800 dark:text-gray-200 hover:text-red dark:hover:text-red transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Soumita Jana
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-red hover:bg-red-second text-white transition-colors duration-300"
                  onClick={() => (window.location.href = "mailto:janasoumita03@gmail.com")}
                >
                  Send Email
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
