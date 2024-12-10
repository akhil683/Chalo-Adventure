'use client'

import { useState } from 'react'
import { FilterSidebar } from '../FilterSidebar.component'
import BikeCard from '../Cards/RentCard.component'

interface Bike {
  name: string
  location: string
  price: number
  image: string
  rating: number
}

interface BikeListProps {
  bikes: Bike[]
}

interface FilterState {
  name: string
  location: string
  maxPrice: number
  priceRanges: string[]
}

interface PriceRange {
  label: string
  min: number
  max: number
}

const priceRanges: PriceRange[] = [
  { label: '$0 - $20', min: 0, max: 20 },
  { label: '$21 - $40', min: 21, max: 40 },
  { label: '$41 - $60', min: 41, max: 60 },
  { label: '$61+', min: 61, max: Infinity },
]

export function Products({ bikes }: BikeListProps) {
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>(bikes)

  const locations = Array.from(new Set(bikes.map(bike => bike.location)))
  const maxPrice = Math.max(...bikes.map(bike => bike.price))

  const handleFilterChange = (filters: FilterState) => {
    const filtered = bikes.filter(bike =>
      (filters.name === '' || bike.name.toLowerCase().includes(filters.name.toLowerCase()))
      && (filters.location === 'all' || bike.location === filters.location)
      && bike.price <= filters.maxPrice
      && (filters.priceRanges.length === 0 || filters.priceRanges.some(range => {
        const priceRange = priceRanges.find(r => r.label === range)
        return priceRange
          ? (bike.price >= priceRange.min && bike.price <= priceRange.max)
          : false
      }))
    )
    setFilteredBikes(filtered)
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="md:w-64 flex-shrink-0">
        <FilterSidebar
          locations={locations}
          maxPrice={maxPrice}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Bike Rental Service</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike, index) => (
            <BikeCard key={index} {...bike} />
          ))}
        </div>
      </div>
    </div>
  )
}
