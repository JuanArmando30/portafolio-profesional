import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { useLang } from '../i18n'
import { Magnetic, Reveal, SplitText } from './Motion'
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__border" aria-hidden="true" />
          <div className="cta__content">
            <p className="eyebrow"><span className="eyebrow__line" /> {t.contact.eyebrow}</p>
            <h2><SplitText key={t.contact.title} text={t.contact.title} /></h2>
            <p>{t.contact.lead}</p>

            <div className="cta__actions">
              <Magnetic>
                <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
                  <MailIcon /> {t.contact.send}
                </a>
              </Magnetic>
              <Magnetic>
                <button className="btn btn--ghost btn--lg" onClick={copy}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'ok' : 'copy'}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}
                    >
                      {copied ? <><CheckIcon /> {t.contact.copied}</> : <><CopyIcon /> {t.contact.copy}</>}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--ghost btn--lg" href={profile.github} target="_blank" rel="noopener">
                  <GitHubIcon /> GitHub
                </a>
              </Magnetic>
              {profile.linkedin && (
                <Magnetic>
                  <a className="btn btn--ghost btn--lg" href={profile.linkedin} target="_blank" rel="noopener">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </Magnetic>
              )}
            </div>
            <p className="cta__mail mono">{profile.email}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
