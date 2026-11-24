import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { GitHubIcon, MoonIcon, SunIcon } from './Icons'
import { profile } from '../data/portfolio'
import { useLang } from '../i18n'

const ids = ['proyectos', 'tecnologias', 'formacion', 'contacto']
const keys = ['projects', 'tech', 'education', 'contact']

export function BrandMark({ size = 36 }) {
  return <img className="logo__mark" src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width={size} height={size} />
}

export default function Navbar({ theme, onToggleTheme }) {
  const { t, lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const links = ids.map((id, i) => ({ id, label: t.nav[keys[i]] }))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ;['inicio', ...ids].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="nav__progress" style={{ scaleX: progress }} />
      <div className="container nav__inner">
        <a href="#inicio" className="logo" onClick={() => setOpen(false)} aria-label={profile.fullName}>
          <BrandMark />
          <span className="logo__text">{profile.brand}</span>
        </a>

        <nav className="nav__links" aria-label={t.nav.main}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''}>
              {active === l.id && (
                <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="nav__label">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <button className="icon-btn lang-btn" onClick={toggleLang} aria-label={t.nav.lang} title={t.nav.lang}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={lang}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {lang.toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </button>
          <button className="icon-btn" onClick={onToggleTheme} aria-label={t.nav.theme} title={t.nav.theme}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'grid' }}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            className={`icon-btn burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            aria-label={t.nav.mobileMenu}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i + 0.1 }}
                className={active === l.id ? 'is-active' : ''}
              >
                <span className="mono">0{i + 1}.</span> {l.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
