import { useEffect, useRef } from 'react'

/**
 * Fondo animado: red de partículas verde azulado que reacciona al cursor,
 * más manchas de luz ("aurora") difuminadas con CSS.
 */
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let w = 0, h = 0, particles = [], raf = 0

    const color = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--particle').trim() || '45, 212, 191'

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor((w * h) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      const rgb = color()
      ctx.clearRect(0, 0, w, h)
      const maxDist = 130

      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1

          // ligera repulsión del cursor
          const dx = p.x - mouse.x, dy = p.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < 120 && d > 0) {
            p.x += (dx / d) * 1.2
            p.y += (dy / d) * 1.2
          }
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, .7)`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < maxDist) {
            ctx.strokeStyle = `rgba(${rgb}, ${0.16 * (1 - d / maxDist)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // líneas hacia el cursor
        const a = particles[i]
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < 180) {
          ctx.strokeStyle = `rgba(${rgb}, ${0.35 * (1 - dm / 180)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) draw()
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__aurora bg__aurora--1" />
      <div className="bg__aurora bg__aurora--2" />
      <div className="bg__aurora bg__aurora--3" />
      <div className="bg__grid" />
      <canvas ref={canvasRef} className="bg__canvas" />
      <div className="bg__noise" />
    </div>
  )
}
