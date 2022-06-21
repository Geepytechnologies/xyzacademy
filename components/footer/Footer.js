import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'
import Image from 'next/image';
import logo6 from '../../images/logowhite.png';
import Link from 'next/link';


export default function Footer() {
  return (
    <div className='h-[auto] pb-[50px] sm:pb-[0px] flex flex-col items-center justify-center footer'>
        <div className='w-[60%] flex flex-col items-center justify-center'>
            <div className='flex w-[100%] items-center justify-center sm:justify-center'>
                <div onClick={()=> router.push('/')} className='h-[200px] w-[200px] relative cursor-pointer'>
                <Image src={logo6} alt='logo' layout='fill' objectFit='contain'/>
                </div>
            </div>
        </div>
        <div className='w-[100%] items-center justify-center flex'>
            <div className='w-[60%] p-[5px] flex items-center justify-around'>
                <ul className='flex justify-around w-[100%] text-white'>
                    <li className='inline border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://twitter.com/XYZ_ACADEMY1?t=OaOAvIp0KXYBDWpzldHIiA&s=09' target='_blank' rel='noreferrer'><FaTwitter /></Link>
                    </li>
                    
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><FaTelegramPlane /></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><FaFacebook /></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://instagram.com/officialxyzacademy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><FaInstagram /></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://www.linkedin.com/in/xyz-academy-894959242' target='_blank' rel='noreferrer'><FaLinkedin /></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='font-[roboto] text-[14px] pb-[20px] flex flex-col items-center justify-center mt-[10px] text-white'>
            <div className='flex flex-row items-center justify-center'><AiOutlineCopyright style={{paddingRight: '3px', fontSize: 20}}/>Copyright 2022  Xyzacademy</div>
            <p>All rights reserved</p>
        </div>
    </div>
  )
}
