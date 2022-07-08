import React from 'react'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'
import {useRouter} from 'next/router';
import Image from 'next/image'

export default function Index() {
    const router = useRouter();
    const Content = ()=>{
        return(
            <div>
                <div className="w-[100%] h-[250px] md:h-[400px] mb-[25px] relative">
                    <Image alt='' src={'/bg1.jpg'} width='100%' layout='fill' objectFit='cover' />
                    <div className="bg-[url('/logowhite.png')] bg-cover w-[150px] h-[150px] absolute top-0 right-0 "></div>
                </div>
                <p className='text-center font-mont font-[700] my-[10px] text-[20px]'>$10 to $100 one month challenge</p>
                <p className='px-[5px]'>We are organizing a one month challenge that is aimed at moving every participant from $10 to $100.</p>
                <p className='px-[5px]'>All you need to join this challenge is a participation fee of $4 only and you will have at least $10 worth of USDT to trade. In this one month, we would be responsible for providing signals and every other information to make sure that you incur minimal risk and more profits</p>
                <p className='px-[5px]'>We have daily profit limits. This is to eradicate the loss caused due to greed. In this one month you will move so much financially. Take this opportunity now and do something productive about your financial status.</p>
                <p className='px-[5px]'>You can participate in this challenge according to your scale. But your scale must be greater than or equal to $10 or less than or equal to $100.</p>
                <p className='px-[5px]'>Look at what you would make daily if you joined this challenge.</p>
                <div className='flex items-center justify-center mt-[20px]'>
                <table className=''>
                    <tr>
                        <th>Capital ($)</th>
                        <th>Expected Daily profit ($)</th>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>3</td>
                    </tr>
                    <tr className=''>
                        <td>20</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>40</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>50</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>70</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>90</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>30</td>
                    </tr>
                </table>
                </div>
                <p className='text-center'>Participate in this challenge! (Terms and conditions applied).</p>
                <div className='flex items-center justify-center'>
                <button onClick={()=>{router.push('/paychallenge')}} className='bg-black text-white m-[7px] p-[10px] font-[600]'>Enroll Now</button></div>
            </div>
        )
    }
  return (
    <div>
      <Header />
      <Navbar active="about" />
      <Content />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav /> 
      </div>
    </div>
  )
}
