"use client"

import { useLanguage } from '@/lib/language-context'
import { Phone, Instagram, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <a
                href="tel:+14017531024"
                className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90 hover:text-primary-foreground"
              >
                <Phone size={18} />
                (401) 753-1024
              </a>
              <a
                href="mailto:nossacasabakery@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90 hover:text-primary-foreground"
              >
                <Mail size={18} />
                nossacasabakery@gmail.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.followUs}</h3>
            <a
              href="https://instagram.com/nossacasa.bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90 hover:text-primary-foreground"
            >
              <Instagram size={18} />
              @nossacasa.bakery
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-primary-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-primary-foreground/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Nossa Casa Bakery. All rights reserved.</p>
            <p>Made with ❤️ in Rhode Island</p>
            <div className="flex gap-4 text-2xl">
              <span>🇵🇹</span>
              <span>🇲🇽</span>
            </div>
          </div>

          <div className="bakery-footer bg-transparent text-primary-foreground/70 rounded-xl border border-primary-foreground/10 p-4">
            <div className="footer-content space-y-3">
              <p className="legal-disclosure text-xs font-medium">
                <strong>NOTICE:</strong> Made by a Cottage Food Business Registrant that is not Subject to Routine Government Food Safety Inspection.
              </p>
              <p className="bakery-copyright text-xs">
                © 2026 Nossa Casa Bakery | Proudly serving Cranston, Providence, & West Warwick, RI
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
