"use client";
import Image from 'next/image'
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Payment from './components/Payment.js';
import Picture from './components/Picture.js';
import Info from './components/Info.js';
import Discover from './components/Discover.js';
import Login from './components/Login.js';
import MoneyHub from './components/MoneyHub.js';
import Footer from './components/Footer.js';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Payment />
      <Picture />
      <Info/>
      <Discover/>
      <Login/>
      <MoneyHub/>
      <Footer/>
    </>
  )
}
