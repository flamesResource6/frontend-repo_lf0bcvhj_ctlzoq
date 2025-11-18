import { useState } from 'react'

function AuthModal({ open, mode = 'signin', onClose }) {
  const [active, setActive] = useState(mode)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const name = form.get('name')?.toString() || ''
    const email = form.get('email')?.toString() || ''
    const password = form.get('password')?.toString() || ''

    try {
      const endpoint = active === 'signup' ? '/api/auth/signup' : '/api/auth/signin'
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          active === 'signup' ? { name, email, password } : { email, password }
        )
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')

      // Minimal success feedback
      alert(active === 'signup' ? 'Account created! You can now sign in.' : `Welcome ${data?.profile?.name || ''}!`)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 text-white">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActive('signin')}
            className={`flex-1 py-2 rounded-lg ${active==='signin' ? 'bg-white/20' : 'bg-white/5'} transition`}
          >
            Sign in
          </button>
          <button
            onClick={() => setActive('signup')}
            className={`flex-1 py-2 rounded-lg ${active==='signup' ? 'bg-white/20' : 'bg-white/5'} transition`}
          >
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {active === 'signup' && (
            <div>
              <label className="text-sm text-white/80">Name</label>
              <input name="name" required className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none" />
            </div>
          )}
          <div>
            <label className="text-sm text-white/80">Email</label>
            <input name="email" type="email" required className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none" />
          </div>
          <div>
            <label className="text-sm text-white/80">Password</label>
            <input name="password" type="password" required className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none" />
          </div>

          {error && <p className="text-sm text-red-300">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 font-semibold disabled:opacity-60"
          >
            {loading ? 'Please wait...' : active === 'signup' ? 'Create account' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthModal
