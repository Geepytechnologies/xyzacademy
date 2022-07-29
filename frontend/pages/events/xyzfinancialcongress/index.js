import Image from 'next/image'
import React, { useRef, useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import { PaystackButton } from "react-paystack"
import { useFormik } from 'formik'
import * as yup from 'yup'
import Bottomnav from '../../../components/bottomnav/Bottomnav'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/navbar/Navbar'
import axios from 'axios';
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function Index() {
  const [price, setPrice] = useState(2000);
  const router = useRouter();
  const { course } = router.query;
  const form = useRef();
  const formdiv = useRef();
  const paystack = useRef();
  const publicKey = "pk_test_9f80648df27aa9d39816dc02d0bb64f83ace3241"
  // const publicKey = "pk_live_e86d006caf0b6e1b565b6da482b995a15606a35e"
  const amount = Number(price) * 100;
  const coursePrice = price;
  const item = course;
  const [registerForm, setRegisterForm] = useState('none');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const formik = useFormik({
    initialValues: {
      email1: "",
      name1: "",
      phone1: "",
      location1: ""
    },
     validationSchema: yup.object({
       name1: yup.string().required("Required"),
       email1: yup.string().email("Invalid Email address").required("Required"),
       phone1: yup.string().required("Required").min(11, "Phone number must be up to eleven chatacters"),
       location1: yup.string().required("Required")
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
    },
    publicKey,
    text: "Proceed to payment",
    onSuccess: async() =>{
      alert("You've booked a spot for the XYZ Financial Congress!!!")
      try {
        await axios.post('http://localhost:5000/api/registercongress',{name,email,phone,location})
      } catch (error) {
        console.log(error)
      }
    },
    onClose: () => alert("Are you sure you want to cancel the Payment for your registration?"),
  }
  const showform = () => {
    setRegisterForm(()=>{'block'});
  }
    const Outfit = () => {
      return(
        <div className='w-[100%] flex items-center justify-center flex-col'>
          <div><p>Purchase Your Outfits For the Conference</p></div>
          <div className="w-[90%]">
            <div className="bg-[url('/hoodie.jpg')] h-[400px] bg-cover ">
              
            </div>
            <div className="bg-[url('/XFCTee.jpg')] h-[400px] bg-cover ">polo</div>
          </div>
        </div>
      )
    }
    const Content = () => {
        return(
            <div>
                <div className='flex items-center justify-center my-[10px]'>
                    <div className="w-[500px] h-[500px] bg-[url('/flyer-01.jpg')] bg-cover bg-center ">
                    </div>
                </div>
                <div className='p-[8px]'>
                <p className='leading-7'>Why is it that we have so many people who are informed about the processes of acquiring and sustaining wealth BUT only 20% of us are genuinely wealthy?</p>
                <p className='leading-7'>There is an irrational proportion of Financial parrots in our society! Wealth can be gotten genuinely. Yes you can become wealthy without duping people or killing the people you love just to sustain it.</p>
                <p className='leading-7'>This is why this financial Congress is called <span className='font-[600]'>THE REAL DEAL!</span> .This Congress is bent on recruiting men who are Financial parrots and making them <span className='font-[600]'>FINANCIAL LIONS!</span> Where you talk less and do more!</p>
                <p className='leading-7'>If you are among the set of people that have been desperately praying to genuinely increase your Financial capacity, you must attend this Congress! And if you are among those people that think they can't make it to the top celebrated 20%, attend this Congress and see how bright your future can be!</p>
                <p className='font-[600]'>Register with just $4 (2k).</p>
                <p>Check out our speakers here.</p>
                <p>Meet our tutors here.</p>
                </div>
                {/* Buy Hoodie */}
                <Outfit />
                {/* FAQS */}
                <div className='p-[8px]'>
                  <p className='text-[20px] font-[700]'>FAQs:</p>
                  <p className='text-[16px] font-[600]'>Where will the Real deal hold?</p>
                  <p>- Golden Tulip Hotels Owerri, Imo State</p>
                  <p className='text-[16px] font-[600]'>How much is the registration fee?</p>
                  <p>- #2,000 only. For every non-student of the academy.</p>
                  <p className='text-[16px] font-[600]'>When is the date for the financial Congress?</p>
                  <p>- 3rd September, 2022.</p>
                  <p className='text-[16px] font-[600]'>What is the aim of the financial congress?</p>
                  <p>- We want to raise men who will have genuinely uncommon results in finances.</p>
                </div>
                <div onClick={showform} className='w-[30%] m-[8px] md:w-[30%] border-2 border-[hsl(34,100%,47%)]'>
                  <p className='text-[hsl(34,100%,47%)] text-center p-[5px] text-[20px] font-[600]'>Register Here</p>
                </div>
                {/* my form */}
                <div ref={formdiv} className="w-[100%] md:w-[60%] my-[10px] flex items-center justify-center flex-col" style={{display: registerForm}}>
                  <div className="bg-[url('/register.jpg')] bg-cover relative  w-[90%] h-[250px]"><div className="bg-[url('/XFCLogo-04.jpg')] bg-cover bg-center opacity-[30%] top-0 absolute w-[100%] h-[250px] "></div></div>
                  <div ref={form} className="w-[90%] h-[400px] py-[10px] bg-[#f8f8f8] flex items-center justify-center">
                  <form  onSubmit={formik.handleSubmit} className="w-[90%]">
                    <div className="">
                    <label>Full Name</label>
                    <input
                      className="w-[100%] border border-[black] p-[5px] rounded-lg"
                      type="text"
                      id="name1"
                      placeholder='John Smith'
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
                      placeholder="johnsmith@gmail.com"
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
                      placeholder="e.g. Owerri, Imo State"
                      value={formik.values.location1}
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur}       
                    />
                    {formik.touched.location1 && formik.errors.location1 ? <p className='text-[red]'>{formik.errors.location1}</p> : null}
                    </div>
                    <div>
                    <label>Phone</label>
                    <input
                      className="w-[100%] border border-[black] p-[5px] rounded-lg"
                      type="text"
                      id="phone1"
                      placeholder='e.g. 08020001122'
                      value={formik.values.phone1}
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur}       
                    />
                    {formik.touched.phone1 && formik.errors.phone1 ? <p className='text-[red]'>{formik.errors.phone1}</p> : null}
                    </div>
                  <button type='submit' className="bg-[black] text-white p-[10px] mt-[20px] rounded-lg">Submit</button>
                  </form>
                  </div>
                  <div ref={paystack} className=" hidden bg-[#f8f8f8] w-[90%] p-[5px] ">
                    <div><MdDriveFileRenameOutline style={{fill:'hsl(34,100%,47%)'}} /><p>{name}</p></div>
                    <div><HiMail style={{fill:'hsl(34,100%,47%)'}} /><p>{email}</p></div>
                    <div><BsFillTelephoneFill style={{fill:'hsl(34,100%,47%)'}} /><p>{phone}</p></div>
                    <div className='bg-[green] font-[600] text-center text-white p-[10px] mt-[20px] rounded-lg'>
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
        <Navbar active="about" />
        <Content />
        <Footer />
        <div className='fixed h-[70px] bottom-[0px] sm:hidden w-[100%]'>
          <Bottomnav />
        </div>
    </div>
  )
}
