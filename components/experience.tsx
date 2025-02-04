import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Adnan Business Group",
    date: "06/2022 - 11/2024",
    location: "Addis Ababa, Ethiopia",
    description: "Developed and maintained web applications using various technologies.",
    technologies: ["React", "Next.js", "laravel", "MySQL","redux","redux saga","tailwindcss","material-ui","docker","git",],
  },
  {
    title: "Front-End Developer",
    company: "Nucleus Institute",
    date: "09/2024 - 11/2024",
    location: "Vancouver, Canada (Remote)",
    description:
      "Developed cross-platform mobile applications and collaborated with global teams to build high-quality user interfaces.",
    technologies: [
      "React Native",
      "GraphQL",
      "Next.js",
      "Tailwind CSS",
      "NativeWind",
      "apollo client",
    ],
  },
  {
    title: "Front-end Developer",
    company: "PamiFactura",
    date: "11/2024 - Present",
    location: "USA (Upwork)",
    description:
      "Designed and developed responsive interfaces for their invoicing platform, ensuring optimal performance and seamless user experiences.",
    technologies: ["React", "TypeScript", "RESTful APIs","Next","antd","redux"],
  },
];



export default function Experience() {
  return (
    <section id="experience" className="container py-12 md:py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.title} className="overflow-hidden">
            <CardHeader className="bg-secondary">
              <CardTitle className="flex items-center justify-between">
                <span>{exp.title}</span>
                <Badge variant="outline">{exp.date}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
              <p className="mt-2">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

