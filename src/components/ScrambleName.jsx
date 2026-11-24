import { useCallback, useEffect, useRef, useState } from 'react'

// Mismos caracteres que usa el fondo ASCII
const GLYPHS = '=+xX0S8#@%&*/<>'
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

/**
 * El nombre aparece "decodificándose": cada letra pasa por caracteres ASCII
 * aleatorios hasta fijarse, de izquierda a derecha.
 * Al pasar el mouse por encima se vuelve a decodificar.
 */
export default function ScrambleName({ text, delay = 600, duration = 1200, className = '' }) {
  const reduced = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  const scrambled = () => [...text].map((c) => (c === ' ' ? ' ' : randomGlyph())).join('')
  const [out, setOut] = useState(() => (reduced ? text : scrambled()))
  const [settled, setSettled] = useState(reduced)
  const raf = useRef(0)
  const running = useRef(false)

  const play = useCallback(
    (wait = 0) => {
      if (reduced || running.current) return
      running.current = true
      setSettled(false)
      const chars = [...text]
      // momento en que se fija cada letra (escalonado + un poco de azar)
      const lockAt = chars.map((_, i) => wait + (i / chars.length) * duration * 0.75 + Math.random() * duration * 0.25)
      const start = performance.now()
      let lastSwap = 0

      const tick = (now) => {
        const elapsed = now - start
        if (now - lastSwap > 45) {
          lastSwap = now
          setOut(chars.map((c, i) => (c === ' ' || elapsed >= lockAt[i] ? c : randomGlyph())).join(''))
        }
        if (elapsed < Math.max(...lockAt)) {
          raf.current = requestAnimationFrame(tick)
        } else {
          setOut(text)
          setSettled(true)
          running.current = false
        }
      }
      raf.current = requestAnimationFrame(tick)
    },
    [text, duration, reduced]
  )

  useEffect(() => {
    play(delay)
    return () => {
      cancelAnimationFrame(raf.current)
      running.current = false
    }
  }, [play, delay])

  return (
    <span
      className={`scramble ${settled ? 'is-settled' : ''} ${className}`}
      aria-label={text}
      onPointerEnter={() => play(0)}
    >
      <span className="grad" aria-hidden="true">{out}</span>
    </span>
  )
}
