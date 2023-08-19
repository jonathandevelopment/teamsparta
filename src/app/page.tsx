"use client";

import Image from 'next/image'
import Navbar from './components/Navbar'
import Masthead from './components/Masthead'
import Brands from './components/Brands';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Masthead/>
      <FeaturedProducts/>
      <About/>
    </div>
    
  )
}
