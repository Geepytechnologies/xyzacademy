import React from 'react'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'
import { BsStarFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { VscBook } from 'react-icons/vsc'

export default function Index() {
  const router = useRouter();
  const Intro = ()=>{
    return(
      <div className='relative bg-[#f8f9fb] bg-[url(/bg3.jpg)] bg-cover bg-center w-[100%] h-[300px] md:h-[400px] '>    
       <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[url('/logowhite.png')] bg-cover "></div>
      </div>
    )
  }
  const IntroText = ()=>{
    return(
      <div className='mt-[30px]'>
         <div className='flex flex-row items-center justify-center'>
                <VscBook style={{fill: 'hsl(34,100%,47%)',marginRight:10, fontSize: 30 }} />
                <h3 className='font-[600]'>Courses</h3>
          </div>
          <h1 className='text-[30px] pl-[5px] font-[700]'>A broad selection of Courses</h1>
      </div>
    )
  }
  const CourseGrid = ()=>{
    return(
      <div className='grid w-[100%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-[10px] sm:p-[5px]'>
        <div className='course1 '>
          <div onClick={()=>{router.push('/courses/crypto-arbitration')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Crypto-Arbitration.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Crypto Arbitration</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course2 w-[100%]'>
        <div onClick={()=>{router.push('/courses/forex-trading')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Forex-Trading.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Forex Trading</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course3 '>
        <div onClick={()=>{router.push('/courses/graphics-design')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Graphics-Design.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Graphics Design</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course4 '>
        <div onClick={()=>{router.push('/courses/spot-trading')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Spot-Trading.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Spot Trading</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course5 '>
        <div onClick={()=>{router.push('/courses/synthethic-indices')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Synthetic-Indices.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Synthetic Indices</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course6 '>
        <div onClick={()=>{router.push('/courses/technical-analysis')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Technical-Analysis.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Technical Analysis</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course7 '>
        <div onClick={()=>{router.push('/courses/web-development')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/web-Dev.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Web Development</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course8 '>
        <div onClick={()=>{router.push('/courses/defi')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Defi.jpg')] bg-cover bg-center cursor-pointer"></div>
          <h1 className='font-[700] text-[20px]'>Learn Decentralized Finance(DeFi)</h1>
          <h2 className='font-[600]'>Xyz Academy</h2>
          <div className="flex flex-row">
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
            <BsStarFill style={{fill: '#f08800'}} />
          </div>              
          <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course9 '>
          <div onClick={()=>{router.push('/courses/futures')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/Futures.jpg')] bg-cover bg-center cursor-pointer"></div>
            <h1 className='font-[700] text-[20px]'>Learn Futures</h1>
            <h2 className='font-[600]'>Xyz Academy</h2>
            <div className="flex flex-row">
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
            </div>              
            <p className='font-[700]'>NGN 60,000</p>
        </div>
        <div className='course10 '>
          <div onClick={()=>{router.push('/courses/xyztradingsignals')}} className="lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] w-[200px] h-[200px] bg-[url('/tradingsignals.jpg')] bg-cover bg-center cursor-pointer"></div>
            <h1 className='font-[700] text-[20px]'>Exclusive XYZ Trading Signals</h1>
            <h2 className='font-[600]'>Xyz Academy</h2>
            <div className="flex flex-row">
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
              <BsStarFill style={{fill: '#f08800'}} />
            </div>              
            <p className='font-[700]'>NGN 60,000 per Quarter</p>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Navbar active="courses" />
      <Intro />
      <IntroText />
      <CourseGrid />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
