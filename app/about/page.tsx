"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AboutPage() {
  // State for the image modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")

  // Function to open the modal with the clicked image
  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc)
    setModalOpen(true)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/moab2.jpg')",
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            What is Moab 240?
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-1 w-20 bg-white/80 mb-6"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 px-6 md:px-8 max-w-4xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">About Moab 240</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 mb-10">
            <div className="md:flex md:space-x-6 items-center">
              <div className="md:w-2/3">
                <p className="mb-6 text-white/80 text-lg leading-relaxed">
                  Hi, my name is Paolo Conta. On October 10th, 2025, I'll be attempting one of the most grueling endurance races on Earth, The Moab 240. It is a 240.3 mile footrace (The distance from Irvine, California  to Las Vegas, Nevada) through Utah's unforgiving desert, slick rock, and alpine terrain. With over 30,000 feet of vertical gain (more than climbing Mount Everest) it's more of an adventure than a race.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  The course spans deserts, canyons, and mountain ranges, testing every ounce of your body and mind. Approximately 85% of the route is single-track trails or rugged jeep roads, weaving through remote backcountry terrain where footing is technical. Participants face heat in the day, freezing temperatures at night, sleep deprivation, and extreme physical and mental challenges throughout the journey.The cutoff time to complete the race is 117 hours.

                </p>
              </div>
              <div className="md:w-1/3 rounded-xl overflow-hidden shadow-lg mt-6 md:mt-0">
                <img 
                  src="/images/moab-240-map.jpg" 
                  alt="Moab 240 Race Map" 
                  className="w-full h-auto object-cover cursor-pointer transition-all duration-200 hover:brightness-110 rounded-xl"
                  onClick={() => openModal("/images/moab-240-map.jpg")}
                />
                <div className="mt-2 text-center text-white/70 text-sm">
                  For a better map check out <a 
                    href="https://caltopo.com/m/1PU1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Caltopo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">Elevation Challenge</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 mb-10">
            <p className="mb-6 text-white/80 text-lg leading-relaxed">
              The Moab 240 packs over 30,000 feet of climbing. That's like summiting Everest from sea level. There will be steep climbs, tricky descents, and dramatic temperature swings along the way.
            </p>
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/moab-240-elevation.jpg" 
                alt="Moab 240 Elevation Profile" 
                className="w-full h-auto object-cover cursor-pointer transition-all duration-200 hover:brightness-110 rounded-xl"
                onClick={() => openModal("/images/moab-240-elevation.jpg")}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">Experience The Journey</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
            <p className="mb-4 text-white/80 text-lg font-semibold text-center">
              MOAB 240 MILE | THE OFFICIAL DESTINATION TRAIL PROMO by destination trail
            </p>
            <div className="relative w-full rounded-xl overflow-hidden">
              <video 
                className="w-full rounded-xl" 
                controls 
                preload="metadata"
              >
                <source src="/videos/moab-240-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-white/80 text-center">
              To learn more about the race <a 
                href="https://www.destinationtrailrun.com/moab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                click here
              </a>
            </p>
          </div>
        </motion.section>

        <div className="mt-16 flex justify-between items-center">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="text-white border border-transparent transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-105"
            >
              Return Home
            </Button>
          </Link>
          <Link href="/why">
            <Button 
              variant="outline" 
              className="border-white/70 text-white bg-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-105 hover:shadow-glow flex items-center gap-2"
            >
              Why We're Running
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-screen-xl max-h-screen">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Modal Image */}
            <img 
              src={modalImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Add a shadow-glow class to the global styles */}
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
      `}</style>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            {[""].map((platform) => (
              <Link 
                key={platform} 
                href={`https://${platform.toLowerCase()}.com`} 
                className="text-white/70"
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