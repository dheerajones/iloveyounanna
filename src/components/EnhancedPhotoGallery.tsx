'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Calendar, MapPin, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Your beautiful images with metadata
const photoData = [
  {
    id: 1,
    src: '/images/Screenshot_20240802_153412.jpg',
    caption: 'Radiant Beauty',
    location: 'Special Moment',
    category: 'portrait'
  },
  {
    id: 2,
    src: '/images/Screenshot_20240912_112530.jpg',
    caption: 'Intellectual Grace',
    location: 'Study Session',
    category: 'lifestyle'
  },
  {
    id: 3,
    src: '/images/Screenshot_20241207_002444.jpg',
    caption: 'Nature\'s Muse',
    location: 'Nature Walk',
    category: 'nature'
  },
  {
    id: 4,
    src: '/images/Screenshot_20241207_002504.jpg',
    caption: 'Garden Goddess',
    location: 'Evening Stroll',
    category: 'nature'
  },
  {
    id: 5,
    src: '/images/Snapchat-530430530.jpg',
    caption: 'Adventure Queen',
    location: 'Exploring Together',
    category: 'adventure'
  },
  {
    id: 6,
    src: '/images/Snapchat-771023813.jpg',
    caption: 'Golden Hour Angel',
    location: 'Sunset Magic',
    category: 'golden'
  },
  {
    id: 7,
    src: '/images/Snapchat-1232431141.jpg',
    caption: 'Casual Elegance',
    location: 'Comfort Zone',
    category: 'casual'
  },
  {
    id: 8,
    src: '/images/Snapchat-1973358956.jpg',
    caption: 'Traditional Princess',
    location: 'Heritage',
    category: 'traditional'
  },
  {
    id: 9,
    src: '/images/Snapchat-1977403721.jpg',
    caption: 'Sweet Angel',
    location: 'Heart to Heart',
    category: 'romantic'
  },
  {
    id: 10,
    src: '/images/IMG20250813112650.jpg',
    caption: 'Fashion Icon',
    location: 'Urban Adventure',
    category: 'fashion'
  },
  {
    id: 11,
    src: '/images/IMG20240804211231.jpg',
    caption: 'Evening Star',
    location: 'Twilight Magic',
    category: 'evening'
  },
  {
    id: 12,
    src: '/images/IMG20240804221103.jpg',
    caption: 'Night Beauty',
    location: 'Late Night',
    category: 'night'
  },
  {
    id: 13,
    src: '/images/IMG20240907115728.jpg',
    caption: 'Morning Sunshine',
    location: 'Fresh Start',
    category: 'morning'
  },
  {
    id: 14,
    src: '/images/IMG20240907132447.jpg',
    caption: 'Afternoon Grace',
    location: 'Peaceful Moment',
    category: 'afternoon'
  },
  {
    id: 15,
    src: '/images/IMG_20250320_174632.jpg',
    caption: 'Spring Goddess',
    location: 'Seasonal Beauty',
    category: 'seasonal'
  }
]

const categories = ['all', 'portrait', 'lifestyle', 'nature', 'adventure', 'golden', 'casual', 'traditional', 'romantic', 'fashion', 'evening', 'night', 'morning', 'afternoon', 'seasonal']

export default function EnhancedPhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photoData[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredPhotos = selectedCategory === 'all' 
    ? photoData 
    : photoData.filter(photo => photo.category === selectedCategory)

  const openModal = (photo: typeof photoData[0], index: number) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setCurrentIndex(nextIndex)
    setSelectedPhoto(filteredPhotos[nextIndex])
  }

  const prevPhoto = () => {
    const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedPhoto(filteredPhotos[prevIndex])
  }

  if (!mounted) return null

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4 relative romantic-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4 sm:mb-6"
          >
            <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 mx-auto pulsing-heart" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 love-text">
            Her Stunning Collection
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Every photo showcases your incredible beauty, every moment captures your grace. 
            Here's a celebration of the most beautiful woman in the world.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`capitalize transition-all duration-300 ${
                selectedCategory === category 
                  ? 'love-button text-white' 
                  : 'hover:love-button hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(photo, index)}
            >
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 love-card">
                <div className="image-container">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="dynamic-image"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 text-white text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{photo.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-700">{photo.caption}</p>
                    <Badge variant="secondary" className="text-xs capitalize">
                      {photo.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="love-card p-6">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2 pulsing-heart" />
              <div className="text-2xl font-bold text-gray-800">{photoData.length}</div>
              <div className="text-gray-600">Precious Moments</div>
            </div>
            <div className="love-card p-6">
              <Calendar className="w-8 h-8 text-pink-500 mx-auto mb-2 gentle-float" />
              <div className="text-2xl font-bold text-gray-800">{categories.length - 1}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="love-card p-6">
              <Camera className="w-8 h-8 text-pink-500 mx-auto mb-2 gentle-float" />
              <div className="text-2xl font-bold text-gray-800">∞</div>
              <div className="text-gray-600">Memories to Come</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevPhoto}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextPhoto}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Image */}
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{selectedPhoto.caption}</h3>
                    <div className="flex items-center space-x-4 text-sm mt-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedPhoto.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="capitalize">
                    {selectedPhoto.category}
                  </Badge>
                </div>
              </div>

              {/* Photo Counter */}
              {filteredPhotos.length > 1 && (
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {filteredPhotos.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
