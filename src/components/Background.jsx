import { useEffect, useRef } from 'react'

/**
 * Fondo animado: ondas de luz que fluyen (degradado cian → verde)
 * y se abren suavemente alrededor del cursor.
 */
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    let w = 0, h = 0, raf = 0, t = 0

    const cssRgb = (name, fallback) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const a = cssRgb('--wave-a', '34, 211, 238')
      const b = cssRgb('--wave-b', '52, 211, 153')
      ctx.clearRect(0, 0, w, h)

      // suaviza el seguimiento del cursor
      mouse.x += (mouse.tx - mouse.x) * 0.08
      mouse.y += (mouse.ty - mouse.y) * 0.08

      const lines = w < 700 ? 14 : 22
      const top = h * 0.42
      const span = h * 0.62
      const step = w < 700 ? 8 : 12

      for (let i = 0; i < lines; i++) {
        const k = i / (lines - 1) // 0 → 1 de arriba hacia abajo
        const base = top + k * span
        const amp = 18 + k * 46
        const phase = i * 0.28

        const grad = ctx.createLinearGradient(0, 0, w, 0)
        const alpha = 0.06 + 0.28 * Math.sin(Math.PI * k) // más brillantes al centro
        grad.addColorStop(0, `rgba(${a}, 0)`)
        grad.addColorStop(0.25, `rgba(${a}, ${alpha})`)
        grad.addColorStop(0.75, `rgba(${b}, ${alpha})`)
        grad.addColorStop(1, `rgba(${b}, 0)`)

        ctx.beginPath()
        for (let x = -step; x <= w + step; x += step) {
          let y =
            base +
            Math.sin(x * 0.0028 + t * 0.55 + phase) * amp +
            Math.sin(x * 0.0071 - t * 0.35 + phase * 1.7) * amp * 0.35

          // las ondas se separan alrededor del cursor
          const dx = x - mouse.x
          const dy = y - mouse.y
          const force = Math.exp(-(dx * dx) / 26000) * Math.exp(-(dy * dy) / 18000)
          y += Math.sign(dy || 1) * force * 55

          if (x === -step) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2
        ctx.stroke()
      }

      if (!reduced) {
        t += 0.012
        raf = requestAnimationFrame(draw)
      }
    }

    const onMove = (e) => { mouse.tx = e.clientX; mouse.ty = e.clientY }
    const onLeave = () => { mouse.tx = -9999; mouse.ty = -9999 }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) draw()
    }
    // Redibuja al cambiar de tema (para el modo sin animaciones)
    const themeObserver = new MutationObserver(() => reduced && draw())
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    resize()
    draw()
    const onResize = () => { resize(); if (reduced) draw() }
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__aurora bg__aurora--1" />
      <div className="bg__aurora bg__aurora--2" />
      <canvas ref={canvasRef} className="bg__canvas" />
      <div className="bg__vignette" />
      <div className="bg__noise" />
    </div>
  )
}
