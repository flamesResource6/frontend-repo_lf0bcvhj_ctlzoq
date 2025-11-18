import { useState } from 'react'
import { LogIn, UserPlus } from 'lucide-react'

function Navbar({ onOpenAuth }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30 ring-1 ring-white/20" />
            <div className="flex flex-col leading-none">
              <span className="text-xs tracking-widest text-white/60">PROJECT</span>
              <span className="text-lg font-semibold text-white">QUANTUM CANVAS</span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('signin')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition"
            >
              <LogIn size={18} />
              <span>Sign in</span>
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-lg hover:shadow-fuchsia-500/40 transition"
            >
              <UserPlus size={18} />
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
