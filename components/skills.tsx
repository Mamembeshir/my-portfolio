"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", logo: "/logos/py.svg" },
      { name: "JavaScript", logo: "/logos/js.svg" },
      { name: "TypeScript", logo: "/logos/ts.svg" },
      { name: "PHP", logo: "/logos/php.webp" },
      { name: "html", logo: "/logos/html.svg" },
      { name: "css", logo: "/logos/css.svg" },

      
     
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", logo: "/logos/postgre.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "SQLite", logo: "/logos/sqlite.svg" },
      { name: "mongodb", logo: "/logos/mongo.svg" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", logo: "/logos/react.webp" },
      { name: "Next.js", logo: "/logos/nextjs.webp" },
      { name: "Django", logo: "/logos/django.png" },
      { name: "Laravel", logo: "/logos/laravel.svg" },
      { name: "FastAPI", logo: "/logos/fastapi.png" },
      { name: "GraphQL", logo: "/logos/graphql.webp" },
      { name: "express", logo: "/logos/express.webp" },
      { name: "nestjs", logo: "/logos/nestjs.webp" },

    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Git", logo: "/logos/github.svg" },
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "Postman", logo: "/logos/postman.webp" },
      { name: "Swagger", logo: "/logos/Swagger.svg" },
      { name: "ESLint", logo: "/logos/eslint-logo-color.png" },
      { name: "tailwindcss", logo: "/logos/tailwindcss.webp" },
      { name: "vite", logo: "/logos/vite.svg" },
      { name: "redux", logo: "/logos/redux.webp" },
      { name: "ubuntu", logo: "/logos/ubuntu.svg" },
      { name: "scss", logo: "/logos/scss.svg" },

    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-12 md:py-16">
      <motion.h2
        className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col place-items-center justify-between"> 
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="mb-2"
                      />
                
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

