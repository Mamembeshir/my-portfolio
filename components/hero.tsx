"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import muhammed from "@/public/thai.jpeg"

export default function Hero() {
  return (
    <section className="container flex flex-col-reverse items-center justify-between gap-8 py-24 md:flex-row md:py-28">
      <motion.div
        className="flex flex-col items-center text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Muhammed Abdulaziz</h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Full Stack Developer | Building intuitive and scalable web applications
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary shadow-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={muhammed} alt="Muhammed Abdulaziz" layout="fill" objectFit="cover" />
      </motion.div>
    </section>
  )
}

