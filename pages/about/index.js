import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/About.module.css'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Video from '../../components/aboutus/Video'
import Header from '../../components/Header'
import FAQ from '../../components/FAQ'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { useRouter } from 'next/router'


export default function index() {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    // autoplaySpeed: 7000,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const Vision =()=>{
    return(
      <div className='p-[5px] mt-[10px]'>
        <p className='font-[600] text-[25px] text-[#f08800] '>Our Vision</p>
        <div className='w-[100%]'>
          <div className="h-[300px] w-[100%] border-[3px] rounded-xl border-[white]  relative">
            <Image src='/vision.jpg' layout='fill' objectFit='cover' className='rounded-xl' />
          <div className="bg-[url('/logowhite.png')] bg-cover bg-center w-[150px] h-[150px] absolute top-0 left-0 "></div>
          </div>
        </div>
        <p>To raise thousands of youths to be financially free and stable by exposing them to the  "financial market and tech-world" by giving them the intensive knowledge needed in order to be profitable consistently.</p>
      </div>
    )
  }
  const Mission = ()=>{
    return(
      <div className='p-[5px]'>
        <p className='font-[600]'>Mission statement</p>
        <p className=''>To raise thousands of youths to be financially free and stable by exposing them to the financial market and the tech-world. This can be achieved by:</p>
        <ul className='list-disc pl-[20px]'>
          <li>Creating standard and professional courses in these spaces and offering it to them at affordable rates.</li>
          <li>Hosting challenges that are geared towards improving the lives of members of the community.</li>
          <li>conducting conferences both physical and virtual to enlighten the community on better ways to make it big in the tech world and in the crypto space.</li>
          <li>Unveiling the blockchain world to the community. Not just focusing on the trading sector but on the creative sector too.</li>
        </ul>
      </div>
    )
  }
  const Aboutxyz = ()=>{
    return(
      <div className='p-[5px]'>
        <p><span className='italic mr-[5px] text-[25px] font-[600] text-[#f08800]'>XYZ ACADEMY</span> is a brand that gives you the opportunity to master, Practice and earn from the Financial market. We also teach tech skills that will help you to make more money by solving problems in business and society at large.</p>
        <div className='pl-[20px]'>
          <p className='font-[600] '><span onClick={()=>{router.push('/courses')}} className='cursor-pointer hover:text-[blue]'>Courses:</span></p>
          <ul className='list-disc'>
            <li>Crypto trading</li>
            <li>Forex</li>
            <li>synthetic Indices</li>
            <li>stocks and</li>
            <li>Commodities</li>
          </ul>
          <p className='font-[600]'>NB: Give us 90 days of your time and the world will see a better you</p>
        </div>
      </div>
    )
  }
  const Slide = ()=>{
    return(
      <div className='items-center justify-center flex  w-[100%]'>
        <Slider {...settings} className="w-[70%] p-[10px]" >
          <div>
           <div className="bg-[url('/cryptoglobe.jpg')] bg-cover w-[100%] h-[200px] ">
            
           </div>
          </div>
          <div>
           <div className='relative w-[100%] h-[400px]'>
            <Image src={'/IMG1.jpg'} layout='fill' objectFit='contain' />
           </div>
          </div>
          <div>
            <div className='relative w-[100%] h-[400px]'>
              <Image src={'/IMG3.jpg'} layout='fill' objectFit='contain' />
            </div>
          </div>
        </Slider>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Header />
      <Navbar active="about" />
      <Video />
      <Aboutxyz />
      <Vision />
      <Mission />
      <FAQ />
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
