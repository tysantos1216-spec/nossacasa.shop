"use client"

import { LanguagePicker } from '@/components/language-picker'
import { Navbar } from '@/components/navbar'
import { CartSection } from '@/components/cart-section'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'

export default function CartPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LanguagePicker />
      <main className="flex-1">
        <div className="bg-primary/5 py-8 tile-pattern">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground">🛒 {t.cart.title}</h1>
          </div>
        </div>
        <CartSection />
      </main>
      <Footer />
    </div>
  )
}
