"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="order-1 md:order-2 w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red/20 shadow-xl">
              <Image 
                src="https://i.postimg.cc/7YpqRnhH/soumita.jpg" // replace this with your actual image URL
                alt="Soumita Jana" 
                fill
                className="object-cover"
                priority
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-red-second"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1 w-full md:w-3/5 text-center md:text-left space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="text-red inline-block"
                animate={{
                  color: ["#d00b02", "#661511", "#d00b02"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Soumita
              </motion.span>{" "}
              Jana
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ECE Undergraduate | Techno Main Salt Lake
            </motion.h2>

            <motion.p
              className="max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Aspiring electronics engineer with a passion for innovation and technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center mt-8 text-red hover:text-red-second transition-colors"
              >
                <span className="mr-2">Discover More</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown size={20} />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
    </section>
  )
}
