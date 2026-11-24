// =========================================================
//  Todo el contenido del portafolio vive aquí.
//  Edita este archivo para cambiar textos, proyectos o enlaces.
// =========================================================

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'
const dev = (name, file = `${name}-original`) => `${DEVICON}/${name}/${file}.svg`

export const profile = {
  name: 'Juan Armando',
  fullName: 'Juan Armando Castillo Rodríguez',
  initials: 'JC',
  logo: 'juan',
  role: 'Ingeniero en Sistemas Computacionales',
  typedRoles: [
    'Desarrollador Full Stack',
    'Backend & APIs REST',
    'IoT + Inteligencia Artificial',
    'Análisis de datos',
  ],
  bio: [
    'Desarrollador de software enfocado en ',
    { hl: 'análisis de datos' },
    ' y soluciones tecnológicas. Trabajo con desarrollo web full stack, Python, SQL, AWS, Excel, Power BI y redes para ',
    { hl: 'optimizar procesos mediante la tecnología' },
    '. Busco sumarme a proyectos innovadores donde aportar una visión analítica y soluciones eficientes mientras sigo creciendo técnicamente. Me distinguen el ',
    { hl: 'pensamiento crítico, la iniciativa y el aprendizaje autónomo' },
    '.',
  ],
  email: 'Juanarmandoc11@gmail.com',
  github: 'https://github.com/JuanArmando30',
  linkedin: '', // ej. 'https://www.linkedin.com/in/tu-usuario'
  cv: '', // ej. 'cv.pdf' (colócalo en /public)
  photo: 'img/foto.jpg', // coloca tu foto en /public/img/foto.jpg
  available: true,
}

export const featured = {
  badge: 'Institución educativa · En producción',
  title: 'Sistema Integral VG — Comedor y Biblioteca escolar',
  description:
    'Sistema web que digitaliza la administración del comedor y la biblioteca de una escuela. Reemplaza las listas en papel por un control con códigos QR: cada alumno tiene su credencial y su entrada se registra con la cámara en segundos.',
  points: [
    ['4 roles', ' con permisos propios: administrador, cajero, bibliotecario y vocal de grupo.'],
    ['QR con cámara', ' para registrar entradas, con generación e impresión masiva de credenciales.'],
    ['Dashboard con gráficas', ', pagos de alumnos, control de adeudos y gastos.'],
    ['Biblioteca', ': catálogo de libros, préstamos y devoluciones.'],
    ['Reportes semanales', ' y exportación a Excel/CSV.'],
    ['Seguridad', ': contraseñas cifradas, sesiones verificadas y HTTPS forzado.'],
  ],
  tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'ApexCharts', 'jsQR', 'PhpSpreadsheet', 'Git'],
  note: 'Código privado · sistema en uso por la escuela',
}

export const categories = ['Todos', 'Web', 'IoT e IA', 'Datos', 'Algoritmos']

