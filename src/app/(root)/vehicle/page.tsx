import RentCardSkeleton from "@/components/Cards/RentCard.skeleton";
import { FilterSidebar } from "@/components/FilterSidebar.component";
import PageContainer from "@/components/PageContainer.component";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Products } from "@/components/Vehicles/Products.component";
import { Suspense } from "react";

export default function VehiclePage() {

  const bikes = [
    {
      name: "Mountain Explorer",
      location: "Downtown Trails",
      price: 35,
      image: "https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7
    },
    {
      name: "City Cruiser",
      location: "Urban Streets",
      price: 25,
      image: "https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d",
      rating: 4.5
    },
    {
      name: "Beach Rider",
      location: "Coastal Path",
      price: 30,
      image: "https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d",
      rating: 4.8
    },
    {
      name: "Forest Trekker",
      location: "Mountain Trails",
      price: 40,
      image: "https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d",
      rating: 4.6
    },
    {
      name: "Luxury Cruiser",
      location: "City Center",
      price: 55,
      image: "https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d",
      rating: 4.9
    },
    {
      name: "Budget Bike",
      location: "University Campus",
      price: 15,
      image: "https://images.unsplash.com/photo-1721896083515-e750eded4e5d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3d",
      rating: 4.2
    },
  ]
  return (
    <PageContainer>
      <SidebarProvider>
        <Suspense fallback={
          <div className="container max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <RentCardSkeleton key={index} />
              ))}
            </div>
          </div>
        }>
          <Products bikes={bikes} />
        </Suspense>
      </SidebarProvider>
    </PageContainer>
  );
}
