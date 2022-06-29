import React,{useState, useRef} from 'react'
import { PaystackButton } from "react-paystack"
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar';
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import Bottomnav from '../components/bottomnav/Bottomnav';

const payinfo = [
  {
    id: 1,
    course: 'spot-trading',
    price: 20000
  },
  {
    id: 2,
    course: 'technical-analysis',
    price: 60000
  },
  {
    id: 3,
    course: 'web-development',
    price: 60000
  },
  {
    id: 4,
    course: 'synthethic-indices',
    price: 60000
  },
  {
    id: 5,
    course: 'graphics-design',
    price: 60000
  },
  {
    id: 6,
    course: 'futures',
    price: 60000
  },
  {
    id: 7,
    course: 'forex-trading',
    price: 60000
  },
  {
    id: 8,
    course: 'defi',
    price: 60000
  },
  {
    id: 9,
    course: 'crypto-arbitration',
    price: 60000
  }
]

export default function Pay() {
  const [price, setPrice] = useState(60000);
  const router = useRouter();
  const { course } = router.query;
  const form = useRef();
  const paystack = useRef();
  const publicKey = "pk_live_e86d006caf0b6e1b565b6da482b995a15606a35e"
  const amount = Number(price) * 100;
  const coursePrice = price;
  const item = course;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const formik = useFormik({
    initialValues: {
      email1: "",
      name1: "",
      phone1: ""
    },
     validationSchema: yup.object({
       name1: yup.string().required("Required"),
       email1: yup.string().email("Invalid Email address").required("Required"),
       phone1: yup.string().required("Required").min(11, "Phone number must be up to eleven chatacters")
    }),
    onSubmit: (values) =>{
      setEmail(values.email1);
      setName(values.name1);
      setPhone(values.phone1);
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
      course
    },
    publicKey,
    text: "Proceed to payment",
    onSuccess: () =>
      alert("You've Successfully purchased the Course"),
    onClose: () => alert("Are you sure you want to cancel the Payment?"),
  }
 /*  const handleSubmit = (e)=>{
    e.preventDefault()
    form.current.style.display = 'none'
    paystack.current.style.display = 'block'
  } */
  return (
    <>
    <Header />
    <Navbar active="courses" />
      <div className="container flex-col md:flex-row w-[90%] pb-[30px] md:w-[50%]">
        <div className="bg-[#f8f8f8] w-[100%] md:w-[40%]">
          <div className="bg-[url('/logo1.png')] bg-cover h-[200px] w-[200px] "></div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[30px]">{item && item}</p>
            <p className="font-[600]">NGN {coursePrice && coursePrice.toLocaleString("en-us") }</p>
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
            <label>Phone</label>
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
          <div ref={paystack} className=" hidden ">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <div className='bg-[green] text-white p-[10px] mt-[20px] rounded-lg'>
              <PaystackButton {...componentProps} />
            </div>
          </div>
        </div>
      </div>
    <Footer />
    <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
      <Bottomnav />
    </div>
  </>
  )
}
