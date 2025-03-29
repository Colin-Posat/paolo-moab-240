"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/moab4.jpg')",
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
            Why We're Running
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">My Purpose</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-6 text-white/80">
              The Moab 240 compresses years worth of experiences and emotions into a window of just 117 hours. In this short stretch of time, I will face extremes that most people encounter gradually over a lifetime. I believe meaningful growth comes from facing challenges that stretch you physically, mentally, and emotionally.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-white/80">
              I'm surrounded by like minded friends and family who push me to be better every day. Their drive, loyalty, and steady support inspire me, and make it impossible not to aim higher. The truth is, I wouldn't be doing this without them.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">The Bigger Picture</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-6 text-white/80">
              We are a group of friends navigating college, busy schedules, and new chapters of life. As everything changes around us, we've made it a priority to stay connected and keep strengthening the bond we built in high school. Taking on something as demanding as the Moab 240 is our way of staying close, challenging each other, and building new memories that will last far beyond the finish line.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-white/80">
              As young adults, we're choosing to step beyond comfort and routine, testing the limits of what we're capable of, both individually and together. This is a shared effort, and a chance to see what happens when a group of friends fully commits to a goal that requires everything we've got.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-white/80">
              Our hope is that by taking on something this challenging, we can encourage others, especially young adults, to take ownership of their time together and go on adventures and pursue goals that bring them closer to their friends and family.
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
          <Link href="/team">
            <Button 
              variant="outline" 
              className="border-white/70 text-white bg-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-105 hover:shadow-glow flex items-center gap-2"
            >
              Meet the Team
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>

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
                className="hover:text-gray-300 text-white/70 transition-colors"
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