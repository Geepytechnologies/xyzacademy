import React from 'react'
import { useRouter } from 'next/router'

export default function FAQ() {
    const router = useRouter();
  return (
    <div className='mt-[40px] pl-[5px]'>
        <h1 className='font-[700] text-[25px] text-[#f08800]'>FAQs</h1>
        <div className='mb-[10px]'>
            <p className='font-[700]'>What is XYZ academy?</p>
            <p className=''>XYZ academy is a brand that focuses on equipping people in crypto, forex and tech by teaching them how to master, practice and earn without limits.</p>
        </div>
        <div className='mb-[10px]'>
            <p className='font-[700]'>What tech skills are currently in demand? </p>
            <p className=''>Digital marketing, web development, graphics design, blockchain development, UIUX design, photography, programming, etc</p>
        </div>
        <div className='mb-[10px]'>
            <p className='font-[700]'>What courses are offered in XYZ academy? </p>
            <p className=''>Spot trading, forex, synthetic indices, defi, technical analysis, Digital marketing, web development, graphics design.</p>
        </div>
        <div className='mb-[10px]'>
            <p className='font-[700]'>How do I join the academy?</p>
            <p className=''>To join the academy, choose a course to study <span onClick={()=>{router.push('/courses')}} className='text-[blue] underline cursor-pointer'>here</span></p>
        </div>
        <div className='mb-[10px]'>
            <p className='font-[700]'>How much profit will I make with the academy? </p>
            <p className=''>You can make as much as you want as long as you master our proven steps. There is no limit to what you can earn</p>
        </div>
        <div className='mb-[10px]'>
            <p className='font-[700]'>How does XYZ account management work?</p>
            <p className=''>It is simple and it is for those who are so busy that they can't trade by themselves. Click <span onClick={()=>{router.push('/contact/account-management.js')}} className='text-[blue] underline cursor-pointer'>here</span> to learn more</p>
        </div>
        <div className='mb-[10px]'>
            <p className='font-[700]'>How can I join the one month $10-$100 challenge?</p>
            <p className=''>Join the one month challenge <span onClick={()=>{router.push('/challenge')}} className='text-[blue] underline cursor-pointer'>here</span>.</p>
        </div>
    </div>
  )
}
