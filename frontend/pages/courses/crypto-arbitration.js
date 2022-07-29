import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function cryptoarbitration() {
    const Cryptoarbi = ()=>{
        return(
          <div className='mt-[30px] flex items-center justify-center'>
            <div className="w-[80%]">
            <div className='w-[100%] flex flex-col  '>
              <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover bg-[url('/Crypto-Arbitration.jpg')]"></div>
              <p className="font-[700] text-[25px]">Learn Crypto Arbitration</p>
              <p className='font-[600]'>Top secrets to learn on Crypto Arbitration</p>
            </div>
            <p className="">This course is a complete guide for students who never had any prior knowledge on Crypto Currencies. It will open up pathways an everything you need to learn in Crypto Arbitration</p>
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
                <li>How to profitably buy and sell coin.</li>
                <li>Learn how to get around transaction fees as an arbitrageur</li>
                <li>How to make low-risk gains</li>
              </ul>
            {/* Description */}
            <div>
              <p className="font-[600]">COURSE DESCRIPTION</p>
              <h2>Take this complete guide on Crypto Arbitration and start trading today.</h2>
              <h2>"As a white colar job man I have no place in Crypto trading" few years ago you could have gotten away with that statement. Today you say that to your friends and they scoff at you before going back to their phones to check for signals. </h2>
              <h2>What is arbitrage?  It is a trading strategy in which assets is purchased in one market and sold immediately in another market at a higher price, exploiting the price difference to turn profits. In Crypto Arbitration Crypto is the asset used.</h2>
              <h2>Our experts in Xyz academy will take you through step by step process on how to profitably buy and sell coins. Grab this great opportunity and register with us.</h2>
              <h2>Greatness awaits!</h2>
              <Link href={{pathname:'/Pay',query: {course: 'Crypto Arbitration'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
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
          <Cryptoarbi />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar course="Crypto Arbitration" />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}