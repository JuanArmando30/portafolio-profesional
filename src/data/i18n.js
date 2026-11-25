// =========================================================
//  Textos del portafolio en español (es) e inglés (en).
//  Para cambiar un texto, edítalo en ambos idiomas.
//  En los arreglos de párrafos, { hl: '...' } resalta una frase.
// =========================================================

export const strings = {
  es: {
    meta: {
      title: 'Juan Armando · Software Developer & Data Analyst',
      description:
        'Portafolio de Juan Armando Castillo Rodríguez: desarrollador de software enfocado en análisis de datos, desarrollo web full stack, Python, SQL, AWS y Power BI.',
    },
    nav: {
      projects: 'Proyectos',
      tech: 'Tecnologías',
      education: 'Formación',
      contact: 'Contacto',
      menu: 'Abrir menú',
      mobileMenu: 'Menú',
      theme: 'Cambiar tema',
      lang: 'Switch to English',
      main: 'Principal',
    },
    intro: { host: 'portafolio', skip: '[ clic o cualquier tecla para continuar ]' },
    hero: {
      hello: 'Hola, soy',
      bio: [
        'Desarrollador de software orientado al ',
        { hl: 'análisis de datos y creación de aplicaciones web. ' },
        'Enfocado en crear soluciones eficientes, optimizar procesos y transformar información en valor.',
      ],
      viewProjects: 'Ver proyectos',
      contact: 'Contáctame',
      cv: 'CV',
      scroll: 'Bajar a proyectos',
      photoAlt: 'Foto de',
      email: 'Correo',
      // Skills que van cambiando en las 3 etiquetas junto a tu foto (sin emojis).
      // Texto: 'SQL' · Solo logo (sin texto): { icon: 'React' } — usa un nombre de techIcons en portfolio.js
      // La etiqueta 1 muestra 1ª, 4ª, 7ª…; la 2 muestra 2ª, 5ª, 8ª…; la 3 muestra 3ª, 6ª, 9ª…
      tags: ['Full Stack', 'AWS', 'Python', 'Análisis de datos', { icon: 'React' }, 'SQL', { icon: 'Power BI' }, 'FastAPI', { icon: 'TensorFlow' }, 'IoT + IA', { icon: 'JavaScript' }, { icon: 'PHP' }],
    },
    projects: {
      eyebrow: '01 · Proyectos',
      title: 'Lo que he construido',
      lead: 'Tres proyectos reales: un sistema en producción, un vehículo controlado por internet y un clasificador de residuos con IA.',
      code: 'Código',
      demo: 'Demo',
      details: 'Ver detalle',
      noCode: 'Código no disponible',
      noDemo: 'Demo no disponible',
      close: 'Cerrar',
      featured: 'Proyecto destacado',
      stack: 'Stack',
      about: 'Acerca del proyecto',
      what: 'Qué es',
      role: 'Mi participación',
      highlights: 'Lo más destacado',
      tech: 'Tecnologías utilizadas',
      prev: 'Imagen anterior',
      next: 'Imagen siguiente',
      image: 'Imagen',
      video: 'Video',
      of: 'de',
    },
    projectText: {
      vg: {
        title: 'Sistema Integral VG — Comedor y Biblioteca escolar',
        badge: 'En producción',
        short:
          'Sistema web que digitaliza el comedor y la biblioteca de una escuela: credenciales con código QR, pagos, préstamos y reportes.',
        // paragraphs[0] → «Qué es» · paragraphs[1] → «Mi participación»
        paragraphs: [
          'Sistema web que digitaliza la administración del comedor y la biblioteca de una institución educativa. Reemplaza las listas en papel por un control con códigos QR: cada alumno tiene su credencial y su entrada se registra con la cámara en segundos.',
          'Trabajé directamente con administración, caja y biblioteca para levantar requerimientos, desarrollar, desplegar y dar soporte al sistema, que hoy está en uso diario.',
        ],
        highlights: [
          ['4 roles', ' con permisos propios: administrador, cajero, bibliotecario y vocal de grupo.'],
          ['QR con cámara', ' para registrar entradas, con generación e impresión masiva de credenciales.'],
          ['Dashboard con gráficas', ', pagos de alumnos, control de adeudos y gastos.'],
          ['Biblioteca', ': catálogo de libros, préstamos y devoluciones.'],
          ['Reportes semanales', ' y exportación a Excel/CSV.'],
          ['Seguridad', ': contraseñas cifradas, sesiones verificadas y HTTPS forzado.'],
        ],
        codeNote: 'Código privado · sistema en uso por la escuela',
        cover: { kpis: ['Comidas hoy', 'Pagos', 'Préstamos'], scan: 'Entrada registrada' },
      },
      iot: {
        title: 'Excavadora IoT controlada por internet',
        badge: 'Desplegado en AWS',
        short:
          'Vehículo con ESP32 controlado y monitoreado en tiempo real desde la web, con 5 modos de manejo, incluidos voz y gestos con IA.',
        // paragraphs[0] → «Qué es» · paragraphs[1] → «Mi participación»
        paragraphs: [
          'API REST + WebSocket que controla y monitorea en tiempo real un vehículo con ESP32. La interfaz web ofrece 5 modos de manejo: botones, joystick, voz, giroscopio del celular y gestos de la mano reconocidos con IA.',
          'Diseñé la API en FastAPI, la base de datos y el despliegue en AWS (EC2 + RDS) con HTTPS y WebSocket seguro, además de la integración con el hardware.',
        ],
        highlights: [
          ['EC2 + RDS', " con HTTPS/WSS mediante Caddy y Let's Encrypt."],
          ['21 procedimientos almacenados', ' y documentación con Swagger.'],
          ['Monitoreo en vivo', ' e historial de movimientos.'],
          ['Gestos con IA', ' usando MediaPipe para manejar con la mano.'],
        ],
        codeNote: '',
        cover: {
          lines: [
            '$ ws connect wss://vehiculo/control',
            '✓ conectado · latencia 42 ms',
            '→ {"cmd": "avanzar", "vel": 80}',
            '→ {"cmd": "girar", "dir": "izq"}',
            '← telemetría: batería 87% · 31°C',
            '✋ gesto: puño → detener',
          ],
        },
      },
      eco: {
        title: 'EcoBot — Clasificador inteligente de residuos',
        badge: 'Presentado en InnovaTecNM',
        short:
          'Prototipo que reconoce residuos con visión por computadora y los deposita en el contenedor correcto.',
        // paragraphs[0] → «Qué es» · paragraphs[1] → «Mi participación»
        paragraphs: [
          'Prototipo que identifica basura con visión por computadora y la deposita en el contenedor correcto. El modelo se entrenó con un dataset propio de fotografías y el resultado se envía a un ESP32 que mueve los servomotores.',
          'El proyecto se presentó con su modelo de negocio en el concurso InnovaTecNM.',
        ],
        highlights: [
          ['4 categorías', ': orgánico, inorgánico, metal y PET.'],
          ['Dataset propio', ' de fotografías para entrenar el modelo.'],
          ['Confirmación por tiempo', ' para evitar falsas detecciones.'],
          ['Integración con hardware', ': ESP32 y servomotores.'],
        ],
        codeNote: '',
        cover: { bins: ['Orgánico', 'Inorgánico', 'Metal', 'PET'], detected: 'PET' },
      },
    },
    tech: {
      eyebrow: '02 · Tecnologías',
      title: 'Mi stack tecnológico',
      lead: 'Trabajo en todo el ciclo de una aplicación: interfaz, lógica de negocio, datos e infraestructura.',
      also: 'Además',
      stacks: {
        backend: { name: 'Backend', desc: 'APIs REST, lógica de negocio y servicios en tiempo real.' },
        data: { name: 'Datos y análisis', desc: 'Modelado, consultas y tableros para decidir con datos.' },
        frontend: { name: 'Frontend', desc: 'Interfaces claras, responsivas y animadas.' },
        iot: { name: 'IoT e Inteligencia Artificial', desc: 'Hardware conectado y visión por computadora.' },
        net: { name: 'Redes y seguridad', desc: 'Diseño de redes y buenas prácticas de seguridad.' },
        cloud: { name: 'Cloud y herramientas', desc: 'Despliegue, control de versiones, pruebas y documentación.' },
      },
      soft: [
        ['Análisis de requerimientos', ' y modelado UML: casos de uso, clases y actividades.'],
        ['Trato directo con usuarios', ': levantamiento de necesidades, capacitación y mejora continua.'],
        ['Documentación clara', ': README, guías de despliegue y casos de prueba.'],
      ],
    },
    techLabels: { Cybersecurity: 'Ciberseguridad' },
    education: {
      eyebrow: '03 · Formación',
      title: 'Trayectoria académica',
      academic: 'Formación académica',
      items: [
        { years: '2019 — 2022', school: 'CBTIS 222', degree: 'Técnico en Programación' },
        { years: '2022 — 2026', school: 'Tecnológico Nacional de México — Campus Pachuca', degree: 'Ingeniería en Sistemas Computacionales' },
      ],
      certsTitle: 'Certificaciones',
      certified: 'Certificado',
      certs: {
        python: 'Python Essentials 1',
        packet: 'Getting Started with Cisco Packet Tracer',
        cyber: 'Fundamentos de Ciberseguridad',
        mooc: 'Curso MOOC',
      },
      view: 'Ver certificado',
      verify: 'Verificar',
      close: 'Cerrar',
    },
    contact: {
      eyebrow: '04 · Contacto',
      title: '¿Trabajamos juntos?',
      lead: '¿Tienes una vacante o un proyecto en mente? Escríbeme y platiquemos cómo puedo ayudarte.',
      send: 'Enviar correo',
      copy: 'Copiar correo',
      copied: '¡Copiado!',
    },
    footer: { made: 'Hecho con React + Framer Motion' },
    backToTop: 'Volver arriba',
  },

  en: {
    meta: {
      title: 'Juan Armando · Software Developer & Data Analyst',
      description:
        'Portfolio of Juan Armando Castillo Rodríguez: software developer focused on data analysis, full-stack web development, Python, SQL, AWS and Power BI.',
    },
    nav: {
      projects: 'Projects',
      tech: 'Tech stack',
      education: 'Education',
      contact: 'Contact',
      menu: 'Open menu',
      mobileMenu: 'Menu',
      theme: 'Toggle theme',
      lang: 'Cambiar a español',
      main: 'Main',
    },
    intro: { host: 'portfolio', skip: '[ click or press any key to continue ]' },
    hero: {
      hello: "Hi, I'm",
      bio: [
        'Software developer focused on ',
        { hl: 'data analysis' },
        ' and technology solutions. I work with full-stack web development, Python, SQL, AWS, Excel, Power BI and networking to ',
        { hl: 'optimize processes through technology' },
        ". I'm looking to join innovative projects where I can bring an analytical perspective and efficient solutions while I keep growing technically. I stand out for my ",
        { hl: 'critical thinking, initiative and self-directed learning' },
        '.',
      ],
      viewProjects: 'View projects',
      contact: 'Contact me',
      cv: 'Resume',
      scroll: 'Scroll to projects',
      photoAlt: 'Photo of',
      email: 'Email',
      tags: ['Full Stack', 'AWS', 'Python', 'Data analysis', { icon: 'React' }, 'SQL', { icon: 'Power BI' }, 'FastAPI', { icon: 'TensorFlow' }, 'IoT + AI', { icon: 'JavaScript' }, { icon: 'PHP' }],
    },
    projects: {
      eyebrow: '01 · Projects',
      title: "What I've built",
      lead: 'Three real projects: a system in production, an internet-controlled vehicle and an AI waste classifier.',
      code: 'Code',
      demo: 'Demo',
      details: 'View details',
      noCode: 'Code not available',
      noDemo: 'Demo not available',
      close: 'Close',
      featured: 'Featured project',
      stack: 'Stack',
      about: 'About the project',
      what: 'What it is',
      role: 'My role',
      highlights: 'Highlights',
      tech: 'Technologies used',
      prev: 'Previous image',
      next: 'Next image',
      image: 'Image',
      video: 'Video',
      of: 'of',
    },
    projectText: {
      vg: {
        title: 'VG Integral System — School Cafeteria & Library',
        badge: 'In production',
        short:
          "Web system that digitizes a school's cafeteria and library: QR-code ID cards, payments, book loans and reports.",
        // paragraphs[0] → «Qué es» · paragraphs[1] → «Mi participación»
        paragraphs: [
          "Web system that digitizes the management of a school's cafeteria and library. It replaces paper lists with QR-code control: every student has an ID card and their entry is recorded with the camera in seconds.",
          'I worked directly with the administration, cashier and library staff to gather requirements, then built, deployed and supported the system, which is now in daily use.',
        ],
        highlights: [
          ['4 roles', ' with their own permissions: administrator, cashier, librarian and group representative.'],
          ['Camera QR scanning', ' to record entries, plus bulk generation and printing of ID cards.'],
          ['Dashboard with charts', ', student payments, debt tracking and expenses.'],
          ['Library', ': book catalog, loans and returns.'],
          ['Weekly reports', ' and Excel/CSV export.'],
          ['Security', ': hashed passwords, verified sessions and enforced HTTPS.'],
        ],
        codeNote: 'Private code · system in use by the school',
        cover: { kpis: ['Meals today', 'Payments', 'Loans'], scan: 'Entry recorded' },
      },
      iot: {
        title: 'Internet-controlled IoT excavator',
        badge: 'Deployed on AWS',
        short:
          'ESP32 vehicle controlled and monitored in real time from the web, with 5 driving modes, including voice and AI hand gestures.',
        // paragraphs[0] → «Qué es» · paragraphs[1] → «Mi participación»
        paragraphs: [
          'REST API + WebSocket that controls and monitors an ESP32 vehicle in real time. The web interface offers 5 driving modes: buttons, joystick, voice, phone gyroscope and hand gestures recognized with AI.',
          'I designed the FastAPI backend, the database and the AWS deployment (EC2 + RDS) with HTTPS and secure WebSocket, as well as the hardware integration.',
        ],
        highlights: [
          ['EC2 + RDS', " with HTTPS/WSS through Caddy and Let's Encrypt."],
          ['21 stored procedures', ' and Swagger documentation.'],
          ['Live monitoring', ' and movement history.'],
          ['AI gestures', ' with MediaPipe to drive by hand.'],
        ],
        codeNote: '',
        cover: {
          lines: [
            '$ ws connect wss://vehicle/control',
            '✓ connected · latency 42 ms',
            '→ {"cmd": "forward", "speed": 80}',
            '→ {"cmd": "turn", "dir": "left"}',
            '← telemetry: battery 87% · 31°C',
            '✋ gesture: fist → stop',
          ],
        },
      },
      eco: {
        title: 'EcoBot — Smart waste classifier',
        badge: 'Presented at InnovaTecNM',
        short: 'Prototype that recognizes waste with computer vision and drops it into the right bin.',
        // paragraphs[0] → «Qué es» · paragraphs[1] → «Mi participación»
        paragraphs: [
          'Prototype that identifies waste with computer vision and drops it into the right bin. The model was trained on a custom photo dataset and its result is sent to an ESP32 that drives the servo motors.',
          'The project was presented, together with its business model, at the InnovaTecNM competition.',
        ],
        highlights: [
          ['4 categories', ': organic, inorganic, metal and PET.'],
          ['Custom dataset', ' of photos to train the model.'],
          ['Time-based confirmation', ' to avoid false detections.'],
          ['Hardware integration', ': ESP32 and servo motors.'],
        ],
        codeNote: '',
        cover: { bins: ['Organic', 'Inorganic', 'Metal', 'PET'], detected: 'PET' },
      },
    },
    tech: {
      eyebrow: '02 · Tech stack',
      title: 'My tech stack',
      lead: 'I work across the whole lifecycle of an application: interface, business logic, data and infrastructure.',
      also: 'Also',
      stacks: {
        backend: { name: 'Backend', desc: 'REST APIs, business logic and real-time services.' },
        data: { name: 'Data & analytics', desc: 'Modeling, queries and dashboards for data-driven decisions.' },
        frontend: { name: 'Frontend', desc: 'Clear, responsive and animated interfaces.' },
        iot: { name: 'IoT & Artificial Intelligence', desc: 'Connected hardware and computer vision.' },
        net: { name: 'Networking & security', desc: 'Network design and security best practices.' },
        cloud: { name: 'Cloud & tools', desc: 'Deployment, version control, testing and documentation.' },
      },
      soft: [
        ['Requirements analysis', ' and UML modeling: use cases, classes and activities.'],
        ['Working directly with users', ': gathering needs, training and continuous improvement.'],
        ['Clear documentation', ': READMEs, deployment guides and test cases.'],
      ],
    },
    techLabels: {},
    education: {
      eyebrow: '03 · Education',
      title: 'Academic background',
      academic: 'Education',
      items: [
        { years: '2019 — 2022', school: 'CBTIS 222', degree: 'Programming Technician' },
        { years: '2022 — 2026', school: 'Tecnológico Nacional de México — Campus Pachuca', degree: 'B.S. in Computer Systems Engineering' },
      ],
      certsTitle: 'Certifications',
      certified: 'Certified',
      certs: {
        python: 'Python Essentials 1',
        packet: 'Getting Started with Cisco Packet Tracer',
        cyber: 'Cybersecurity Fundamentals',
        mooc: 'MOOC course',
      },
      view: 'View certificate',
      verify: 'Verify',
      close: 'Close',
    },
    contact: {
      eyebrow: '04 · Contact',
      title: 'Shall we work together?',
      lead: "Do you have an opening or a project in mind? Write to me and let's talk about how I can help.",
      send: 'Send email',
      copy: 'Copy email',
      copied: 'Copied!',
    },
    footer: { made: 'Built with React + Framer Motion' },
    backToTop: 'Back to top',
  },
}
