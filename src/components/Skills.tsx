import { skillGroups } from "../data/content"
import { Reveal } from "./Reveal"

const directions = ["left", "right", "up"] as const

export function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section-head">
        <Reveal direction="left">
          <p className="eyebrow">04 — Skills</p>
          <h2 id="skills-title">What I use, grouped by the work.</h2>
        </Reveal>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            direction={directions[index % directions.length]}
            className="skill-group"
          >
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
