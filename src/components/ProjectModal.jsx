import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useLang } from '../i18n'
import Cover from './Covers'
import TechIcon, { useTechLabel } from './TechIcon'
import { ArrowIcon, CloseIcon, ExtIcon, GitHubIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1]

/**
 * Botones de Código y Demo (deshabilitados si no hay enlace).
 * size: 'sm' en las tarjetas, 'lg' en el modal (con Código como botón principal).
 */
export function ProjectLinks({ p, size = 'sm' }) {
  const { t } = useLang()
  const txt = t.projectText[p.id]
  const lg = size === 'lg'
  const sizeClass = lg ? 'btn--lg' : 'btn--sm'
  const codeClass = `btn ${lg ? 'btn--primary' : 'btn--ghost'} ${sizeClass}`
  const demoClass = `btn btn--ghost ${sizeClass}`

  return (
    <>
      {p.code ? (
        <a className={codeClass} href={p.code} target="_blank" rel="noopener"><GitHubIcon /> {t.projects.code}</a>
      ) : (
        <span className={`${codeClass} btn--disabled`} title={txt.codeNote || t.projects.noCode} aria-disabled="true">
          <GitHubIcon /> {t.projects.code}
        </span>
      )}
      {p.demo ? (
        <a className={demoClass} href={p.demo} target="_blank" rel="noopener"><ExtIcon /> {t.projects.demo}</a>
      ) : (
        <span className={`${demoClass} btn--disabled`} title={t.projects.noDemo} aria-disabled="true">
          <ExtIcon /> {t.projects.demo}
        </span>
      )}
    </>
  )
}

function Gallery({ p, txt }) {
  const { t } = useLang()
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const imgs = p.images

  if (!imgs.length) {
    return (
      <div className="gallery">
        <div className="gallery__stage gallery__stage--cover"><Cover id={p.id} text={txt.cover} /></div>
      </div>
    )
  }

  const go = (d) => {
    setDir(d)
    setI((v) => (v + d + imgs.length) % imgs.length)
  }

  return (
    <div className="gallery">
      <div className="gallery__stage">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={imgs[i]}
            src={imgs[i]}
            alt={`${txt.title} — ${t.projects.image} ${i + 1} ${t.projects.of} ${imgs.length}`}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.4, ease }}
          />
        </AnimatePresence>
        {imgs.length > 1 && (
          <>
            <button className="gallery__nav gallery__nav--prev" onClick={() => go(-1)} aria-label={t.projects.prev}>
              <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button className="gallery__nav gallery__nav--next" onClick={() => go(1)} aria-label={t.projects.next}>
              <ArrowIcon />
            </button>
            <span className="gallery__count">{i + 1} / {imgs.length}</span>
          </>
        )}
      </div>
      {imgs.length > 1 && (
        <div className="gallery__thumbs">
          {imgs.map((src, k) => (
            <button
              key={src}
              className={k === i ? 'is-active' : ''}
              onClick={() => { setDir(k > i ? 1 : -1); setI(k) }}
              aria-label={`${t.projects.image} ${k + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectModal({ p, onClose }) {
  const { t } = useLang()
  const label = useTechLabel()
  const txt = t.projectText[p.id]
  const closeRef = useRef(null)

  // Cerrar con Esc, bloquear el scroll de fondo y devolver el foco al cerrar
  useEffect(() => {
    const previous = document.activeElement
    const onKey = (e) => e.key === 'Escape' && onClose()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
      previous?.focus?.()
    }
  }, [onClose])

  return createPortal(
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="pmodal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${p.id}`}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease }}
      >
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label={t.projects.close}>
          <CloseIcon />
        </button>

        <div className="pmodal__top">
          <Gallery p={p} txt={txt} />

          <div className="pmodal__info">
            <p className="pmodal__eyebrow">{t.projects.featured}</p>
            <h3 id={`modal-title-${p.id}`}>{txt.title}</h3>
            <span className="pmodal__rule" />
            <span className="badge badge--glow"><span className="dot" /> {txt.badge}</span>
            <p className="pmodal__lead">{txt.short}</p>

            <p className="pmodal__label">{t.projects.stack}</p>
            <ul className="pmodal__stack" aria-label={t.projects.tech}>
              {p.tech.map((name, k) => (
                <motion.li
                  key={name}
                  data-label={label(name)}
                  tabIndex={0}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + k * 0.04, type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <TechIcon name={name} size={24} />
                  <span className="sr-only">{label(name)}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pmodal__actions">
              <ProjectLinks p={p} size="lg" />
            </div>
            {txt.codeNote && <p className="note">{txt.codeNote}</p>}
          </div>
        </div>

        <div className="pmodal__about">
          <p className="pmodal__label">{t.projects.about}</p>
          <div className="pmodal__cols">
            <div>
              <h4>{t.projects.what}</h4>
              <p>{txt.paragraphs[0]}</p>
              <h4>{t.projects.role}</h4>
              <p>{txt.paragraphs[1]}</p>
            </div>
            <div>
              <h4>{t.projects.highlights}</h4>
              <ul className="pmodal__list">
                {txt.highlights.map(([b, rest]) => <li key={b}><strong>{b}</strong>{rest}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}
