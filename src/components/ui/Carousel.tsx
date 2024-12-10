'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const images = [
    'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d',
    'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d',
    'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d',
    'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d',
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <Image
                src={src}
                alt={`Product image ${index + 1}`}
                width={600}
                height={400}
                className="w-full object-cover aspect-[3/2]"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  )
}

