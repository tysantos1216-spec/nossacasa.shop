import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/components/providers'
import { Preloader } from '@/components/preloader'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nossa Casa Bakery | Rhode Island Portuguese & Mexican Cottage Bakery',
  description: 'Nossa Casa Bakery - Authentic Rhode Island bakery specializing in Portuguese and Mexican sweet breads and pastries. Pre-order only and delivering to Cranston, West Warwick, and across Rhode Island.',
  keywords: 'Rhode Island bakery, bakery Rhode Island, RI bakery, Portuguese bakery RI, Mexican pan dulce Cranston, Malassadas Rhode Island, Nossa Casa Bakery, Conchas West Warwick, Cottage Bakery RI, Portuguese pastries, Mexican bread Rhode Island',
  authors: [{ name: 'Ty Santos & Natasha' }],
  openGraph: {
    title: 'Nossa Casa Bakery - Rhode Island Bakery for Portuguese & Mexican Pastries',
    description: 'Family-owned Rhode Island bakery offering Portuguese and Mexican pastries by pre-order. Freshly baked sweet breads available across RI.',
    url: 'https://nossacasabakery.com',
    siteName: 'Nossa Casa Bakery',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'Nossa Casa Bakery - Portuguese and Mexican Pastries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nossa Casa Bakery - Sabor & Tradição',
    description: 'Family-owned Portuguese & Mexican infused bakery in Rhode Island.',
    images: ['/images/hero-banner.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Nossa Casa Bakery",
              "image": "/images/logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cranston",
                "addressRegion": "RI",
                "addressCountry": "US"
              },
              "priceRange": "$",
              "servesCuisine": ["Portuguese", "Mexican"],
              "telephone": "+14017531024",
              "url": "https://nossacasabakery.com"
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          <Preloader />
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
