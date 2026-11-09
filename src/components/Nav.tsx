import { useState } from "react"
import { profile } from "../data/content"
import { useActiveSection } from "../hooks/useActiveSection"

const links = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
]

export function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="nav-mark" href="#top">
        Nitheesha Moturu
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={active === link.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-resume" href={profile.resume} download="Nitheesha-Moturu-Resume.pdf">
        Resume
      </a>
    </header>
  )
}
