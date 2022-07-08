import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function synthethicindices() {
  const Synthetic = ()=>{
    return(
      <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover bg-[url('/Synthehic-Indices.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Synthethic Indices</p>
        </div>
        <p className="">A complete guide on how to trade synthetic indices.</p>
        <p>This course is designed to help students learn and master how to become consistently profitable, indices traders.</p>
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
            <li>You will learn efficient strategies for trading synthetic indices </li>
            <li>You will learn how to make consistent returns on your investments using proven strategies or methods.</li>
            <li>You will be trading like a PRO at the end of this course.</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>This course is designed to teach you how to trade synthetic indices.</h2>
          <h2>The Synthetic Inidices market is a simulation of the price action movement in the financial markets. It is algorithmically designed, to mimic what goes on in the financial markets (FOREX) and this simulation is secured by cryptographic codes.</h2>
          <h2>You will be learning so much from this course; it will enlighten you on how to make smart trade decisions on synthetic indices market, plan your trades using well defined entry and exit rules, and also effective methods of sizing your position better to manage your risks and so much more.</h2>
          <h2>Do you want to make some passive income trading synthetic instruments? </h2>
          <Link href={{pathname:'/Pay',query: {course: 'Synthethic Indices'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
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
          <Synthetic />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar course="Synthetic indices" />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}