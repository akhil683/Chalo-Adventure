import Image from 'next/image'
import { Logo } from '@/constants/Logo'

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen">
      {/* Left side with logo and image */}
      <div className="hidden w-1/2 bg-green-600 lg:block">
        <div className="flex h-full flex-col justify-between p-8">
          <Logo />
          <div className="relative h-2/3 w-full">
            <Image
              src="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Adventure illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg text-white">
            Embark on your next adventure with us!
          </p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="flex w-full items-center justify-center bg-white lg:w-1/2">
        <div className="w-full max-w-md space-y-8 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </section>
  )
}

