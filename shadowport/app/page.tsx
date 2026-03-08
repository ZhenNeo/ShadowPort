import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";



export default function Home() {
  return (
    <main>
      <h1>Manish's Portfolio</h1>


      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}