import React from 'react'

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 w-full flex flex-col items-center">
      {children}
    </section>
  )
}

