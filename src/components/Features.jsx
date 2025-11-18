import { Sparkles, Atom, Palette, Cloud } from 'lucide-react'

const features = [
  {
    icon: Atom,
    title: 'Quantum Textures',
    desc: 'Generate holographic, iridescent, and noise-driven textures informed by quantum-inspired patterns.'
  },
  {
    icon: Palette,
    title: 'Adaptive Palettes',
    desc: 'Curated color systems that shift with moodboards and seasonality for fashion-forward outcomes.'
  },
  {
    icon: Sparkles,
    title: 'Concept Suggestions',
    desc: 'Describe a vibe; receive silhouettes, materials, and print directions matched to your brief.'
  },
  {
    icon: Cloud,
    title: 'Cloud Workspace',
    desc: 'Save your ideas and pick up where you left off across devices.'
  }
]

function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black/80 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white">
              <Icon className="mb-4" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
