// =========================================================
//  Datos que NO dependen del idioma: enlaces, íconos y listas.
//  Los textos en español e inglés están en ./i18n.js
// =========================================================

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'
const dev = (name, file = `${name}-original`) => `${DEVICON}/${name}/${file}.svg`

export const profile = {
  name: 'Juan Armando',
  fullName: 'Juan Armando Castillo Rodríguez',
  brand: 'JACR',
  tagline: 'Software Developer & Data Analyst',
  email: 'Juanarmandoc11@gmail.com',
  github: 'https://github.com/JuanArmando30',
  linkedin: '', // ej. 'https://www.linkedin.com/in/tu-usuario'
  cv: '', // ej. 'cv.pdf' (colócalo en /public)
  photo: 'img/foto.jpeg', // coloca tu foto en /public/img/foto.jpg
}

// ---------------------------------------------------------
//  Proyectos (los textos de cada uno están en i18n.js → projectText)
//  code:   URL del repositorio ('' = se muestra como no disponible)
//  demo:   URL del proyecto en vivo ('' = se muestra como no disponible)
//  images: capturas en /public/img/proyectos/ (ej. 'img/proyectos/vg-1.jpg').
//          Mientras esté vacío se muestra una ilustración animada.
//  tech:   nombres de techIcons (abajo); en la tarjeta se ven los primeros 5
// ---------------------------------------------------------
export const projects = [
  {
    id: 'vg',
    icon: 'QR',
    code: '', // repositorio privado
    demo: '',
    images: [],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'ApexCharts', 'jsQR', 'PhpSpreadsheet', 'Git'],
  },
  {
    id: 'iot',
    icon: 'IoT',
    code: 'https://github.com/JuanArmando30/vehiculo_oit',
    demo: '', // 'https://vehiculos-juan.duckdns.org/docs' cuando la instancia EC2 esté encendida
    images: [],
    tech: ['Python', 'FastAPI', 'WebSocket', 'AWS', 'MySQL', 'ESP32', 'MediaPipe', 'HTTPS · Caddy', 'Swagger'],
  },
  {
    id: 'eco',
    icon: 'IA',
    code: '',
    demo: '',
    images: [],
    tech: ['Python', 'TensorFlow Lite', 'OpenCV', 'ESP32', 'Arduino'],
  },
]

