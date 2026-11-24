import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { customIcons, softSkills, stacks } from '../data/portfolio'
import { Reveal, SectionHead } from './Motion'

function TechLogo({ item }) {
  if (item.svg) return <span className="tech__svg" dangerouslySetInnerHTML={{ __html: customIcons[item.svg] }} />
  return <img className={item.invert ? 'inv' : ''} src={item.img} alt="" loading="lazy" width="44" height="44" />
}

function Marquee() {
  const all = stacks.flatMap((s) => s.items)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...all, ...all].map((item, i) => (
          <span className="marquee__item" key={i}>
            <TechLogo item={item} /> {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Tech() {
  const [tab, setTab] = useState(stacks[0].name)
  const current = stacks.find((s) => s.name === tab)

  return (
    <section className="section section--alt" id="tecnologias">
      <div className="container">
        <SectionHead
          eyebrow="02 · Tecnologías"
          title="Mi stack tecnológico"
          lead="Trabajo en todo el ciclo de una aplicación: interfaz, lógica de negocio, base de datos e infraestructura."
        />
      </div>

      <Marquee />

      <div className="container">
        <Reveal className="tabs" role="tablist" aria-label="Categorías de tecnologías">
          {stacks.map((s) => (
            <button
              key={s.name}
              role="tab"
              aria-selected={tab === s.name}
              className={`tab ${tab === s.name ? 'is-active' : ''}`}
              onClick={() => setTab(s.name)}
            >
              {tab === s.name && (
                <motion.span layoutId="tab-pill" className="tab__pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="tab__label">{s.name}</span>
              <span className="tab__count">{s.items.length}</span>
            </button>
          ))}
        </Reveal>

        <div className="tech-panel">
          <AnimatePresence mode="wait">
            <motion.ul
              key={tab}
              className="tech-grid"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
                exit: { opacity: 0, transition: { duration: 0.15 } },
              }}
            >
              {current.items.map((item) => (
                <motion.li
                  key={item.name}
                  className="tech"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                >
                  <TechLogo item={item} />
                  <span>{item.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

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
