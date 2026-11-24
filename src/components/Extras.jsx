import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { profile } from '../data/portfolio'
import { ArrowUpIcon } from './Icons'

/** Pantalla de carga breve con el logotipo. */
export function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1300)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="preloader__logo"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 100 100" className="preloader__ring">
          <motion.circle
            cx="50" cy="50" r="44"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </svg>
        <span>{profile.initials}</span>
      </motion.div>
    </motion.div>
  )
}

/** Halo de luz que sigue al cursor (solo en escritorio). */
export function CursorGlow() {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null
  return <motion.div className="cursor-glow" style={{ x: sx, y: sy }} aria-hidden="true" />
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
        <p className="mono footer__made">Hecho con React + Framer Motion</p>
      </div>
    </footer>
  )
}
