"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import ProjectModal from "./project-modal"

const projects = [
  {
    title: "E-Service Platforms",
    description:
      "Developed multiple government e-service platforms using Laravel for the backend and Next.js with TypeScript for the frontend. Integrated Redux Toolkit for state management and Redux Saga for managing complex asynchronous workflows.",
    achievements: [
      "Enhanced accessibility for over 10,000 users per project",
      "Improved service delivery by 20%",
      "Boosted user engagement by 25%",
      "Ensured scalability and robust security, supporting up to 50,000 concurrent users without performance issues",
    ],
    technologies: ["Laravel", "Next.js", "TypeScript", "Redux Toolkit", "Redux Saga"],
    images: [
      "/projects/adnan.png",
      "/projects/adnan2.png",
      "/projects/adnan3.png",
      "/projects/adnan4.png",
      "/projects/nucleusCoffe.png",
      "/projects/nucleusCoffe1.png",

    ],
  },
  {
    title: "Fleet Management System",
    description:
      "Custom-built the Traccar fleet management system using Jakarta EE for the backend and React.js with Material UI for the frontend.",
    achievements: [
      "Improved fleet tracking, reducing data latency by 15%",
      "Increased operational efficiency by 30%",
      "Delivered a modern, responsive interface that boosted user satisfaction by 40%",
      "Reduced decision-making time by 20%",
    ],
    technologies: ["Jakarta EE", "React.js", "Material UI"],
    images: [
    ],
  },
  {
    title: "Digital Invoicing Platform (Pamifactura)",
    description:
      "Worked as a React Developer for Pamifactura, a digital invoicing company, through Upwork. Designed and developed responsive interfaces for their invoicing platform, ensuring optimal performance and seamless user experiences.",
    achievements: [
      "Integrated RESTful APIs for efficient communication between frontend and backend",
      "Focused on performance optimization, cross-platform compatibility, and scalable solutions",
      "Improved platform usability and reliability for businesses to comply effectively with electronic invoicing regulations",
    ],
    technologies: ["React", "RESTful APIs", "Responsive Design"],
    images: [
      "/projects/pami1.png",
      "/projects/pami.png",
    
    ],
  },
  {
    title: "Taxi Hailing App",
    description:
      "Designed and developed a fully functional taxi-hailing mobile application using React Native and NativeWind for responsive and modern UI design.",
    achievements: [
      "Leveraged PostgreSQL for robust and scalable database management",
      "Utilized TypeScript to enhance code quality and maintainability",
      "Integrated Stripe for secure, seamless payment processing",
      "Prioritized a smooth, intuitive user experience while maintaining performance, security, and scalability for both riders and drivers",
    ],
    technologies: ["React Native", "NativeWind", "PostgreSQL", "TypeScript", "Stripe"],
    images: [
      "/projects/taxi1.png",
      "/projects/taxi2.png",
      "/projects/taxi3.png",
    ],
  },
  {
    title: "Projects for Different Clients",
    description:
      "A showcase of dynamic, client-focused solutions spanning multiple industries. These projects emphasize innovation, usability, and cutting-edge technology.",
    achievements: [
      "Designed and implemented robust database solutions using PostgreSQL, ensuring scalability and reliability.",
      "Enhanced code quality, readability, and maintainability by leveraging TypeScript's static typing.",
      "Integrated Stripe for secure and seamless payment processing, delivering a frictionless checkout experience.",
      "Optimized user experiences with a focus on performance, security, and scalability for all stakeholders, including riders and drivers.",
    ],
    technologies: ["React Native", "NativeWind", "PostgreSQL", "TypeScript", "Stripe","nextjs","tailwindcss"],
    images: [
      "/projects/nucleus1.png",
      "/projects/nucleus2.png",
      "/projects/nucleus3.png",
      "/projects/nucleus4.png",
      "/projects/nucleus5.png",
      "/projects/lml3.png",
      "/projects/lml1.png",
      "/projects/lml2.png",
      "/projects/lml.png",

    ],
  }  
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container py-12 md:py-16">
      <motion.h2
        className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-48 cursor-pointer"
                onClick={() => setSelectedProject(index)}
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-2 font-semibold">Key Achievements:</h4>
                <ul className="list-inside list-disc space-y-1">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button className="mt-4" variant="outline" onClick={() => setSelectedProject(index)}>
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <ProjectModal
        images={selectedProject !== null ? projects[selectedProject].images : []}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

