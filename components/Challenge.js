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
    <div data-aos='zoom-in-right' className='mb-[40px] items-center justify-center flex flex-col'>
        <div className='w-[90%] pl-[5px] mb-[10px]'>
            <div className="flex flex-row items-center justify-center">
                <FaHandPointer className='rotate-[180deg] mr-[5px]' style={{fill:'rgba(12,25,82,1)',fontSize: 35}} />
                <p className='font-[700] text-[#f08800] text-[35px]'>Challenge Yourself</p>
            </div> 
            <div className='flex items-center justify-center flex-row w-[100%] h-[auto]'>
                <div className='w-[100%]'>     
                    <p className='text-[20px] text-center'>Join so many others as we move from $10 to $100 in the month of july, 2022!</p>
                    <p className='text-[20px] text-center'>Register now with $5</p>
                </div>
            </div>
        </div>
        <div className='w-[90%] flex justify-center items-center'>
            <div className="challimg w-[400px] h-[400px] md:h-[700px] bg-cover bg-center md:w-[700px]"></div>
        </div>
    </div>
  )
}
