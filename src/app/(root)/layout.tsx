import { ReactNode } from "react";
import Navbar from "@/components/Navbar.component";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}
