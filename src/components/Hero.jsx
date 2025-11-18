import Spline from '@splinetool/react-spline'

function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
          QUANTUM CANVAS
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Fashion design inspiration and concept suggestion tool that crafts textures and patterns with quantum-era technology.
        </p>

        <div className="mt-10">
          <button
            onClick={onGetStarted}
            className="px-8 py-4 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-xl hover:shadow-fuchsia-500/40 transition inline-flex items-center gap-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
