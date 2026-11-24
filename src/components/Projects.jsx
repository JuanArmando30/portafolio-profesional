import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, featured, projects } from '../data/portfolio'
import { Reveal, SectionHead, TiltCard } from './Motion'
import { ExtIcon, GitHubIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1]

function DashboardMock() {
  return (
    <div className="mock">
      <div className="mock__bar"><i /><i /><i /><span>Sistema Integral VG</span></div>
      <div className="mock__body">
        <div className="mock__side">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.b
              key={i}
              className={i === 0 ? 'on' : ''}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease }}
            />
          ))}
        </div>
        <div className="mock__main">
          <div className="mock__kpis">
            {[['Comidas hoy', '148'], ['Pagos', '$3,240'], ['Préstamos', '12']].map(([k, v], i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, ease }}
              >
                <small>{k}</small><strong>{v}</strong>
              </motion.div>
            ))}
          </div>
          <div className="mock__chart">
            {[45, 70, 58, 88, 64, 76, 52].map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.8, ease }}
              />
            ))}
          </div>
          <div className="mock__qr">
            <div className="mock__qr-code">
              <svg viewBox="0 0 21 21"><path fill="currentColor" d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 14h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zM8 0h2v2H8zm3 1h2v3h-2zM8 4h2v3H8zm0 4h3v2H8zm4 0h2v4h-2zm3 0h3v2h-3zm4 2h2v3h-2zM8 12h3v2H8zm7 2h2v2h-2zm-6 2h3v2H9zm5 2h3v3h-3zm4-3h3v2h-3zm1 4h2v2h-2zM12 19h1v2h-1zM0 8h2v4H0zm3 2h3v2H3z" /></svg>
              <span className="mock__scan" />
            </div>
            <div>
              <small>Entrada registrada</small>
              <strong>3° B · 12:41</strong>
            </div>
            <span className="mock__ok">✓</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Featured() {
  return (
    <Reveal className="feature">
      <div className="feature__body">
        <span className="badge badge--glow"><span className="dot" /> {featured.badge}</span>
        <h3>{featured.title}</h3>
        <p>{featured.description}</p>
        <ul className="feature__list">
          {featured.points.map(([b, rest], i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.07, ease }}
            >
              <strong>{b}</strong>{rest}
            </motion.li>
          ))}
        </ul>
        <div className="tags">{featured.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <p className="note">{featured.note}</p>
      </div>
      <div className="feature__visual" aria-hidden="true">
        <DashboardMock />
      </div>
    </Reveal>
  )
}

function ProjectCard({ p }) {
  return (
    <TiltCard className={`card ${p.big ? 'card--big' : ''}`}>
      <div className="card__top">
        <span className="card__icon">{p.icon}</span>
        {p.badge && <span className="badge">{p.badge}</span>}
      </div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      {p.points && (
        <ul className="mini-list">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
      )}
      <div className="tags tags--sm">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      {(p.code || p.demo) && (
        <div className="card__links">
          {p.code && <a href={p.code} target="_blank" rel="noopener"><GitHubIcon /> Código</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noopener"><ExtIcon /> Demo</a>}
        </div>
      )}
    </TiltCard>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const list = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionHead
          eyebrow="01 · Proyectos"
          title="Lo que he construido"
          lead="Proyectos reales, desde un sistema en producción para una escuela hasta un vehículo controlado por internet."
        />

        <Featured />

        <Reveal className="filters" role="tablist" aria-label="Filtrar proyectos">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`filter ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {filter === c && (
                <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="filter__label">{c}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid-projects">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease }}
                className={p.big ? 'span-big' : ''}
              >
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
