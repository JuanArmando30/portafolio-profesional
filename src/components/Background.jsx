import { motion, useScroll, useTransform } from 'framer-motion'
import GradientASCII from './GradientASCII/GradientASCII'

const FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

// Ajustes por tema. Claro = colores por defecto de React Bits.
const THEMES = {
  dark: {
    colors: ['#1e3fd8', '#3b82f6', '#a5d8ff', '#38bdf8'],
    glyphOpacity: 0.8,
    gradientOpacity: 0.55,
    fill: 0.32,
  },
  light: {
    colors: ['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8'],
    glyphOpacity: 0.85,
    gradientOpacity: 0.75,
    fill: 0.3,
  },
}

/**
 * Fondo ASCII animado (GradientASCII de React Bits) que cubre toda la pantalla.
 * Para mantener el contraste se usa un velo del color del tema (no negro):
 * más fuerte detrás del texto del inicio y uniforme (ligero) al hacer scroll.
 */
export default function Background({ theme }) {
  const t = THEMES[theme === 'light' ? 'light' : 'dark']
  const { scrollY } = useScroll()
  const dim = useTransform(scrollY, [0, 700], [0, 1])
  const scrim = useTransform(scrollY, [0, 700], [1, 0.25])

  return (
    <div className="bg" aria-hidden="true">
      <GradientASCII
        colors={t.colors}
        shape="horizon"
        cellSize={16}
        density={0.8}
        glyphOpacity={t.glyphOpacity}
        gradientOpacity={t.gradientOpacity}
        fill={t.fill}
        glow={0.2}
        flicker={0.25}
        softness={0.6}
        flow={0.6}
        speed={0.7}
        grain={0.05}
        scrambleRadius={0.08}
        clickEffect="wave"
        fontFamily={FONT}
      />
      <motion.div className="bg__scrim" style={{ opacity: scrim }} />
      <motion.div className="bg__dim" style={{ opacity: dim }} />
    </div>
  )
}
