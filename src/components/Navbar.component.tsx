"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navbarLinks, navlinkType } from '@/constants/navbarLinks'
import Link from 'next/link'
import MobileNav from './MobileNav.component'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-800 hover:text-orange-500 transition-colors font-medium max-md:text-lg">
    {children}
  </Link>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <Link href="/" className="text-green-600 text-2xl font-bold">Chalo Adventure</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-6 space-x-4">
              {navbarLinks.map((link: navlinkType) => (
                <NavLink
                  key={link.link}
                  href={link.link}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

