import React from 'react'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'
import Image from 'next/image'

export default function index() {
  const Intro = ()=>{
    return(
      <div className='bg-[#f8f9fb] bg-[url(/bg3.jpg)] bg-cover bg-center w-[100%] h-[500px] '>
    
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Navbar active="courses" />
      <Intro />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
