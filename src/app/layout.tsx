import type { Metadata } from "next";
import { Jomhuria, Lilita_One, Poppins } from "next/font/google";
import "./globals.css";

const jomhuria = Jomhuria({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jomhuria",
});

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Burger's Reinvented",
  description: "Premium burger restaurant - Order delivery or pick up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jomhuria.variable} ${lilitaOne.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
