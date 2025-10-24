import { useState, useEffect } from 'react'
import logo from './assets/nnexus.png'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer - set to December 22, 2025
  useEffect(() => {
    const targetDate = new Date('December 22, 2025 00:00:00')

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-cyan-950 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes with enhanced contrast */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-400/25 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-orange-400/15 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Additional contrast elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/15 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-pulse delay-1500"></div>
        
        {/* Grid pattern overlay with enhanced visibility */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2306b6d4' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container-max">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/5 to-teal-500/5 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-800/90">
              <img src={logo} alt="Nuvorn" className="w-full h-full rounded-full" />
            </div>
            <div>
              <span className="text-white font-bold text-2xl">Nuvorn</span>
              <div className="text-cyan-500 text-xs font-medium">Cloud-powered business solutions</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="container-max text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 border border-cyan-400/50 rounded-full text-cyan-200 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-cyan-500/20">
            <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3 animate-pulse"></span>
            Coming Soon - December 22, 2025
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-cyan-300 via-teal-300 to-orange-300 bg-clip-text text-transparent">
              Enterprise Management
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Introducing <span className="text-cyan-300 font-semibold">Nuvorn Axis</span> - 
            Our revolutionary ERP suite designed to transform how modern businesses operate, 
            collaborate, and scale with cutting-edge technology.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4 md:p-6 hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                  <div className="text-2xl md:text-4xl font-bold text-cyan-300 mb-1">{value}</div>
                  <div className="text-gray-300 text-sm md:text-base capitalize font-medium">{unit}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card bg-black/40 backdrop-blur-sm border border-cyan-400/30 text-center p-6 fade-in hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-teal-400/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-300 text-sm">Real-time insights and comprehensive reporting for data-driven decisions</p>
            </div>

            <div className="card bg-black/40 backdrop-blur-sm border border-teal-400/30 text-center p-6 slide-up hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-300 text-sm">Seamless communication and project management across departments</p>
            </div>

            <div className="card bg-black/40 backdrop-blur-sm border border-orange-400/30 text-center p-6 fade-in hover:border-orange-400/60 transition-all duration-300 shadow-lg shadow-orange-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400/30 to-cyan-400/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Optimized performance with cloud-native architecture for speed and reliability</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 text-center hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-teal-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-6">Have questions about Nuvorn Axis? Want to be notified when we launch? We'd love to hear from you!</p>
              <a 
                href="mailto:rohit.business.506@gmail.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-400/30 mt-20">
        <div className="container-max py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 py-5">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Nuvorn" className="w-6 h-6" />
              </div>
              <span className="text-gray-300">© 2025 Nuvorn Technologies. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
