import React,{useState, useCallback} from 'react'
import Bottomnav from '../components/bottomnav/Bottomnav'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CreateIcon from '@mui/icons-material/Create';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SyncLoader from "react-spinners/SyncLoader"
import { data } from 'autoprefixer'

export default function Register() {
  const router = useRouter();
  const notify = (err) => toast.error(err, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false)
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [emaildata, setEmaildata] = useState("");
  const [phonedata, setPhonedata] = useState("");
  const [password, setPassword] = useState("");
  const emailurl = `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_EMAIL_API_KEY }&email=${email}`
  const phoneurl = `https://phonevalidation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_PHONE_API_KEY}&phone=${phone}`
  const confirmEmail = async ()=>{
     await fetch(emailurl)
     .then((response) => response.json())
     .then((data) => {
       if(data.deliverability === "UNDELIVERABLE"){
         setEmaildata("Invalid Email Address");
       }

     });
  }
  const confirmPhone = async ()=>{
     await fetch(phoneurl)
     .then((response) => response.json())
     .then((data) => {
      if(data.valid !== true){
        setPhonedata("Invalid Phone Number");
      }
    });
     
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    await confirmEmail();
    await confirmPhone();
    if(emaildata || phonedata === ""){
      setLoading(false);
    }else{
      try{
        await axios.post('/api/register', {phone, firstname, surname, email, password});
        notify("Registration successful");
        setLoading(false);
        router.push('/login');
      }catch(err){
        setLoading(false);
        notify(err.response.data.error)
      }
    }
  }
  return (
    <div>
       <Header />
       <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
      />
      <Navbar active='home'/>
      <div className="container h-auto flex-col md:flex-row w-[90%] pt-[20px] pb-[30px] mb-[100px] md:w-[80%]">
           <div className="bg-[#f8f8f8] w-[100%] md:w-[40%] flex items-center justify-center">
             <div className="bg-[url('/logo1.png')] bg-contain h-[200px] w-[200px] "></div>
           </div>
           <div className="w-[100%] md:w-[60%] bg-[#f6f6f6] flex items-center justify-center flex-col">
             <div className='flex'>
            <CreateIcon />
            <p className='ml-[5px] font-semibold'>Register</p>
            </div>
            <form onSubmit={handleSubmit} className="w-[90%]">
              <div className="">
                <label>Firstname</label>
                <input
                  className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  type="text"
                  id="firstname"
                  required
                  onChange={(e)=>setFirstname(e.target.value)}
                />
              </div>
              <div className="">
                <label>Surname</label>
                <input
                  className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  type="text"
                  id="surname"
                  required
                  onChange={(e)=>setSurname(e.target.value)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  type="email"
                  required
                  // id="email"
                  onChange={(e)=>setEmail(e.target.value)} 
                  onFocus={()=>setEmaildata("")}
                />
                {emaildata && <p className='text-[red]'>{emaildata}</p>}
              </div>
              <div className=''>
                <label>Phone</label>
                  <PhoneInput
                    international
                    defaultCountry="NG"
                    placeholder="Enter phone number"
                    id="phone"
                    value={phone}
                    onChange={setPhone}
                    required
                    onFocus={()=>setPhonedata("")}
                    className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  />
                  {phonedata && <p className='text-[red] font-popp text-[14px]'>{phonedata}</p>}
              </div>
              <div>
                <label>Password</label>
                <input
                  className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  type="password"
                  required
                  // id="email"
                  onChange={(e)=>setPassword(e.target.value)} 
                />
              </div>
              {loading !== true ? <button type='submit' className="bg-[black] text-white p-[10px] mt-[20px] rounded-lg">Submit</button> : <div className='mt-[15px]'><SyncLoader color="#f08800" /></div>}
            </form>
          </div>
         </div>
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div> 
    </div>
  )
}
