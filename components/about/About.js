import React from 'react'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function About() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div className='relative min-h-[400px] sm:h-[400px] w-[100%]'>
      <div className='about h-[100%] md:h-[400px] w-[100%] absolute top-0'></div>
      <div className='absolute top-0 w-[100%] h-[100%] md:h-[400px] aboutoverlay'></div>
      <div className='absolute py-[10px] top-0 w-[100%] sm:w-[80%] h-[100%] flex flex-col justify-center items-center '>
        <h1 data-aos="fade-down" className='text-[#f08800] w-[80%]  pl-[5px] font-[600] sm:text-[22px] text-[20px] font-open '>The best way to master the financial market and make unfair profits from it.</h1>
        <h2 data-aos="zoom-in" className='text-white mt-[3px] mb-[3px] font-pop w-[80%]'>XYZ Academy is a brand that gives you the opportunity to master, practice and earn from the Financial market</h2>
        {/* <h2 data-aos="zoom-in" className='text-white w-[80%]  hidden md:block'>We also teach tech skills that will help you to make more money by solving Problems in business and society at large</h2> */}
        <div className='w-[80%] flex mt-[15px]'>
          <div onClick={()=>{router.push('/about')}} className='w-[200px] mr-[8px] text-white items-center justify-center flex cursor-pointer rounded-xl border border-white p-[10px] '><span className='mr-[10px] font-[600]'>Learn More</span><FaArrowAltCircleRight className='text-[20px] text-white' /></div>
          <div onClick={()=>router.push('/register')} className='bg-[hsl(34,100%,47%)] items-center justify-center flex w-[200px] cursor-pointer rounded-xl'>
            <p className='text-white font-[600]'>Register</p>
          </div>
        </div>
      </div>
    </div>
  
  )
}
