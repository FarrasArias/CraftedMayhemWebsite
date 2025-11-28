// ScrollToTop.tsx
import * as React from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // or 'smooth' if you want a nice animation
    })
  }, [pathname])

  return null
}

export default ScrollToTop
