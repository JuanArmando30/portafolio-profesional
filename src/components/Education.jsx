import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { createPortal } from 'react-dom'
import { certifications } from '../data/portfolio'
import { useLang } from '../i18n'
import { Reveal, SectionHead, Stagger, StaggerItem, TiltCard } from './Motion'
import { AwardIcon, CapIcon, CheckIcon, CloseIcon, ExtIcon, EyeIcon } from './Icons'

/** Logotipo simplificado del emisor. */
function IssuerLogo({ logo }) {
  if (logo === 'cisco') {
    return (
      <svg viewBox="0 0 48 48" width="30" height="30" aria-hidden="true">
        <g fill="#049FD9">
          {[[6, 22], [12, 16], [18, 22], [24, 10], [30, 22], [36, 16], [42, 22]].map(([x, h], i) => (
            <rect key={i} x={x - 1.6} y={30 - h} width="3.2" height={h} rx="1.6" />
          ))}
        </g>
        <text x="24" y="42" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="800" fontSize="8" fill="#049FD9">CISCO</text>
      </svg>
    )
  }
  return <span className="cert__logo-text">TecNM</span>
}

/** Visor del certificado (imagen en grande). */
function CertViewer({ cert, name, onClose }) {
  const { t } = useLang()
  const closeRef = useRef(null)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.figure
        className="viewer"
        role="dialog"
        aria-modal="true"
        aria-label={name}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label={t.education.close}><CloseIcon /></button>
        <img src={cert.image} alt={name} />
        <figcaption>{name} · {cert.issuer}{cert.year && ` · ${cert.year}`}</figcaption>
      </motion.figure>
    </motion.div>,
    document.body
  )
}

export default function Education() {
  const { t } = useLang()
  const ed = t.education
  const ref = useRef(null)
  const [viewing, setViewing] = useState(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section className="section" id="formacion">
      <div className="container">
        <SectionHead eyebrow={ed.eyebrow} title={ed.title} />

        <div className="edu">
          {/* Formación académica */}
          <div>
            <Reveal as="h3" className="edu__heading" y={16}>
              <span className="edu__heading-icon"><CapIcon /></span> {ed.academic}
            </Reveal>
            <div className="timeline" ref={ref}>
              <div className="timeline__track">
                <motion.div className="timeline__fill" style={{ scaleY: fill }} />
              </div>
              <ol>
                {ed.items.map((e, i) => (
                  <Reveal as="li" key={e.school} x={-30} y={0} delay={i * 0.1} className="timeline__item">
                    <span className="timeline__dot" />
                    <span className="tl-date">{e.years}</span>
                    <h3>{e.degree}</h3>
                    <p className="edu__school">{e.school}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <Reveal as="h3" className="edu__heading" y={16}>
              <span className="edu__heading-icon"><AwardIcon /></span> {ed.certsTitle}
            </Reveal>
            <Stagger className="certs" stagger={0.08}>
              {certifications.map((c) => {
                const name = ed.certs[c.id]
                return (
                  <StaggerItem key={c.id}>
                    <TiltCard className="cert" max={5}>
                      <div className="cert__top">
                        <span className="cert__logo"><IssuerLogo logo={c.logo} /></span>
                        <span className="cert__seal"><CheckIcon /> {ed.certified}</span>
                      </div>
                      <h4>{name}</h4>
                      <p className="cert__issuer">{c.issuer}{c.year && ` · ${c.year}`}</p>
                      {(c.image || c.url) && (
                        <div className="cert__actions">
                          {c.image && (
                            <button className="btn btn--ghost btn--sm" onClick={() => setViewing(c)}>
                              <EyeIcon /> {ed.view}
                            </button>
                          )}
                          {c.url && (
                            <a className="btn btn--ghost btn--sm" href={c.url} target="_blank" rel="noopener">
                              <ExtIcon /> {ed.verify}
                            </a>
                          )}
                        </div>
                      )}
                    </TiltCard>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {viewing && <CertViewer key={viewing.id} cert={viewing} name={ed.certs[viewing.id]} onClose={() => setViewing(null)} />}
      </AnimatePresence>
    </section>
  )
}
