import Image from 'next/image'
import React from 'react'
import { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { PaystackButton } from "react-paystack"
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/Sidebar'

export default function Signal() {
   const [forexprice, setForexprice] = useState(0);
   const [cryptoprice, setCryptoprice] = useState(0);
   const [synthprice, setSynthprice] = useState(0);
   const [error, setError] = useState(false);
   const forex = useRef();
   const crypto = useRef();
   const synth = useRef();
   const payment = useRef();
   const checkforex = ()=>{
    if(forex.current.checked == true){
      setForexprice(60000);
    }
   }
   const checkcrypto = ()=>{
    if(crypto.current.checked == true){
      setCryptoprice(60000);
    }
   }
   const checksynth = ()=>{
    if(synth.current.checked == true){
      setSynthprice(60000);
    }
   }
   const handledata = (e)=>{
     e.preventDefault();
     if(forexprice == 0 && cryptoprice == 0 && synthprice == 0){
         setError(true);
     }
     else{
      payment.current.style.display = 'block';
     }
    }
    const Signal = ()=>{
        return(
            <div>
                <div className=' p-[20px]'>
                    <div className='relative h-[400px] w-[400px] '>
                        <Image src='/tradingsignals.jpg' alt='' layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className='px-[10px] pb-[10px]'>
                <p className='font-[600] text-[20px]'>XYZ Trading Signals</p>
                <p>Allow us to do the analysis for you and give you trade calls that will keep you profitable in the market.</p>

                <p>You will be added to our premium WhatsApp group chat where you'd receive trade calls on weekly basis so that you know when to enter and exit the market.</p>

                <p>This will last throughout the quarter that is 3months.</p>

                <p>We'd also recommend daily profit limits for you so that you don't loose your money due to greed.</p>

                <p>We will be responsible for giving you trade calls but you'd be responsible for profit and your loss.</p>

                <p>When you listen to us, you'd surely have so many successful trades and few non successful trades.</p>

                <p>Choose one or all of the following:</p>

                <p>Forex.  Crypto.   Synthetic Indices.</p>

                <form onSubmit={handledata}>
                  <div className='flex flex-col'>
                    <div className='flex items-center'>
                      <label className='mr-[4px] font-[600] text-[20px]'>Forex</label>
                      <input type='checkbox' ref={forex} onClick={checkforex} value='forex' name='forex' />
                    </div>
                    <div className='flex items-center'>
                      <label className='mr-[4px] font-[600] text-[20px]'>Crypto</label>
                      <input type='checkbox' ref={crypto} onClick={checkcrypto} value='crypto' name='crypto'  />
                    </div>
                    <div className='flex items-center'>
                      <label className='mr-[4px] font-[600] text-[20px] '>Synthetic Indices</label>
                      <input type='checkbox' ref={synth} onClick={checksynth} value='synthetic' name='synthetic' className='' />
                    </div>
                  </div>
                  {error === true ? <p className='text-[red]'>Please select an Option</p> : null}
                  <button className='bg-[black] rounded-sm mt-[5px] p-[8px] text-white font-[600]' type='submit'>Checkout</button>
                </form>
                </div>
            </div>
        )
    }
    const Payment = ()=>{
        const price = forexprice + cryptoprice +  synthprice;
        const form = useRef();
        const paystack = useRef();
        const publicKey = "pk_live_e86d006caf0b6e1b565b6da482b995a15606a35e"
        const amount = Number(price) * 100;
        const challengePrice = price;
        const item = 'Trading Signals';
        const [email, setEmail] = useState('');
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [location, setLocation] = useState('');
        const formik = useFormik({
          initialValues: {
            email1: "",
            name1: "",
            phone1: "",
            location1:"",
          },
          validationSchema: yup.object({
            name1: yup.string().required("Required"),
            email1: yup.string().email("Invalid Email address").required("Required"),
            phone1: yup.string().required("Required").min(11, "Phone number must be up to eleven chatacters"),
          }),
          onSubmit: (values) =>{
            setEmail(values.email1);
            setName(values.name1);
            setPhone(values.phone1);
            setLocation(values.location1);
            form.current.style.display = 'none'
            paystack.current.style.display = 'block'
          },
        });
        const componentProps = {
          email,
          amount,
          metadata: {
            name,
            phone,
            location,
          },
          publicKey,
          text: "Proceed to payment",
          onSuccess: () =>
            alert("You've Successfully purchased the Course"),
          onClose: () => alert("Are you sure you want to cancel the Payment?"),
        }
      return(
        <div  className="container flex-col md:flex-row w-[90%] h-[auto] pb-[30px] mb-[100px] md:w-[70%]">
        <div className="bg-[#f8f8f8] w-[100%] md:w-[40%]">
          <div className="bg-[url('/logo1.png')] bg-cover h-[200px] w-[200px] "></div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[30px]">{item}</p>
            <p className="font-[600]">NGN {challengePrice.toLocaleString("en-us") }</p>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] bg-[#f6f6f6] flex items-center justify-center flex-col">
          <form ref={form} onSubmit={formik.handleSubmit} className="w-[90%]">
            <div className="">
            <label>Name</label>
            <input
              className="w-[100%] border border-[black] p-[5px] rounded-lg"
              type="text"
              id="name1"
              value={formik.values.name1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name1 && formik.errors.name1 ? <p className='text-[red]'>{formik.errors.name1}</p> : null}
            </div>
            <div>
            <label>Email</label>
            <input
              className="w-[100%] border border-[black] p-[5px] rounded-lg"
              type="email"
              id="email1"
              value={formik.values.email1}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}       
            />
            {formik.touched.email1 && formik.errors.email1 ? <p className='text-[red]'>{formik.errors.email1}</p> : null}
            </div>
            <div>
            <label>Location</label>
            <input
              className="w-[100%] border border-[black] p-[5px] rounded-lg"
              type="text"
              id="location1"
              value={formik.values.location1}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}       
            />
            {formik.touched.location1 && formik.errors.location1 ? <p className='text-[red]'>{formik.errors.location1}</p> : null}
            </div>
            <div>
            <label>Whatsapp Phone</label>
            <input
              className="w-[100%] border border-[black] p-[5px] rounded-lg"
              type="text"
              id="phone1"
              value={formik.values.phone1}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}       
            />
            {formik.touched.phone1 && formik.errors.phone1 ? <p className='text-[red]'>{formik.errors.phone1}</p> : null}
            </div>
          <button type='submit' className="bg-[black] text-white p-[10px] mt-[20px] rounded-lg">Submit</button>
          </form>
          <div ref={paystack} className=" hidden mt-[30px]">
            <p className='font-[600]'>{name.toUpperCase()}</p>
            <p className='font-[600]'>{email.toUpperCase()}</p>
            <p className='font-[600]'>{phone}</p>
            <div className='bg-[green] text-center text-white p-[10px] mt-[30px] rounded-lg'>
              <PaystackButton {...componentProps} />
            </div>
          </div>
        </div>
      </div>
      )
    }
  return (
    <div>
        <Header />
        <Navbar active='courses' />
        <div className="flex flex-col lg:flex-row bg-[#f8f8f8] w-[100%]">
        <div className="md:w-[100%] lg:w-[70%] w-[100%]">
          <Signal />
          <div ref={payment} className='hidden'>
            <Payment />
          </div>
        </div>
        {/* sidebar */}
        <div className="w-[100%] flex items-center justify-start lg:w-[30%] md:w-[100%]">
          <Sidebar />
        </div>
      </div>
        <Footer />
        <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
         <Bottomnav />
        </div>
    </div>
  )
}
