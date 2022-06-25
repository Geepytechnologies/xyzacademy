import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  return (
    <div className='h-[200px] w-[100%] flex flex-col md:flex-row items-center justify-center mb-[50px]'>
        <div className="bg-[#f9f9f9] border border-[white] shadow mr-[15px] rounded-br-[50px] rounded-tl-[50px] h-[100%] w-[95%] md:w-[45%] ">
            <div className=' flex flex-col items-center justify-center'>
                <h1 className="mx-[8px] text-[#373737] text-center font-[600] text-[25px] sm:text-[40px]">Are you so busy that you can't <span className='text-[#f08800]'>trade</span> by yourself?</h1>
                <h2 className="text-center m-[5px] text-[20px]">Let us manage your account and increase your portfolio without you having to sit down all day observing the market</h2>
            </div>
        </div>
        <div className='bg-[#f9f9f9] mt-[30px] md:mt-[0px] shadow rounded-br-[50px] rounded-tl-[50px] h-[100%] w-[95%] md:w-[45%]'>
            <div className=' flex flex-col items-center justify-center'>
            <h1 className="text-center text-[#373737] mx-[5px] font-[600] text-[25px] sm:text-[40px]">Are you looking for a <span className='text-[#f08800]'>reliable</span> vendor to buy your USDTs?</h1>
            <h2 className="text-center  text-[20px]">Click here to buy now</h2>
            </div>
         </div>  
    </div>
  )
}
