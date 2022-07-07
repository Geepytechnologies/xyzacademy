import React,{useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/Services.module.css'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import Image from 'next/image'
import { BsTelephoneFill } from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  })
  const Intro =()=>{
    return(
      <div>
        <div className='w-[100%] h-[300px] md:h-[400px] relative '>
          <Image src='/contact.jpg' alt='' layout='fill' objectFit='cover' />
          <div data-aos="zoom-in" data-aos-duration="1000" className='absolute top-0 left-0 '>
            <div className="bg-[url('/logowhite.png')] bg-cover w-[150px] h-[150px] "></div>
            <div className='ml-[5px]' >
              <p className='text-white font-[600] text-[30px]'>Contact Us</p>
              <div className='bg-[white] h-[2px] w-[80%] '></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const Info = ()=>{
    return(
      <div data-aos="zoom-in-right" data-aos-duration="1000" className='my-[50px]'>
        <div className='flex flex-row p-[5px]'>
          <BsTelephoneFill style={{fill:'#f08800'}} className='mr-[5px] text-[30px]' />
          <p>+2347039134538</p>
        </div>
        <div className='flex flex-row p-[5px] '>
          <GrMail style={{fill:'#f08800'}} className='mr-[5px] text-[30px]' />
          <p>Xyzacademy@gmail.com</p>
        </div>
      </div>
    )
  }
 const Follow = ()=>{
  return(
    <div className='flex items-center justify-center mb-[60px]'>
      <div data-aos="zoom-in" data-aos-duration="1000" className="bg-[#0c195299] w-[60%] p-[10px] ">
        <p className='text-white text-center text-[25px]'>Follow us on Social Media</p>
        <div className='w-[100%] items-center justify-center flex'>
            <div className='w-[60%] p-[5px] flex items-center justify-around'>
                <ul className='flex justify-around w-[100%] text-white'>
                    <li className='inline border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://twitter.com/XYZ_ACADEMY1?t=Ag7TKGl4s1wzijAQhPtYoA&s=09' target='_blank' rel='noreferrer'><a><FaTwitter /></a></Link>
                    </li>
                    
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaTelegramPlane /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='/' target='_self' rel='noreferrer'><a><FaFacebook /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://instagram.com/officialxyzacademy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><a><FaInstagram /></a></Link>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <Link href='https://www.linkedin.com/in/xyz-academy-894959242' target='_blank' rel='noreferrer'><a><FaLinkedin /></a></Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
 }
  return (
    <div className={styles.container}>
      <Header />
      <Navbar active='contact' />
      <Intro />
      <Info />
      <Follow />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
