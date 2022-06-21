import React from 'react'
import {AiFillContacts} from 'react-icons/ai'
import {FaHome,FaBloggerB } from 'react-icons/fa'
import {MdMiscellaneousServices } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

export default function Bottomnav() {
  return (
    <div className='text-white p-[5px] flex justify-around h-[70px] w-[100vw] navbtm rounded-t-lg z-[999] border-[white] border-t'>
        <div className='flex flex-col items-center p-[3px]'>
            <div><FaHome style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div>Home</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><MdMiscellaneousServices style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div className=''>Services</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><AiFillContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div>Contact Us</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><IoIosContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div>About Us</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div className=''><FaBloggerB style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div>Blog</div>
        </div>
    </div>
  )
}
