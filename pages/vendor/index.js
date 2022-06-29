import React from 'react'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'

export default function index() {
  return (
    <div>
        <Header />
        <Navbar active="contact" />
        <Form />
        <Footer />
        <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
         <Bottomnav />
      </div>
    </div>
  )
}
