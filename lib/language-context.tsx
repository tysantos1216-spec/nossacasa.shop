"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'pt' | 'es'

interface Translations {
  nav: {
    home: string
    menu: string
    howItWorks: string
    cart: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  about: {
    title: string
    description: string
  }
  menu: {
    portugueseTitle: string
    portugueseSubtitle: string
    mexicanTitle: string
    mexicanSubtitle: string
    azoreanCookiesTitle: string
    azoreanCookiesSubtitle: string
    mexicanCookiesTitle: string
    mexicanCookiesSubtitle: string
    houseCookiesTitle: string
    houseCookiesSubtitle: string
    drinksTitle: string
    packagesTitle: string
    addToCart: string
    soldOut: string
    single: string
    sixPack: string
    twelvePack: string
    twentyFourPack: string
  }
  howItWorks: {
    title: string
    preOrder: string
    preOrderDesc: string
    minimum: string
    minimumDesc: string
    payment: string
    paymentDesc: string
    serviceArea: string
    serviceAreaDesc: string
    disclaimer: string
    disclaimerDesc: string
  }
  cart: {
    title: string
    empty: string
    total: string
    name: string
    address: string
    zipCode: string
    deliveryTime: string
    notes: string
    depositWarning: string
    sendOrder: string
    paymentTitle: string
    venmo: string
      zelle: string
    copied: string
    remove: string
  }
  footer: {
    contact: string
    followUs: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      howItWorks: 'How It Works',
      cart: 'Cart'
    },
    hero: {
      title: 'Portuguese & Mexican Family Owned',
      subtitle: 'Cottage Pre-Order Bakery | Local Delivery in RI',
      cta: 'View Menu'
    },
    about: {
      title: 'Sabor & Tradição',
      description: 'Family owned bakery with the soul and love of Portuguese & Mexican infused baking. Ty Santos & Natasha are a perfect team in the kitchen, sharing pastries with joy to our surrounding neighbors.'
    },
    menu: {
      portugueseTitle: 'O Canto Português',
      portugueseSubtitle: 'Traditional Bakery',
      mexicanTitle: 'El Sabor de México',
      mexicanSubtitle: 'Traditional Pan Dulce',
      azoreanCookiesTitle: 'Biscoitos dos Açores',
      azoreanCookiesSubtitle: 'Azorean Traditional Biscuits',
      mexicanCookiesTitle: 'Galletas Mexicanas',
      mexicanCookiesSubtitle: 'Mexican Traditional Cookies',
      houseCookiesTitle: 'Signature House Cookies',
      houseCookiesSubtitle: 'Nossa Casa Favorites',
      drinksTitle: 'Drinks',
      packagesTitle: 'Package Deals',
      addToCart: 'Add to Order',
      soldOut: 'Sold Out',
      single: 'Single',
      sixPack: '6-Pack',
      twelvePack: '12-Pack',
      twentyFourPack: '24-Pack'
    },
    howItWorks: {
      title: 'How We Work',
      preOrder: 'Pre-Order Only',
      preOrderDesc: '48 hours in advance',
      minimum: 'Minimum Order',
      minimumDesc: '$20.00 for delivery',
      payment: 'Payment',
      paymentDesc: 'Cash, Venmo, or Zelle',
      serviceArea: 'Service Area',
      serviceAreaDesc: 'Cranston, Providence, Warwick, West Warwick (RI)',
      disclaimer: 'Cottage Food Disclaimer',
      disclaimerDesc: 'Made by a Cottage Food Business. Not subject to routine government food safety inspection. Contains: Wheat, Eggs, Dairy. Produced in a home kitchen.'
    },
    cart: {
      title: 'Your Order',
      empty: 'Your cart is empty',
      total: 'Total',
      name: 'Full Name',
      address: 'Delivery Address',
      zipCode: 'Zip Code',
      deliveryTime: 'Requested Delivery Date/Time',
      notes: 'Additional Notes (Special requests)',
      depositWarning: 'Orders over $100 require a $50 deposit via Venmo/Zelle',
      sendOrder: 'Send Order to 401-753-1024',
      paymentTitle: 'Pay Deposit/Total via:',
      venmo: 'Venmo: @NossaCasaBakery',
      cashapp: 'CashApp: $NossaCasaBakery',
      copied: 'Copied!',
      remove: 'Remove'
    },
    footer: {
      contact: 'Contact Us',
      followUs: 'Follow Us'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      menu: 'Cardápio',
      howItWorks: 'Como Funciona',
      cart: 'Carrinho'
    },
    hero: {
      title: 'Empresa Familiar Portuguesa e Mexicana',
      subtitle: 'Padaria por Encomenda | Entrega Local em RI',
      cta: 'Ver Cardápio'
    },
    about: {
      title: 'Sabor & Tradição',
      description: 'Padaria familiar com a alma e o amor da culinária Portuguesa e Mexicana. Ty Santos & Natasha são uma equipa perfeita na cozinha, partilhando doces com alegria aos nossos vizinhos.'
    },
    menu: {
      portugueseTitle: 'O Canto Português',
      portugueseSubtitle: 'Padaria Tradicional',
      mexicanTitle: 'El Sabor de México',
      mexicanSubtitle: 'Pan Dulce Tradicional',
      azoreanCookiesTitle: 'Biscoitos dos Açores',
      azoreanCookiesSubtitle: 'Biscoitos Tradicionais Açoreanos',
      mexicanCookiesTitle: 'Galletas Mexicanas',
      mexicanCookiesSubtitle: 'Biscoitos Tradicionais Mexicanos',
      houseCookiesTitle: 'Biscoitos da Casa',
      houseCookiesSubtitle: 'Favoritos da Nossa Casa',
      drinksTitle: 'Bebidas',
      packagesTitle: 'Caixas de Valor',
      addToCart: 'Adicionar',
      soldOut: 'Esgotado',
      single: 'Unidade',
      sixPack: '6-Pack',
      twelvePack: '12-Pack',
      twentyFourPack: '24-Pack'
    },
    howItWorks: {
      title: 'Como Trabalhamos',
      preOrder: 'Apenas Encomendas',
      preOrderDesc: '48 horas de antecedência',
      minimum: 'Pedido Mínimo',
      minimumDesc: '$20.00 para entregas',
      payment: 'Pagamento',
      paymentDesc: 'Dinheiro, Venmo, ou CashApp',
      serviceArea: 'Área de Serviço',
      serviceAreaDesc: 'Cranston, Providence, Warwick, West Warwick (RI)',
      disclaimer: 'Aviso de Comida Caseira',
      disclaimerDesc: 'Feito por um Negócio de Comida Caseira. Não sujeito a inspeção governamental de rotina. Contém: Trigo, Ovos, Laticínios. Produzido em cozinha doméstica.'
    },
    cart: {
      title: 'Seu Pedido',
      empty: 'Seu carrinho está vazio',
      total: 'Total',
      name: 'Nome Completo',
      address: 'Endereço de Entrega',
      zipCode: 'Código Postal',
      deliveryTime: 'Data/Hora de Entrega',
      notes: 'Notas Adicionais',
      depositWarning: 'Pedidos acima de $100 requerem depósito de $50',
      sendOrder: 'Enviar Pedido para 401-753-1024',
      paymentTitle: 'Pague Depósito/Total via:',
      venmo: 'Venmo: @NossaCasaBakery',
      cashapp: 'CashApp: $NossaCasaBakery',
      copied: 'Copiado!',
      remove: 'Remover'
    },
    footer: {
      contact: 'Contacte-nos',
      followUs: 'Siga-nos'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      howItWorks: 'Cómo Funciona',
      cart: 'Carrito'
    },
    hero: {
      title: 'Empresa Familiar Portuguesa y Mexicana',
      subtitle: 'Panadería por Pedido | Entrega Local en RI',
      cta: 'Ver Menú'
    },
    about: {
      title: 'Sabor & Tradición',
      description: 'Panadería familiar con el alma y el amor de la cocina Portuguesa y Mexicana. Ty Santos & Natasha son un equipo perfecto en la cocina, compartiendo pasteles con alegría a nuestros vecinos.'
    },
    menu: {
      portugueseTitle: 'O Canto Português',
      portugueseSubtitle: 'Panadería Tradicional',
      mexicanTitle: 'El Sabor de México',
      mexicanSubtitle: 'Pan Dulce Tradicional',
      azoreanCookiesTitle: 'Biscoitos dos Açores',
      azoreanCookiesSubtitle: 'Galletas Tradicionales de las Azores',
      mexicanCookiesTitle: 'Galletas Mexicanas',
      mexicanCookiesSubtitle: 'Galletas Tradicionales Mexicanas',
      houseCookiesTitle: 'Galletas de la Casa',
      houseCookiesSubtitle: 'Favoritos de Nossa Casa',
      drinksTitle: 'Bebidas',
      packagesTitle: 'Paquetes',
      addToCart: 'Agregar',
      soldOut: 'Agotado',
      single: 'Individual',
      sixPack: '6-Pack',
      twelvePack: '12-Pack',
      twentyFourPack: '24-Pack'
    },
    howItWorks: {
      title: 'Cómo Trabajamos',
      preOrder: 'Solo Pedidos',
      preOrderDesc: '48 horas de anticipación',
      minimum: 'Pedido Mínimo',
      minimumDesc: '$20.00 para entregas',
      payment: 'Pago',
      paymentDesc: 'Efectivo, Venmo, o CashApp',
      serviceArea: 'Área de Servicio',
      serviceAreaDesc: 'Cranston, Providence, Warwick, West Warwick (RI)',
      disclaimer: 'Aviso de Comida Casera',
      disclaimerDesc: 'Hecho por un Negocio de Comida Casera. No sujeto a inspección gubernamental de rutina. Contiene: Trigo, Huevos, Lácteos. Producido en cocina casera.'
    },
    cart: {
      title: 'Tu Pedido',
      empty: 'Tu carrito está vacío',
      total: 'Total',
      name: 'Nombre Completo',
      address: 'Dirección de Entrega',
      zipCode: 'Código Postal',
      deliveryTime: 'Fecha/Hora de Entrega',
      notes: 'Notas Adicionales',
      depositWarning: 'Pedidos mayores a $100 requieren depósito de $50',
      sendOrder: 'Enviar Pedido al 401-753-1024',
      paymentTitle: 'Paga Depósito/Total vía:',
      venmo: 'Venmo: @NossaCasaBakery',
      cashapp: 'CashApp: $NossaCasaBakery',
      copied: '¡Copiado!',
      remove: 'Quitar'
    },
    footer: {
      contact: 'Contáctenos',
      followUs: 'Síguenos'
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t: translations[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
