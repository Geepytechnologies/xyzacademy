import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function spottrading() {
  const Spot = ()=>{
    return(
      <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover  bg-[url('/Spot-Trading.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Spot Trading</p>
        </div>
        <p className="">The ultimate guide to hoist you onto the path of profitability in spots trading. The spot trading course takes students on a systematic learning process from beginners to advanced level spot traders.</p>
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
            <li>Introduction to centralized exchanges</li>
            <li>Basic fundamental research methodology to know what crypto assets to trade on spot</li>
            <li>How to trade cryptocurrencies in the spot market using a varying range of brokers in the financial ecosystem, such as Binance, Kucoin, Hotbit, etc</li>
            <li>Market/Trading psychology as a spot trader; when to hodl, sell, and take partials and the most important of them all, capital preservation!</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>"Stay positioned as we walk you through the journey of financial freedom"</h2>
          <h2>As a young man or woman who has little or no knowledge about the financial market, this course is the best guide to hoist you onto the pathway of financial freedom and greatness!</h2>
          <h2>What is spot trading? This is a trading that involves directly purchasing or selling financial instruments and assets like crypto currencies in the spot market using a varying range of brokers in the financial ecosystem, such as binance, kucoin, hotbit, etcetera.</h2>
          <h2>Growing your finances just got easier through trading, with XYZ ACADEMY as your guide. Subscribing to our spot trading ultimate guide will help you achieve that. Throughout this program, our experts will take you through, to ensure that you gain mastery in spots trading and also help you develop the right psychology that you need as a spot trader.</h2>
          <h2>Take charge of your growth.</h2>
          <Link href={{pathname:'/Pay',query: {course: 'Spot trading'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
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
        <div className="md:w-[100%] lg:w-[70%] w-[100%]">
          <Spot />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar course='Spot trading' />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}