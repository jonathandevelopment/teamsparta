"use client";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>
        Academia Team Sparta
        </title>
        <meta
          name="description"
          content="La Academia Team Sparta es un centro de 
          entrenamiento de artes marciales de renombre que 
          ha estado en el corazón de la comunidad durante más 
          de una década. Fundada por apasionados y dedicados
           profesionales de las artes marciales, nuestra academia 
           se ha convertido en un lugar de referencia para aquellos
            que buscan desarrollar sus habilidades físicas y mentales 
            a través de las disciplinas de combate."
        />
        <meta
          property="og:image"
          content="/images/muaythai.png"
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
