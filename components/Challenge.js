import React from 'react'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Challenge() {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
    <div data-aos='zoom-in-right' className='mb-[40px] pl-[30px]'>
        <p className='font-[700] text-[#f08800] text-[35px]'>Challenge Yourself</p>
        <p className='text-[20px]'>Join so many others as we move from $10 to $100 in the month of july, 2022!</p>
        <p className='text-[20px]'>Register now with $64</p>
    </div>
  )
}
