"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Send, Heart, MessageCircle, RefreshCw, Image as ImageIcon, X } from "lucide-react"
import { addMessage, getMessages, type Message } from "@/lib/firestore"

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [newMessage, setNewMessage] = useState({ name: '', message: '' })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load messages on component mount
  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = async () => {
    try {
      setLoading(true)
      setError(null)
      const fetchedMessages = await getMessages(50)
      setMessages(fetchedMessages)
    } catch (err) {
      setError('Failed to load messages. Please try again.')
      console.error('Error loading messages:', err)
      // Fallback to sample messages if Firestore fails
      setMessages([
        {
          id: '1',
          name: 'Sarah M.',
          message: 'Incredible journey ahead! Your determination is truly inspiring. Sending all my support from California.',
          timestamp: new Date('2024-12-15T10:30:00')
        },
        {
          id: '2',
          name: 'Mike R.',
          message: 'Go Paolo! 240 miles of pure grit. We believe in you and the entire team!',
          timestamp: new Date('2024-12-14T15:45:00')
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size must be less than 5MB')
        return
      }
      
      setSelectedImage(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      setError(null)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
    // Clear the file input
    const fileInput = document.getElementById('image') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.name.trim() && newMessage.message.trim()) {
      setIsSubmitting(true)
      setError(null)
      
      try {
        await addMessage(newMessage.name, newMessage.message, selectedImage || undefined)
        setNewMessage({ name: '', message: '' })
        removeImage()
        // Reload messages to show the new one
        await loadMessages()
      } catch (err: any) {
        setError(err.message || 'Failed to send message. Please try again.')
        console.error('Error adding message:', err)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

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
            Messages of Support
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-1 w-20 bg-white/80 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl"
          >
            Share your encouragement and read inspiring messages from our community
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 px-6 md:px-8 max-w-6xl">
        
        {/* Leave a Message Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90 text-center">Leave a Message</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-700/50 max-w-2xl mx-auto">
            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-700/50 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-4 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-gray-900/70 transition-all"
                  maxLength={50}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Share your words of encouragement..."
                  value={newMessage.message}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-4 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-gray-900/70 transition-all resize-none"
                  rows={4}
                  maxLength={500}
                  required
                />
                <div className="text-right mt-2">
                  <span className="text-white/40 text-sm">
                    {newMessage.message.length}/500
                  </span>
                </div>
              </div>

              {/* Image Upload Section */}
              <div>
                <label htmlFor="image" className="block text-white/80 text-sm font-medium mb-2">
                  Add an Image (Optional)
                </label>
                <div className="space-y-4">
                  {!imagePreview ? (
                    <div className="relative">
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                        className="hidden"
                      />
                      <label
                        htmlFor="image"
                        className="flex items-center justify-center w-full p-4 bg-gray-900/50 border-2 border-dashed border-gray-600/50 rounded-lg cursor-pointer hover:bg-gray-900/70 hover:border-gray-500/50 transition-all"
                      >
                        <div className="text-center">
                          <ImageIcon className="mx-auto h-8 w-8 text-white/50 mb-2" />
                          <p className="text-white/60 text-sm">
                            Click to upload an image
                          </p>
                          <p className="text-white/40 text-xs mt-1">
                            Max 5MB • JPG, PNG, GIF
                          </p>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full max-h-48 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-1 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                      >
                        <X size={16} />
                      </button>
                      <div className="mt-2 text-center">
                        <p className="text-white/60 text-sm">{selectedImage?.name}</p>
                        <p className="text-white/40 text-xs">
                          {selectedImage ? (selectedImage.size / 1024 / 1024).toFixed(1) + ' MB' : ''}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black transition-all duration-300 hover:bg-white/90 hover:text-black hover:scale-105 hover:shadow-glow px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-black/30 border-t-black mr-2"></div>
                      {selectedImage ? 'Uploading...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.section>

        {/* Messages Display */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageCircle className="text-white/80" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white/90">Community Messages</h2>
            <Button
              onClick={loadMessages}
              variant="ghost"
              size="sm"
              className="ml-2 text-white/60 hover:text-white/80"
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/30 border-t-white mx-auto mb-4"></div>
              <p className="text-white/60 text-lg">Loading messages...</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + (index * 0.1) }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-white text-lg group-hover:text-white/90 transition-colors">
                    {message.name}
                  </h3>
                </div>
                
                {/* Display image if present */}
                {message.imageUrl && (
                  <div className="mb-4">
                    <img
                      src={message.imageUrl}
                      alt="Shared image"
                      className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => window.open(message.imageUrl, '_blank')}
                    />
                  </div>
                )}
                
                <p className="text-white/80 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors">
                  "{message.message}"
                </p>
                <p className="text-white/50 text-xs">
                  {message.timestamp.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit'
                  })}
                </p>
              </motion.div>
            ))}
          </div>
          )}
          
          {!loading && messages.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="mx-auto text-white/30 mb-4" size={48} />
              <p className="text-white/60 text-lg">No messages yet. Be the first to leave encouragement!</p>
            </div>
          )}
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