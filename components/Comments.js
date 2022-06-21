import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineComment} from 'react-icons/ai'

export default function Comments() {
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
    <div className='mb-[30px]'>
        <div className='flex flex-row justify-center items-center'>
            <AiOutlineComment style={{marginRight: 10,fill: 'hsl(34,100%,47%)',fontSize: 20}} />
            <h2 className='font-[600]'>What our students say</h2>
        </div>
        <div className='w-[95%]'>
        <Slider {...settings} className="">
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className='divimg border-2 border-[#f08800] rounded-full w-[150px] h-[150px] '></div>
                    <p className='font-[600]'>Chukwuma Praise</p>
                    <p>Student @FUNAI</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>Excellent tutors, tranquil community and a well structured program. I just want to commend the CEO for establishing this project and having it shape lives for the long term in the Financial world.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className='divimg2 border-2 border-[#f08800] rounded-full w-[150px] h-[150px] '></div>
                    <p className='font-[600]'>Obasi Mmeso</p>
                    <p>Student @EBSU</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>You are all doing a great job and i commend your work Also. I was wondering if you can be doing like a little promo where you'll be giving members of the challenge a chance to be in your masterclass or be giving members account with little funds</p>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    </div>
  )
}