// ---------------------------------------------------------
//  Íconos propios para tecnologías sin logo en devicon
// ---------------------------------------------------------
export const customIcons = {
  websocket:
    '<svg viewBox="0 0 48 48" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 17h30l-7-7M40 31H10l7 7"/></svg>',
  dw: '<svg viewBox="0 0 48 48" fill="none" stroke="#60A5FA" stroke-width="2.5"><ellipse cx="24" cy="11" rx="14" ry="5"/><path d="M10 11v26c0 2.8 6.3 5 14 5s14-2.2 14-5V11"/><path d="M10 20c0 2.8 6.3 5 14 5s14-2.2 14-5M10 28.5c0 2.8 6.3 5 14 5s14-2.2 14-5"/></svg>',
  powerbi:
    '<svg viewBox="0 0 48 48"><rect x="27" y="6" width="11" height="36" rx="3" fill="#F2C811"/><rect x="18.5" y="14" width="11" height="28" rx="3" fill="#E6AD10"/><rect x="10" y="23" width="11" height="19" rx="3" fill="#C99214"/></svg>',
  excel:
    '<svg viewBox="0 0 48 48"><rect x="14" y="6" width="28" height="36" rx="3" fill="#21A366"/><path d="M14 18h28M14 30h28M28 6v36" stroke="#107C41" stroke-width="2"/><rect x="6" y="13" width="22" height="22" rx="3" fill="#107C41"/><path d="m11 18 12 12m0-12L11 30" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
  https:
    '<svg viewBox="0 0 48 48" fill="none" stroke-width="2.5" stroke-linejoin="round"><rect x="10" y="21" width="28" height="21" rx="4" stroke="#60A5FA"/><path d="M16 21v-6a8 8 0 0 1 16 0v6" stroke="#60A5FA"/><circle cx="24" cy="31" r="3" fill="#60A5FA"/></svg>',
  esp32:
    '<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="3" fill="#E7352C"/><rect x="18" y="18" width="12" height="12" rx="1.5" fill="#fff" opacity=".9"/><g stroke="#9CA3AF" stroke-width="2.5" stroke-linecap="round"><path d="M17 5v5M24 5v5M31 5v5M17 38v5M24 38v5M31 38v5M5 17h5M5 24h5M5 31h5M38 17h5M38 24h5M38 31h5"/></g></svg>',
  mediapipe:
    '<svg viewBox="0 0 48 48" fill="none" stroke-width="3" stroke-linecap="round"><path d="M16 40V22M22 40V10M28 40V12M34 40V18" stroke="#0097A7"/><circle cx="16" cy="20" r="3" fill="#FFC107" stroke="none"/><circle cx="22" cy="8" r="3" fill="#FFC107" stroke="none"/><circle cx="28" cy="10" r="3" fill="#FFC107" stroke="none"/><circle cx="34" cy="16" r="3" fill="#FFC107" stroke="none"/></svg>',
  cisco:
    '<svg viewBox="0 0 48 48" fill="none" stroke="#049FD9" stroke-width="2.5"><rect x="18" y="5" width="12" height="9" rx="2"/><rect x="5" y="34" width="12" height="9" rx="2"/><rect x="31" y="34" width="12" height="9" rx="2"/><path d="M24 14v10M11 34v-6h26v6M24 24v4"/></svg>',
  vlan: '<svg viewBox="0 0 48 48" fill="none" stroke-width="2.5"><rect x="6" y="18" width="36" height="12" rx="3" stroke="#60A5FA"/><g stroke="#60A5FA" stroke-linecap="round"><path d="M12 24h2M18 24h2M24 24h2M30 24h2"/></g><path d="M12 18V8M36 18V8M12 30v10M36 30v10" stroke="#F59E0B" stroke-linecap="round"/></svg>',
  ipv6: '<svg viewBox="0 0 48 48"><rect x="4" y="12" width="40" height="24" rx="6" fill="none" stroke="#38BDF8" stroke-width="2.5"/><text x="24" y="28.5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11" fill="#38BDF8">IPv6</text></svg>',
  security:
    '<svg viewBox="0 0 48 48" fill="none" stroke-width="2.5" stroke-linejoin="round"><path d="M24 5 8 11v12c0 10 7 17 16 20 9-3 16-10 16-20V11L24 5Z" stroke="#EF4444"/><path d="m17 24 5 5 9-10" stroke="#60A5FA" stroke-linecap="round"/></svg>',
  apexcharts:
    '<svg viewBox="0 0 48 48" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 42h36" stroke="#94A3B8" stroke-width="2.5"/><path d="M8 36 19 22l8 8 13-18" stroke="#00E396" stroke-width="3.5"/><circle cx="19" cy="22" r="3.5" fill="#008FFB"/><circle cx="40" cy="12" r="3.5" fill="#008FFB"/></svg>',
  qr: '<svg viewBox="0 0 48 48" fill="#38BDF8"><path d="M6 6h15v15H6zm4 4v7h7v-7zM27 6h15v15H27zm4 4v7h7v-7zM6 27h15v15H6zm4 4v7h7v-7z"/><path d="M27 27h6v6h-6zm9 0h6v6h-6zm-9 9h6v6h-6zm9 0h6v6h-6z" opacity=".7"/></svg>',
  spreadsheet:
    '<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="4" stroke="#8892BF" stroke-width="2.5"/><path d="M8 16h32M8 26h32M8 34h32M20 6v36" stroke="#8892BF" stroke-width="2"/><rect x="21" y="17" width="18" height="8" fill="#4F5B93" opacity=".55"/></svg>',
}

