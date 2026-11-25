// =========================================================
//  Fotos y videos de los proyectos — se cargan SOLOS.
//
//  Copia tus archivos en la carpeta del proyecto:
//    src/assets/proyectos/vg/    → Sistema Integral VG
//    src/assets/proyectos/iot/   → Excavadora IoT
//    src/assets/proyectos/eco/   → EcoBot
//
//  • Se ordenan por nombre: 1.jpg, 2.jpg, 3.jpg… (la primera foto es la portada de la tarjeta).
//  • Fotos: .jpg .jpeg .png .webp   ·   Videos: .mp4 .webm
//  • Si una carpeta está vacía, se muestra la ilustración animada del proyecto.
// =========================================================

const files = import.meta.glob(
  '../assets/proyectos/*/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,JPG,JPEG,PNG,WEBP,MP4,WEBM}',
  { eager: true, query: '?url', import: 'default' }
)

const isVideo = (name) => /\.(mp4|webm)$/i.test(name)

/** { vg: [{ src, type: 'image' | 'video', name }], iot: [...], eco: [...] } */
export const projectMedia = {}

for (const [path, src] of Object.entries(files)) {
  const [, id, name] = path.match(/proyectos\/([^/]+)\/([^/]+)$/)
  ;(projectMedia[id] ||= []).push({ src, name, type: isVideo(name) ? 'video' : 'image' })
}

// Orden natural por nombre (2.jpg antes que 10.jpg)
for (const list of Object.values(projectMedia)) {
  list.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
}

export const mediaOf = (id) => projectMedia[id] ?? []
