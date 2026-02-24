import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageScrollToTop from '../components/PageScrollToTop'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Very light floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-600/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Additional subtle elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/5 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-purple-400/5 rounded-full blur-lg animate-pulse delay-1500"></div>
        
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Auto scroll to top on route change */}
      <PageScrollToTop />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}

export default MainLayout

