import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Head from 'next/head'
import Footer from '../../../components/footer/Footer'
import Bottomnav from '../../../components/bottomnav/Bottomnav'
import Sidebar from '../../../components/Sidebar'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Link from 'next/link'

export default function index() {
  const Defi = ()=>{
    return(
      <div className='ml-[5px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[90%] flex flex-col justify-center items-center'>
          <div className="w-[400px] relative h-[300px] bg-[#0c195280]"><div className="absolute h-[100%] top-0 w-[100%] bg-cover bg-center bg-[url('/logowhite.png')]"></div></div>
          <p className="font-[700] text-[25px]">Learn Defi</p>
        </div>
        <p className="text-center">The ultimate guide to unraveling the mystery of the world of Decentralised Finance</p>
        <div className="flex flex-row items-center">
          <span className="mr-[5px]">4.9</span>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarHalf style={{fill: '#f08800'}} />
          </div>          
        </div>
        <p>By Xyz Academy</p>
        <p>$100</p>
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
          <Link href="/courses/defi/Payment"><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
        </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>Xyzacademy</title>
        <meta name="description" content="Xyz Academy" />
        <link rel="icon" href="/logo1.png" />
      </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      <Navbar />
      <div className="flex flex-row w-[100%]">
        <div className="w-[70%]">
          <Defi />
        </div>
        {/* sidebar */}
        <div className="w-[30%]">
          <Sidebar />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
