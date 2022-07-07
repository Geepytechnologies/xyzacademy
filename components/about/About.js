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
    <div className='relative h-[auto] sm:h-[400px] w-[100%]'>
      <div className='about h-[350px] md:h-[400px] w-[100%] absolute top-0 relative'></div>
      <div className='absolute top-0 w-[100%] h-[350px] md:h-[400px] aboutoverlay'></div>
      <div className='absolute py-[10px] top-0 w-[100%] sm:w-[80%] h-[100%] flex flex-col justify-center items-center '>
        <h1 data-aos="fade-down" className='text-[#f08800] w-[80%]  pl-[5px] font-[800] sm:text-[30px] text-[30px] font-danc '>The best way to master the financial market and make unfair profits from it.</h1>
        <h2 data-aos="zoom-in" className='text-white mt-[3px] mb-[3px] font-pop w-[80%]'>XYZ Academy is a brand that gives you the opportunity to master, practice and earn from the Financial market</h2>
        <h2 data-aos="zoom-in" className='text-white w-[80%]  hidden md:block'>We also teach tech skills that will help you to make more money by solving Problems in business and society at large</h2>
        <div onClick={()=>{router.push('/about')}} className='bg-[hsl(34,100%,47%)] w-[50%] sm:w-[40%] md:w-[50%] items-center justify-center flex cursor-pointer rounded-xl border border-white mt-[15px] p-[10px] '><span className='mr-[10px] font-[600]'>Learn More</span><FaArrowAltCircleRight className='text-[20px]' /></div>
      </div>
    </div>
  
  )
}
