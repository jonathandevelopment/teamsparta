"use client";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Roles Griegos',
//   description: 'Todo en Roles ',
//   openGraph: {
//     title: 'Roles Griegos',
//     description: 'Todo en Roles Industriales',
//     siteName: 'Roles Griegos',
//     images: "/images/logo.png",
//     type: "website",
//     locale: "en_US",
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>
         Roles Griegos
        </title>
        <meta
          name="description"
          content="Especialistas en Soluciones Industriales: 
          Explora Nuestra Amplia Gama de Productos: Rodamientos, Retenedores, 
          Fajas, Bocinas, Fibras, Rótulas, Mangueras y Mucho Más."
        />
        <meta
          property="og:image"
          content="/images/logo.png"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
