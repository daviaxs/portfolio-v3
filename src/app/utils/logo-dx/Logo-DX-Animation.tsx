'use client'

import { MotionProps, motion } from 'framer-motion'
import './logoDX.css'

type LogoDXAnimationProps = MotionProps

export function LogoDXAnimation({ ...props }: LogoDXAnimationProps) {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: '#71717A',
    },
  }

  return (
    <motion.svg
      width="466"
      height="262"
      viewBox="0 0 466 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`item`}
      {...props}
    >
      <motion.path
        d="M64 33L46.5 0.5L117.5 70.5C108.667 86.5 90.8 118.8 90 120C89.6 121.2 90.1667 121.5 90.5 121.5H124L0 244.5C20.5 209.667 61.7 139.7 62.5 138.5C62.9 137.3 62.3333 136.667 62 136.5L34.5 136L64 33Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1.5, ease: 'easeInOut' },
          fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
        }}
      />

      <motion.path
        d="M154.828 0.5H58.5L131.5 70.5C128.333 65 121.8 53.7 121 52.5C120.2 50.1 122.667 49.5 124 49.5C183.5 47.5 195 76 196.5 95C197.5 152 143.5 175.5 95.5 182C93.1 182 93.8333 180 94.5 179L135 124L38.5 219.5C44.5 221 77 221.667 92.5 221.5C197 219.5 263 166.5 263 92C263 47 234 2 154.828 0.5Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1.5, ease: 'easeInOut' },
          fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
        }}
      />

      <motion.path
        d="M328.5 20L252.5 29.5L301 97L271 136.5C219 201 213 231.5 203 261.5L330.5 139L349 168L344 177L410 240L370.5 94L466 0.5L402.5 10.5L400 29.5L277.5 157.5L352 69.5L327.5 35.5L328.5 20Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1.5, ease: 'easeInOut' },
          fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  )
}
