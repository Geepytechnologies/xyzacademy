import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function technicalanalysis() {
    const Technical = ()=>{
        return(
          <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
            <div className="w-[80%]">
            <div className='w-[100%] flex flex-col  '>
              <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover bg-[url('/Technical-Analysis.jpg')]"></div>
              <p className="font-[700] text-[25px]">Learn Technical Analysis</p>
            </div>
            <p className="font-[600]">The topmost guide to lead you onto the pathway of becoming a great technical analyst.</p>
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
                <li>The basic methodology for forecasting the direction of prices in the financial market </li>
                <li>The basics of technical analysis </li>
                <li>Skills required of a technical analyst</li>
                <li>Psychology of a technical analyst</li>
              </ul>
            {/* Description */}
            <div>
              <p className="font-[600]">COURSE DESCRIPTION</p>
              <h2>"Journey to greatness does not always come on a platter of gold"</h2>
              <h2>This course is not one of those fleecy classes that is always sweet and smooth sailing. This course throws you into the deep end, it requires alot of mental preparation.</h2>
              <h2>This course will give you a full overview of the technical analysis journey, it will give you so much practical exercises that the real world will seem like a piece of cake when you graduate. It comes with assignments that require a lot of mental work, but do not worry..... You will crush it! This course will also help you to develop a good understanding of the financial market.</h2>
              <h2>So what is it going to be? Do you want to take up this course and become the most sought after technical analyst?</h2>
              <Link href={{pathname:'/Pay',query: {course: 'Technical Analysis'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
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
          <Technical />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar course="Technical analysis" />
        </div>
      </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}