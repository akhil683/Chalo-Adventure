import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Logo } from '@/constants/Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Explore the world on two wheels. Rent a bike and discover the beauty of Manali, Shimla, and beyond.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link href="/" className="text-sm hover:text-orange-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm hover:text-orange-300">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/bikes" className="text-sm hover:text-orange-300">
                  Our Bikes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-orange-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-orange-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm text-gray-200 space-y-2">
              <p>123 Adventure Road</p>
              <p>Manali, Himachal Pradesh 175131</p>
              <p>Phone: +91 1234567890</p>
              <p>Email: info@travelbike.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4 text-gray-200">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Email for newsletter"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 TravelBike. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-white hover:text-orange-300" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-300" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-orange-300" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

