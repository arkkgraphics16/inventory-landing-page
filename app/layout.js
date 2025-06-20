import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Notebuko Saldo – AI Spreadsheet para sa Inventory, Kita, at Gastos",
  description: "Notebuko Saldo ay isang AI spreadsheet para sa mga negosyante. Track inventory, expenses, profit, and sales — smart, simple, at personal.",
  keywords: [
    "Saldo AI",
    "AI spreadsheet",
    "inventory tracking",
    "negosyo tools",
    "profit tracker",
    "gastos at benta app"
  ],
  authors: [
    { name: "Jezrel Phil Nacar" }
  ],
  other: {
    "google-site-verification": "5tk1pOobeh9IHII1v6VK-y3uyBNa9rN4KP0UFIIC3zQ",
    "google-site-verification-2": "JYz7WTQ10TUku6gbMJClFdLKbMyaeYLv1wIy9tAQm_k"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
