import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { ArrowUpIcon } from './Icons'

/** Escribe un texto letra por letra cuando `start` es true. */
function useTyping(text, start, speed) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start || count >= text.length) return
    const t = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(t)
  }, [start, count, text, speed])
  return [text.slice(0, count), count >= text.length]
}

/**
 * Animación de entrada estilo terminal: escribe el nombre y debajo la leyenda.
 * Se puede saltar con un clic o cualquier tecla.
 */
export function Intro({ onDone }) {
  const reduced = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  const [cmd, cmdDone] = useTyping('whoami', true, reduced ? 0 : 70)
  const [name, nameDone] = useTyping(profile.name, cmdDone, reduced ? 0 : 95)
  const [tag, tagDone] = useTyping(profile.tagline, nameDone, reduced ? 0 : 38)

  useEffect(() => {
    if (!tagDone) return
    const t = setTimeout(onDone, reduced ? 200 : 900)
    return () => clearTimeout(t)
  }, [tagDone, onDone, reduced])

  useEffect(() => {
    window.addEventListener('keydown', onDone)
    return () => window.removeEventListener('keydown', onDone)
  }, [onDone])

  const active = !cmdDone ? 'cmd' : !nameDone ? 'name' : 'tag'
  const caret = <span className="intro__caret" aria-hidden="true" />

  return (
    <motion.div
      className="intro"
      onClick={onDone}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      role="presentation"
    >
      <div className="intro__box">
        <p className="intro__cmd">
          <span className="intro__user">{profile.logo}@portafolio</span>
          <span className="intro__sep">:~$</span> {cmd}
          {active === 'cmd' && caret}
        </p>
        <h1 className="intro__name">
          <span className="grad">{name}</span>
          {active === 'name' && caret}
        </h1>
        <p className="intro__tag">
          {cmdDone && nameDone && <span className="intro__prompt">&gt; </span>}
          {tag}
          {active === 'tag' && caret}
        </p>
      </div>
      <motion.p
        className="intro__skip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        [ clic o cualquier tecla para continuar ]
      </motion.p>
    </motion.div>
  )
}

/** Botón flotante para volver arriba. */
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#inicio"
          className="to-top"
          aria-label="Volver arriba"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4 }}
        >
          <ArrowUpIcon />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <p className="footer__made">Hecho con React + Framer Motion</p>
      </div>
    </footer>
  )
}
