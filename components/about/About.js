import React from 'react'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div className='about'>
        <div className='aboutoverlay'>
          <div className='w-[100%] sm:w-[50%] m-[3px] h-[100%] flex flex-col justify-center items-center '>
            <h1 data-aos="fade-down" className='text-[#f08800] w-[80%]  pl-[5px] font-[700] sm:text-[30px] text-[25px] font-danc '>The best way to master the financial market and make unfair profits from it.</h1>
            <h2 data-aos="zoom-in" className='text-white mt-[3px] mb-[3px] font-pop w-[80%]'>XYZ Academy is a brand that gives you the opportunity to master, practice and earn from the Financial market</h2>
            <h2 data-aos="zoom-in" className='text-white w-[80%]  hidden md:block'>We also teach tech skills that will help you to make more money by solving Problems in business and society at large</h2>
            <div className='bg-[hsl(34,100%,47%)] w-[50%] sm:w-[40%] md:w-[50%] text-center rounded-xl border border-white mt-[15px] p-[10px] font-[600]'>Register With Us</div>
          </div>
        </div>
    </div>
  )
}
