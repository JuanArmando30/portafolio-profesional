import { customIcons, techIcons } from '../data/portfolio'
import { useLang } from '../i18n'

/** Nombre visible de una tecnología (traducido si aplica). */
export function useTechLabel() {
  const { t } = useLang()
  return (name) => t.techLabels[name] ?? name
}

/** Logo de una tecnología del registro; si no existe, muestra sus iniciales. */
export default function TechIcon({ name, className = '', size = 36 }) {
  const icon = techIcons[name]
  if (icon?.svg) {
    return <span className={`tech-icon ${className}`} style={{ width: size, height: size }} dangerouslySetInnerHTML={{ __html: customIcons[icon.svg] }} />
  }
  if (icon?.img) {
    return <img className={`tech-icon ${icon.invert ? 'inv' : ''} ${className}`} src={icon.img} alt="" loading="lazy" width={size} height={size} />
  }
  return (
    <span className={`tech-icon tech-icon--fallback ${className}`} style={{ width: size, height: size }}>
      {name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)}
    </span>
  )
}
