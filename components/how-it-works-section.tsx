"use client"

import { useLanguage } from '@/lib/language-context'
import { Clock, DollarSign, CreditCard, MapPin, AlertTriangle } from 'lucide-react'

export function HowItWorksSection() {
  const { t } = useLanguage()

  const rules = [
    {
      icon: Clock,
      title: t.howItWorks.preOrder,
      description: t.howItWorks.preOrderDesc
    },
    {
      icon: DollarSign,
      title: t.howItWorks.minimum,
      description: t.howItWorks.minimumDesc
    },
    {
      icon: CreditCard,
      title: t.howItWorks.payment,
      description: t.howItWorks.paymentDesc
    },
    {
      icon: MapPin,
      title: t.howItWorks.serviceArea,
      description: t.howItWorks.serviceAreaDesc
    }
  ]

  return (
    <section className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          🚚 {t.howItWorks.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border"
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <rule.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{rule.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cottage Food Disclaimer */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-accent">⚠️ {t.howItWorks.disclaimer}</h3>
              <p className="text-foreground/80 text-sm mt-2 leading-relaxed">
                {t.howItWorks.disclaimerDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
