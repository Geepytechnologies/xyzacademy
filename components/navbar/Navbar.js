import React, {useRef, useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'
import logo from '../../images/logo1.png'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import Sidenav from '../sidenav/Sidenav'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectuser } from '../../utils/userSlice'
import { useState } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar(props) {
    const router = useRouter();
    const side = useRef();
    const menu = useRef();
    const close = useRef();
    const home = useRef();
    const courses = useRef();
    const about = useRef();
    const contact = useRef();
    const blog = useRef();
    const [showProfile, setShowProfile] = useState(false)
    const dispatch = useDispatch();
    const show = () => {
        document.body.style.overflow = 'hidden';
        menu.current.style.display = 'none';
        close.current.style.display = 'flex';
        side.current.style.maxHeight = 'calc(100vh - 10px)';
        side.current.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    }
    const hide = () => {
        document.body.style.overflow = 'scroll';
        menu.current.style.display = 'flex';
        close.current.style.display = 'none';
        side.current.style.maxHeight = '0px';
        side.current.style.borderBottom = '0px';
        side.current.style.borderTop = '0px';
    }
    useEffect(()=>{
       if(props && props.active == 'home'){
       home.current.classList.remove('w-[0px]')
       home.current.classList.add('bg-[hsl(34,100%,47%)]')
       home.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'courses'){
       courses.current.classList.remove('w-[0px]')
       courses.current.classList.add('bg-[hsl(34,100%,47%)]')
       courses.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'about'){
       about.current.classList.remove('w-[0px]')
       about.current.classList.add('bg-[hsl(34,100%,47%)]')
       about.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'contact'){
       contact.current.classList.remove('w-[0px]')
       contact.current.classList.add('bg-[hsl(34,100%,47%)]')
       contact.current.classList.add('w-[90%]')
       }
       if(props && props.active == 'blog'){
       blog.current.classList.remove('w-[0px]')
       blog.current.classList.add('bg-[hsl(34,100%,47%)]')
       blog.current.classList.add('w-[90%]')
       }
    })
    const user = useSelector(selectuser);
    const handleProfile = ()=>{
        setShowProfile(!showProfile)
    }
    const handleLogout = ()=>{
       dispatch(logout());
       setShowProfile(false)
    }
  return (
    <div className='sticky top-0 z-[999] h-auto'>
    <div className='text-white w-[100%] border-b shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)] border-b-[#f7f7f7] h-[90px] flex items-center bg-[#f7f7f7] z-[999]'>
        {/* logo section */}
        <div className='flex items-center basis-[50%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
            <div onClick={()=>{router.push('/')}} className='h-[160px] w-[160px] relative cursor-pointer'>
              <Image src={logo} alt='logo' fill={true} style={{objectFit: "contain"}}/>
            </div>
        </div>
        {/* end of logo section */}
        {/* menu section */}
        <div className='basis-[50%] hidden md:block md:basis-[70%] lg:basis-[50%]'>
            <div className=''>
                <ul className='flex justify-around'>
                    <div>
                        <li className='dtext inline  cursor-pointer font-[poppins]'><Link href='/'>Home</Link></li>
                        <div ref={home} className='dcol w-[0px]  ease-in-out duration-200 h-[3px] rounded-md bg-[hsl(34,100%,47%)] '></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/courses'>Courses</Link></li>
                        <div ref={courses} className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/'>Contact Us</Link></li>
                        <div ref={contact} className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/about'>About Us</Link></li>
                        <div ref={about} className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/blog'>Blog</Link></li>
                        <div ref={blog} className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                </ul>
            </div>
        </div>
        {/* end of menu section */}
        {/* social icons */}
        <div className='lg:basis-[25%] lg:flex lg:justify-end hidden '>
            <div className='w-[70%] p-[5px]'>
                {user ? <div onClick={()=>handleProfile()} className='flex items-center'>
                    <div className='rounded-full font-[600] text-xl flex items-center justify-center text-[white] bg-[#1a0a56] h-[40px] w-[40px]'>{user.firstname.slice(0,1)}</div>
                    <p className='text-black ml-[4px] font-semibold'>{user.firstname}</p>
               </div> :
               <div onClick={()=>router.push('/login')} className='bg-[#f08800] shadow-lg cursor-pointer w-[100px] px-1 py-2 rounded-md'>
                <p className='text-white text-center font-[600]'>Log In</p>
               </div> }
            </div>
        </div>
        {/* end of social icons */}
        {/* menu icon */}
        <div ref={menu} onClick={show} className='flex justify-end basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] md:!hidden'>
            <FaBars style={{fill: 'hsl(34,100%,47%)'}} />
        </div>
        <div ref={close} onClick={hide} className='basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] justify-end hidden md:!hidden'>
            <RiCloseCircleLine style={{fill: 'hsl(34,100%,47%)'}} />
        </div>
        {/* end of menu icon */}
        <div ref={side} className='w-[100vw]  bg-[#0c1952]  border-none z-[100] top-[90px] text-white right-[0px] overflow-hidden absolute sidenavglass max-h-[0px] h-[100vh] md:!hidden transition-[max-height] duration-500 ease-in-out'><Sidenav /></div>
    </div>
    {showProfile && <div className='flex w-[200px] border flex-col border-white rounded-b-xl absolute top-[90px] right-0 items-center justify-center sidebg z-[200] h-[200px]'>
        <Image src={'/logowhite.png'} fill={true} alt="" className="opacity-20" />
        <div className='w-[90%] z-[200] gap-4 pt-5 flex flex-col pl-[5px] h-[70%] '>
            <div className='text-white font-[600]'><LibraryBooksIcon className='mr-[5px]' />My courses</div>
            <div onClick={()=>handleLogout()} className='text-white w-[80%] rounded-xl py-2 px-3 bg-[#f08800]'><LogoutIcon className='mr-[5px]' />Logout</div>
        </div>
    </div>}
    </div>
  )
}
 