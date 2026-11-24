import { motion, useScroll, useTransform } from 'framer-motion'
import GradientASCII from './GradientASCII/GradientASCII'

const FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

// Rampa de color: del tono más tenue al más brillante
const PALETTES = {
  dark: ['#06303a', '#0e7490', '#22d3ee', '#4ade80'],
  light: ['#a5f3fc', '#22d3ee', '#0e7490', '#047857'],
}

/**
 * Fondo ASCII animado (GradientASCII de React Bits) con capas de contraste:
 * - un velo lateral que oscurece la zona donde va el texto
 * - un velo extra que aparece al hacer scroll para que el contenido se lea bien
 */
export default function Background({ theme }) {
  const light = theme === 'light'
  const { scrollY } = useScroll()
  const dim = useTransform(scrollY, [0, 700], [0, 1])

  return (
    <div className="bg" aria-hidden="true">
      <GradientASCII
        colors={PALETTES[light ? 'light' : 'dark']}
        lightMode={light}
        shape="horizon"
        cellSize={16}
        density={0.8}
        glyphOpacity={light ? 0.55 : 0.75}
        gradientOpacity={light ? 0.35 : 0.5}
        glow={0.18}
        flicker={0.25}
        softness={0.6}
        flow={0.6}
        speed={0.7}
        grain={0.05}
        scrambleRadius={0.08}
        clickEffect="wave"
        fontFamily={FONT}
      />
      <div className="bg__scrim" />
      <motion.div className="bg__dim" style={{ opacity: dim }} />
    </div>
  )
}
