const base = { width: 20, height: 20, viewBox: '0 0 24 24', 'aria-hidden': true }
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const GitHubIcon = (p) => (
  <svg {...base} {...p}>
    <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)
export const LinkedInIcon = (p) => (
  <svg {...base} {...p}>
    <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.6-2.64-1.62 0-1.86 1.26-1.86 2.56v4.92h-4v-11Z" />
  </svg>
)
export const MailIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm0 .5 9 6 9-6" /></svg>
)
export const CodeIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16" /></svg>
)
export const ExtIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M14 4h6v6m0-6L10 14m-4-8H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1" /></svg>
)
export const SunIcon = (p) => (
  <svg {...base} {...p}><g {...stroke}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></g></svg>
)
export const MoonIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
)
export const CapIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5m4-2v6" /></svg>
)
export const AwardIcon = (p) => (
  <svg {...base} {...p}><g {...stroke}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" /></g></svg>
)
export const ArrowIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M5 12h14m-6-6 6 6-6 6" /></svg>
)
export const ArrowUpIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M12 19V5m-6 6 6-6 6 6" /></svg>
)
export const CopyIcon = (p) => (
  <svg {...base} {...p}><g {...stroke}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></g></svg>
)
export const CheckIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="m5 12 5 5 9-10" /></svg>
)
export const DownloadIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M12 4v11m-5-5 5 5 5-5M5 20h14" /></svg>
)
export const EyeIcon = (p) => (
  <svg {...base} {...p}><g {...stroke}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></g></svg>
)
export const CloseIcon = (p) => (
  <svg {...base} {...p}><path {...stroke} d="M6 6l12 12M18 6 6 18" /></svg>
)
