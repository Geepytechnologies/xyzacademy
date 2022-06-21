import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {VscBook } from "react-icons/vsc";
import {FaAward} from "react-icons/fa";
import Link from 'next/link'
import Card from '../Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Courses() {
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
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center'>
                <VscBook style={{fill: 'hsl(34,100%,47%)',marginRight:10, fontSize: 20 }} />
                <h3 className='font-[600]'>Courses</h3>
            </div>
            <h3 className='font-[500]'>Crypto | Forex | Tech</h3>
        </div> 
        {/* card */}
        <div className='w-[95%]'>
            <Slider {...settings} className='mb-[40px]'>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Spot trading</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Become a profitable spot trader in 90 days even if you don't know anything in crypto trading now!</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Crypto Arbitration</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Learn how to profitably buy and sell coins and become your own boss</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Defi</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Make more money and more of it as a defi analyst</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Futures</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Become a better risk manager and make more money on future trades even if you have burnt your portfolio by trying</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg'>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg'></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg'></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px]'>Forex trading</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Learn from the best forex traders across the globe and become one of the best forex trader in three months</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow'>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg'></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg'></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Synthetic indices</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Learn the proven ways to become very rich through synthetic indices</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Technical analysis</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Learn the most effective way of risk management and stay profitable in the market</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Graphics Design</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Learn the secret of graphical representation of your brand that will make you go global in your first 3 months</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative h-[400px] m-[20px] cardshadow border-2 border-white rounded-lg '>
                        <div className='absolute top-0 w-[100%] h-[100%] rounded-lg cardspace'>
                        </div>
                        <div className='cardimg absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='cardimg2 absolute top-0 w-[100%] h-[100%] rounded-lg '></div>
                        <div className='absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center'>
                            <FaAward style={{fill:'#f08800', fontSize: 40}} />
                            <p className='text-white font-[700] text-[25px] '>Web development</p>
                            <p className='text-white font-[600] text-[20px]'>$100</p>
                            <p className='text-white text-center'>Learn the easiest way of front end and back end coding</p>
                            <Link href="/services" ><div className='bg-[#f08800] text-center text-white p-[10px] w-[50%] rounded-xl cursor-pointer border border-white mt-[3px] cardshadow '>Get Started</div></Link>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
    </div>
    </>
  )
}
