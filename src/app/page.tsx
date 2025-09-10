'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Gift, Star, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'

const photos = [
  {
    id: 1,
    url: "https://z-cdn-media.chatglm.cn/files/88c37c1c-a00a-45f2-9ef5-8ed189af7836_Screenshot_20240802_153412.jpg?auth_key=1788965641-ac9b19645821454b91d6151a70799829-0-3ab8009b037c8b2e1e16ae87a15f1e13",
    caption: "Beautiful Selfie"
  },
  {
    id: 2,
    url: "https://z-cdn-media.chatglm.cn/files/a3784afa-f1c9-4c58-a852-bb1f2a2689c7_Screenshot_20240912_112530.jpg?auth_key=1788965641-afcd6c17a09343eaa16b4c40f3ab55c7-0-5a9c71c111bd15cdb1e99204401607ab",
    caption: "Library Vibes"
  },
  {
    id: 3,
    url: "https://z-cdn-media.chatglm.cn/files/70632dd3-31d1-4d8a-ad5b-edf188b9023b_Screenshot_20241207_002444.jpg?auth_key=1788965641-9e8402d802b841a9aa53a3bbb2127946-0-9d7fcd3d8015594461e2504973639a01",
    caption: "Garden Beauty"
  },
  {
    id: 4,
    url: "https://z-cdn-media.chatglm.cn/files/124f2272-936e-41b8-a30c-6455f243a4d2_Screenshot_20241207_002504.jpg?auth_key=1788965641-03a5c046ab8c4245a147061f50886744-0-b93626ab403c74cb5234157e2f889fde",
    caption: "Park Moments"
  },
  {
    id: 5,
    url: "https://z-cdn-media.chatglm.cn/files/f77e0942-acc0-48b8-a7f3-0a098e7e7b88_Snapchat-530430530.jpg?auth_key=1788965641-025862cf8fc446c3b504d682736bda32-0-a3d1b6a55c1c6ff51a5b7c5c9c2aad33",
    caption: "Outdoor Walk"
  },
  {
    id: 6,
    url: "https://z-cdn-media.chatglm.cn/files/3884a361-0ff3-4f56-bde5-d2bfe91352e7_Snapchat-771023813.jpg?auth_key=1788965641-7db752f9874a4de185128192f806c56d-0-b5c79a8453f03886f17c9f9e56373bfc",
    caption: "Golden Hour"
  },
  {
    id: 7,
    url: "https://z-cdn-media.chatglm.cn/files/6de74ca3-24a9-411a-a4e5-d87027ea7d5a_Snapchat-1232431141.jpg?auth_key=1788965641-8d21fc9e21ec4b49b96bb55c49711307-0-07ed0154f5df92a95ed57f29b85aa6a8",
    caption: "Casual Day"
  },
  {
    id: 8,
    url: "https://z-cdn-media.chatglm.cn/files/2a95f4f6-cac6-4145-b5ef-1ebc8a03361e_Snapchat-1973358956.jpg?auth_key=1788965641-0119ff0aa98c4b88a483065a5f4054c8-0-c82e04318ad95ab12a96a162412a84a8",
    caption: "Traditional Beauty"
  },
  {
    id: 9,
    url: "https://z-cdn-media.chatglm.cn/files/870f0fd3-866d-474f-bf15-800e6b3a2e0d_Snapchat-1977403721.jpg?auth_key=1788965641-e1640f4818ec4021922fba8c46fd00ae-0-dfd23ce31a37e7377f19e93547e7b13d",
    caption: "Sweet Moments"
  },
  {
    id: 10,
    url: "https://z-cdn-media.chatglm.cn/files/d658b211-92f1-4511-b24d-c5bc35b918d2_IMG20250813112650.jpg?auth_key=1788965641-0d0133599fb94128b21f27ebf064e716-0-8b65e027217c908f6634963c9d8c53ac",
    caption: "Street Style"
  }
]

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const floatingHearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2
  }))

  return (
    <div className="min-h-screen love-pattern relative overflow-hidden">
      {/* Love Symbols Background */}
      <div className="love-symbols">
        <div className="love-symbol">❤️</div>
        <div className="love-symbol">💕</div>
        <div className="love-symbol">💖</div>
        <div className="love-symbol">💗</div>
        <div className="love-symbol">💓</div>
      </div>

      {/* I LOVE YOU Watermark */}
      <div className="love-watermark">I LOVE YOU❤️</div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {mounted && floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-300 opacity-30"
            style={{ left: heart.left, bottom: '-50px' }}
            animate={{
              y: [-50, (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://z-cdn-media.chatglm.cn/files/70632dd3-31d1-4d8a-ad5b-edf188b9023b_Screenshot_20241207_002444.jpg?auth_key=1788965641-9e8402d802b841a9aa53a3bbb2127946-0-9d7fcd3d8015594461e2504973639a01')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 via-red-600/80 to-purple-600/80"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 floating-element">
            <Heart className="w-8 h-8 text-pink-400 floating-heart" fill="currentColor" />
          </div>
          <div className="absolute top-20 right-20 floating-element" style={{animationDelay: '1s'}}>
            <Heart className="w-6 h-6 text-red-400 floating-heart" fill="currentColor" />
          </div>
          <div className="absolute bottom-20 left-1/4 floating-element" style={{animationDelay: '2s'}}>
            <Heart className="w-10 h-10 text-purple-400 floating-heart" fill="currentColor" />
          </div>
          <div className="absolute bottom-40 right-1/3 floating-element" style={{animationDelay: '3s'}}>
            <Heart className="w-7 h-7 text-rose-400 floating-heart" fill="currentColor" />
          </div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Gift className="w-20 h-20 text-white mx-auto pulsing-heart" fill="currentColor" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg love-text">
              Happy Birthday
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="text-2xl px-6 py-2 bg-white/90 text-pink-600 love-card">
                To the most amazing person in my life
              </Badge>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Every moment with you is a treasure, every memory a beautiful story. 
              Today we celebrate you, your smile, your heart, and all the love you bring into this world.
            </p>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button size="lg" className="love-button text-white text-lg px-8 py-3 rounded-full">
                <Heart className="mr-2" fill="currentColor" />
                Our Journey Together
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* I LOVE YOU Section */}
      <section className="py-20 px-4 relative love-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <div className="text-8xl md:text-9xl font-bold love-text heartbeat">
                  I LOVE YOU ❤️
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Three simple words that hold my entire world. Three words that describe everything I feel for you.
              </p>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                You are my sunshine, my happiness, my reason for smiling every single day.
              </p>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-8"
              >
                <div className="flex justify-center space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="text-4xl"
                  >
                    💕
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="text-4xl"
                  >
                    💖
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="text-4xl"
                  >
                    💗
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* I LOVE YOU ❤️ NANNA Section */}
      <section className="py-20 px-4 relative love-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 pulsing-heart" fill="currentColor" />
              </motion.div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 love-text">
              I LOVE YOU ❤️ NANNA
            </h2>
            
            <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
              In every language, in every corner of the world, my love for you remains the same. 
              Here are the words "I Love You" in 12 beautiful languages, each representing a piece of my heart.
            </p>
          </motion.div>

          {/* 12 Languages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { 
                language: "English", 
                text: "I Love You", 
                translation: "Nanna", 
                color: "text-pink-600"
              },
              { 
                language: "Spanish", 
                text: "Te Amo", 
                translation: "Nanna", 
                color: "text-red-500"
              },
              { 
                language: "French", 
                text: "Je T'aime", 
                translation: "Nanna", 
                color: "text-purple-600"
              },
              { 
                language: "Italian", 
                text: "Ti Amo", 
                translation: "Nanna", 
                color: "text-rose-600"
              },
              { 
                language: "German", 
                text: "Ich Liebe Dich", 
                translation: "Nanna", 
                color: "text-pink-700"
              },
              { 
                language: "Portuguese", 
                text: "Eu Te Amo", 
                translation: "Nanna", 
                color: "text-red-600"
              },
              { 
                language: "Dutch", 
                text: "Ik Hou Van Jou", 
                translation: "Nanna", 
                color: "text-purple-700"
              },
              { 
                language: "Russian", 
                text: "Я Тебя Люблю", 
                translation: "Нанна", 
                color: "text-rose-700"
              },
              { 
                language: "Japanese", 
                text: "愛してる", 
                translation: "ナンナ", 
                color: "text-pink-800"
              },
              { 
                language: "Korean", 
                text: "사랑해요", 
                translation: "난나", 
                color: "text-red-700"
              },
              { 
                language: "Arabic", 
                text: "أحبك", 
                translation: "نانا", 
                color: "text-purple-800"
              },
              { 
                language: "Hindi", 
                text: "मैं तुमसे प्यार करता हूँ", 
                translation: "नन्ना", 
                color: "text-rose-800"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="love-card h-full p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2 font-medium">{item.language}</div>
                    <div className={`text-3xl font-bold mb-2 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.text}
                    </div>
                    <div className="text-lg text-gray-700">
                      {item.translation}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Heart className="w-6 h-6 text-pink-400 gentle-float" fill="currentColor" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-2xl text-white/90 font-light">
              No matter the language, my heart speaks the same truth: 
              <span className="font-bold text-white"> I LOVE YOU NANNA ❤️</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 relative romantic-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 love-text">
              Beautiful Memories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing moments of joy, love, and happiness. Each photo tells a story of our amazing journey together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 love-card">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 photo-hover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-center font-medium text-gray-700">{photo.caption}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letters Section */}
      <section className="py-20 px-4 love-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Mail className="w-16 h-16 text-pink-500 mx-auto mb-6 gentle-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Love Letters
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Distance means so little when someone means so much. Here's our collection of heartfelt messages that bridge the miles between us.
            </p>
            <Button size="lg" className="love-button text-white" asChild>
              <a href="/mails">
                <Mail className="mr-2" />
                Read Our Letters
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-pink-500 pulsing-heart" fill="currentColor" />
            </div>
            <p className="text-lg mb-4">
              Made with ❤️ for the most special person in my life
            </p>
            <p className="text-gray-300">
              Every day with you is a blessing. Happy Birthday, my love!
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="max-w-4xl max-h-[90vh]">
            <img
              src={photos.find(p => p.id === selectedPhoto)?.url}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}