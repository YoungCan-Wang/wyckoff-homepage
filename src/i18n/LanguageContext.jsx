import { createContext, useContext, useState, useCallback } from 'react'
import zh from './zh.json'
import en from './en.json'

const strings = { zh, en }
const LanguageContext = createContext()

function get(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'zh')

  const switchLang = useCallback((l) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }, [])

  const t = useCallback((key) => get(strings[lang], key) ?? key, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
