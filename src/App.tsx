import { useState, useCallback, useMemo } from 'react'
import { I18nContext, getStrings, type Lang } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import Stack from './components/Stack'
import DataSource from './components/DataSource'
import Community from './components/Community'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLangState] = useState<Lang>(() =>
    (localStorage.getItem('lang') as Lang) || 'zh'
  )
  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }, [])
  const ctx = useMemo(() => ({ lang, setLang, t: getStrings(lang) }), [lang, setLang])

  return (
    <I18nContext.Provider value={ctx}>
      <div className="noise min-h-screen bg-white dark:bg-[#09090b]">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <DataSource />
          <Steps />
          <Community />
          <Stack />
        </main>
        <Footer />
      </div>
    </I18nContext.Provider>
  )
}
