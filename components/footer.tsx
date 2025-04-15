"use client"
import { motion } from "framer-motion"
export default function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-primary-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          &copy; {new Date().getFullYear()} Soumita Jana . All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
