import { motion } from 'framer-motion'
import { customIcons, softSkills, stacks } from '../data/portfolio'
import { Reveal, SectionHead, Stagger, StaggerItem, TiltCard } from './Motion'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const categoryIcons = {
  server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  cloud: <><path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.75 4.75 0 0 1-.5 9.5H7Z" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9.5 4.5-1 8-4.5 8-9.5V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
}

/**
 * Elementos por fila para que las filas queden parejas y sin huecos.
 * Ej.: 9 elementos con máximo 5 por fila → 2 filas → 5 + 4 (los de la última fila se estiran).
 */
const perRow = (count, max) => Math.ceil(count / Math.ceil(count / max))

function TechLogo({ item }) {
  if (item.svg) return <span className="skill__logo" dangerouslySetInnerHTML={{ __html: customIcons[item.svg] }} />
  return <img className={`skill__logo ${item.invert ? 'inv' : ''}`} src={item.img} alt="" loading="lazy" width="36" height="36" />
}

export default function Tech() {
  return (
    <section className="section section--alt" id="tecnologias">
      <div className="container">
        <SectionHead
          eyebrow="02 · Tecnologías"
          title="Mi stack tecnológico"
          lead="Trabajo en todo el ciclo de una aplicación: interfaz, lógica de negocio, datos e infraestructura."
        />

        <Stagger className="skills" stagger={0.1}>
          {stacks.map((s, idx) => (
            <StaggerItem key={s.name} className={`skills__cell ${s.wide ? 'skills__cell--wide' : ''}`}>
              <TiltCard className="skill-box" max={3}>
                <header className="skill-box__head">
                  <span className="skill-box__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><g {...stroke}>{categoryIcons[s.icon]}</g></svg>
                  </span>
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <span className="skill-box__num mono">0{idx + 1}</span>
                </header>

                <ul
                  className="skill-box__grid"
                  style={{
                    '--pr-d': perRow(s.items.length, s.wide ? 5 : 3),
                    '--pr-t': perRow(s.items.length, 6),
                    '--pr-m': perRow(s.items.length, 4),
                  }}
                >
                  {s.items.map((item, i) => (
                    <motion.li
                      key={item.name}
                      className="skill"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <TechLogo item={item} />
                      <span>{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="soft">
          <h3>Además</h3>
          <ul>
            {softSkills.map(([b, rest]) => (
              <li key={b}><strong>{b}</strong>{rest}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
