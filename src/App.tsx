import { motion, useScroll, useSpring } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Achievements } from "./components/Achievements"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

export function App() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      {reduce ? null : <motion.div className="scroll-rule" style={{ scaleX }} />}
      <Nav />
      <main id="content">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
