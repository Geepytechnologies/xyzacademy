import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function Services() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        // cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const router = useRouter();
  return (
    <div className='w-[100%] mt-[70px] flex flex-col md:flex-row items-center md:items-start justify-center mb-[50px]'>
        <div className="shadow rounded-lg md:mr-[15px] h-[100%] w-[95%] md:w-[45%] ">
            <div className="w-[100%] h-[300px] rounded-lg bg-cover bg-center bg-[url('/IMG1.jpg')] "></div>
            <div className=' flex flex-col items-center justify-center'>
                <h1 className="mx-[8px] text-[#373737] text-center font-[600] text-[25px] sm:text-[40px]">Are you so busy that you can't <span className='text-[#f08800] text-[45px] font-danc'>trade</span> by yourself?</h1>
                <h2 className="text-center m-[5px] text-[20px]">Let us manage your account and increase your portfolio without you having to sit down all day observing the market</h2>
                <button onClick={()=>{router.push('/contact/account-management')}} className='bg-[rgba(12,25,82,0.9)] m-[3px] flex items-center justify-center p-[5px] text-white rounded-lg'><span className='mr-[5px] font-[600]'>See How</span><FaArrowAltCircleRight style={{fill:'white'}} /></button>
            </div>
        </div>
        <div className='mt-[30px] shadow rounded-lg md:mt-[0px] h-[100%] w-[95%] md:w-[45%]'>
            <div className="w-[100%] h-[300px] rounded-lg bg-cover bg-[url('/whats7.jpeg')] "></div>
            <div className=' flex flex-col items-center justify-center'>
            <h1 className="text-center text-[#373737] mx-[5px] font-[600] text-[25px] sm:text-[40px]">Are you looking for a <span className='text-[#f08800] font-[700] text-[45px] font-danc'>reliable</span> vendor to buy your USDTs?</h1>
            <h2 className="text-center md:pb-[40px] text-[20px]">Click <Link href='/vendor'><span className='text-[blue] cursor-pointer'>here</span></Link> to buy now</h2>
            </div>
         </div>  
    </div>
  )
}
