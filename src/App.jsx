import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import QuickStart from './components/QuickStart'
import Community from './components/Community'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <TechStack />
          <QuickStart />
          <Community />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
