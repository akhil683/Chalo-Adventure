'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Button } from '../ui/button'

export default function SalesBanner() {
  return (
    <motion.div
      className="bg-orange-600 text-primary-foreground py-3 md:py-6 px-4 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto sm:gap-6 gap-2 flex max-sm:flex-col items-center justify-center">
        <div className='flex items-center justify-center'>
          <AlertCircle className="mr-2" />
          <span className="font-semibold sm:text-lg">
            Summer Sale: Get 20% off on all bookings! Use code SUMMER20 at checkout.
          </span>
        </div>
        <Button className='bg-green-600 border border-white'>
          Book Now
        </Button>
      </div>


      <motion.div
        className="absolute inset-0 bg-white opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}
