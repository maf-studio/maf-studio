import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

interface Orb {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

const orbs: Orb[] = [
  { id: 0, x: 8,  y: 15, size: 3,   color: '#7C3AED', duration: 9,  delay: 0   },
  { id: 1, x: 88, y: 22, size: 4,   color: '#FF2D7A', duration: 12, delay: 1.5 },
  { id: 2, x: 45, y: 80, size: 2.5, color: '#9D5CF5', duration: 8,  delay: 3   },
  { id: 3, x: 72, y: 60, size: 5,   color: '#7C3AED', duration: 14, delay: 0.5 },
  { id: 4, x: 20, y: 70, size: 2,   color: '#FF2D7A', duration: 10, delay: 2   },
  { id: 5, x: 60, y: 10, size: 3.5, color: '#FF2D7A', duration: 11, delay: 4   },
  { id: 6, x: 92, y: 50, size: 2,   color: '#9D5CF5', duration: 7,  delay: 1   },
  { id: 7, x: 35, y: 40, size: 4.5, color: '#7C3AED', duration: 13, delay: 2.5 },
  { id: 8, x: 78, y: 88, size: 2,   color: '#FF2D7A', duration: 9,  delay: 3.5 },
  { id: 9, x: 15, y: 90, size: 3,   color: '#9D5CF5', duration: 16, delay: 0.8 },
]

export default function Particles({ className = '' }: { className?: string }) {
  const { isDark } = useTheme()
  const opacityRange: [number, number, number] = isDark ? [0.4, 1, 0.4] : [0.15, 0.35, 0.15]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            boxShadow: `0 0 ${orb.size * 4}px ${orb.color}`,
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-4, 4, -4],
            opacity: opacityRange,
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
