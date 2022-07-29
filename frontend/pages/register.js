import React,{useState} from 'react'
import Bottomnav from '../components/bottomnav/Bottomnav'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Register() {
    const Form = ()=>{
        return(
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
          </div>
        )
    }
  return (
    <div>
       <Header />
      <Navbar active='home'/>
      
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div> 
    </div>
  )
}
