import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function webdevelopment() {
  const WebDev = ()=>{
    return(
      <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover bg-[url('/web-Dev.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Web Development</p>
          <p>A complete guide on how to become a Web developer from the scratch. </p>
        </div>
        <p className="">This course covers everything you need to know about becoming an expert in Web development even when you have no prior knowledge to it.</p>
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
            <li>How to create and maintain websites.</li>
            <li>Basic tools required in creating, styling and making interactive Web pages</li>
            <li>Key skills needed as a web developer</li>
            <li>Earn money as a Web developer</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>With the recent surge, in the demand of technologically skilled individuals who are now more sort after than those with paper degrees in technology companies, it is important that young people get skilled up in order to fit into our ever evolving world.</h2>
          <h2>Web development is a course that will guide you step by step on how to develop a website for the Internet (World Wide Web) or intranet (Private Network).</h2>
          <h2>Our experts in XYZ Academy will teach you how to use HTML, CSS, and JavaScript to create, style and make interactive Web pages.</h2>
          <h2>Do you want to learn a skill?</h2>
          <h2>Do you want to become a top skilled Web developer even when you have never programmed before?</h2>
          <Link href={{pathname:'/Pay',query: {course: 'Web Development'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
        </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Navbar active='courses'/>
      <div className="flex flex-col lg:flex-row bg-[#f8f8f8] w-[100%]">
        <div className="md:w-[100%] lg:w-[70%] w-[100%]">
          <WebDev />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar course="Web development" />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}