import React from 'react'
import { useRef } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'
import { useRouter } from 'next/router'
import Form2 from '../../components/Form2'

export default function AccountManagement() {
    const router = useRouter();
    const formpopup = useRef();
    const show = ()=>{
        formpopup.current.style.display = "block";
    }
    const hide = ()=>{
        formpopup.current.style.display = "none";
    }
    const Formpopup = ()=>{
        return(
            <div ref={formpopup} className='w-[100%] hidden h-[100%] fixed top-[0] left-[0] z-[999] bg-[rgba(0,0,0,0.7)]'>
                <Form2 hide={hide} />
            </div>
        )
    }
    const Account = ()=>{
        return(
            <div className='p-[3px]'>
                <p className='font-[600]'>Are you so busy that you can't trade by yourself? </p>
                <p>You might not have the patience to trade. And that does not mean that you are lazy or greedy. But then, you need patience to be able to remain profitable in this space.</p>
                <p>Allow us to manage your account and in six weeks you will get three times the amount you invested.</p>
                <p className='font-[600]'>What about losses?</p>
                <p>If we incur losses, we will bear all the losses and still give you back your capital.</p>
                <p>However, for your account to qualify for us to manage it, you have to invest a minimum of $1000. Then you register your account to be managed by us with the sum of $100.</p>
                <p className='font-[600]'>NOTE: AT THE END OF SIX WEEKS YOU GET TO 60% AND WE GET 40% OF PROFIT MADE.</p>
                <p>Do not allow your busy schedules to keep you from becoming a successful crypto trader too.</p>
                <p>Start by signing this memorandum of agreement.</p>
                <button onClick={show} className='bg-[rgba(12,25,82,0.9)] m-[3px] flex items-center justify-center p-[5px] text-white rounded-lg'><span className='mr-[5px] font-[600]'>See How</span><FaArrowAltCircleRight style={{fill:'white'}} /></button>
                <Formpopup />
            </div>
        )
    }
  return (
    <div>
        <Header />
        <Navbar active="contact" />
        <Account />
        <Footer />
        <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
          <Bottomnav />
        </div>
    </div>
  )
}
