import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import ReactQueryProvider from "@/lib/context/QueryProvider";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chalo Adventure",
  description: "Live your dream with  Chalo Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${roboto.className} antialiased`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
