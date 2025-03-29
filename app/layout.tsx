import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Paolo's Moab 240 Challenge",
  description: "Join us on an epic 240-mile ultramarathon journey through the breathtaking landscapes of Utah.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'