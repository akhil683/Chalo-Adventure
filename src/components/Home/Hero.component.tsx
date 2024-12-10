"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Bike, Mountain, Tent, Sun, Cloud, TreesIcon as Tree } from 'lucide-react'
import Link from 'next/link'

const TravelIcon = ({ icon: Icon, color, size, delay }: { icon: typeof Bike; color: string; size: number; delay: number }) => {
  return (
    <motion.div
      className={`absolute ${color}`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 40 - 20, 0],
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Icon size={size} />
    </motion.div>
  )
}

const MovingBackground = () => {
  const icons = [
    { Icon: Bike, color: "text-green-600", size: 48 },
    { Icon: Mountain, color: "text-blue-600", size: 64 },
    { Icon: Tent, color: "text-orange-500", size: 48 },
    { Icon: Sun, color: "text-yellow-400", size: 72 },
    { Icon: Cloud, color: "text-gray-400", size: 56 },
    { Icon: Tree, color: "text-green-500", size: 52 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {icons.map((icon, i) => (
        <TravelIcon
          key={i}
          icon={icon.Icon}
          color={icon.color}
          size={icon.size}
          delay={i * 0.2}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100">
      <MovingBackground />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-6xl font-bold mb-6 text-gray-800 drop-shadow-lg"
        >
          We seek Adventure !
          <br />
          Explore the nature with <span className="text-orange-500">Chalo Adventure</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 text-gray-700 drop-shadow"
        >
          Rent a bike and discover the breathtaking beauty of Manali, Shimla, and beyond
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <Button size="lg" asChild className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg">
            <Link href={"/vehicle"}>
              Book Your Ride
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white bg-opacity-50 text-green-700 border-green-600 hover:bg-green-100 shadow-lg">
            <Link href={"/camping-gear"}>
              Explore Destinations
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

