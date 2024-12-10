'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import Link from 'next/link'

interface BikeCardProps {
  name: string
  location: string
  price: number
  image: string
  rating: number
}

export default function BikeCard({ name, location, price, image, rating }: BikeCardProps) {
  return (
    <motion.div
      className="bg-gray-100 p-6 border border-solid border-gray-300 rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", duration: 0.3 }}

    >
      <div className='flex justify-between mb-2'>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>
        <span className="text-orange-600 text-xl font-bold">
          &#8377;{price} {" "}
          <span className='font-light text-sm'>/day</span>
        </span>
      </div>
      <div className="relative md:h-56 h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className='rounded-lg'
        />
      </div>
      <div className="pt-4 pb-0">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-600 mb-2 flex items-center">
            <MapPin className='h-[14px]' />
            {location}</p>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        <Link href={`/vehicle/${name}`}>
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
            Rent Now
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

