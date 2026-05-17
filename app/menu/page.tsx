"use client"

import { LanguagePicker } from '@/components/language-picker'
import { Navbar } from '@/components/navbar'
import { MenuSection } from '@/components/menu-section'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function MenuPage() {
  const { t } = useLanguage()
  const { itemCount, total } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LanguagePicker />
      <main className="flex-1">
        <div className="bg-primary/5 py-8 tile-pattern">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground">📜 {t.nav.menu}</h1>
            <p className="text-muted-foreground mt-2">Sabor & Tradição</p>
          </div>
        </div>
        <MenuSection />
        
        {/* Floating Cart Button */}
        {itemCount > 0 && (
          <Link
            href="/cart"
            className="fixed bottom-6 right-6 bg-primary text-primary-foreground px-6 py-4 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-105 flex items-center gap-3 z-50"
          >
            <ShoppingCart size={24} />
            <span className="font-bold">{itemCount} items</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
              ${total.toFixed(2)}
            </span>
          </Link>
        )}
      </main>
      <Footer />
    </div>
  )
}
