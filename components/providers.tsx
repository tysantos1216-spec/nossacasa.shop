"use client"

import { LanguageProvider } from '@/lib/language-context'
import { CartProvider } from '@/lib/cart-context'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </LanguageProvider>
  )
}
