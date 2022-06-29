import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function graphicsdesign() {
  const Graphics = ()=>{
    return(
      <div className='ml-[5px] mt-[30px] flex items-center justify-center'>
        <div className="w-[80%]">
        <div className='w-[100%] flex flex-col  '>
          <div className="md:w-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] md:h-[400px] bg-cover bg-[url('/Graphics-Design.jpg')]"></div>
          <p className="font-[700] text-[25px]">Learn Graphics Design</p>
          <p>The best guide to becoming a top skilled graphics designer </p>
        </div>
        <p className="">This course will teach you how to use photoshop, illustrator, and indesign for logo designs, Web designs, posters and more.</p>
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
            <li>Understand the basics of logo designs.</li>
            <li>Develop a skill and confidence to create common graphics design project.</li>
            <li>You will learn how to make composite images using photoshop.</li>
            <li>How to set up a logo mood board and how to present your work to clients.</li>
          </ul>
        {/* Description */}
        <div>
          <p className="font-[600]">COURSE DESCRIPTION</p>
          <h2>"Design is a solution to a problem, art is a question to a problem” - John Maeda, president of Rhodes Island school of designs.</h2>
          <h2>Graphic design is the ability to create visual concepts to communicate information. You create everything from posters and billboards, to packaging, logos, and marketing materials.</h2>
          <h2>Graphics designers use elements such as shapes, colors, topography images and more to convey ideas to an audience.</h2>
          <h2>Do you want to learn graphics designs? You are at the right place. Becoming a top skilled graphics designer just got better with XYZ Academy as your guide.</h2>
          <h2>See you at the top!</h2>
          <Link href={{pathname:'/Pay',query: {course: 'Graphics Design'} }}><a><button className='bg-[black] font-[600] text-white p-[10px] w-[150px] m-[5px] '>Enroll now</button></a></Link>
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
          <Graphics />
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
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