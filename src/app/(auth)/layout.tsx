import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signin to Chalo Adventure",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
