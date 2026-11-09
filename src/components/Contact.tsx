import { profile } from "../data/content"
import { Reveal } from "./Reveal"

const links = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.leetcode, label: "LeetCode" },
]

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <Reveal direction="right">
        <p className="eyebrow">06 — Contact</p>
        <h2 id="contact-title">If the problem is a system, write.</h2>
      </Reveal>
      <Reveal direction="left" delay={0.08}>
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </Reveal>
      <Reveal direction="up" delay={0.12}>
        <ul className="text-links contact-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download="Nitheesha-Moturu-Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
        <p className="closing">Clear systems, aimed at a real problem. That is the work I want.</p>
      </Reveal>
      <p className="colophon">© {new Date().getFullYear()} Nitheesha Moturu</p>
    </section>
  )
}
