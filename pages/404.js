import Link from 'next/link'
import React from 'react'
import Bottomnav from '../components/bottomnav/Bottomnav'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'

const Index = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <p className='text-black text-[30px] font-[600] text-center'>Oops!!! The page could not be found</p>
            <p>Go back to <Link href={'/'}><span className='underline'>HomePage</span></Link></p>
        </div>
        <Footer />
        <div className='fixed h-[70px] bottom-[0px] sm:hidden w-[100%]'>
          <Bottomnav />
        </div>
    </div>
  )
}

export default Index