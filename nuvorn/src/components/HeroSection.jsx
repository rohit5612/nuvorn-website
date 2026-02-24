import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const screens = [
  '/images/erp-ss/dark dashboard.png',
  '/images/erp-ss/po details.png',
  '/images/erp-ss/stock overview.png',
  '/images/erp-ss/workflow designer.png'
]

const slideCopy = [
  {
    headline: 'Your command center',
    description: 'Monitor KPIs, approvals, and stock in one high-contrast dashboard.'
  },
  {
    headline: 'Deep purchase visibility',
    description: 'Track every PR, PO, and exception with full approval context.'
  },
  {
    headline: 'Inventory clarity',
    description: 'Real-time stock across warehouses with alerts on low and excess.'
  },
  {
    headline: 'Visual workflow designer',
    description: 'Map approvals visually so finance and ops stay aligned.'
  }
]

const HeroSection = () => {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const titleRef = useRef(null)
  const macbookRef = useRef(null)
  const hintRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showSlideText, setShowSlideText] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current || !macbookRef.current) return

    const ctx = gsap.context(() => {
      const INTRO_END = 0.15
      const CAROUSEL_END = 1
      const CAROUSEL_RANGE = CAROUSEL_END - INTRO_END
      const TEXT_APPEAR_AT = 0.05

      const slidesAfterIntro = screens.length - 1

      const isNarrow = () => typeof window !== 'undefined' && window.innerWidth < 768
      const endScale = () => (isNarrow() ? 1.35 : 1.55)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1.2,
          pin: pinRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      gsap.set(titleRef.current, { opacity: 1, y: 0 })
      gsap.set(macbookRef.current, { scale: 0.85, y: 40 })
      gsap.set(hintRef.current, { opacity: 1 })

      tl.to(titleRef.current, {
        opacity: 0,
        y: -24,
        duration: INTRO_END,
        ease: 'power2.in'
      }, 0)

      tl.to(macbookRef.current, {
        scale: () => endScale(),
        y: 0,
        duration: INTRO_END,
        ease: 'power2.out'
      }, 0)

      tl.to(hintRef.current, {
        opacity: 0.3,
        duration: 0.05,
        ease: 'none'
      }, 0)

      tl.to({}, {
        duration: 1,
        ease: 'none',
        onUpdate: function () {
          setShowSlideText(this.progress() >= TEXT_APPEAR_AT)
        }
      }, 0)

      tl.to({}, {
        duration: CAROUSEL_RANGE,
        ease: 'none',
        onUpdate: function () {
          const progress = this.progress()
          if (progress < INTRO_END) {
            setCurrentIndex(0)
            return
          }
          const carouselProgress = (progress - INTRO_END) / CAROUSEL_RANGE
          const slideIndex = Math.min(
            screens.length - 1,
            1 + Math.floor(carouselProgress * slidesAfterIntro)
          )
          setCurrentIndex(slideIndex)
        }
      }, INTRO_END)

      tl.to(hintRef.current, {
        opacity: 0,
        duration: 0.05,
        ease: 'none'
      }, 0.95)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative hero-bg h-[500vh]">
      <div
        ref={pinRef}
        className="hero-pin flex min-h-screen flex-col justify-center gap-2 overflow-hidden px-3 pt-[calc(var(--navbar-height-mobile,100px)+0.5rem)] pb-3 sm:block sm:gap-0 sm:px-0 sm:pt-0 sm:pb-0"
      >
        {/* Title and slogan – in flow on mobile, absolute on sm+ */}
        <div
          ref={titleRef}
          className="hero-title-block relative z-10 w-full text-center sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          <h1 className="hero-title font-bold leading-tight text-white">
            Nuvorn Axis
          </h1>
          <p className="hero-slogan mt-1 text-white/80 sm:mt-1.5 md:mt-2">
            ERP that adapts to your business process, not the other way around
          </p>
        </div>

        {/* Slide text – visible after 5% scroll; left for 0,2; right for 1,3 */}
        {showSlideText && [0, 2].includes(currentIndex) && (
          <div
            key={`left-${currentIndex}`}
            className="hero-slide-text hero-slide-text-left"
            aria-hidden
          >
            <h3 className="hero-slide-headline">{slideCopy[currentIndex].headline}</h3>
            <p className="hero-slide-desc">{slideCopy[currentIndex].description}</p>
          </div>
        )}
        {showSlideText && [1, 3].includes(currentIndex) && (
          <div
            key={`right-${currentIndex}`}
            className="hero-slide-text hero-slide-text-right"
            aria-hidden
          >
            <h3 className="hero-slide-headline">{slideCopy[currentIndex].headline}</h3>
            <p className="hero-slide-desc">{slideCopy[currentIndex].description}</p>
          </div>
        )}

        {/* MacBook – in flow on mobile, viewport-centered on sm+ */}
        <div className="hero-macbook-wrap relative flex flex-shrink-0 items-center justify-center py-1 sm:absolute sm:inset-0 sm:py-0">
          <div
            ref={macbookRef}
            className="hero-macbook-inner relative w-full origin-center"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="device-macbook mx-auto w-full">
              <img
                src="/images/wesbite/macbook.png"
                alt="MacBook"
                className="device-shell-img"
              />
              <div className="device-screen flex items-center justify-center">
                <div className="hero-carousel h-full w-full overflow-hidden">
                  <div
                    className="hero-carousel-track"
                    style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
                  >
                    {screens.map((src, index) => (
                      <div key={src} className="hero-carousel-slide">
                        <img
                          src={src}
                          alt={`Screen ${index + 1}`}
                          className="hero-carousel-img"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={hintRef}
          className="hero-hint relative z-10 flex flex-shrink-0 flex-col items-center gap-2 text-center sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:gap-4 md:bottom-8"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-white/90 sm:text-sm">
            Scroll to explore
          </p>
          <div className="hero-dots flex justify-center gap-1.5">
            {screens.map((_, index) => (
              <div
                key={index}
                className="hero-dot h-1 rounded-full bg-white/30 transition-all duration-300 sm:h-1.5"
                style={{
                  width: currentIndex === index ? 'var(--hero-dot-active, 24px)' : 'var(--hero-dot-inactive, 6px)',
                  backgroundColor: currentIndex === index ? 'rgba(245, 158, 11, 1)' : 'rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