export const projects = [
  {
    icon: 'IoT',
    badge: 'Desplegado en AWS',
    category: 'IoT e IA',
    title: 'Excavadora IoT controlada por internet',
    description:
      'API REST + WebSocket que controla y monitorea en tiempo real un vehículo con ESP32. Interfaz web con 5 modos de manejo: botones, joystick, voz, giroscopio del celular y gestos de la mano con IA.',
    points: [
      "EC2 + RDS, HTTPS/WSS con Caddy y Let's Encrypt",
      '21 procedimientos almacenados, documentación Swagger',
      'Monitoreo en vivo e historial de movimientos',
    ],
    tags: ['Python', 'FastAPI', 'WebSocket', 'AWS', 'MySQL', 'ESP32', 'MediaPipe'],
    code: 'https://github.com/JuanArmando30/vehiculo_oit',
    demo: '', // 'https://vehiculos-juan.duckdns.org/docs' cuando la instancia esté encendida
    big: true,
  },
  {
    icon: 'IA',
    badge: 'Presentado en InnovaTecNM',
    category: 'IoT e IA',
    title: 'EcoBot — Clasificador inteligente de residuos',
    description:
      'Prototipo que identifica basura con visión por computadora y la deposita en el contenedor correcto. Modelo entrenado con un dataset propio; el resultado se envía a un ESP32 que mueve los servomotores.',
    points: [
      '4 categorías: orgánico, inorgánico, metal y PET',
      'Confirmación por tiempo para evitar falsas detecciones',
      'Presentado con modelo de negocio en InnovaTecNM',
    ],
    tags: ['Python', 'TensorFlow Lite', 'OpenCV', 'ESP32', 'Arduino'],
    big: true,
  },
  {
    icon: 'C++',
    badge: 'Algoritmos · Optimización',
    category: 'Algoritmos',
    title: 'Agente Viajero — Comparador de algoritmos',
    description:
      'Resuelve el problema del agente viajero con fuerza bruta multihilo, algoritmo voraz y algoritmo genético, y compara costo y tiempo de cada uno. Lee matrices desde Excel sin librerías externas.',
    points: ['Núcleo en C++17 optimizado con hilos y poda', 'Interfaz web servida por un servidor en Python'],
    tags: ['C++17', 'Python', 'JavaScript', 'Algoritmos'],
    big: true,
  },
  {
    icon: 'BI',
    badge: 'Inteligencia de negocios',
    category: 'Datos',
    title: 'Data Warehouse y tableros en Power BI',
    description:
      'Diseño de un almacén de datos con modelo estrella, transformación de datos y generación de cubos para análisis de ventas. Tableros interactivos para la toma de decisiones.',
    points: ['Modelado dimensional (hechos y dimensiones)', 'Limpieza y transformación con Power Query'],
    tags: ['SQL', 'Power BI', 'Data Warehouse', 'Excel'],
    big: true,
  },
  {
    icon: 'API',
    category: 'Web',
    title: 'Mundo-Reserva',
    description: 'Sitio de reservaciones de propiedades que consume APIs REST hechas en ASP.NET Web API.',
    tags: ['C#', 'ASP.NET', 'JavaScript'],
  },
  {
    icon: 'WEB',
    category: 'Web',
    title: 'Tienda en línea con servicio web',
    description: 'Carrito de compras, CRUD de usuarios con permisos y menú en PDF. Base de datos en AWS RDS, probado con Postman.',
    tags: ['PHP', 'MySQL', 'AWS'],
  },
  {
    icon: 'LEX',
    category: 'Algoritmos',
    title: 'Analizador léxico y semántico',
    description: 'Aplicación de escritorio que tokeniza y valida código fuente, con tabla de símbolos.',
    tags: ['Java', 'Swing', 'Compiladores'],
  },
  {
    icon: '3D',
    category: 'Web',
    title: 'Gráficos 2D, 3D y VR',
    description: 'Animaciones y colisiones con Canvas, escenas 3D con Three.js y pruebas en realidad virtual.',
    tags: ['JavaScript', 'Canvas', 'Three.js'],
  },
  {
    icon: 'NET',
    category: 'Algoritmos',
    title: 'Calculadora de subneteo',
    description: 'Herramienta que calcula subredes VLSM, máscaras y wildcards para diseñar redes.',
    tags: ['Python', 'Redes'],
  },
  {
    icon: 'SIM',
    category: 'Datos',
    title: 'Simulación de procesos',
    description: 'Modelo de un proceso real con 4 alternativas de mejora, evaluadas con análisis estadístico.',
    tags: ['FlexSim', 'Estadística'],
  },
]

