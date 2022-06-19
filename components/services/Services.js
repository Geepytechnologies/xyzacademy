import React from 'react'
import {MdMiscellaneousServices } from "react-icons/md";
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
        autoplay: true,
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
      <>
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-row items-center justify-center'>
            <MdMiscellaneousServices style={{fill: 'hsl(34,100%,47%)',marginRight:10, fontSize: 20 }} />
            <h3 className='font-[600]'>Services</h3>
        </div>
        <h3 className='font-[500]'>Crypto | Forex | Tech</h3>
        {/* card */}
    </div>
        <Slider {...settings} className='mb-[40px]'>
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
        <div>
            <div className='h-[400px] m-[20px] cardspace rounded-lg'>
            Card
            </div>
        </div>
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
       
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
       
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
       
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
       
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
       
        <div>
            <div className='h-[400px] m-[20px]  cardspace rounded-lg'>
            Card
            </div>
        </div>
       
        

        </Slider>
    </>
  )
}
