import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'

export default function graphicsdesign() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}