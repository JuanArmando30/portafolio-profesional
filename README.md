# Portafolio profesional · Juan Armando Castillo

Portafolio personal hecho con **React + Vite + Framer Motion**: estética de consola, paleta cian-verde, fondo ASCII animado, tema claro/oscuro y entrada tipo terminal.

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

Todo el texto (proyectos, tecnologías, experiencia, enlaces) está en
[`src/data/portfolio.js`](src/data/portfolio.js). No necesitas tocar los componentes.

- **Foto:** guárdala como `public/img/foto.jpg` (cuadrada). Si no existe se muestran tus iniciales.
- **CV:** copia `cv.pdf` a `public/` y escribe `cv: 'cv.pdf'` en `profile`.
- **LinkedIn:** agrega la URL en `profile.linkedin`.

## Estructura

```
src/
  data/portfolio.js     ← contenido
  components/           ← secciones (Hero, Projects, Tech, Experience, Contact…)
  hooks/useTypewriter.js
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
