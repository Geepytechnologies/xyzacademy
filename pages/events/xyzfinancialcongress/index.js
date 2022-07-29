import Image from 'next/image'
import React, { useRef, useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import { PaystackButton } from "react-paystack"
import { useFormik } from 'formik'
import * as yup from 'yup'
import AOS from "aos";
import "aos/dist/aos.css";
import Bottomnav from '../../../components/bottomnav/Bottomnav'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/navbar/Navbar'
import axios from 'axios';
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function Index() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
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
       phone1: yup.string().required("Required").min(11, "Phone number must be up to eleven characters"),
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
      try {
        await axios.post('http://localhost:5000/api/registercongress',{name,email,phone,location})
      } catch (error) {
        console.log(error)
      }
      alert("You've booked a spot for the XYZ Financial Congress!!!")
    },
    onClose: () => alert("Are you sure you want to cancel the Payment for your registration?"),
  }
  const showform = () => {
    setRegisterForm(()=>{'block'});
  }
    const Outfit = () => {
      const details = useRef();
      const showdetails = () => {
        details.current.style.display = 'block'
      }
      return(
        <div className='w-[100%] mt-[10px] mb-[20px] flex items-center justify-center flex-col'>
          <div className='mb-[10px]'>
            <p className='font-mont text-[20px] font-[700] text-center'>Purchase Your Outfits For the Conference</p>
          </div>
          <div className="w-[90%] mb-[10px]">
            <div className="bg-[url('/hoodie.jpg')] h-[400px] bg-cover "></div>
            <p className='font-mont font-[700] text-[18px] '>Get your Hoodie</p>
            <div className="bg-[url('/XFCTee.jpg')] h-[400px] bg-cover"></div>
            <p className='font-mont font-[700] text-[18px] '>Get Your Polo</p>
          </div>
          <div onClick={showdetails} className='bg-[green] cardshadow rounded-xl cursor-pointer'><p className='text-white text-[18px] font-danc font-[700] p-[8px]'>Purchase Now</p></div>
          {/* details */}
          <div ref={details} data-aos='fade-in' className='bg-[#f8f8f8] p-[20px] mt-[20px] eventshadow hidden'>
            <p className='font-mont '>Thanks For Your interest</p>
            <p className='font-mont '>You can choose to buy one or Both of the Outfits</p>
            <p className='font-mont '>The Hoodie costs <span className='font-mont font-[600]'>NGN 6,000 </span> and the Polo costs <span className='font-mont font-[600]'>NGN 3,000 </span></p>
            <p className='font-mont '>All you have to do is make a payment to the Account below and you will get your outfits</p>
            <p className='font-mont '><span className='font-mont font-[600]'>Bank: </span>Guaranty Trust Bank</p>
            <p className='font-mont '><span className='font-mont font-[600]'>Account No: </span>0557237408</p>
            <p className='font-mont '><span className='font-mont font-[600]'>Bank: </span>Okpala Bernard Chidubem</p>
            <p className='font-mont '><span className='font-mont font-[600]'>Phone: </span>+234 708 138 7228</p>
            <p className='font-mont '>Please contact Mr Bernard on Phone immediately after payment has been made for further proceedings.</p>
          </div>
        </div>
      )
    }
  return (
    <div>
        <Header />
        <Navbar active="about" />
        <div>
              <div className="flex items-center justify-center my-[10px] bg-contain bg-[url('/XFCLogo-04.jpg')] ">
                  <div className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:h-[500px] md:w-[500px] bg-[url('/flyer-01.jpg')] bg-cover bg-center ">
                  </div>
              </div>
              <div className='p-[8px]'>
              <p className='leading-7 font-rob'>Why is it that we have so many people who are informed about the processes of acquiring and sustaining wealth BUT only 20% of us are genuinely wealthy?</p>
              <p className='leading-7 font-rob'>There is an irrational proportion of Financial parrots in our society! Wealth can be gotten genuinely. Yes you can become wealthy without duping people or killing the people you love just to sustain it.</p>
              <p className='leading-7 font-rob'>This is why this financial Congress is called <span className='font-[600]'>THE REAL DEAL!</span> .This Congress is bent on recruiting men who are Financial parrots and making them <span className='font-[600]'>FINANCIAL LIONS!</span> Where you talk less and do more!</p>
              <p className='leading-7 font-rob'>If you are among the set of people that have been desperately praying to genuinely increase your Financial capacity, you must attend this Congress! And if you are among those people that think they can't make it to the top celebrated 20%, attend this Congress and see how bright your future can be!</p>
              <p className='font-[600] font-mont'>Register with just $4 (2k).</p>
              <p>Check out our speakers here.</p>
              <p>Meet our tutors here.</p>
              </div>
              {/* Buy Hoodie */}
              <Outfit />
              {/* FAQS */}
              <div className='p-[8px]'>
                <p className='text-[20px] font-[700] font-mont'>FAQs:</p>
                <p className='text-[16px] font-[600] font-mont'>Where will the Real deal hold?</p>
                <p className='font-rob'>- Golden Tulip Hotels Owerri, Imo State</p>
                <p className='text-[16px] font-[600] font-mont'>How much is the registration fee?</p>
                <p className='font-rob'>- NGN 2,000 only. For every non-student of the academy.</p>
                <p className='text-[16px] font-[600] font-mont'>When is the date for the financial Congress?</p>
                <p className='font-rob'>- 3rd September, 2022.</p>
                <p className='text-[16px] font-[600] font-mont'>What is the aim of the financial congress?</p>
                <p className='font-rob'>- We want to raise men who will have genuinely uncommon results in finances.</p>
              </div>
              <div onClick={showform} className='w-[60%] m-[8px] md:w-[30%] border-2 border-[hsl(34,100%,47%)] cursor-pointer '>
                <p className='text-[hsl(34,100%,47%)] text-center p-[5px] font-mont text-[20px] font-[600]'>Register Here</p>
              </div>
              {/* my form */}
              <div ref={formdiv} className="w-[100%] md:w-[60%] my-[10px] flex items-center justify-center flex-col " style={{display: registerForm}}>
                <div className=" bg-cover relative  w-[90%] h-[250px]"><div className="bg-[url('/XFCLogo-04.jpg')] bg-cover bg-center opacity-[100%] top-0 absolute w-[100%] h-[250px] "></div></div>
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
        <Footer />
        <div className='fixed h-[70px] bottom-[0px] sm:hidden w-[100%]'>
          <Bottomnav />
        </div>
    </div>
  )
}
