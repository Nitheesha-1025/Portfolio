import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { profile } from "../data/content"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const wide = useWideScreen()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, wide && !reduce ? -36 : 0])

  const enter = (delay: number, from: "left" | "right" | "up") =>
    reduce
      ? {}
      : {
          initial: {
            opacity: 0,
            x: from === "left" ? -40 : from === "right" ? 36 : 0,
            y: from === "up" ? 22 : 0,
          },
          animate: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 0.9, delay, ease },
        }

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <motion.p className="eyebrow" {...enter(0.05, "up")}>
        Software engineer
      </motion.p>
      <motion.h1 id="hero-name" className="hero-name" {...enter(0.12, "left")}>
        <span>Nitheesha</span>
        <span>Moturu</span>
      </motion.h1>
      <div className="hero-grid">
        <motion.p
          className="hero-headline"
          style={{ y }}
          initial={reduce ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease }}
        >
          Building systems that solve real problems.
        </motion.p>
        <motion.div {...enter(0.3, "right")}>
          <p className="lede">
            I work on backend systems, scalable services, and AI-powered applications. The part I
            care about is what happens after the first screen: where the data lives, which request
            can wait, and how you tell that a model step went wrong.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#projects">
              View projects
            </a>
            <a className="btn" href={profile.resume} download="Nitheesha-Moturu-Resume.pdf">
              Download resume
            </a>
          </div>
          <ul className="text-links">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">
                LeetCode
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      <motion.dl className="hero-meta" {...enter(0.42, "up")}>
        <div>
          <dt>Program</dt>
          <dd>B.Tech, Artificial Intelligence and Data Science</dd>
        </div>
        <div>
          <dt>University</dt>
          <dd>{profile.university}</dd>
        </div>
        <div>
          <dt>Dates</dt>
          <dd>{profile.dates}</dd>
        </div>
      </motion.dl>
    </section>
  )
}

function useWideScreen() {
  const [wide, setWide] = useState(false)
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)")
    const apply = () => setWide(query.matches)
    apply()
    query.addEventListener("change", apply)
    return () => query.removeEventListener("change", apply)
  }, [])
  return wide
}
