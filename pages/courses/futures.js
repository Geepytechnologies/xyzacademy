import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function futures() {
  const Future = ()=>{
    return(
      <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="w-[100%] h-[400px] bg-no-repeat bg-contain bg-[url('/Futures.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Futures Trading</p>
          <p>A complete guide on how to trade futures.</p>
        </div>
        <p className="">This course will guide you step by step on how to trade your own broker account. </p>
        <div className="flex flex-row items-center">
          <span className="mr-[5px]">5.0</span>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>          
        </div>
        <p>By Xyz Academy</p>
        <p className='font-[600]'>$100</p>
        {/* what you will learn */}
        <div>
          <p className="font-[600]">WHAT YOU WILL LEARN</p>
        </div>
          <ul className='list-disc'>
            <li>You will learn strong foundation and deep understanding of futures trading </li>
            <li>Learn when to enter or exit a future trade.</li>
            <li>Learn the best strategies to make profits in future trading</li>
            <li>In-depth knowledge of time frame in futures trading</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>Futures are financial contracts in which two parties, one buyer and one seller agree to exchange an underlying market for a fixed price at a future date.</h2>
          <h2>This course is a complete guide on how to trade futures, you will also be taught on how to read the market alongside basic principles of futures trading. This course will enlighten you on how to exit and also manage risks, you will also be taught how to read and interprete trends correctly on futures trading, you will also be taught effective tools in futures trading. </h2>
          <h2>Our goal is to help you develop the skill and mindset to begin or take your trading journey to another level. </h2>
          <h2>Let's get started!</h2>
          <Link href={{pathname:'/Pay',query: {course: 'Futures'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
        </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Navbar active="courses" />
      <div className="flex flex-col lg:flex-row bg-[#f8f8f8] w-[100%]">
        <div className="w-[70%]">
          <Future />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%]">
          <Sidebar />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}