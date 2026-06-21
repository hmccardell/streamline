import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)

      function scrollToHash() {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      }

      requestAnimationFrame(() => {
        scrollToHash()
        if (!document.getElementById(id)) {
          setTimeout(scrollToHash, 0)
        }
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}
