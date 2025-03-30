"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

// Define a type for the section
type Section = {
  id: string;
  title: string;
  text: string;
  link: {
    href: string;
    text: string;
  };
  image: string;
  bgColor: string;
  showInMenu?: boolean;
}

const sections: Section[] = [
  {
    id: "hero",
    title: "Paolo's Moab 240 Challenge",
    text: "One runner. Two pacers. 240 miles. A crew of friends making it all possible.",
    link: { href: "#about", text: "Discover the Challenge" },
    image: "/moab1.jpg",
    bgColor: "black",
    showInMenu: false, // Don't show hero in the menu
  },
  {
    id: "about",
    title: "What is Moab 240?",
    
    text: "An epic 240-mile ultramarathon journey through Utah's breathtaking landscapes",
    link: { href: "/about", text: "Explore the Route" },
    image: "/moab2.jpg",
    bgColor: "black",
    showInMenu: true,
  },
  {
    id: "why",
    title: "Why We're Running",
    text: "Pushing limits, inspiring others, and making a difference in the world through endurance",
    link: { href: "/why", text: "Our Inspiration" },
    image: "/moab4.jpg",
    bgColor: "black",
    showInMenu: true,
  },
  {
    id: "team",
    title: "Meet the Team",
    text: "Bound by Friendship, Driven by Challenge",
    link: { href: "/team", text: "Our Story" },
    image: "/moab3.jpg",
    bgColor: "black",
    showInMenu: true,
  },
  {
    id: "support",
    title: "Support Our Journey",
    text: "Join our mission and help us make this extraordinary challenge a reality",
    link: { href: "/support", text: "Get Involved" },
    image: "/team/friends-walking.jpg",
    bgColor: "black",
    showInMenu: true,
  }
]

type ParallaxSectionProps = {
  section: Section;
  isLast: boolean;
  onInView: (id: string, ratio: number) => void;
}

