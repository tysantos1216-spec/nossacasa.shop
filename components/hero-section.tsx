"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden tile-pattern">
      {/* Decorative border */}
      <div className="absolute inset-4 border-4 border-double border-primary/30 rounded-lg pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Logo/Hero Image */}
        <div className="mb-8 animate-fade-in-up">
          <Image
            src="/images/hero-banner.png"
            alt="Nossa Casa Bakery - Mexican Tradition, Portuguese Roots"
            width={600}
            height={600}
            className="mx-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>

        {/* Tagline */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            {t.hero.cta}
          </Link>
        </div>

        {/* Flags decoration */}
        <div className="mt-12 flex justify-center gap-8 text-5xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span className="hover:scale-110 transition-transform cursor-default">🇵🇹</span>
          <span className="text-accent text-3xl">❤️</span>
          <span className="hover:scale-110 transition-transform cursor-default">🇲🇽</span>
        </div>
      </div>
    </section>
  )
}
