import React,{useEffect} from 'react'
import {useRouter} from 'next/router'
import { RiCloseCircleLine } from 'react-icons/ri'
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Popup(props) {
  const router = useRouter();
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center fixed top-[0] left-[0] z-[999] bg-[rgba(0,0,0,0.4)]'>
        <div data-aos='zoom-in' className="w-[80%] md:w-[50%] h-[400px] m-auto ">
          <div onClick={props.hide} className='cursor-pointer p-[3px] w-[100%] flex justify-end bg-[#0c1952]'>
              <RiCloseCircleLine className='text-[30px] font-[600]' style={{fill: 'white'}} />
          </div>
          <div className="w-[100%] h-[300px] relative ">
            <Image src={'/dollarchallenge.jpg'}  layout='fill' objectFit='cover' />
          </div>
          <div className='bg-[#0c1952]'>
            <p className='text-white p-[3px]'>Join others as we move our portfolios from $10 to $100 in the month of July, 2022.</p> 
            <button onClick={()=>{router.push('/challenge')}} className='bg-[hsl(34,100%,47%)] text-white p-[10px] rounded-lg m-[3px] font-danc'>See how</button>
          </div>
        </div>
    </div>
  )
}
