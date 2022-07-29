import React from 'react'
import {useEffect, useRef} from 'react'
import { useRouter } from 'next/router';
import AOS from "aos";
import "aos/dist/aos.css";
import {FaHandPointer} from 'react-icons/fa'

export default function Challenge() {
    const router = useRouter();
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
    <div data-aos='zoom-in-right' className='flex flex-col lg:basis-[40%] border-2 border-white eventshadow'>
            <div onClick={()=>{router.push('/paychallenge')}} className=" ">
                <div className='challimg bg-cover w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]  lg:w-[500px] lg:h-[500px]'></div>
                <p className='bg-[#e6e6e6] text-[18px] font-mont font-[600] p-[5px] w-[100%] text-center'>The $10 to $100 Challenge</p>
            </div>
        
    </div>
  )
}
