"use client"
import { navbarLinks, navlinkType } from '@/constants/navbarLinks'
import Link from 'next/link'
import MobileNav from './MobileNav.component'
import { User2 } from "lucide-react"
import API from '@/config/apiClient';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '@/types'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-800 hover:text-orange-500 transition-colors font-medium max-md:text-lg">
    {children}
  </Link>
)

export default function Navbar() {

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res: UserType = await API.get("/user")
      console.log(res)
      return res
    },
  })

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-80 backdrop-blur-md border-b border-solid border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <Link href="/" className="text-primaryGreen text-2xl font-bold">Chalo Adventure</Link>
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
              {user
                ?
                <NavLink
                  href={"/profile"}
                >
                  Hi, {" "}
                  <span className='text-primaryGreen text-lg'>
                    {user.name}
                  </span>
                </NavLink>
                :
                <NavLink
                  href={"/sign-in"}
                >
                  Log In
                </NavLink>
              }
            </div>
          </div>
          <div className='md:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

