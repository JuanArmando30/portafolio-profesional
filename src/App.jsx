import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Education from './components/Education'
import Contact from './components/Contact'
import { BackToTop, Footer, Intro } from './components/Extras'

const initialTheme = () => document.documentElement.dataset.theme || 'dark'

export default function App() {
  const [theme, setTheme] = useState(initialTheme)
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('tema', theme) } catch { /* modo privado */ }
  }, [theme])

  return (
    // reducedMotion="user": respeta la preferencia del sistema de reducir animaciones
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Intro onDone={done} />}</AnimatePresence>
      <Background theme={theme} />
      {!loading && (
        <>
          <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
          <main>
            <Hero />
            <Projects />
            <Tech />
            <Education />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </MotionConfig>
  )
}
