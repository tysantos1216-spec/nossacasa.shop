"use client"

import { LanguagePicker } from '@/components/language-picker'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { Footer } from '@/components/footer'
import { BakeryLogo } from '@/components/bakery-logo'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Nossa Casa Bakery',
  image: 'https://nossacasa.store/logo.jpg',
  description: 'Authentic home-style Portuguese & Mexican cottage bakery serving custom breads and pastries.',
  url: 'https://nossacasa.store',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cranston',
    addressRegion: 'RI',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Cranston' },
    { '@type': 'AdministrativeArea', name: 'Providence' },
    { '@type': 'AdministrativeArea', name: 'West Warwick' },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LanguagePicker />
      <BakeryLogo />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroSection />
        <AboutSection />
        <section id="menu-preview" className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              🥐 Our Fresh Baked Goods
            </h2>
            <p className="text-muted-foreground mb-8">
              Authentic Portuguese and Mexican pastries made fresh to order
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/menu"
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src="/images/menu-1.png"
                  alt="Nossa Casa Bakery Menu - Portuguese and Mexican Items"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-xl">View Full Menu →</span>
                </div>
              </a>
              <a
                href="/menu"
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src="/images/menu-2.png"
                  alt="Nossa Casa Bakery Full Menu with Prices"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-xl">See Prices & Packages →</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}
