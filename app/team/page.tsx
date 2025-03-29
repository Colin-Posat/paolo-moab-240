"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Paolo Conta",
    role: "Runner",
    bio: "Paolo is a sophomore at the University of California, Santa Cruz, majoring in neuroscience. Growing up, he was always active, but it wasn't until recovering from a serious ACL injury that he found ultramarathon running, and fully committed to it. What started as a personal challenge turned into a passion for pushing the limits of endurance. Paolo has since completed multiple self organized ultramarathons, including a 100 mile run supported entirely by his friends. That experience laid the foundation for this project. Outside of running, Paolo is known for cooking for his friends and turning meals into shared moments. His specialty dish is pizza.",
    image: "/team/paolo.jpg",
    instagram: "",
    linkedin: "http://www.linkedin.com/in/paolo-conta-b316752a3"
  },
  {
    name: "Tomas Arango",
    role: "Pacer, Film",
    bio: "Tomas is a sophomore at Saddleback College, pursuing a degree in Mechanical Engineering. He's deeply involved in the school's robotics program and brings a problem-solving mindset to everything he does. Tomas stays active through boxing, running, and strength training, and plays a major role in capturing the story behind this project. He is also part of our film crew, using his passion for photography and videography, along with his recreational drone license to document our journey from training to race day. When challenges come up, Tomas is the one who calmly breaks things down and helps find a solution. He will be pacing paolo for up to 60 miles.",
    image: "/team/tomas.jpg",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/tomas-arango-208912267/"
  },
  {
    name: "Logan Rome",
    role: "Pacer",
    bio: "Logan is a sophomore at the University of Colorado Boulder, studying Communication. He actively participates in the university's TEDx club, organizing TED Talks for the campus community. Logan maintains an active lifestyle by running, hiking, and working out with friends. He will be pacing paolo for up to 60 miles. Logan is an up and coming runner, he has run a marathon and will be running a 40 mile ultramarathon this summer. His energy and creativity are a crucial part of the glue that keeps the team together through the ups and downs of the journey.",
    image: "/team/logan.jpg",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/logan-rome/"
  },
  {
    name: "Chris Connor",
    role: "Crew",
    bio: "Chris is a sophomore at Chico State University, majoring in kinesiology with an interest in sports medicine. He's serving as the team's lead on physical recovery and injury prevention, applying what he's learning in school directly to the race environment. Chris also brings a lot more than technical support. He brings spirit. He's the kind of person who stays positive no matter how tough things get, and that attitude keeps the group moving when things feel heavy.",
    image: "/team/chris.jpg",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/chris-connor/"
  },
  {
    name: "Alex Zive",
    role: "Crew",
    bio: "Alex is a sophomore at Chico State, studying entrepreneurship. He plans to graduate early and pursue a master's degree in the field. For this project, he's been instrumental in helping organize logistics and planning behind the scenes. Alex is a practical thinker who's quick to step in when things need to get done. He doesn't just see the problem, he looks for realistic solutions and takes the lead when it matters. His disciplined mindset and his technical business skills make him an essential part of keeping this project running smoothly.",
    image: "/team/alex.jpg",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/alexzive/"
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/moab3.jpg')",
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
            Meet the Team
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-1 w-20 bg-white/80 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl max-w-3xl mx-auto text-center text-white/80"
          >
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 px-6 md:px-8 max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white/90 text-center">The Team Behind the Mission</h2>
          <div className="text-xl leading-relaxed mb-12 text-white/80 max-w-4xl mx-auto">
            <p className="mb-4">
              We are a group of longtime friends who graduated high school together and have stayed close ever since. Even as we've moved to different colleges and cities, staying connected remains one of our priorities. That connection has grown through shared challenges, spontaneous adventures, and showing up for each other through different stages of life.
            </p>
            <p className="mb-4">
              This project is another chapter in that story. The Moab 240 gives us a chance to keep building something real, something that pushes us, brings us back together, and creates memories we'll talk about for years. Everyone on this team brings something different to the table, and it is that mix of personalities, skills, and support that makes this more than just a race.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1 + index * 0.2, 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 100 
                }}
              >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex flex-wrap items-center mb-4">
                        <h2 className="text-2xl font-bold text-white mr-3">
                          {member.name}
                        </h2>
                        <span className="text-white/70 bg-white/10 px-3 py-1 rounded-full text-sm">
                          {member.role}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="flex items-center space-x-4 mt-4">
                        {member.instagram && (
                          <Link 
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                            <span>Instagram</span>
                          </Link>
                        )}
                        {member.linkedin && (
                          <Link 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                            <span>LinkedIn</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
          <Link href="/support">
            <Button 
              variant="outline" 
              className="border-white/70 text-white bg-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-105 hover:shadow-glow flex items-center gap-2"
            >
              Support Our Journey
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