// Íconos propios para tecnologías sin logo en devicon
export const customIcons = {
  websocket:
    '<svg viewBox="0 0 48 48" fill="none" stroke="#22D3EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 17h30l-7-7M40 31H10l7 7"/></svg>',
  dw: '<svg viewBox="0 0 48 48" fill="none" stroke="#34D399" stroke-width="2.5"><ellipse cx="24" cy="11" rx="14" ry="5"/><path d="M10 11v26c0 2.8 6.3 5 14 5s14-2.2 14-5V11"/><path d="M10 20c0 2.8 6.3 5 14 5s14-2.2 14-5M10 28.5c0 2.8 6.3 5 14 5s14-2.2 14-5"/></svg>',
  powerbi:
    '<svg viewBox="0 0 48 48"><rect x="27" y="6" width="11" height="36" rx="3" fill="#F2C811"/><rect x="18.5" y="14" width="11" height="28" rx="3" fill="#E6AD10"/><rect x="10" y="23" width="11" height="19" rx="3" fill="#C99214"/></svg>',
  excel:
    '<svg viewBox="0 0 48 48"><rect x="14" y="6" width="28" height="36" rx="3" fill="#21A366"/><path d="M14 18h28M14 30h28M28 6v36" stroke="#107C41" stroke-width="2"/><rect x="6" y="13" width="22" height="22" rx="3" fill="#107C41"/><path d="m11 18 12 12m0-12L11 30" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
  https:
    '<svg viewBox="0 0 48 48" fill="none" stroke-width="2.5" stroke-linejoin="round"><rect x="10" y="21" width="28" height="21" rx="4" stroke="#34D399"/><path d="M16 21v-6a8 8 0 0 1 16 0v6" stroke="#34D399"/><circle cx="24" cy="31" r="3" fill="#34D399"/></svg>',
  esp32:
    '<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="3" fill="#E7352C"/><rect x="18" y="18" width="12" height="12" rx="1.5" fill="#fff" opacity=".9"/><g stroke="#9CA3AF" stroke-width="2.5" stroke-linecap="round"><path d="M17 5v5M24 5v5M31 5v5M17 38v5M24 38v5M31 38v5M5 17h5M5 24h5M5 31h5M38 17h5M38 24h5M38 31h5"/></g></svg>',
  mediapipe:
    '<svg viewBox="0 0 48 48" fill="none" stroke-width="3" stroke-linecap="round"><path d="M16 40V22M22 40V10M28 40V12M34 40V18" stroke="#0097A7"/><circle cx="16" cy="20" r="3" fill="#FFC107" stroke="none"/><circle cx="22" cy="8" r="3" fill="#FFC107" stroke="none"/><circle cx="28" cy="10" r="3" fill="#FFC107" stroke="none"/><circle cx="34" cy="16" r="3" fill="#FFC107" stroke="none"/></svg>',
  cisco:
    '<svg viewBox="0 0 48 48" fill="none" stroke="#049FD9" stroke-width="2.5"><rect x="18" y="5" width="12" height="9" rx="2"/><rect x="5" y="34" width="12" height="9" rx="2"/><rect x="31" y="34" width="12" height="9" rx="2"/><path d="M24 14v10M11 34v-6h26v6M24 24v4"/></svg>',
  vlan: '<svg viewBox="0 0 48 48" fill="none" stroke-width="2.5"><rect x="6" y="18" width="36" height="12" rx="3" stroke="#34D399"/><g stroke="#34D399" stroke-linecap="round"><path d="M12 24h2M18 24h2M24 24h2M30 24h2"/></g><path d="M12 18V8M36 18V8M12 30v10M36 30v10" stroke="#F59E0B" stroke-linecap="round"/></svg>',
  ipv6: '<svg viewBox="0 0 48 48"><rect x="4" y="12" width="40" height="24" rx="6" fill="none" stroke="#22D3EE" stroke-width="2.5"/><text x="24" y="28.5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11" fill="#22D3EE">IPv6</text></svg>',
  security:
    '<svg viewBox="0 0 48 48" fill="none" stroke-width="2.5" stroke-linejoin="round"><path d="M24 5 8 11v12c0 10 7 17 16 20 9-3 16-10 16-20V11L24 5Z" stroke="#EF4444"/><path d="m17 24 5 5 9-10" stroke="#34D399" stroke-linecap="round"/></svg>',
}

