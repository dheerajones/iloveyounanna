'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ChevronLeft, ChevronRight, Play, Pause, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Carousel data with your beautiful images
const carouselData = [
  {
    id: 1,
    image: '/images/Screenshot_20240802_153412.jpg',
    title: 'The Beginning',
    subtitle: 'Where our story started',
    quote: 'Every love story is beautiful, but ours is my favorite.'
  },
  {
    id: 2,
    image: '/images/IMG20240804211231.jpg',
    title: 'Evening Magic',
    subtitle: 'Twilight moments together',
    quote: 'In your eyes, I found my home.'
  },
  {
    id: 3,
    image: '/images/Screenshot_20240912_112530.jpg',
    title: 'Study Sessions',
    subtitle: 'Learning and growing together',
    quote: 'You make even the ordinary moments extraordinary.'
  },
  {
    id: 4,
    image: '/images/Screenshot_20241207_002444.jpg',
    title: 'Nature Walks',
    subtitle: 'Exploring beauty together',
    quote: 'With you, every path leads to paradise.'
  },
  {
    id: 5,
    image: '/images/IMG_20250320_174632.jpg',
    title: 'Spring Awakening',
    subtitle: 'New beginnings',
    quote: 'Like spring, our love blooms endlessly.'
  },
  {
    id: 6,
    image: '/images/IMG20250813112650.jpg',
    title: 'Urban Adventures',
    subtitle: 'City explorations',
    quote: 'In the city of dreams, you are my reality.'
  }
]

export default function MemoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!mounted) return null

  const currentSlide = carouselData[currentIndex]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-purple-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-pink-500 mx-auto pulsing-heart" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 love-text">
            Memory Carousel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a journey through our most precious moments. Each memory is a chapter in our beautiful love story.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${currentSlide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end">
                  <div className="p-8 md:p-12 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="max-w-3xl">
                        <Badge className="mb-4 bg-pink-500 text-white">
                          Memory {currentIndex + 1} of {carouselData.length}
                        </Badge>
                        
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                          {currentSlide.title}
                        </h3>
                        
                        <p className="text-xl md:text-2xl text-white/90 mb-6">
                          {currentSlide.subtitle}
                        </p>
                        
                        <blockquote className="text-lg md:text-xl text-white/80 italic border-l-4 border-pink-400 pl-6">
                          "{currentSlide.quote}"
                        </blockquote>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="lg"
                onClick={prevSlide}
                className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={nextSlide}
                className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Play/Pause Button */}
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {carouselData.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-pink-500 scale-110' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" fill="currentColor" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / carouselData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Memory Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <Card className="love-card text-center p-6">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3 pulsing-heart" />
            <div className="text-2xl font-bold text-gray-800">{carouselData.length}</div>
            <div className="text-gray-600">Precious Memories</div>
          </Card>
          
          <Card className="love-card text-center p-6">
            <Volume2 className="w-8 h-8 text-blue-500 mx-auto mb-3 gentle-float" />
            <div className="text-2xl font-bold text-gray-800">Auto-Play</div>
            <div className="text-gray-600">Continuous Love</div>
          </Card>
          
          <Card className="love-card text-center p-6">
            <Play className="w-8 h-8 text-green-500 mx-auto mb-3 gentle-float" />
            <div className="text-2xl font-bold text-gray-800">Interactive</div>
            <div className="text-gray-600">Touch & Explore</div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
