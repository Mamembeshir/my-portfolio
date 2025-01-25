"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="container py-12 md:py-20">
      <motion.h2
        className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a dedicated Full Stack Developer with experience building intuitive and scalable web applications.
                Known for my problem-solving skills and attention to detail, I take pride in delivering high-quality
                work that meets project goals. I thrive in collaborative environments and am committed to learning and
                growing with every project. Passionate about technology and continuous improvement, I'm excited to bring
                my skills and enthusiasm to new challenges.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

