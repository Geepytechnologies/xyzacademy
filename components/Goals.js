import React from 'react'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Goals() {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
    <div className='w-[100%] flex items-center justify-center mt-[30px] mb-[40px]'>
        <div className='flex flex-col sm:flex-row items-center justify-around p-[10px] w-[90%] sm:w-[100%]'>
            <div data-aos="zoom-in" data-aos-duration="1000" className='relative sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] w-[250px] h-[150px]  my-[5px] rounded-lg'>
                <div className='mastery absolute top-0 w-[100%] h-[100%] rounded-lg'>
                </div>
                <div className='mas-over bg-[#0c195280] w-[100%] h-[100%] rounded-lg '>
                </div>
                <div className='flex flex-col items-center justify-center absolute top-0 w-[100%] h-[100%]'>
                    <p className='text-[#f08800] font-[700] text-[30px]'>Master</p>
                    <p className='text-center text-white'>Mastery starts when you learn and comprehend</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className='relative sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] w-[250px] h-[150px]  my-[5px] rounded-lg'>
                <div className='practice absolute top-0 w-[100%] h-[100%] rounded-lg'>
                </div>
                <div className='prac-over bg-[#0c195280] w-[100%] h-[100%] rounded-lg '>
                </div>
                <div className='flex flex-col items-center justify-center absolute top-0 w-[100%] h-[100%]'>
                    <p className='text-[#f08800] font-[700] text-[30px]'>Practice</p>
                    <p className='text-center text-white'>Practice is not complete until a habit is formed</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className='relative sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] w-[250px] h-[150px]  my-[5px] rounded-lg'>
                <div className='earn absolute top-0 w-[100%] h-[100%] rounded-lg'>
                </div>
                <div className='earn-over bg-[#0c195280] w-[100%] h-[100%] rounded-lg '>
                </div>
                <div className='flex flex-col items-center justify-center absolute top-0 w-[100%] h-[100%]'>
                    <p className='text-[#f08800] font-[700] text-[30px]'>Earn</p>
                    <p className='text-center text-white'>If you want to earn more, Practice Financial mastery</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}
