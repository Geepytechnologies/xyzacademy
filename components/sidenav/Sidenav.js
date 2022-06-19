import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaDiscord, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright, AiFillContacts} from 'react-icons/ai'
import {FaHome,FaBloggerB } from 'react-icons/fa'
import {MdMiscellaneousServices } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import Link from 'next/link';

export default function Sidenav() {
  return (
    <div className=''>
        <div className='text-white flex flex-col justify-around w-[100vw]'>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><FaHome style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/'><a>Home</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><MdMiscellaneousServices style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div className=''><Link href='/services'><a>Services</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02] py-[5px] rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><AiFillContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/contact'><a>Contact us</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02] py-[5px] rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><IoIosContacts style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div className=''><Link href='/about'><a>About us</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer w-[70%] hover:scale-[1.02]  py-[5px] rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><FaBloggerB style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/blog'><a>Blog</a></Link></div>
        </div>
    </div>
        <div>
            <div className='w-[100%] p-[5px] flex items-center justify-center'>
                <ul className='flex justify-around pr-[20px] w-[80%]'>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <a href='https://twitter.com/infomatics' target='_blank' rel='noreferrer'><FaTwitter /></a>
                    </li>
                    
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <a href='https://telegram.com/infomatics' target='_blank' rel='noreferrer'><FaTelegramPlane /></a>
                    </li>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <a href='https://facebook.com/infomatics' target='_blank' rel='noreferrer'><FaFacebook /></a>
                    </li>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <a href='https://instagram.com/infomatics ' target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </li>
                    <li className='inline hover:text-[hsl(34,100%,47%)]'>
                        <a href='https://instagram.com/infomatics' target='_blank' rel='noreferrer'><FaDiscord /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-center mt-[10px]'><AiOutlineCopyright style={{paddingRight: '3px'}}/>Copyright 2022</div>
    </div>
  )
}
