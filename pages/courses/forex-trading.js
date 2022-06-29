import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function forextrading() {
  const Forex = ()=>{
    return(
      <div className='mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="w-[100%] h-[400px] bg-contain bg-no-repeat bg-[url('/Forex-Trading.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Forex Trading</p>
          <p className='font-[600]'>The Ultimate Forex Trading course</p>
        </div>
        <p className="">This course helps students to master the pathway to financial freedom through the process of changing one currency to another in the forex market.</p>
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
            <li>Basic fundamental principles in trading in the forex market. </li>
            <li>Technical tools that help Identify market sentiment </li>
            <li>How to speculate on currency prices to potentially make a profit.</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>The foreign exchange (Forex) market is a global decentralized or over the counter market for the trading of currencies.</h2>
          <h2>This market determines foreign exchange rates for every currency. It includes all aspects of buying, selling and exchanging currencies at current or determined prices.</h2>
          <h2>This market is the most heavily traded market in the world because people, businesses, and countries all participate in it and it's an easy market to access.</h2>
          <h2>Foreign exchange was once a concept of government, large companies and hedge funds. But now trading currency is as easy as anything you can think of, accessibility is not an issue, which means anyone can do it. And YOU too can do it.</h2>
          <h2>Want to know more about how to trade forex? Our ultimate forex Trading course will cover how to get started, help you make your first trades and teach you how to create a long term trading plan for a long term success.</h2>
          <h2>Take charge of your financial growth!</h2>
          <Link href={{pathname:'/Pay',query: {course: 'Forex Trading'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
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
          <Forex />
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