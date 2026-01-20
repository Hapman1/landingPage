import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hapmasent.com'),
  title: "Hapmasent - Future of Smart Investment | 5% Weekly ROI",
  description:
    "Experience next-generation investment technology with Hapmasent. Earn consistent 5% weekly returns through our AI-powered platform with bank-grade security and advanced protocols.",
  keywords: "investment, fintech, AI trading, weekly returns, ROI, blockchain, cryptocurrency, Nigeria, secure investment, Hapmasent",
  authors: [{ name: "Hapmasent Investment Enterprise" }],
  generator: "Next.js",
  openGraph: {
    title: "Hapmasent - Future of Smart Investment",
    description: "Next-generation investment platform offering 5% weekly returns with AI-powered technology and bank-grade security",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hapmasent Investment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hapmasent - Future of Smart Investment",
    description: "Experience next-generation investment technology with 5% weekly returns",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/logo.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/logo.ico",
    apple: "/logo.png",
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
