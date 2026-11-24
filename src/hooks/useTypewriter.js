import { useEffect, useState } from 'react'

/** Escribe y borra cada frase de la lista en bucle. */
export default function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), hold)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? erase : type
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, index, words, type, erase, hold])

  return text
}
