"use client"

import { useLanguage } from '@/lib/language-context'
import { useCart } from '@/lib/cart-context'
import { allowedZipCodes } from '@/lib/menu-data'
import { useState } from 'react'
import { Trash2, Copy, Check, MessageCircle } from 'lucide-react'

export function CartSection() {
  const { t, language } = useLanguage()
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    zip: '',
    deliveryTime: '',
    notes: ''
  })
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null)
  const [zipWarning, setZipWarning] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (name === 'zip') {
      setZipWarning(value.length === 5 && !allowedZipCodes.includes(value))
    }
  }

  const copyHandle = async (handle: string) => {
    await navigator.clipboard.writeText(handle)
    setCopiedHandle(handle)
    setTimeout(() => setCopiedHandle(null), 2000)
  }

  const sendWhatsApp = () => {
    const itemText = items.map(i => `${i.name} x${i.quantity}`).join(", ")
    
    const message = `*Nossa Casa Order*
Name: ${formData.name}
Address: ${formData.address} ${formData.zip}
Time: ${formData.deliveryTime}
Items: ${itemText}
Total: $${total.toFixed(2)}
Note: ${formData.notes}`

    const encodedMsg = encodeURIComponent(message)
    window.open(`https://wa.me/14017531024?text=${encodedMsg}`, '_blank')
  }

  if (items.length === 0) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">🛒 {t.cart.title}</h2>
          <p className="text-muted-foreground text-lg">{t.cart.empty}</p>
          <div className="mt-8 text-6xl">🥐</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-background">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          🛒 {t.cart.title}
        </h2>

        {/* Cart Items */}
        <div className="bg-card rounded-lg border border-border overflow-hidden mb-8">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-border last:border-b-0"
            >
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} each
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                  >
                    +
                  </button>
                </div>
                
                <span className="font-bold text-foreground w-20 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-destructive hover:text-destructive/80 p-2"
                  aria-label={t.cart.remove}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          
          {/* Total */}
          <div className="p-4 bg-primary/5 flex justify-between items-center">
            <span className="text-lg font-bold text-foreground">{t.cart.total}:</span>
            <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder={t.cart.name}
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="address"
                placeholder={t.cart.address}
                value={formData.address}
                onChange={handleInputChange}
                className="col-span-2 px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleInputChange}
                maxLength={5}
                className={`px-4 py-3 rounded-lg border bg-input focus:outline-none focus:ring-2 focus:ring-primary ${
                  zipWarning ? 'border-destructive' : 'border-border'
                }`}
                required
              />
            </div>
            {zipWarning && (
              <p className="text-sm text-destructive">
                ⚠️ We currently only deliver to Cranston, Providence, Warwick & West Warwick. You can still order for pickup!
              </p>
            )}
            <input
              type="text"
              name="deliveryTime"
              placeholder={t.cart.deliveryTime}
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              name="notes"
              placeholder={t.cart.notes}
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {total > 100 && (
            <p className="mt-4 text-sm text-accent font-medium">
              ⚠️ {t.cart.depositWarning}
            </p>
          )}

          <button
            onClick={sendWhatsApp}
            className="w-full mt-6 bg-green-600 text-white py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={24} />
            {t.cart.sendOrder}
          </button>
        </div>

        {/* Payment Links */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="font-bold text-foreground mb-4">{t.cart.paymentTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => copyHandle('@NossaCasaBakery')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {copiedHandle === '@NossaCasaBakery' ? (
                <>
                  <Check size={18} />
                  {t.cart.copied}
                </>
              ) : (
                <>
                  <Copy size={18} />
                  {t.cart.venmo}
                </>
              )}
            </button>
            <button
              onClick={() => copyHandle('nossacasabakery@gmail.com')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {copiedHandle === 'nossacasabakery@gmail.com' ? (
                <>
                  <Check size={18} />
                  {t.cart.copied}
                </>
              ) : (
                <>
                  <Copy size={18} />
                  {t.cart.zelle}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
