import { Plane } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Plane className="h-6 w-6 text-green-600" />
      <span className="text-xl font-bold text-green-600">Chalo Adventure</span>
    </div>
  )
}

