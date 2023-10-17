import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import cn from '@/utils/cn'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'My technical test',
  description: 'Technical test for Web^ID crew',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