// ---------------------------------------------------------
//  Registro de tecnologías → ícono.
//  img: URL de imagen · svg: clave en customIcons · invert: logo oscuro que se aclara en tema oscuro
//  Si el nombre se traduce, la traducción está en i18n.js → techLabels
// ---------------------------------------------------------
export const techIcons = {
  HTML5: { img: dev('html5') },
  CSS3: { img: dev('css3') },
  JavaScript: { img: dev('javascript') },
  React: { img: dev('react') },
  Bootstrap: { img: dev('bootstrap') },
  jQuery: { img: dev('jquery') },
  'Three.js': { img: dev('threejs'), invert: true },
  Python: { img: dev('python') },
  PHP: { img: dev('php') },
  FastAPI: { img: dev('fastapi') },
  'C#': { img: dev('csharp') },
  'ASP.NET': { img: dev('dotnetcore') },
  Java: { img: dev('java') },
  'C++': { img: dev('cplusplus') },
  WebSocket: { svg: 'websocket' },
  Apache: { img: dev('apache') },
  MySQL: { img: dev('mysql'), invert: true },
  'Power BI': { svg: 'powerbi' },
  Excel: { svg: 'excel' },
  'Data Warehouse': { svg: 'dw' },
  NumPy: { img: dev('numpy') },
  AWS: { img: dev('amazonwebservices', 'amazonwebservices-original-wordmark'), invert: true },
  Git: { img: dev('git') },
  GitHub: { img: dev('github'), invert: true },
  Postman: { img: dev('postman') },
  Swagger: { img: dev('swagger') },
  'VS Code': { img: dev('vscode') },
  'HTTPS · Caddy': { svg: 'https' },
  'Windows Server': { img: dev('windows11') },
  ESP32: { svg: 'esp32' },
  Arduino: { img: dev('arduino') },
  TensorFlow: { img: dev('tensorflow') },
  'TensorFlow Lite': { img: dev('tensorflow') },
  OpenCV: { img: dev('opencv') },
  MediaPipe: { svg: 'mediapipe' },
  LabVIEW: { img: dev('labview') },
  'Packet Tracer': { svg: 'cisco' },
  VLAN: { svg: 'vlan' },
  IPv6: { svg: 'ipv6' },
  Cybersecurity: { svg: 'security' },
  ApexCharts: { svg: 'apexcharts' },
  jsQR: { svg: 'qr' },
  PhpSpreadsheet: { svg: 'spreadsheet' },
}

// ---------------------------------------------------------
//  Skills: cada categoría es un cuadro (nombre y descripción en i18n.js → tech.stacks)
//  icon: server | chart | layout | cloud | chip | shield
//  wide: true ocupa dos columnas en escritorio
// ---------------------------------------------------------
export const stacks = [
  { id: 'backend', icon: 'server', wide: true, items: ['Python', 'PHP', 'FastAPI', 'C#', 'ASP.NET', 'Java', 'C++', 'WebSocket', 'Apache'] },
  { id: 'data', icon: 'chart', items: ['MySQL', 'Power BI', 'Excel', 'Data Warehouse', 'NumPy'] },
  { id: 'frontend', icon: 'layout', wide: true, items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'jQuery', 'Three.js'] },
  { id: 'iot', icon: 'chip', items: ['ESP32', 'Arduino', 'TensorFlow', 'OpenCV', 'MediaPipe', 'LabVIEW'] },
  { id: 'net', icon: 'shield', items: ['Packet Tracer', 'VLAN', 'IPv6', 'Cybersecurity'] },
  { id: 'cloud', icon: 'cloud', wide: true, items: ['AWS', 'Git', 'GitHub', 'Postman', 'Swagger', 'VS Code', 'HTTPS · Caddy', 'Windows Server'] },
]

// ---------------------------------------------------------
//  Certificaciones (el nombre de cada una está en i18n.js → education.certs)
//  Para que se vea que SÍ las tienes, llena al menos uno de estos campos:
//  image: imagen del certificado en /public/certificados/ (ej. 'certificados/python.jpg')
//         → se abre en grande con el botón «Ver certificado»
//  url:   enlace de verificación (Credly, Cisco NetAcad, PDF en Drive...) → botón «Verificar»
//  year:  año de emisión (opcional)
// ---------------------------------------------------------
export const certifications = [
  { id: 'python', issuer: 'Cisco Networking Academy', logo: 'cisco', year: '', image: '', url: '' },
  { id: 'packet', issuer: 'Cisco Networking Academy', logo: 'cisco', year: '', image: '', url: '' },
  { id: 'cyber', issuer: 'Cisco Networking Academy', logo: 'cisco', year: '', image: '', url: '' },
  { id: 'mooc', issuer: 'TecNM', logo: 'tecnm', year: '', image: '', url: '' },
]
