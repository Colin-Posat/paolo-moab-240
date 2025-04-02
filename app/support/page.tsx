"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/team/friends-walking.jpg')",
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
            Support Our Journey
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">Why We Need Your Help</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 mb-10">
            <p className="mb-4 text-white/80 text-lg leading-relaxed">
              Running 240 miles through the desert, mountains, and canyons of Utah isn't something you can just show up for. It takes months of preparation, careful planning, and the right resources to do it safely and effectively.
            </p>
            <p className="mb-4 text-white/80 text-lg leading-relaxed">
              We are currently on training plans where mileage peaks at 50 miles per week. That will increase up to 80 or 90 miles per week the closer we get to October. Our training incorporates specific workouts designed to mimic race conditions like steep elevation climbs and extended nighttime runs. Beyond physical training, there's mental preparation, gear testing, nutrition planning, and route familiarization.
            </p>
            <p className="mb-6 text-white/80 text-lg leading-relaxed">
              All of that requires support. That's where you come in.
            </p>
            <p className="mb-4 text-white/80 text-lg leading-relaxed font-bold">
              Your donations help us:
            </p>
            <div className="pl-6 mb-6 text-white/80 text-lg leading-relaxed space-y-2">
              <p>Purchase proper safety equipment (lights, GPS tracking, medical kits, clothes, shoes).</p>
              <p>Secure reliable shelter and places to rest and refuel during the race.</p>
              <p>Provide food, fuel, and supplies for the entire crew.</p>
              <p>Cover travel, race entry fees, and transportation of gear.</p>
              <p>Prepare for and manage emergencies in a remote environment.</p>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              We are doing everything we can to prepare for Moab 240, and your support helps reduce risk, improve safety, and ensure this journey is something we achieve as a team from start to finish.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">Donations</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 mb-10">
            <p className="mb-8 text-white/80 text-lg leading-relaxed">
              Help us cover race costs, gear, travel, and logistics by contributing through GoFundMe. Every donation, no matter the size, brings us one step closer to our goal.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://www.gofundme.com/f/support-paolo-conta-and-friends-on-their-moab-240-journey?qid=19aa53d249579cf00cac5810680c4d2e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-white text-black transition-all duration-300 hover:bg-white/90 hover:text-black hover:scale-105 hover:shadow-glow px-8 py-6 text-lg"
                >
                  Donate on GoFundMe
                </Button>
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">Sponsorship Opportunities</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 mb-10">
            <p className="mb-8 text-white/80 text-lg leading-relaxed">
              If you're interested in partnering with us or supporting the project in a bigger way, we'd love to connect. Every bit of support makes a difference.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="bg-white text-black transition-all duration-300 hover:bg-white/90 hover:text-black hover:scale-105 hover:shadow-glow px-8 py-6 text-lg"
              >
                <a href="mailto:paolo.moab@gmail.com?subject=Moab 240 Sponsorship Inquiry" target="_blank" rel="noopener noreferrer">
                  Contact for Sponsorship
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">Contact Us</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 mb-10">
            <div className="space-y-4 text-center mb-6">
              <p className="text-white/80 text-xl">
                <span className="font-medium text-white">Email:</span> paolo.moab@gmail.com
              </p>
              <p className="text-white/80 text-xl">
                <span className="font-medium text-white">Phone:</span> (949)-394-1210
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">How to Stay Connected</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
            <p className="mb-6 text-white/80 text-lg leading-relaxed">
              Follow the journey on Instagram:
            </p>
            <div className="flex justify-center mb-6">
              <Link 
                href="https://www.instagram.com/contaplates/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <span className="font-medium">@contaplates</span>
              </Link>
            </div>
            <p className="text-white/80 text-lg leading-relaxed text-center mt-4">
              We are thinking of alternative ways to keep in contact :)
            </p>
          </div>
        </motion.section>

        <div className="mt-16 flex justify-center">
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-white/70 text-white bg-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-105 hover:shadow-glow px-8 py-3"
            >
              Return Home
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