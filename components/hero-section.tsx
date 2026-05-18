"use client"

import Image from 'next/image'

export function HeroSection() {
  return (
    <>
      {/* Header with flags and logo */}
      <header className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative flex justify-center">
            {/* Flag Background */}
            <div className="absolute inset-0 flex justify-center items-center gap-10 opacity-20">
              <div className="w-15 h-10 rounded" style={{background: 'linear-gradient(to right, green 33%, white 33%, white 66%, red 66%)'}} />
              <div className="w-15 h-10 rounded" style={{background: 'linear-gradient(to right, blue 40%, white 40%)'}} />
            </div>
            
            {/* Logo */}
            <div className="relative z-10">
              <Image
                src="/images/logo.jpg"
                alt="Nossa Casa Bakery Logo"
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with featured image */}
      <section className="py-5 flex justify-center bg-gray-50">
        <div className="max-w-4xl w-full px-4">
          <div className="relative max-w-full border-none overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/best-picture.jpg"
              alt="Featured Product"
              width={900}
              height={600}
              className="w-full h-auto display-block"
              priority
            />
          </div>
        </div>
      </section>
    
          <span className="text-accent text-3xl">❤️</span>
          <span className="hover:scale-110 transition-transform cursor-default">🇲🇽</span>
        </div>
      </div>
    </section>
  )
}
