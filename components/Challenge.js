import React from 'react'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {FaHandPointer} from 'react-icons/fa'

export default function Challenge() {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
    <div data-aos='zoom-in-right' className='mb-[40px] pl-[30px] flex flex-col sm:flex-row'>
        <div className='sm:w-[70%] w-[100%]'>
            <div className="flex flex-row items-center justify-center sm:justify-start">
            <FaHandPointer className='sm:rotate-[90deg] rotate-[180deg] mr-[5px]' style={{fill:'rgba(12,25,82,1)',fontSize: 35}} />
            <p className='font-[700] text-[#f08800] text-[35px]'>Challenge Yourself</p>
            </div> 
            <div className='flex items-center justify-center sm:justify-start flex-row w-[100%] h-[auto]'>
                <div className='w-[80%] sm:w-[70%]'>     
                    <p className='text-[20px] text-center sm:text-left'>Join so many others as we move from $10 to $100 in the month of july, 2022!</p>
                    <p className='text-[20px] text-center sm:text-left'>Register now with $64</p>
                </div>
            </div>
        </div>
        <div className='sm:w-[30%] flex justify-center sm:justify-start'>
            <div className="challimg h-[150px] w-[150px]"></div>
        </div>
    </div>
  )
}
