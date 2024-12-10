import { Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export function RentVehiclesSection() {
  const vehicles = [
    { name: 'City Car', image: 'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d' },
    { name: 'SUV', image: 'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d' },
    // { name: 'Scooter', image: 'https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d' },
  ]

  const features = [
    'Wide range of vehicles',
    'Flexible rental periods',
    '24/7 roadside assistance',
    'Competitive pricing',
    'Easy online booking',
  ]

  return (
    <section id="rent-vehicles" className="min-h-screen flex items-center px-4 py-12 md:p-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
          >
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Rent Local Vehicles</h2>
            <p className="text-lg mb-8">
              Explore your destination like a local with our diverse fleet of vehicles. From city cars to rugged SUVs,
              we have the perfect ride for your adventure.
            </p>
            <ul className="space-y-2 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-600 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg">
              <Link href="/vehicle" className="bg-green-600 hover:bg-green-700">
                Explore Vehicles <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {vehicles.map((vehicle, index) => (
              <div key={index} className={index === 2 ? "col-span-2" : ""}>
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
