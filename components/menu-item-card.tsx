"use client"

import { useLanguage } from '@/lib/language-context'
import { useCart } from '@/lib/cart-context'
import { MenuItem } from '@/lib/menu-data'
import { useState } from 'react'

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { t, language } = useLanguage()
  const { addItem } = useCart()
  const [selectedPack, setSelectedPack] = useState<'single' | '6-pack' | '12-pack' | '24-pack'>('single')

  const getName = () => {
    if (language === 'pt' && item.namePt) return item.namePt
    if (language === 'es' && item.nameEs) return item.nameEs
    return item.name
  }

  const getDescription = () => {
    if (language === 'pt' && item.descriptionPt) return item.descriptionPt
    if (language === 'es' && item.descriptionEs) return item.descriptionEs
    return item.description
  }

  const getPrice = () => {
    if (selectedPack === '6-pack' && item.sixPackPrice) return item.sixPackPrice
    if (selectedPack === '12-pack' && item.twelvePackPrice) return item.twelvePackPrice
    if (selectedPack === '24-pack' && item.twentyFourPackPrice) return item.twentyFourPackPrice
    return item.price
  }

  const handleAddToCart = () => {
    if (item.status === 'sold-out') return
    
    const packSuffix = selectedPack !== 'single' ? ` (${selectedPack})` : ''
    addItem({
      id: `${item.id}-${selectedPack}`,
      name: getName() + packSuffix,
      nameEs: item.nameEs,
      namePt: item.namePt,
      price: getPrice(),
      packSize: selectedPack
    })
  }

  const hasPacks = item.sixPackPrice !== undefined
  const has24Pack = item.twentyFourPackPrice !== undefined

  return (
    <div className="bg-card rounded-lg shadow-md border-b-4 border-primary overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground">{getName()}</h3>
            <p className="text-sm text-muted-foreground mt-1">{getDescription()}</p>
          </div>
        </div>

        {/* Price display */}
        <div className="mt-4">
          {hasPacks ? (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 text-sm">
                <button
                  onClick={() => setSelectedPack('single')}
                  className={`flex-1 min-w-[60px] py-1 px-2 rounded text-xs font-medium transition-colors ${
                    selectedPack === 'single'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {t.menu.single}
                </button>
                <button
                  onClick={() => setSelectedPack('6-pack')}
                  className={`flex-1 min-w-[60px] py-1 px-2 rounded text-xs font-medium transition-colors ${
                    selectedPack === '6-pack'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {t.menu.sixPack}
                </button>
                {item.twelvePackPrice && (
                  <button
                    onClick={() => setSelectedPack('12-pack')}
                    className={`flex-1 min-w-[60px] py-1 px-2 rounded text-xs font-medium transition-colors ${
                      selectedPack === '12-pack'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {t.menu.twelvePack}
                  </button>
                )}
                {has24Pack && (
                  <button
                    onClick={() => setSelectedPack('24-pack')}
                    className={`flex-1 min-w-[60px] py-1 px-2 rounded text-xs font-medium transition-colors ${
                      selectedPack === '24-pack'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {t.menu.twentyFourPack}
                  </button>
                )}
              </div>
              <p className="text-xl font-bold text-primary">${getPrice().toFixed(2)}</p>
            </div>
          ) : (
            <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
          )}
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={item.status === 'sold-out'}
          className={`mt-4 w-full py-2 px-4 rounded-full font-bold text-sm transition-all ${
            item.status === 'sold-out'
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02]'
          }`}
        >
          {item.status === 'sold-out' ? t.menu.soldOut : t.menu.addToCart}
        </button>
      </div>
    </div>
  )
}
