import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/portfolio'
import { Magnetic } from './Motion'
import ScrambleName from './ScrambleName'
import TechIcon from './TechIcon'
import { useLang } from '../i18n'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

// Flotación de cada etiqueta (como antes) y cada cuánto cambia su texto
const FLOAT = [
  { y: -10, duration: 4, delay: 0 },
  { y: 10, duration: 5, delay: 0 },
  { y: -8, duration: 4.5, delay: 1 },
]
const SWAP_EVERY = 4010 // ms entre cambios de cada etiqueta

/** Etiqueta flotante que va mostrando una skill distinta cada cierto tiempo. */
function FloatTag({ index, skills, y, duration, delay }) {
  const [step, setStep] = useState(0)
  const count = Math.ceil(skills.length / FLOAT.length)

  useEffect(() => {
    let id
    // Escalonado: cada etiqueta empieza a cambiar en un momento distinto
    const start = setTimeout(() => {
      setStep((s) => s + 1)
      id = setInterval(() => setStep((s) => s + 1), SWAP_EVERY)
    }, SWAP_EVERY + index * 1000)
    return () => {
      clearTimeout(start)
      clearInterval(id)
    }
  }, [index])

  const item = skills[(index + FLOAT.length * (step % count)) % skills.length]
  const isIcon = typeof item === 'object'
  const key = isIcon ? `icon:${item.icon}` : item

  return (
    <motion.span
      className={`float-tag float-tag--${index + 1} ${isIcon ? 'float-tag--icon' : ''}`}
      title={isIcon ? item.icon : undefined}
      animate={{ y: [0, y, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={key}
          className="float-tag__text"
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          transition={{ duration: 0.25 }}
        >
          {isIcon ? (
            <>
              <TechIcon name={item.icon} size={22} />
              <span className="sr-only">{item.icon}</span>
            </>
          ) : item}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

export default function Hero() {
  const { t } = useLang()
  const [photoOk, setPhotoOk] = useState(true)
  const { scrollY } = useScroll()
  const yText = useTransform(scrollY, [0, 600], [0, 120])
  const ySide = useTransform(scrollY, [0, 600], [0, -60])
  const fade = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <motion.div className="hero__text" style={{ y: yText, opacity: fade }}>
          <h1 className="hero__title">
            <motion.span className="hero__hello" {...fadeUp(0.5)}>{t.hero.hello}</motion.span>
            <motion.span
              className="hero__name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <ScrambleName text={profile.name} delay={650} />
            </motion.span>
          </h1>

          <motion.p className="hero__role" {...fadeUp(0.95)}>
            <span className="hero__prompt">&gt;</span> {profile.tagline}
            <span className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p className="hero__bio" {...fadeUp(1.05)}>
            {t.hero.bio.map((part, i) =>
              typeof part === 'string' ? part : <span key={i} className="hl">{part.hl}</span>
            )}
          </motion.p>

          <motion.div className="hero__cta" {...fadeUp(1.15)}>
            <Magnetic>
              <a className="btn btn--primary" href="#proyectos">
                {t.hero.viewProjects} <ArrowIcon />
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href="#contacto">
                <MailIcon /> {t.hero.contact}
              </a>
            </Magnetic>
            {profile.cv && (
              <Magnetic>
                <a className="btn btn--ghost" href={profile.cv} download>
                  <DownloadIcon /> {t.hero.cv}
                </a>
              </Magnetic>
            )}
          </motion.div>

          <motion.div className="hero__social" {...fadeUp(1.25)}>
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
            )}
            <a href={`mailto:${profile.email}`} aria-label={t.hero.email}><MailIcon /></a>
            <span className="hero__social-line" />
          </motion.div>
        </motion.div>

        <motion.div className="hero__side" style={{ y: ySide }}>
          <motion.div
            className="avatar"
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
          >
            <div className="avatar__ring" />
            <div className="avatar__orbit">
              <span className="orbit-dot orbit-dot--1" />
              <span className="orbit-dot orbit-dot--2" />
              <span className="orbit-dot orbit-dot--3" />
            </div>
            <div className="avatar__inner">
              {photoOk ? (
                <img src={profile.photo} alt={`${t.hero.photoAlt} ${profile.fullName}`} onError={() => setPhotoOk(false)} />
              ) : (
                <span className="avatar__initials">{profile.brand}</span>
              )}
            </div>
            {FLOAT.map((f, i) => (
              <FloatTag key={i} index={i} skills={t.hero.tags} {...f} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#proyectos"
        className="scroll-hint"
        aria-label={t.hero.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="scroll-hint__mouse"><span /></span>
      </motion.a>
    </section>
  )
}
