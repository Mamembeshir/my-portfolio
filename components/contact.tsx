import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Fill out the form below to send me a message.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input id="name" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input id="email" placeholder="Email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Textarea id="message" placeholder="Your message" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

