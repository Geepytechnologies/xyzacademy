import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Realdeal() {
  const router = useRouter();
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
    <div data-aos='zoom-in-left' className="flex flex-col lg:basis-[40%] mb-[20px] eventshadow  ">
        <div onClick={()=>{router.push('/events/xyzfinancialcongress')}}  className="">
           <div className="bg-[url('/flyer-01.jpg')] bg-cover w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]  lg:w-[500px] lg:h-[500px] "></div>
           <p className='bg-[#e6e6e6] w-[100%] p-[5px] font-mont text-[18px] font-[600] text-center'>The XYZ Financial Congress</p>
        </div>
    </div>
  )
}
