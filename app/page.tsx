import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ResumeDownload from "@/components/resume-download"

export default function Home() {
  return (
    <main className="min-h-screen px-3 flex justify-center items-center ">
      <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ResumeDownload />
      <Contact />
      <Footer />
      </div>
      
    </main>
  )
}

