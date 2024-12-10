"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { navbarLinks, navlinkType } from "@/constants/navbarLinks";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu3Line className="text-2xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl text-green-600">Chalo Adventure</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="relative mt-6">
          <div className="flex flex-col text-lg text-black gap-6 items-center">
            {navbarLinks.map((route: navlinkType) => (
              <SheetClose key={route.link} asChild>
                <Link href={route.link}>{route.name}</Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
