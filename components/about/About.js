import React from 'react'

export default function About() {
  return (
    <div className='about'>
        <div className='aboutoverlay'>
          <div className='w-[100%] sm:w-[50%] m-[3px] h-[100%] flex flex-col justify-center items-center '>
            <h1 className='text-white text-[25px] '>The best way to master the financial market and make unfair profits from it.</h1>
            <h2 className='text-white'>XYZ Academy is a brand that gives you the opportunity to master, practice and earn from the Financial market</h2>
            <h2 className='text-white hidden md:block'>We also teach tech skills that will help you to make more money by solving Problems in business and society at large</h2>
            <div className='bg-[hsl(34,100%,47%)] w-[40%] sm:w-[40%] md:w-[50%] text-center rounded-xl border border-white p-[5px]'>Register With Us</div>
          </div>
        </div>
    </div>
  )
}
