"use client"

import { useLanguage } from '@/lib/language-context'
import { menuItems } from '@/lib/menu-data'
import { MenuItemCard } from './menu-item-card'

export function MenuSection() {
  const { t } = useLanguage()

  const portugueseItems = menuItems.filter(item => item.category === 'portuguese')
  const mexicanItems = menuItems.filter(item => item.category === 'mexican')
  const azoreanCookies = menuItems.filter(item => item.category === 'azorean-cookies')
  const mexicanCookies = menuItems.filter(item => item.category === 'mexican-cookies')
  const houseCookies = menuItems.filter(item => item.category === 'house-cookies')
  const drinkItems = menuItems.filter(item => item.category === 'drinks')
  const packageItems = menuItems.filter(item => item.category === 'packages')

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Portuguese Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🇵🇹</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.portugueseTitle}
              </h2>
              <p className="text-muted-foreground">{t.menu.portugueseSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portugueseItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Mexican Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🇲🇽</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.mexicanTitle}
              </h2>
              <p className="text-muted-foreground">{t.menu.mexicanSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mexicanItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Azorean Traditional Biscuits */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🇵🇹</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.azoreanCookiesTitle}
              </h2>
              <p className="text-muted-foreground">{t.menu.azoreanCookiesSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {azoreanCookies.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Mexican Traditional Cookies */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🇲🇽</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.mexicanCookiesTitle}
              </h2>
              <p className="text-muted-foreground">{t.menu.mexicanCookiesSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mexicanCookies.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Signature House Cookies */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🍪</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.houseCookiesTitle}
              </h2>
              <p className="text-muted-foreground">{t.menu.houseCookiesSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {houseCookies.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Drinks Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🥤</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.drinksTitle}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {drinkItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Package Deals Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">📦</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.menu.packagesTitle}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
