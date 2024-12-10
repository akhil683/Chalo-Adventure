'use client'

import { useState, useEffect } from 'react'
import { format, differenceInDays } from 'date-fns'
import { Calendar as CalendarIcon, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ProductCarousel } from '@/components/ui/Carousel'

export default function ProductDetailPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [pricing, setPricing] = useState({ days: 0, subtotal: 0, gst: 0, total: 0 })

  useEffect(() => {
    if (startDate && endDate) {
      const days = Math.max(differenceInDays(endDate, startDate), 1)
      const basePrice = 100 // Base price per day
      const subtotal = days * basePrice
      const gst = subtotal * 0.1 // Assuming 10% GST
      const total = subtotal + gst
      setPricing({ days, subtotal, gst, total })
    } else {
      setPricing({ days: 0, subtotal: 0, gst: 0, total: 0 })
    }
  }, [startDate, endDate])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ProductCarousel />
          <h1 className="text-3xl font-bold">Luxury Beachfront Villa</h1>
          <p className="text-gray-600">Bali, Indonesia</p>
          <div className="flex items-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-gray-600">5.0 (120 reviews)</span>
          </div>
          <p className="text-gray-700">
            Experience the ultimate tropical getaway in this stunning beachfront villa.
            Enjoy breathtaking ocean views, private beach access, and world-class amenities.
          </p>
          <div>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="space-y-2">
              {['Private pool', 'Beach access', 'Fully equipped kitchen', 'Wi-Fi', 'Air conditioning'].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-black mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <DatePickerWithRange
              label="Check-in"
              date={startDate}
              setDate={setStartDate}
            />
            <DatePickerWithRange
              label="Check-out"
              date={endDate}
              setDate={setEndDate}
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-semibold" colSpan={2}>Pricing Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Number of nights</td>
                  <td className="text-right">{pricing.days}</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-right">${pricing.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>GST (10%)</td>
                  <td className="text-right">${pricing.gst.toFixed(2)}</td>
                </tr>
                <tr className="font-bold">
                  <td>Total</td>
                  <td className="text-right">${pricing.total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  )
}

function DatePickerWithRange({
  label,
  date,
  setDate
}: {
  label: string
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}) {
  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{label}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

