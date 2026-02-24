import { useState, useRef } from 'react'
import HeroSection from '../components/HeroSection'
import { Link } from 'react-router-dom'

const ACTION_VIDEO_SRC = '' // Add your video URL or path here later, e.g. '/videos/demo.mp4'

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)

  const closeVideo = () => {
    setShowVideo(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <div className="relative bg-black text-white" style={{ position: 'relative' }}>
      <HeroSection />

      {/* Section 1: See Nuvorn Axis in action (video) – section-dark, compact */}
      <section className="py-12 md:py-16 section-dark border-t border-white/10">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
            <p className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-2">
              What&apos;s next
            </p>
            <h2 className="text-2xl font-bold text-contrast sm:text-3xl md:text-4xl mb-3">
              See Nuvorn Axis in action
            </h2>
            <p className="text-contrast-muted text-sm sm:text-base mb-4 md:mb-6">
              Explore modules, workflows, and how we help teams get clarity and control.
            </p>
          </div>

          <div className="w-full max-w-[min(88vw,900px)] mx-auto flex justify-center">
            <div className="device-macbook mx-auto w-full max-w-[min(88vw,900px)]">
              <img
                src="/images/wesbite/macbook.png"
                alt="MacBook"
                className="device-shell-img"
              />
              <div className="device-screen flex items-center justify-center bg-slate-950">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/images/erp-ss/dark dashboard.png"
                    alt="Nuvorn Axis dashboard"
                    className="w-full h-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg"
                    aria-label="Play demo video"
                  >
                    <span className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-black/70 border border-white/30 shadow-lg hover:scale-105 transition-transform">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
            <Link
              to="/features"
              className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-colors sm:px-6 sm:py-3"
            >
              View features
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors sm:px-6 sm:py-3"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Why Nuvorn Axis – bg-black */}
      <section className="py-12 md:py-16 bg-black border-t border-white/10">
        <div className="container-max">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-3">
              Why Nuvorn Axis
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Built for telecom infrastructure and growing SMEs. One platform for procurement, inventory, and operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: 'Modular by design', desc: 'Start with what you need—procurement, inventory, workflows—and add modules as you grow.' },
              { title: 'Single source of truth', desc: 'Unified data and approvals across departments so everyone works from the same facts.' },
              { title: 'Security & control', desc: 'Role-based access, department scoping, and audit trails built for compliance.' },
              { title: 'No-code workflows', desc: 'Design approval chains and processes visually—no custom code required.' }
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-5 border border-white/10 bg-white/5">
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Key modules – section-dark */}
      <section className="py-12 md:py-16 section-dark border-t border-white/10">
        <div className="container-max">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl font-bold text-contrast sm:text-3xl md:text-4xl mb-3">
              Key modules at a glance
            </h2>
            <p className="text-contrast-muted text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Procurement, inventory, security, and workflow designer—all integrated in one ERP.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors"
            >
              Explore full solutions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Procurement Suite', tag: 'Requisition to receipt' },
              { name: 'Inventory Management', tag: 'Multi-warehouse, real-time' },
              { name: 'Security & RBAC', tag: 'Roles, departments, audit' },
              { name: 'Workflow Designer', tag: 'Visual, no-code' }
            ].map((m, i) => (
              <div key={i} className="rounded-xl p-5 border border-white/10 bg-white/5 text-center">
                <p className="text-contrast font-semibold">{m.name}</p>
                <p className="text-contrast-muted text-sm mt-1">{m.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Phased implementation – section-accent */}
      <section className="py-12 md:py-16 section-accent border-t border-white/10">
        <div className="container-max">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-3">
              Phased implementation
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Start with core modules, expand as your business grows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: 1, title: 'Foundation', desc: 'Procurement & inventory with basic workflows' },
              { step: 2, title: 'Customization', desc: 'Advanced workflows, RBAC, and custom processes' },
              { step: 3, title: 'Expansion', desc: 'Additional modules: HR, CRM, project management' }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phase {phase.step}: {phase.title}</h3>
                <p className="text-white/70 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA – light contrast */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-200 to-slate-100 border-t border-white/10">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl mb-3">
            Ready to transform your operations?
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Let&apos;s discuss how Nuvorn Axis can be tailored to your business and industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/features"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-colors"
            >
              Explore features
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-700 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
            >
              Request consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Video overlay – 70% viewport */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div
            className="relative w-[70vw] h-[70vh] max-w-5xl max-h-[70vh] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              poster="/images/erp-ss/dark dashboard.png"
              src={ACTION_VIDEO_SRC}
              controls
              autoPlay
              playsInline
              onEnded={closeVideo}
            />
            <button
              type="button"
              onClick={closeVideo}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:bg-black/90 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Close video"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
