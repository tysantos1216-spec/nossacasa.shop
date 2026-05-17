"use client"

import { useEffect, useState } from 'react'

export function Preloader() {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let fadeTimeout: number | undefined
    let removeTimeout: number | undefined

    const startPreloaderTimer = () => {
      fadeTimeout = window.setTimeout(() => {
        setIsFadingOut(true)
        removeTimeout = window.setTimeout(() => {
          setIsVisible(false)
        }, 800)
      }, 5000)
    }

    if (document.readyState === 'complete') {
      startPreloaderTimer()
    } else {
      window.addEventListener('DOMContentLoaded', startPreloaderTimer)
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', startPreloaderTimer)
      if (fadeTimeout) window.clearTimeout(fadeTimeout)
      if (removeTimeout) window.clearTimeout(removeTimeout)
    }
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
          className="preloader-logo-bold"
        />
        <div className="loading-spinner-premium" />
      </div>
    </div>
  )
}
