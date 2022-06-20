import React from 'react'
import {MdMiscellaneousServices } from "react-icons/md";
import {FaAward} from "react-icons/fa";
import Card from '../Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
      };
  return (
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center'>
                <MdMiscellaneousServices style={{fill: 'hsl(34,100%,47%)',marginRight:10, fontSize: 20 }} />
                <h3 className='font-[600]'>Services</h3>
            </div>
            <h3 className='font-[500]'>Crypto | Forex | Tech</h3>
        </div> 
        {/* card */}
        <div className='w-[95%]'>
            <Slider {...settings} className='mb-[40px]'>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white   rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Crypto trading</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl border border-white cardshadow '>Get Started</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='cardshadow border-2 border-white h-[400px] m-[20px] cardspace rounded-lg flex flex-col items-center justify-center'>
                    <p className='text-white font-[700] text-[25px] '>Forex</p>
                    <p className='text-white font-[600] text-[20px]'>$100</p>
                    <div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl border border-white '>Get Started</div>
                    </div>
                </div>
                <div>
                    <div className='cardshadow border-2 border-white h-[400px] m-[20px] cardspace rounded-lg flex flex-col items-center justify-center'>
                    <p className='text-white font-[700] text-[25px] '>Synthetic Indices</p>
                    <p className='text-white font-[600] text-[20px]'>$100</p>
                    <div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl border border-white '>Get Started</div>
                    </div>
                </div>
                <div>
                    <div className='cardshadow border-2 border-white h-[400px] m-[20px] cardspace rounded-lg flex flex-col items-center justify-center'>
                    <p className='text-white font-[700] text-[25px] '>Stocks and Commodities</p>
                    <p className='text-white font-[600] text-[20px]'>$100</p>
                    <div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl border border-white '>Get Started</div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}