function ParallaxSection({ section, isLast, onInView }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Create two scroll progress trackers for enhanced transitions
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // This tracks when the section enters the viewport from below
  const { scrollYProgress: entryProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  })

  // Enhanced parallax and transition effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  
  // Text movement with improved entry transition
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30])
  
  // Content transitions based on scroll position
  const opacity = useTransform(entryProgress, [0, 0.4, 1], [0, 1, 1])
  const contentY = useTransform(entryProgress, [0, 0.6], [60, 0])
  
  // Text content reveal staggering
  const titleOpacity = useTransform(entryProgress, [0.1, 0.4], [0, 1])
  const descOpacity = useTransform(entryProgress, [0.2, 0.5], [0, 1])
  const buttonOpacity = useTransform(entryProgress, [0.3, 0.6], [0, 1])
  
  // Fade out effect when scrolling away
  const exitOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.7])
  
  // Scroll indicator fade
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Track section visibility to help with gentle scroll snapping
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Calculate what percentage of the section is visible
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          
          // How much of the section is visible in viewport
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / windowHeight;
          
          // Only consider sections with significant visibility (avoid tiny intersections)
          if (visibilityRatio > 0.15) {
            onInView(section.id, visibilityRatio);
          }
        });
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], // Track visibility at these thresholds
        rootMargin: "-10% 0px -10% 0px" // Slightly shrink observation area to focus on center
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [section.id, onInView]);

  return (
    <motion.div 
      ref={ref}
      id={section.id}
      className={`relative h-screen w-full overflow-hidden ${section.bgColor}`}
    >
      {/* Parallax Background with Overlay */}
      <motion.div 
        style={{ 
          backgroundImage: `url(${section.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY,
          scale: scale,
        }}
        className="absolute inset-0 z-0 origin-center"
      >
        <div className={`absolute inset-0 ${section.id === "support" ? "bg-black/35" : "bg-black/45"}`} />
      </motion.div>

      {/* Enhanced Foreground Content with staggered reveal */}
      <motion.div 
        style={{ 
          y: textY,
          opacity: exitOpacity, // Fade out when scrolling away
        }}
        className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-6"
      >
        <motion.div
          style={{
            y: contentY,
            opacity: opacity,
          }}
          className="flex flex-col items-center"
        >
          <motion.h2 
            style={{ opacity: titleOpacity }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
          >
            {section.title}
          </motion.h2>
          
          <motion.p 
            style={{ opacity: descOpacity }}
            className="max-w-2xl text-lg md:text-xl mb-8 font-light"
          >
            {section.text}
          </motion.p>
          
          {section.id !== "hero" && (
            <motion.div style={{ opacity: buttonOpacity }}>
              <Link href={section.link.href}>
                <Button 
                  variant="outline" 
                  className="border-white/70 text-white bg-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:text-white"
                >
                  {section.link.text}
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Bouncing Down Arrow with Pulsing Text positioned much higher */}
        {!isLast && section.id === "hero" && (
          <motion.div 
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-10 flex flex-col items-center"
          >
            <motion.p 
              className="text-white/90 text-sm font-medium mb-12"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              SCROLL TO EXPLORE
            </motion.p>
            
            <motion.div className="animate-bounce">
              <ChevronDown className="text-white/90" size={36} />
            </motion.div>
          </motion.div>
        )}
        
        {/* Smaller scroll indicators for non-hero sections */}
        {!isLast && section.id !== "hero" && (
          <motion.div 
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-8 animate-bounce"
          >
            <ChevronDown className="text-white/80" size={32} />
          </motion.div>
        )}
      </motion.div>
      
      {/* Enhanced section transition indicators */}
      {!isLast && (
        <>
          {/* Bottom fade gradient */}
          <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent z-10" />
          
          {/* Subtle section separator */}
          <motion.div 
            className="absolute left-0 right-0 bottom-0 z-20 overflow-hidden"
            style={{ opacity: useTransform(scrollYProgress, [0.7, 1], [0, 0.6]) }}
          >
            <div className="w-full h-px bg-white/20 backdrop-blur-sm" />
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<{id: string, ratio: number}[]>([])
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollTime = useRef<number>(0)
  const scrollInstanceId = useRef<number>(0)
  
  // Track section visibility
  const handleSectionInView = useCallback((id: string, ratio: number) => {
    setVisibleSections(prev => {
      // Update or add the section
      const existingIndex = prev.findIndex(s => s.id === id)
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = { id, ratio }
        return updated
      } else {
        return [...prev, { id, ratio }]
      }
    })
  }, [])
  
  // Very gentle scroll centering that activates only when user stops scrolling
  useEffect(() => {
    // Don't do anything if we're already in a programmatic scroll
    if (isScrolling) return
    
    const handleUserScrollEnd = () => {
      // Avoid processing if another scroll instance already started
      const currentInstance = ++scrollInstanceId.current
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      // Wait for a longer period of inactivity before considering scroll finished
      // This makes the centering less intrusive
      scrollTimeoutRef.current = setTimeout(() => {
        // Skip if another scroll instance has started
        if (currentInstance !== scrollInstanceId.current) return

        // Only proceed if we're not already in a programmatic scroll
        if (!isScrolling && visibleSections.length > 0) {
          // Find most visible section
          const mostVisible = [...visibleSections].sort((a, b) => b.ratio - a.ratio)[0]
          
          // Only proceed if the section is significantly visible but not perfectly centered
          if (mostVisible && mostVisible.ratio > 0.5 && mostVisible.ratio < 0.95) {
            const targetElement = document.getElementById(mostVisible.id)
            if (targetElement) {
              // Prevent multiple scroll actions
              setIsScrolling(true)
              
              // Super gentle scrolling with very slow duration
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
              })
              
              // Use a very long timeout to ensure we don't interrupt any natural scrolling
              // The CSS transition will be much faster, but this prevents new centering attempts
              setTimeout(() => {
                if (currentInstance === scrollInstanceId.current) {
                  setIsScrolling(false)
                }
              }, 1500) // Long timeout to avoid interrupting natural scrolling
            }
          } else {
            // If section is already well-centered or barely visible, don't take action
            setIsScrolling(false)
          }
        }
      }, 1000) // Wait for a full second of no scrolling before initiating centering
    }
    
    // Track scroll events to detect when user stops scrolling
    const handleScroll = () => {
      // Throttle scroll events
      const now = Date.now()
      if (now - lastScrollTime.current > 50) { // Only process every 50ms
        lastScrollTime.current = now
        handleUserScrollEnd()
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolling, visibleSections])
  
  // Handle menu link clicks without using hard scrolling
  const handleMenuClick = (sectionId: string) => {
    setMenuOpen(false)
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      setIsScrolling(true)
      // Use very smooth scrolling for menu navigation
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
      // Give plenty of time for the smooth scroll to complete
      setTimeout(() => {
        setIsScrolling(false)
      }, 1200)
    }
  }
  
  // Clean up hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname)
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Fixed Menu Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-black/40 transition-all duration-300 hover:bg-black/60 hover:scale-110"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 left-0 w-72 bg-black/90 backdrop-blur-lg z-50 shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-white">Menu</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMenuOpen(false)}
                  className="text-white transition-all duration-300 hover:bg-white/10 hover:scale-110"
                >
                  <X size={24} />
                </Button>
              </div>
              <nav className="space-y-6">
                {/* Only show sections with showInMenu property set to true */}
                {sections.filter(section => section.showInMenu).map((section) => (
                  <Link 
                    key={section.id} 
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default hash navigation
                      handleMenuClick(section.id);
                    }}
                    className="block text-xl text-white/80 hover:text-white hover:translate-x-2 transition-all"
                  >
                    {section.title}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Parallax Sections */}
      {sections.map((section, index) => (
        <ParallaxSection 
          key={section.id} 
          section={section} 
          isLast={index === sections.length - 1}
          onInView={handleSectionInView}
        />
      ))}

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            {[""].map((platform) => (
              <Link 
                key={platform} 
                href={`https://${platform.toLowerCase()}.com`} 
                className="text-white/70 transition-all duration-300 hover:text-white hover:scale-110"
              >
                {platform}
              </Link>
            ))}
          </div>
          <p className="text-white/50 text-sm">{}</p>
        </div>
      </footer>
    </div>
  )
}