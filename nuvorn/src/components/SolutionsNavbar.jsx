import { useState, useEffect } from 'react'

const SolutionsNavbar = ({ solutions, activeSection, setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [autoCollapseTimer, setAutoCollapseTimer] = useState(null)
  const [showInitialPrompt, setShowInitialPrompt] = useState(false)

  // Show navbar when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
        // Show initial prompt for 4 seconds when first appearing
        if (!showInitialPrompt) {
          setShowInitialPrompt(true)
          setTimeout(() => setShowInitialPrompt(false), 4000)
        }
      } else {
        setIsVisible(false)
        setIsOpen(false) // Close when scrolling back to top
        setShowInitialPrompt(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [showInitialPrompt])

  // Auto-collapse after 3 seconds of inactivity
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 3000)
      
      setAutoCollapseTimer(timer)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Clear auto-collapse timer on interaction
  const handleInteraction = () => {
    if (autoCollapseTimer) {
      clearTimeout(autoCollapseTimer)
      setAutoCollapseTimer(null)
    }
  }

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Account for fixed navbar
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
      setIsOpen(false) // Close after navigation
    }
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
    handleInteraction()
  }

  return (
    <>
      {isVisible && (
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
          {/* Toggle Button with Tooltip */}
          <div className="relative group">
            <button
              onClick={toggleNavbar}
              className="w-12 h-12 bg-gray-300 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 mb-4 flex items-center justify-center"
              aria-label="Toggle navigation"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Tooltip */}
            <div className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                Quick Navigation
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
            
            {/* Initial Prompt */}
            {showInitialPrompt && (
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 animate-pulse">
                <div className="bg-primary text-primary-foreground text-sm px-4 py-3 rounded-lg shadow-lg whitespace-nowrap max-w-xs">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Click for quick navigation</span>
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Panel */}
          <div className={`bg-white/95 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg transition-all duration-300 transform ${
            isOpen 
              ? 'translate-x-0 opacity-100 scale-100' 
              : '-translate-x-4 opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="p-4 space-y-2 min-w-[200px]">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">
                Solutions
              </div>
              
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => scrollToSection(solution.id)}
                  onMouseEnter={handleInteraction}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === solution.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activeSection === solution.id ? 'bg-primary-foreground' : 'bg-gray-400'
                    }`}></div>
                    <span>{solution.title}</span>
                  </div>
                </button>
              ))}
              
              {/* Implementation Approach button */}
              <button
                onClick={() => scrollToSection('implementation')}
                onMouseEnter={handleInteraction}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'implementation'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    activeSection === 'implementation' ? 'bg-primary-foreground' : 'bg-gray-400'
                  }`}></div>
                  <span>Implementation</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SolutionsNavbar
