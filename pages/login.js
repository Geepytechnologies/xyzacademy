import React,{useState, useCallback, useContext} from 'react'
import Bottomnav from '../components/bottomnav/Bottomnav'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectuser } from '../utils/userSlice'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SyncLoader from "react-spinners/SyncLoader"
import { useRouter } from 'next/router'

export default function Login() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    const res = await axios.post('/api/login', {password, email})
    dispatch(login(res.data))
    setLoading(false);
    router.push('/');
  }
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
    
  return (
    <div>
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
       <Header />
      <Navbar active='home'/>
      <div className="container flex-col md:flex-row w-[90%] pb-[30px] mb-[100px] md:w-[80%]">
           <div className="bg-[#f8f8f8] w-[100%] md:w-[40%] flex items-center justify-center">
             <div className="bg-[url('/logo1.png')] bg-contain h-[200px] w-[200px] "></div>
           </div>
           <div className="w-[100%] md:w-[60%] bg-[#f6f6f6] flex items-center justify-center flex-col">
             <div className='flex'>
            <KeyIcon />
            <p className='ml-[5px] font-[600] text-xl'>Log In</p>
            </div>
            <form onSubmit={handleSubmit} className="w-[90%]">
              <div>
                <label>Email</label>
                <input
                  className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  type="email"
                  // id="email"
                  onChange={(e)=>setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  className="w-[100%] border border-[black] p-[5px] rounded-lg"
                  type="password"
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
