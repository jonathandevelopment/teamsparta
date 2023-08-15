import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roles Griegos',
  description: 'Todo en Roles ',
  openGraph: {
    title: 'Roles Griegos',
    description: 'Todo en Roles Industriales',
    siteName: 'Roles Griegos',
    images: "/images/logo.png",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
