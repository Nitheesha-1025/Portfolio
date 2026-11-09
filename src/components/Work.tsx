import { useState } from "react"
import type { Project } from "../data/content"
import { projects } from "../data/content"
import { ArchitecturePlate } from "./ArchitecturePlate"
import { Reveal } from "./Reveal"

export function Work() {
  return (
    <section className="section work" id="projects" aria-labelledby="work-title">
      <div className="section-head section-head-split">
        <Reveal direction="left">
          <p className="eyebrow">03 — Projects</p>
          <h2 id="work-title">Six systems. Kumbh Kavach first.</h2>
        </Reveal>
        <Reveal direction="right" delay={0.08}>
          <p className="section-lede">
            Failure Forensics is the other long case. GigShield and AgriFair follow as products.
            ScaleURL and the document QA system close the set.
          </p>
        </Reveal>
      </div>
      <div className="studies">
        {projects.map((project, index) => {
          const flip = index % 2 === 1
          if (project.tier === "closing") {
            return <Minor key={project.id} project={project} flip={flip} />
          }
          return <Study key={project.id} project={project} flip={flip} priority={index === 0} />
        })}
      </div>
    </section>
  )
}

function Study({ project, flip, priority }: { project: Project; flip: boolean; priority?: boolean }) {
  return (
    <article
      className={flip ? `study study-${project.tier} flip` : `study study-${project.tier}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="study-copy">
        <Reveal direction={flip ? "left" : "right"}>
          <p className="eyebrow">
            {project.index} — {project.kicker}
          </p>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className="summary">{project.summary}</p>
        </Reveal>
        <Reveal direction={flip ? "left" : "right"} delay={0.08}>
          <div className="case">
            <h4>Problem</h4>
            <p>{project.problem}</p>
            <h4>What I built</h4>
            <p>{project.built}</p>
            <h4>Decisions</h4>
            <ul>
              {project.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Takeaway</h4>
            <p>{project.takeaway}</p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.12}>
          <Stack items={project.stack} />
          <ProjectLinks project={project} />
        </Reveal>
      </div>
      <StudyVisual project={project} flip={flip} priority={priority} />
    </article>
  )
}

function StudyVisual({ project, flip, priority }: { project: Project; flip: boolean; priority?: boolean }) {
  return (
    <Reveal className="study-visual" direction={flip ? "mask-right" : "mask-left"}>
      <ProjectVisual project={project} priority={priority} />
    </Reveal>
  )
}

function Minor({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      className={project.plate && !project.image ? "minor minor-plate" : "minor"}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <Reveal direction="left">
        <p className="minor-index">{project.index}</p>
      </Reveal>
      <div className="minor-copy">
        <Reveal direction={flip ? "right" : "left"}>
          <p className="eyebrow">{project.kicker}</p>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p>{project.summary}</p>
          <p>{project.built}</p>
          <p className="take">{project.takeaway}</p>
          <Stack items={project.stack} />
          <ProjectLinks project={project} />
        </Reveal>
      </div>
      <Reveal direction={flip ? "mask-left" : "mask-right"} className="minor-visual">
        <ProjectVisual project={project} />
      </Reveal>
    </article>
  )
}

function ProjectVisual({ project, priority }: { project: Project; priority?: boolean }) {
  const [failed, setFailed] = useState(false)
  if (project.image && !failed) {
    return (
      <figure className="plate plate-shot">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      </figure>
    )
  }
  if (project.plate) {
    return <ArchitecturePlate rows={project.plate} caption={`${project.name} · system`} />
  }
  return (
    <figure className="plate plate-arch">
      <figcaption>{project.name}</figcaption>
      <p className="plate-empty">{project.imageAlt}</p>
    </figure>
  )
}

function Stack({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul className="stack" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.live ? (
        <a className="btn" href={project.live} target="_blank" rel="noreferrer">
          Live app
        </a>
      ) : null}
      {project.github ? (
        <a className="btn" href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : null}
      {project.note ? <p className="note">{project.note}</p> : null}
    </div>
  )
}
