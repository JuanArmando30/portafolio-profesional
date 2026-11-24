import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { strings } from './data/i18n'

const LangContext = createContext(null)

const initialLang = () => {
  try {
    const saved = localStorage.getItem('idioma')
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* modo privado */ }
  return 'es'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    const t = strings[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try { localStorage.setItem('idioma', lang) } catch { /* modo privado */ }
  }, [lang])

  const value = useMemo(
    () => ({ lang, t: strings[lang], toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')) }),
    [lang]
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
