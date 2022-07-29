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
    <div data-aos='zoom-in-left' className="flex flex-col lg:basis-[40%] mb-[20px] bg-[red]   ">
        <div onClick={()=>{router.push('/')}}  className=" bg-[yellow]">
           <div className="bg-[url('/flyer-01.jpg')] bg-cover w-[350px] h-[350px] md:w-[500px] md:h-[500px]  lg:w-[500px] lg:h-[500px] "></div>
           <p className='bg-[blue] w-[100%]'>hello</p>
        </div>
    </div>
  )
}
