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
    <div data-aos='zoom-in-right' className='flex flex-col lg:basis-[40%]'>
            <div onClick={()=>{router.push('/paychallenge')}} className="bg-[red] ">
                <div className='challimg bg-cover w-[350px] h-[350px] md:w-[500px] md:h-[500px]  lg:w-[500px] lg:h-[500px]'></div>
                <p className='text-[20px] w-[100%]'>$10 to $100 Challenge</p>
            </div>
        
    </div>
  )
}
