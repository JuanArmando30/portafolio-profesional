import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile, stats } from '../data/portfolio'
import useTypewriter from '../hooks/useTypewriter'
import { Counter, Magnetic } from './Motion'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export default function Hero() {
  const typed = useTypewriter(profile.typedRoles)
  const [photoOk, setPhotoOk] = useState(true)
  const { scrollY } = useScroll()
  const yText = useTransform(scrollY, [0, 600], [0, 120])
  const ySide = useTransform(scrollY, [0, 600], [0, -60])
  const fade = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <motion.div className="hero__text" style={{ y: yText, opacity: fade }}>
          {profile.available && (
            <motion.p className="status-pill" {...fadeUp(0.5)}>
              <span className="dot" /> Disponible para nuevos proyectos
            </motion.p>
          )}

          <h1 className="hero__title">
            <motion.span className="hero__hello" {...fadeUp(0.6)}>Hola, soy</motion.span>
            <motion.span
              className="grad grad--anim hero__name"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.75, ease }}
            >
              {profile.name}
            </motion.span>
          </h1>

          <motion.p className="hero__role" {...fadeUp(0.95)}>
            <span className="mono hero__prompt">&gt;</span> {typed}
            <span className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p className="hero__bio" {...fadeUp(1.05)}>
            <span className="hl-strong">{profile.role}</span>.{' '}
            {profile.bio.map((part, i) =>
              typeof part === 'string' ? part : <span key={i} className="hl">{part.hl}</span>
            )}
          </motion.p>

          <motion.div className="hero__cta" {...fadeUp(1.15)}>
            <Magnetic>
              <a className="btn btn--primary" href="#proyectos">
                Ver proyectos <ArrowIcon />
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href="#contacto">
                <MailIcon /> Contáctame
              </a>
            </Magnetic>
            {profile.cv && (
              <Magnetic>
                <a className="btn btn--ghost" href={profile.cv} download>
                  <DownloadIcon /> CV
                </a>
              </Magnetic>
            )}
          </motion.div>

          <motion.div className="hero__social" {...fadeUp(1.25)}>
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Correo"><MailIcon /></a>
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
                <img src={profile.photo} alt={`Foto de ${profile.fullName}`} onError={() => setPhotoOk(false)} />
              ) : (
                <span className="avatar__initials">{profile.initials}</span>
              )}
            </div>
            <motion.span
              className="float-tag float-tag--1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {'</>'} Full Stack
            </motion.span>
            <motion.span
              className="float-tag float-tag--2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ☁ AWS
            </motion.span>
            <motion.span
              className="float-tag float-tag--3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              ⚡ IoT + IA
            </motion.span>
          </motion.div>

          <motion.ul
            className="stats"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.3 } } }}
          >
            {stats.map((s) => (
              <motion.li
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { ease } } }}
              >
                <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.a
        href="#proyectos"
        className="scroll-hint"
        aria-label="Bajar a proyectos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="scroll-hint__mouse"><span /></span>
      </motion.a>
    </section>
  )
}
