import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Ilustraciones animadas de cada proyecto. Se usan mientras no haya
 * fotos en src/assets/proyectos/<id>/ (ver data/media.js).
 */

const ease = [0.22, 1, 0.36, 1]

function VgCover({ text }) {
  return (
    <div className="cover cover--vg">
      <div className="mock">
        <div className="mock__bar"><i /><i /><i /><span>Sistema Integral VG</span></div>
        <div className="mock__body">
          <div className="mock__side">
            {Array.from({ length: 5 }).map((_, i) => <b key={i} className={i === 0 ? 'on' : ''} />)}
          </div>
          <div className="mock__main">
            <div className="mock__kpis">
              {text.kpis.map((k, i) => (
                <div key={k}><small>{k}</small><strong>{['148', '$3,240', '12'][i]}</strong></div>
              ))}
            </div>
            <div className="mock__chart">
              {[45, 70, 58, 88, 64, 76, 52].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.8, ease }}
                />
              ))}
            </div>
            <div className="mock__qr">
              <div className="mock__qr-code">
                <svg viewBox="0 0 21 21"><path fill="currentColor" d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 14h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zM8 0h2v2H8zm3 1h2v3h-2zM8 4h2v3H8zm0 4h3v2H8zm4 0h2v4h-2zm3 0h3v2h-3zm4 2h2v3h-2zM8 12h3v2H8zm7 2h2v2h-2zm-6 2h3v2H9zm5 2h3v3h-3zm4-3h3v2h-3zm1 4h2v2h-2zM12 19h1v2h-1zM0 8h2v4H0zm3 2h3v2H3z" /></svg>
                <span className="mock__scan" />
              </div>
              <div><small>{text.scan}</small><strong>3° B · 12:41</strong></div>
              <span className="mock__ok">✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IotCover({ text }) {
  const [shown, setShown] = useState(1)
  useEffect(() => {
    const id = setInterval(() => setShown((n) => (n >= text.lines.length + 2 ? 1 : n + 1)), 900)
    return () => clearInterval(id)
  }, [text.lines.length])

  return (
    <div className="cover cover--iot">
      <div className="term">
        <div className="mock__bar"><i /><i /><i /><span>vehiculo · websocket</span></div>
        <div className="term__body">
          {text.lines.slice(0, Math.min(shown, text.lines.length)).map((l, i) => (
            <motion.p
              key={l}
              className={`term__line term__line--${l[0] === '$' ? 'cmd' : l[0] === '✓' ? 'ok' : l[0] === '←' ? 'in' : 'out'}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {l}
              {i === Math.min(shown, text.lines.length) - 1 && <span className="term__caret" />}
            </motion.p>
          ))}
        </div>
        <div className="term__pad" aria-hidden="true">
          <span className="term__stick" />
        </div>
      </div>
    </div>
  )
}

function EcoCover({ text }) {
  const [active, setActive] = useState(3)
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % text.bins.length), 1800)
    return () => clearInterval(id)
  }, [text.bins.length])

  return (
    <div className="cover cover--eco">
      <div className="cam">
        <span className="cam__rec">● REC</span>
        <span className="cam__corner cam__corner--tl" /><span className="cam__corner cam__corner--tr" />
        <span className="cam__corner cam__corner--bl" /><span className="cam__corner cam__corner--br" />
        <motion.div
          key={active}
          className="cam__box"
          initial={{ opacity: 0, scale: 1.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease }}
        >
          <span className="cam__label">{text.bins[active]} · {90 + ((active * 7) % 9)}%</span>
          <span className="cam__object" data-kind={active} />
        </motion.div>
        <span className="cam__scanline" />
      </div>
      <div className="bins">
        {text.bins.map((b, i) => (
          <span key={b} className={`bins__item ${i === active ? 'is-active' : ''}`}>{b}</span>
        ))}
      </div>
    </div>
  )
}

export default function Cover({ id, text }) {
  if (id === 'vg') return <VgCover text={text} />
  if (id === 'iot') return <IotCover text={text} />
  return <EcoCover text={text} />
}