// Cada categoría es un cuadro. icon: server | chart | layout | cloud | chip | shield
// wide: true hace que el cuadro ocupe dos columnas en escritorio.
// img: URL de imagen · svg: clave en customIcons · invert: logo oscuro que se aclara en tema oscuro
export const stacks = [
  {
    name: 'Backend',
    icon: 'server',
    desc: 'APIs REST, lógica de negocio y servicios en tiempo real.',
    wide: true,
    items: [
      { name: 'Python', img: dev('python') },
      { name: 'PHP', img: dev('php') },
      { name: 'FastAPI', img: dev('fastapi') },
      { name: 'C#', img: dev('csharp') },
      { name: 'ASP.NET', img: dev('dotnetcore') },
      { name: 'Java', img: dev('java') },
      { name: 'C++', img: dev('cplusplus') },
      { name: 'WebSocket', svg: 'websocket' },
      { name: 'Apache', img: dev('apache') },
    ],
  },
  {
    name: 'Datos y análisis',
    icon: 'chart',
    desc: 'Modelado, consultas y tableros para decidir con datos.',
    items: [
      { name: 'MySQL', img: dev('mysql') },
      { name: 'Power BI', svg: 'powerbi' },
      { name: 'Excel', svg: 'excel' },
      { name: 'Data Warehouse', svg: 'dw' },
      { name: 'NumPy', img: dev('numpy') },
    ],
  },
  {
    name: 'Frontend',
    icon: 'layout',
    desc: 'Interfaces claras, responsivas y animadas.',
    wide: true,
    items: [
      { name: 'HTML5', img: dev('html5') },
      { name: 'CSS3', img: dev('css3') },
      { name: 'JavaScript', img: dev('javascript') },
      { name: 'React', img: dev('react') },
      { name: 'Bootstrap', img: dev('bootstrap') },
      { name: 'jQuery', img: dev('jquery') },
      { name: 'Three.js', img: dev('threejs'), invert: true },
    ],
  },
  {
    name: 'IoT e Inteligencia Artificial',
    icon: 'chip',
    desc: 'Hardware conectado y visión por computadora.',
    items: [
      { name: 'ESP32', svg: 'esp32' },
      { name: 'Arduino', img: dev('arduino') },
      { name: 'TensorFlow', img: dev('tensorflow') },
      { name: 'OpenCV', img: dev('opencv') },
      { name: 'MediaPipe', svg: 'mediapipe' },
      { name: 'LabVIEW', img: dev('labview') },
    ],
  },
  {
    name: 'Redes y seguridad',
    icon: 'shield',
    desc: 'Diseño de redes y buenas prácticas de seguridad.',
    items: [
      { name: 'Packet Tracer', svg: 'cisco' },
      { name: 'VLAN', svg: 'vlan' },
      { name: 'IPv6', svg: 'ipv6' },
      { name: 'Ciberseguridad', svg: 'security' },
    ],
  },
  {
    name: 'Cloud y herramientas',
    icon: 'cloud',
    desc: 'Despliegue, control de versiones, pruebas y documentación.',
    wide: true,
    items: [
      { name: 'AWS', img: dev('amazonwebservices', 'amazonwebservices-original-wordmark'), invert: true },
      { name: 'Git', img: dev('git') },
      { name: 'GitHub', img: dev('github'), invert: true },
      { name: 'Postman', img: dev('postman') },
      { name: 'Swagger', img: dev('swagger') },
      { name: 'VS Code', img: dev('vscode') },
      { name: 'HTTPS · Caddy', svg: 'https' },
      { name: 'Windows Server', img: dev('windows11') },
    ],
  },
]

export const softSkills = [
  ['Análisis de requerimientos', ' y modelado UML: casos de uso, clases y actividades.'],
  ['Trato directo con usuarios', ': levantamiento de necesidades, capacitación y mejora continua.'],
  ['Documentación clara', ': README, guías de despliegue y casos de prueba.'],
]

export const experience = [
  {
    date: '2026 — Actualidad',
    title: 'Desarrollador Full Stack · Institución educativa',
    description:
      'Análisis, desarrollo, despliegue y soporte del sistema de comedor y biblioteca escolar. Trabajo directo con administración, caja y biblioteca para convertir procesos en papel en un sistema con roles, códigos QR y reportes.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Hosting · HTTPS'],
  },
  {
    date: '2026',
    title: 'Backend, IoT y Cloud · Plataforma de control vehicular',
    description:
      'Diseño de la API en FastAPI, base de datos con 21 procedimientos almacenados y despliegue en AWS (EC2 + RDS) con HTTPS y WebSocket seguro; integración con ESP32 e interfaz web de control en tiempo real.',
    tags: ['FastAPI', 'AWS', 'WebSocket', 'ESP32'],
  },
  {
    date: '2026',
    title: 'Visión por computadora · EcoBot (InnovaTecNM)',
    description:
      'Entrenamiento de un modelo de clasificación con un dataset propio, integración con hardware y presentación del proyecto con su modelo de negocio en el concurso InnovaTecNM.',
    tags: ['TensorFlow Lite', 'OpenCV', 'ESP32'],
  },
  {
    date: '2025 — 2026',
    title: 'Desarrollo web y APIs REST',
    description:
      'Sitios y servicios web con PHP y ASP.NET Web API publicados en AWS: tienda en línea con carrito, sistema de reservaciones y administración de usuarios con permisos.',
    tags: ['PHP', 'C#', 'AWS RDS', 'Postman'],
  },
]

export const education = {
  title: 'Ingeniería en Sistemas Computacionales',
  school: 'Tecnológico Nacional de México',
  years: '2022 — 2026',
}

export const certifications = [
  'Python Essentials 1 — Cisco Networking Academy',
  'Getting Started with Cisco Packet Tracer — Cisco',
  'Fundamentos de Ciberseguridad — Cisco',
  'Curso MOOC — TecNM',
]
