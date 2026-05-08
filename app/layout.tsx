import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'ADA Ceramics | Premium Food Grade Ceramic Manufacturer',
  description: 'FDA & LFGB Certified premium ceramic manufacturer with 20+ years of expertise. From tableware to custom OEM/ODM designs, we deliver excellence in every piece.',
  keywords: ['ceramic manufacturer', 'food grade ceramic', 'OEM ceramic', 'ODM ceramic', 'wholesale tableware', 'ceramic factory China'],
  authors: [{ name: 'ADA CERAMICS' }],
  openGraph: {
    title: 'ADA CERAMICS | Premium Food Grade Ceramic Manufacturer',
    description: 'FDA & LFGB Certified premium ceramic manufacturer with 20+ years of expertise.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
