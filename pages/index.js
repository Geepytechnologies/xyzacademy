import React,{useRef,useEffect} from 'react'
import Image from 'next/image'
import About from '../components/about/About'
import Bottomnav from '../components/bottomnav/Bottomnav'
import Footer from '../components/footer/Footer'
import Goals from '../components/Goals'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Courses from '../components/courses/Courses'
import Services from '../components/services/Services'
import Comments from '../components/Comments'
import Payment from '../components/Payment'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Events from '../components/Events'


export default function Home() {
  const popup = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      popup.current.style.display = 'block'
    },10000)
  },[])
  const hide = () =>{
    popup.current.style.display = 'none'
  }
  return (
    <div className={styles.container}>
      <Header />
      <Navbar active='home' />  
      <About />
      <div ref={popup} className='hidden' >
        <Popup hide={hide} />
      </div>
      <Goals />
      <Events />
      <Services />
      <Courses />
      <Comments />
      <Payment />
      <Footer />
      <div className='fixed h-[70px] bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
