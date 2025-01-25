import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const educations = [
  {
    degree: "Electrical and Computer Engineering",
    school: "Addis Ababa Institute of Technology",
    date: "05/2022 – 06/2026",
    location: "Addis Ababa, Ethiopia",
    achievements: [
      "Pursuing a degree in Electrical and Computer Engineering",
      "Focusing on advanced topics in software development and computer systems",
    ],
  },
  {
    degree: "High School",
    school: "Excel Academy",
    location: "Adama, Ethiopia",
    achievements: [
      "Achieved a top 0.02% (616/700) ranking in the Ethiopian University Entrance Examination",
      "Demonstrated exceptional academic performance and dedication",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="container py-12 md:py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
      <div className="space-y-6">
        {educations.map((edu) => (
          <Card key={edu.degree} className="overflow-hidden">
            <CardHeader className="bg-secondary">
              <CardTitle className="flex items-center justify-between">
                <span>{edu.degree}</span>
                {edu.date && <Badge variant="outline">{edu.date}</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="font-semibold">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
              <h4 className="mt-4 mb-2 font-semibold">Achievements:</h4>
              <ul className="list-inside list-disc space-y-1">
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

