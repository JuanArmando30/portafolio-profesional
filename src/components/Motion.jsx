import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/** Aparece al entrar en pantalla (fade + desplazamiento). */
export function Reveal({ children, delay = 0, y = 32, x = 0, className, as = 'div', ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/** Contenedor que escalona la aparición de sus hijos <StaggerItem>. */
export function Stagger({ children, className, stagger = 0.08, as = 'div' }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Comp>
  )
}

export const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
}

export function StaggerItem({ children, className, as = 'div', ...rest }) {
  const Comp = motion[as]
  return (
    <Comp className={className} variants={itemVariants} {...rest}>
      {children}
    </Comp>
  )
}

/** Número que cuenta desde 0 cuando aparece en pantalla. */
export function Counter({ value, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return <span ref={ref}>{display}{suffix}</span>
}

/** Tarjeta con inclinación 3D y brillo que sigue al cursor. */
export function TiltCard({ children, className = '', max = 8, ...rest }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    if (e.pointerType === 'touch') return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px)
    my.set(py)
    ref.current.style.setProperty('--mx', `${px * 100}%`)
    ref.current.style.setProperty('--my', `${py * 100}%`)
  }
  const onLeave = () => { mx.set(0.5); my.set(0.5) }

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      <span className="tilt__glow" aria-hidden="true" />
      {children}
    </motion.div>
  )
}

/** Botón/enlace "magnético": se desplaza un poco hacia el cursor. */
export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 250, damping: 15 })
  const y = useSpring(0, { stiffness: 250, damping: 15 })

  const onMove = (e) => {
    if (e.pointerType === 'touch') return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} style={{ x, y, display: 'inline-flex' }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}

/** Título que aparece palabra por palabra. */
export function SplitText({ text, className, delay = 0 }) {
  const words = text.split(' ')
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="split-word" aria-hidden="true">
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: '110%', opacity: 0 },
              show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </motion.span>
  )
}

export function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section__head">
      <Reveal as="p" className="eyebrow" y={16}>
        <span className="eyebrow__line" /> {eyebrow}
      </Reveal>
      <h2><SplitText key={title} text={title} /></h2>
      {lead && <Reveal as="p" key={lead} className="section__lead" delay={0.15}>{lead}</Reveal>}
    </div>
  )
}
