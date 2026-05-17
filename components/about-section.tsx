"use client"

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-primary/30 flex-1 max-w-24" />
          <span className="text-2xl">🥐</span>
          <div className="h-px bg-primary/30 flex-1 max-w-24" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {t.about.title}
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t.about.description}
        </p>

        {/* Small logo */}
        <div className="mt-8">
          <Image
            src="/images/logo.jpg"
            alt="Ty Santos & Natasha - Nossa Casa Bakery"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-lg border-4 border-secondary"
          />
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px bg-primary/30 flex-1 max-w-24" />
          <span className="text-2xl">🍞</span>
          <div className="h-px bg-primary/30 flex-1 max-w-24" />
        </div>
      </div>
    </section>
  )
}
