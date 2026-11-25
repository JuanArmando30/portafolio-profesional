import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolio'
import { useLang } from '../i18n'
import { SectionHead, Stagger, StaggerItem, TiltCard } from './Motion'
import Cover from './Covers'
import { mediaOf } from '../data/media'
import TechIcon, { useTechLabel } from './TechIcon'
import ProjectModal, { ProjectLinks } from './ProjectModal'
import { EyeIcon } from './Icons'

const CARD_TECH = 5

function ProjectCard({ p, onOpen }) {
  const { t } = useLang()
  const label = useTechLabel()
  const txt = t.projectText[p.id]
  const extra = p.tech.length - CARD_TECH
  const media = mediaOf(p.id)
  const cover = media.find((m) => m.type === 'image')
  const photos = media.filter((m) => m.type === 'image').length
  const hasVideo = media.some((m) => m.type === 'video')

  return (
    <TiltCard className="pcard" max={4}>
      <button className="pcard__media" onClick={onOpen} aria-label={`${t.projects.details}: ${txt.title}`}>
        {cover ? <img src={cover.src} alt="" loading="lazy" /> : <Cover id={p.id} text={txt.cover} />}
        {(photos > 0 || hasVideo) && (
          <span className="pcard__count">
            {photos > 0 && <span>▣ {photos}</span>}
            {hasVideo && <span>▶ {t.projects.video}</span>}
          </span>
        )}
      </button>

      <div className="pcard__body">
        <span className="badge badge--glow pcard__badge"><span className="dot" /> {txt.badge}</span>
        <h3>
          <span className="pcard__icon">{p.icon}</span>
          {txt.title}
        </h3>
        <p className="pcard__desc">{txt.short}</p>

        <ul className="pcard__tech" aria-label={t.projects.tech}>
          {p.tech.slice(0, CARD_TECH).map((name) => (
            <li key={name} title={label(name)}>
              <TechIcon name={name} size={26} />
              <span className="sr-only">{label(name)}</span>
            </li>
          ))}
          {extra > 0 && <li className="pcard__more" title={p.tech.slice(CARD_TECH).map(label).join(', ')}>+{extra}</li>}
        </ul>

        <div className="pcard__actions">
          <ProjectLinks p={p} />
          <button className="btn btn--primary btn--sm" onClick={onOpen}>
            <EyeIcon /> {t.projects.details}
          </button>
        </div>
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  const { t } = useLang()
  const [openId, setOpenId] = useState(null)
  const open = projects.find((p) => p.id === openId)

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionHead eyebrow={t.projects.eyebrow} title={t.projects.title} lead={t.projects.lead} />

        <Stagger className="pgrid" stagger={0.12}>
          {projects.map((p) => (
            <StaggerItem key={p.id} className="pgrid__cell">
              <ProjectCard p={p} onOpen={() => setOpenId(p.id)} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {open && <ProjectModal key={open.id} p={open} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  )
}
