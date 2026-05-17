"use client"

import { useLanguage, Language } from '@/lib/language-context'

const flags: Record<Language, string> = {
  en: '🇺🇸',
  pt: '🇵🇹',
  es: '🇲🇽'
}

export function LanguagePicker() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-20 right-4 z-50 bg-card border-2 border-primary rounded-full px-2 py-1 shadow-lg">
      <div className="flex gap-1">
        {(Object.keys(flags) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 text-sm font-bold rounded-full transition-colors ${
              language === lang
                ? 'bg-primary text-primary-foreground'
                : 'text-primary hover:bg-primary/10'
            }`}
          >
            {lang.toUpperCase()} {flags[lang]}
          </button>
        ))}
      </div>
    </div>
  )
}
