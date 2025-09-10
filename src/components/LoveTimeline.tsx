'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Clock, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Timeline data using your actual images
const timelineData = [
  {
    id: 1,
    date: 'August 2, 2024',
    title: 'First Beautiful Selfie',
    description: 'The moment that started it all - your beautiful smile captured forever.',
    image: '/images/Screenshot_20240802_153412.jpg',
    category: 'milestone',
    location: 'Special Moment'
  },
  {
    id: 2,
    date: 'August 4, 2024',
    title: 'Evening Magic',
    description: 'Two perfect evenings that showed us the beauty in simple moments together.',
    image: '/images/IMG20240804211231.jpg',
    category: 'romantic',
    location: 'Twilight Hours'
  },
  {
    id: 3,
    date: 'September 7, 2024',
    title: 'Morning to Afternoon Bliss',
    description: 'A day filled with light, laughter, and the joy of being together.',
    image: '/images/IMG20240907115728.jpg',
    category: 'adventure',
    location: 'Full Day Together'
  },
  {
    id: 4,
    date: 'September 12, 2024',
    title: 'Study Session Love',
    description: 'Even studying becomes beautiful when we do it together.',
    image: '/images/Screenshot_20240912_112530.jpg',
    category: 'lifestyle',
    location: 'Learning Together'
  },
  {
    id: 5,
    date: 'December 7, 2024',
    title: 'Nature Walk Romance',
    description: 'Two magical moments in nature, surrounded by beauty and love.',
    image: '/images/Screenshot_20241207_002444.jpg',
    category: 'nature',
    location: 'Garden Paradise'
  },
  {
    id: 6,
    date: 'March 20, 2025',
    title: 'Spring Awakening',
    description: 'Spring brought new beginnings and renewed love.',
    image: '/images/IMG_20250320_174632.jpg',
    category: 'seasonal',
    location: 'Spring Joy'
  },
  {
    id: 7,
    date: 'August 13, 2025',
    title: 'Street Style Adventure',
    description: 'Urban exploration with the most beautiful companion.',
    image: '/images/IMG20250813112650.jpg',
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
    <section className="py-20 px-4 relative love-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-white mx-auto pulsing-heart" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Love Timeline
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every moment is a milestone, every memory a treasure. Here's our beautiful journey through time, 
            captured in the most precious moments of our love story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 rounded-full"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-pink-500 z-10 flex items-center justify-center">
                <Heart className="w-3 h-3 text-pink-500" fill="currentColor" />
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="love-card overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        className={`${categoryColors[item.category as keyof typeof categoryColors]} text-white`}
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
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

              {/* Date Badge */}
              <div className={`absolute top-4 ${index % 2 === 0 ? 'right-8' : 'left-8'} z-20`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{item.date}</span>
                  </div>
                </div>
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
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2 gentle-float" />
              <div className="text-2xl font-bold text-white">365+</div>
              <div className="text-white/80">Days of Love</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
