"use client"

import { useEffect, useState } from 'react'

export function Preloader() {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hidePreloader = () => {
      setIsFadingOut(true)
      window.setTimeout(() => {
        setIsVisible(false)
      }, 600)
    }

    if (document.readyState === 'complete') {
      hidePreloader()
      return
    }

    window.addEventListener('load', hidePreloader)
    return () => window.removeEventListener('load', hidePreloader)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      id="bakery-preloader"
      className={isFadingOut ? 'preloader-hidden' : ''}
      aria-hidden="true"
    >
      <div className="preloader-content">
        <img
          src="/images/logo.jpg"
          alt="Nossa Casa Bakery Logo"
          className="preloader-logo"
        />
        <div className="loading-spinner" />
      </div>
    </div>
  )
}
