import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div>
        <p className="font-[600]">Other Courses</p>
        <div className='flex flex-row' >
           <div className='h-[auto] relative rounded-lg mr-[3px] w-[30%] bg-[#0c195280]  '>
              <div className="h-[100%] absolute top-0 rounded-lg mr-[3px] w-[100%] bg-cover bg-[url('/logo1.png')] "></div>
           </div>
           <div className="w-[70%]">
                <p className="font-[600] text-[20px]">Spot trading</p>
                <div className="flex flex-row">
                    <BsStarFill  />
                    <BsStarFill  />
                    <BsStarFill  />
                    <BsStarFill  />
                    <BsStarHalf  />
                </div>          
                <p>Become a profitable spot trader in 90 days even if you don't know anything in crypto trading now!</p>
           </div>
        </div>
    </div>
  )
}
