"use client"

import React, { useRef, useEffect, useState } from "react"
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
}

function ParallaxSection({ section, isLast }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Prevent negative parallax effect at top to avoid black appearing
  // Reduced the parallax speed for smoother scrolling
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80])
  // Reduced the scale amount for smoother effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03])
  // Reduced the text movement for smoother effect
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.9])
  
  // Slowed down the fade of scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

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

      {/* Foreground Content */}
      <motion.div 
        style={{ 
          y: textY,
          opacity: textOpacity,
        }}
        className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg opacity-80">
          {section.title}
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8 font-light opacity-90">
          {section.text}
        </p>
        {section.id !== "hero" && (
          <Link href={section.link.href}>
            <Button 
              variant="outline" 
              className="border-white/70 text-white bg-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:text-white"
            >
              {section.link.text}
            </Button>
          </Link>
        )}

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
      
      {/* Visual indicator at page edges */}
      {!isLast && (
        <div className="absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-black/30 to-transparent z-10" />
      )}
      
      {/* Section Progress Indicator */}
      {section.id !== "hero" && (
        <div className="absolute top-6 right-6 z-30">
          <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white/70 text-xs">
            {sections.findIndex(s => s.id === section.id)}/{sections.length - 1}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  
  // Simple effect to remove hash from URL on load
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname)
      window.scrollTo(0, 0)
    }
  }, [])

  // Handle initial page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the hash without page reload
      history.replaceState(null, document.title, window.location.pathname)
      
      // Ensure we're at the top of the page
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="relative bg-black">
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
                    className="block text-xl text-white/80 hover:text-white hover:translate-x-2 transition-all"
                    onClick={() => setMenuOpen(false)}
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