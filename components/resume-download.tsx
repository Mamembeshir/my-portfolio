"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function ResumeDownload() {
  return (
    <section id="resume" className="container py-12 md:py-24">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download My Resume</h2>
        <p className="mb-8 text-center text-muted-foreground">
          Get a detailed overview of my skills, experience, and education.
        </p>
        <Button asChild>
          <a href="/Muhammed-Abdulaziz-resume.pdf" download>
            Download Resume <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </section>
  )
}

