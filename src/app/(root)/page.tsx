"use client"
import Hero from "@/components/Home/Hero.component";
import { RentVehiclesSection } from "@/components/Home/RentVehicle.component";
import SalesBanner from "@/components/Home/SalesBanner.component";

export default function Homepage() {

  return (
    <>
      <Hero />
      <SalesBanner />
      <RentVehiclesSection />
    </>
  );
}
