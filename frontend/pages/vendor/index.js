import Image from 'next/image'
import React from 'react'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'

export default function index() {
  const Vendor = ()=>{
    return(
      <div>
        <div className='relative w-[100%] h-[250px] md:h-[350px]'>
          <Image src='/tradebtc.jpg' layout='fill' objectFit='cover' alt='' className='blur-[1px]' />
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[url('/logowhite.png')] bg-cover "></div>
        </div>
        <p className='font-[600] text-[25px] ml-[20px] '>Contact XYZ Vendors Now</p>
      </div>
    )
  }
  return (
    <div>
        <Header />
        <Navbar active="contact" />
        <Vendor />
        <Form />
        <Footer />
        <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
         <Bottomnav />
      </div>
    </div>
  )
}
