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
        <div data-aos='zoom-in' className="w-[80%] md:w-[400px] h-[400px] m-auto ">
          <div onClick={props.hide} className='cursor-pointer rounded-t-xl p-[3px] w-[100%] flex justify-end bg-[#0c1952]'>
              <RiCloseCircleLine className='text-[30px] font-[600]' style={{fill: 'white'}} />
          </div>
          <div className="w-[100%] h-[300px] sm:h-[380px] relative">
            <Image src={'/flyer-01.jpg'} alt=''  layout='fill' objectFit='cover' style={{objectPosition:"center"}} />
          </div>
          <div className='bg-[#0c1952] rounded-b-xl'>
            <button onClick={()=>{router.push('/events/xyzfinancialcongress')}} className='bg-[hsl(34,100%,47%)] text-white p-[10px] rounded-lg m-[3px] font-danc'>Register Now</button>
          </div>
        </div>
    </div>
  )
}
