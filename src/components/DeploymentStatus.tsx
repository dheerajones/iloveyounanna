'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Clock, RefreshCw, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DeploymentStatusProps {
  isVisible: boolean
  onClose: () => void
  deploymentTime?: number
}

export default function DeploymentStatus({ isVisible, onClose, deploymentTime = 120 }: DeploymentStatusProps) {
  const [timeLeft, setTimeLeft] = useState(deploymentTime)
  const [status, setStatus] = useState<'deploying' | 'success' | 'error'>('deploying')

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setStatus('success')
          setTimeout(() => {
            onClose()
          }, 3000)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isVisible, onClose])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'deploying':
        return <RefreshCw className="w-5 h-5 animate-spin text-blue-500" />
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'deploying':
        return 'Deploying your love letter...'
      case 'success':
        return 'Deployment successful!'
      case 'error':
        return 'Deployment failed. Please try again.'
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'deploying':
        return 'bg-blue-500'
      case 'success':
        return 'bg-green-500'
      case 'error':
        return 'bg-red-500'
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 right-4 z-50 max-w-sm"
      >
        <Card className="love-card border-2 border-pink-200 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              {getStatusIcon()}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {getStatusText()}
                </h3>
                {status === 'deploying' && (
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {formatTime(timeLeft)} remaining
                    </span>
                  </div>
                )}
                {status === 'success' && (
                  <p className="text-sm text-green-600 mt-1">
                    Your love letter is now live! 💕
                  </p>
                )}
              </div>
              <Badge className={`${getStatusColor()} text-white`}>
                {status === 'deploying' ? 'DEPLOYING' : status === 'success' ? 'LIVE' : 'ERROR'}
              </Badge>
            </div>
            
            {status === 'deploying' && (
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((deploymentTime - timeLeft) / deploymentTime) * 100}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Your love letter is being added to the website...
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
