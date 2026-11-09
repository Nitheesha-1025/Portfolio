import { achievements } from "../data/content"
import { Reveal } from "./Reveal"

export function Achievements() {
  return (
    <section className="section achievements" id="achievements" aria-labelledby="achievements-title">
      <div className="section-head">
        <Reveal direction="left">
          <p className="eyebrow">05 — Achievements</p>
          <h2 id="achievements-title">Top 1%, a semifinal, and NSS.</h2>
        </Reveal>
      </div>
      <div className="honors">
        <div className="honors-grid">
          {achievements.map((item, index) => (
            <Reveal key={item.title} direction={index % 2 === 0 ? "left" : "right"}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>
                  {item.detail}
                  {item.href ? (
                    <>
                      {" "}
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.hrefLabel}
                      </a>
                    </>
                  ) : null}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
