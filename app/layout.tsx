import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hapmasent Investment Enterprise - Smart Investment, Weekly Returns",
  description:
    "Invest securely with Hapmasent and earn 7% weekly ROI for 6 months. Join thousands of investors building wealth with our trusted investment platform in Nigeria.",
  keywords: "investment, Nigeria, weekly returns, ROI, fintech, secure investment, Hapmasent",
  authors: [{ name: "Hapmasent Investment Enterprise" }],
  generator: "v0.app",
  openGraph: {
    title: "Hapmasent Investment Enterprise - 7% Weekly ROI",
    description: "Secure investment platform offering 7% weekly returns and 25% capital return over 6 months",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
