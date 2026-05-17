"use client"

import { LanguagePicker } from '@/components/language-picker'
import { Navbar } from '@/components/navbar'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'

export default function HowItWorksPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LanguagePicker />
      <main className="flex-1">
        <div className="bg-primary/5 py-8 tile-pattern">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground">📋 {t.howItWorks.title}</h1>
            <p className="text-muted-foreground mt-2">Como Trabalhamos</p>
          </div>
        </div>
        <HowItWorksSection />
        
        {/* Contact CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Order?</h2>
            <p className="text-muted-foreground mb-8">
              Give us a call or text to place your pre-order at least 48 hours in advance
            </p>
            <a
              href="tel:+14017531024"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all hover:scale-105"
            >
              📞 Call (401) 753-1024
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
