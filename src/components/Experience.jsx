import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { certifications, education, experience } from '../data/portfolio'
import { Reveal, SectionHead, TiltCard } from './Motion'
import { AwardIcon, CapIcon } from './Icons'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHead eyebrow="03 · Experiencia" title="Trayectoria" />

        <div className="journey">
          <div className="timeline" ref={ref}>
            <div className="timeline__track">
              <motion.div className="timeline__fill" style={{ scaleY: fill }} />
            </div>
            <ol>
              {experience.map((e, i) => (
                <Reveal as="li" key={e.title} x={-30} y={0} delay={i * 0.05} className="timeline__item">
                  <span className="timeline__dot" />
                  <span className="tl-date">{e.date}</span>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <div className="tags tags--sm">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="side-cards">
            <Reveal x={30} y={0}>
              <TiltCard className="info-card" max={5}>
                <span className="info-card__icon"><CapIcon /></span>
                <div>
                  <h3>{education.title}</h3>
                  <p>{education.school}</p>
                  <small>{education.years}</small>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal x={30} y={0} delay={0.1}>
              <TiltCard className="info-card" max={5}>
                <span className="info-card__icon"><AwardIcon /></span>
                <div>
                  <h3>Certificaciones</h3>
                  <ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              </TiltCard>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
