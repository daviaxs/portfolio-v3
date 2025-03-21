'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LogoDXAnimation } from '@/app/utils/logo-dx/Logo-DX-Animation'
import { LoadingProgressBar } from '@/app/utils/loading-progress-bar/LoadingProgressBar'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('firstVisit')) {
      sessionStorage.setItem('firstVisit', 'false')
      setShowLoading(true)
      const timer = setTimeout(() => setShowLoading(false), 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {showLoading ? (
        <motion.div
          key="loading-screen"
          className="flex flex-col justify-center items-center w-full h-full fixed inset-0 bg-gray-light-50 dark:bg-gray-dark-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div className="flex flex-col justify-center items-center h-fit gap-5">
            <LogoDXAnimation
              initial={{ scale: 5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />

            <LoadingProgressBar />
          </motion.div>

          <p className="absolute bottom-4">
            &copy; Criado por Davi Alves - 2024
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          className="flex flex-1 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
