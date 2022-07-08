import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Sidebar from '../../components/Sidebar'
import {BsStarFill} from 'react-icons/bs'
import Link from 'next/link'
import Header from '../../components/Header'

export default function defi() {
  const Defi = ()=>{
    return(
      <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover bg-[url('/Defi.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Decentralized Finance(DeFi)</p>
        </div>
        <p className="">The ultimate guide to unraveling the mystery of the world of Decentralised Finance</p>
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
            <li>Introduction to the Decentralised Finance ecosystem</li>
            <li>Fundamentals of the operational mechanism of blockchain technology</li>
            <li>How to use Various Protocols to interact in this field, that runs heavily of smart contract algorithms</li>
            <li>Defi tools, implementations and applications</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>Decentralized finance(Defi) is an emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies. Tired of scam projects and rugpulls?</h2>
          <h2>This course will take you through practical experience in Defi investing, you will also be taught the criteria for identifying long term defi projects and so much more.</h2>
          <h2>Looking for the best knowledge out there in this field?</h2>
          <Link href={{pathname:'/Pay',query: {course: 'Decentralized Finance'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
        </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Navbar active='courses' />
      <div className="flex flex-col lg:flex-row bg-[#f8f8f8] w-[100%]">
        <div className="md:w-[100%] lg:w-[70%] w-[100%]">
          <Defi />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar course="DeFi" />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
