import React from 'react'
import { motion } from 'framer-motion'
import './LoadingProgressBar.style.css'

export function LoadingProgressBar() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.7 }}
    />
  )
}
