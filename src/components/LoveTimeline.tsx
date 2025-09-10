'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Clock, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Timeline data using your actual images
const getImagePath = (imageName: string) => {
  return process.env.NODE_ENV === 'production' ? `/iloveyounanna/images/${imageName}` : `/images/${imageName}`
}

const timelineData = [
  {
    id: 1,
    title: 'Her Radiant Beauty',
    description: 'Your stunning smile lights up every room and captures hearts effortlessly.',
    image: getImagePath('Screenshot_20240802_153412.jpg'),
    category: 'milestone',
    location: 'Special Moment'
  },
  {
    id: 2,
    title: 'Evening Goddess',
    description: 'You transform ordinary evenings into magical moments with your enchanting presence.',
    image: getImagePath('IMG20240804211231.jpg'),
    category: 'romantic',
    location: 'Twilight Hours'
  },
  {
    id: 3,
    title: 'Morning Sunshine',
    description: 'Your natural beauty shines brighter than any sunrise, bringing joy to every day.',
    image: getImagePath('IMG20240907115728.jpg'),
    category: 'adventure',
    location: 'Full Day Together'
  },
  {
    id: 4,
    title: 'Intellectual Beauty',
    description: 'Your intelligence and grace make even the most mundane activities feel special.',
    image: getImagePath('Screenshot_20240912_112530.jpg'),
    category: 'lifestyle',
    location: 'Learning Together'
  },
  {
    id: 5,
    title: 'Nature\'s Masterpiece',
    description: 'You blend perfectly with nature\'s beauty, creating scenes more beautiful than any painting.',
    image: getImagePath('Screenshot_20241207_002444.jpg'),
    category: 'nature',
    location: 'Garden Paradise'
  },
  {
    id: 6,
    title: 'Spring\'s Muse',
    description: 'Like spring itself, you bring renewal, hope, and endless beauty wherever you go.',
    image: getImagePath('IMG_20250320_174632.jpg'),
    category: 'seasonal',
    location: 'Spring Joy'
  },
  {
    id: 7,
    title: 'Urban Angel',
    description: 'You make city streets look like runways with your effortless style and grace.',
    image: getImagePath('IMG20250813112650.jpg'),
    category: 'fashion',
    location: 'City Streets'
  }
]

const categoryColors = {
  milestone: 'bg-pink-500',
  romantic: 'bg-red-500',
  adventure: 'bg-blue-500',
  lifestyle: 'bg-green-500',
  nature: 'bg-emerald-500',
  seasonal: 'bg-purple-500',
  fashion: 'bg-orange-500'
}

export default function LoveTimeline() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4 relative love-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4 sm:mb-6"
          >
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto pulsing-heart" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Her Timeless Beauty
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every photo captures your incredible beauty, every moment showcases your grace. 
            Here's a celebration of the most beautiful woman in the world.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 rounded-full"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center mb-8 sm:mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-pink-500 z-10 flex items-center justify-center">
                <Heart className="w-3 h-3 text-pink-500" fill="currentColor" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-4 md:mt-0`}>
                <Card className="love-card overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="dynamic-image"
                      loading="lazy"
                      style={{ maxHeight: '250px' }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        className={`${categoryColors[item.category as keyof typeof categoryColors]} text-white`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2 pulsing-heart" />
              <div className="text-2xl font-bold text-white">{timelineData.length}</div>
              <div className="text-white/80">Milestone Moments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2 gentle-float" />
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-white/80">Love Multiplied</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Heart className="w-8 h-8 text-blue-400 mx-auto mb-2 gentle-float" />
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-white/80">Beauty Beyond Measure</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
