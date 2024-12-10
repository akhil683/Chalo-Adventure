import { ReactNode } from "react";

export default function VehicleLayout({ children }: { children: ReactNode }) {
  return <main className="pt-14">{children}</main>;
}
