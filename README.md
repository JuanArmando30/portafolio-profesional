# Portafolio profesional · Juan Armando Castillo

Portafolio personal hecho con **React + Vite + Framer Motion**: estética de consola, paleta azul, fondo ASCII animado, tema claro/oscuro y entrada tipo terminal.

## Ver el proyecto en tu computadora

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:5173
```

Para probar la versión final (la que se publica):

```bash
npm run build
npm run preview  # abre http://localhost:4173
```

## Editar el contenido

- **Textos (español e inglés):** [`src/data/i18n.js`](src/data/i18n.js). Cada texto existe en `es` y `en`; cambia ambos.
- **Enlaces, proyectos y tecnologías:** [`src/data/portfolio.js`](src/data/portfolio.js).
- **Proyectos:** en `projects` llena `code` (repositorio) y `demo` (sitio en vivo). Si quedan vacíos,
  el botón se muestra deshabilitado.
- **Fotos y videos de proyectos:** cópialos en `src/assets/proyectos/vg/`, `iot/` o `eco/` y aparecen
  solos, ordenados por nombre (`1.jpg`, `2.jpg`…; la primera foto es la portada). Videos en `.mp4` o `.webm`.
  Detalles en [`src/assets/proyectos/LEEME.md`](src/assets/proyectos/LEEME.md).
- **Certificaciones:** en `certifications` agrega `image` (imagen del certificado en
  `public/certificados/`, se abre en grande con «Ver certificado») y/o `url` (enlace de
  verificación, por ejemplo Credly) para el botón «Verificar».
- **Foto:** guárdala como `public/img/foto.jpg` (cuadrada). Si no existe se muestran las letras JACR.
- **CV:** copia `cv.pdf` a `public/` y escribe `cv: 'cv.pdf'` en `profile`.
- **LinkedIn:** agrega la URL en `profile.linkedin`.
- **Logotipo / favicon:** `public/favicon.svg` (más `favicon-32.png`, `apple-touch-icon.png` e `icon-512.png`).

## Estructura

```
src/
  data/i18n.js          ← textos en español e inglés
  data/portfolio.js     ← enlaces, proyectos, íconos y skills
  i18n.jsx              ← cambio de idioma (se guarda en el navegador)
  components/           ← secciones (Hero, Projects, ProjectModal, Tech, Experience, Contact…)
  index.css             ← estilos y paleta de colores (variables al inicio)
.github/workflows/deploy.yml  ← publicación automática en GitHub Pages
```

## Publicación

Cada `git push` a `main` publica el sitio en GitHub Pages mediante GitHub Actions
(activa *Settings → Pages → Source: GitHub Actions* una sola vez).

## Créditos

El fondo animado usa [GradientASCII](https://reactbits.dev/backgrounds/gradient-ascii) de
[React Bits](https://github.com/DavidHDev/react-bits) (David Haz · licencia MIT + Commons Clause),
en [`src/components/GradientASCII/`](src/components/GradientASCII/). Sus colores y opacidades se
ajustan en [`src/components/Background.jsx`](src/components/Background.jsx).
