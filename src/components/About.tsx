import { profile } from "../data/content"
import { Reveal } from "./Reveal"

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-head">
        <Reveal direction="left">
          <p className="eyebrow">02 — About</p>
          <h2 id="about-title">Engineering, with the system still in the room.</h2>
        </Reveal>
      </div>
      <div className="about-grid">
        <Reveal direction="left" delay={0.06}>
          <div className="prose">
            <p>
              I am studying {profile.degree} at {profile.university}, from {profile.dates}. My CGPA
              is {profile.cgpa}. The courses that shaped the work below are data structures,
              machine learning, deep learning, natural language processing, and databases.
            </p>
            <p>
              I want to build backend systems and applications that stay understandable as they
              grow: APIs with a clear data path, services that do not block on work the user is not
              waiting for, and AI features that can be traced when the answer looks fine and the
              step before it was not.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.12}>
          <dl className="fact-list">
            <div>
              <dt>Focus</dt>
              <dd>Backend development, scalable applications, artificial intelligence</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>{profile.degree}</dd>
            </div>
            <div>
              <dt>University</dt>
              <dd>{profile.university}</dd>
            </div>
            <div>
              <dt>CGPA</dt>
              <dd>{profile.cgpa}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
