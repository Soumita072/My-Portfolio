"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0" />
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-red/10 relative overflow-hidden"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : 180,
          }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-300 transition-all" />
          ) : (
            <Moon className="h-5 w-5 transition-all" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  )
}
