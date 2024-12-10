'use client'

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterSidebarProps {
  locations: string[]
  maxPrice: number
  onFilterChange: (filters: FilterState) => void
}

interface FilterState {
  name: string
  location: string
  maxPrice: number
  priceRanges: string[]
}

const priceRanges = [
  { label: '$0 - $20', min: 0, max: 20 },
  { label: '$21 - $40', min: 21, max: 40 },
  { label: '$41 - $60', min: 41, max: 60 },
  { label: '$61+', min: 61, max: Infinity },
]

export function FilterSidebar({ locations, maxPrice, onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    name: '',
    location: 'all',
    maxPrice: maxPrice,
    priceRanges: [],
  })

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className="max-md:hidden h-full p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-600 mb-2 block">Name</label>
          <Input
            placeholder="Search by name"
            value={filters.name}
            onChange={(e) => handleFilterChange({ name: e.target.value })}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600 mb-2 block">Location</label>
          <Select
            value={filters.location}
            onValueChange={(value) => handleFilterChange({ location: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600 mb-2 block">Price Range</label>
          {priceRanges.map((range) => (
            <div key={range.label} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={range.label}
                checked={filters.priceRanges.includes(range.label)}
                onCheckedChange={(checked) => {
                  const newRanges = checked
                    ? [...filters.priceRanges, range.label]
                    : filters.priceRanges.filter((r) => r !== range.label)
                  handleFilterChange({ priceRanges: newRanges })
                }}
              />
              <label htmlFor={range.label} className="text-sm text-gray-700 cursor-pointer">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

