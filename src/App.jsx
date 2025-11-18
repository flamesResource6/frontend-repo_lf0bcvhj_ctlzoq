import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('signin')

  const openAuth = (mode) => {
    setAuthMode(mode)
    setAuthOpen(true)
  }

  const handleGetStarted = () => openAuth('signup')

  return (
    <div className="min-h-screen bg-black">
      <Navbar onOpenAuth={openAuth} />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <Features />
      </main>
      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
