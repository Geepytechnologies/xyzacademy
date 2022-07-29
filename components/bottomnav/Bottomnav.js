import React from 'react'
import {AiFillContacts} from 'react-icons/ai'
import {FaHome,FaBloggerB } from 'react-icons/fa'
import {MdMiscellaneousServices } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { useRouter } from 'next/router';

export default function Bottomnav() {
    const router = useRouter();
  return (
    <div className='text-white p-[5px] flex items-center justify-around h-[70px] w-[100%] navbtm rounded-t-lg z-[999] border-[white] border-t'>
        <div onClick={()=>{router.push('/')}} className='flex flex-col items-center p-[3px]'>
            <div><FaHome style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <p className='text-center'>Home</p>
        </div>
        <div onClick={()=>{router.push('/courses')}} className='flex flex-col items-center p-[3px]'>
            <div><MdMiscellaneousServices style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <p className='text-center'>Courses</p>
        </div>
        <div onClick={()=>{router.push('/contact')}} className='flex flex-col items-center p-[3px]'>
            <div><AiFillContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <p className='text-center'>Contact Us</p>
        </div>
        <div onClick={()=>{router.push('/about')}} className='flex flex-col items-center p-[3px]'>
            <div><IoIosContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <p className='text-center'>About Us</p>
        </div>
        <div onClick={()=>{router.push('/blog')}} className='flex flex-col items-center p-[3px]'>
            <div className=''><FaBloggerB style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <p className='text-center'>Blog</p>
        </div>
    </div>
  )
}
