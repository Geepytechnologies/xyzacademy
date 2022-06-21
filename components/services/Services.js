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
    <div className='h-[400px] w-[100%] flex items-center justify-center mb-[50px]'>
        <div className='w-[95%] h-[400px]'>
        <Slider {...settings} className="">
            <div>
                <div className='img1 rounded-lg relative h-[400px]'>
                    <div className="absolute rounded-lg top-0 w-[100%] h-[100%] img1overlay "></div>
                    <div className='absolute top-0 h-[100%] w-[100%] flex flex-col items-center justify-center'>
                        <h1 className="text-white mx-[8px] text-center text-[25px] sm:text-[40px]">Are you so busy that you can't trade by yourself?</h1>
                        <h2 className="text-white text-center m-[5px] text-[20px]">Let us manage your account and increase your portfolio without you having to sit down all day observing the market</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className='img2 rounded-lg relative h-[400px]'>
                 <div className="absolute rounded-lg top-0 w-[100%] h-[100%] img2overlay "></div>
                 <div className='absolute top-0 h-[100%] w-[100%] flex flex-col items-center justify-center'>
                    <h1 className="text-white text-center mx-[5px] text-[25px] sm:text-[40px]">Are you looking for a reliable vendor to buy your USDTs?</h1>
                    <h2 className="text-white text-center  text-[20px]">Click here to buy now</h2>
                </div>
                </div>
            </div>
           
        </Slider>
        </div>
    </div>
  )
}
