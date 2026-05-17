"use client"

import Image from 'next/image'

export function HeroSection() {
  return (
    <>
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
