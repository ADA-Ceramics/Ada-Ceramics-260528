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

// 手机端完美适配配置（不会缩小、不会横向滚动）
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      {/* 全局禁止横向溢出 + 统一字体 */}
      <body className="font-sans antialiased overflow-x-hidden w-full">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
