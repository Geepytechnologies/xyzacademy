import React, {useRef} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'
import logo from '../../images/logo1.png'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import Sidenav from '../sidenav/Sidenav'

export default function Navbar() {
    const router = useRouter();
    const side = useRef();
    const menu = useRef();
    const close = useRef();
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
  return (
    <div className='text-white w-[100%] h-[90px] flex items-center relative sticky top-[0px] bg-[white] z-[100]'>
        {/* logo section */}
        <div className='flex items-center basis-[50%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
            <div onClick={()=>{router.push('/')}} className='h-[160px] w-[160px] relative cursor-pointer'>
              <Image src={logo} alt='logo' layout='fill' objectFit='contain'/>
            </div>
        </div>
        {/* end of logo section */}
        {/* menu section */}
        <div className='basis-[50%] hidden md:block md:basis-[70%] lg:basis-[50%]'>
            <div className=''>
                <ul className='flex justify-around'>
                    <div>
                        <li className='dtext inline  cursor-pointer font-[poppins]'><Link href='/'><a>Home</a></Link></li>
                        <div className='dcol  w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/'><a>Services</a></Link></li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/'><a>Contact Us</a></Link></li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/'><a>About Us</a></Link></li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer font-[poppins]'><Link href='/'><a>Blog</a></Link></li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                </ul>
            </div>
        </div>
        {/* end of menu section */}
        {/* social icons */}
        <div className='lg:basis-[25%] lg:flex lg:justify-end hidden lg:block '>
            <div className='w-[70%] p-[5px]'>
            <ul className='flex justify-between pr-[20px]'>
                <li className='inline'>
                    <Link href='https://twitter.com/XYZ_ACADEMY1?t=OaOAvIp0KXYBDWpzldHIiA&s=09' target='_blank' rel='noreferrer'><a><FaTwitter style={{fill: '#0c1952'}} /></a></Link>
                </li>
                
                <li className='inline'>
                    <Link href='/' target='_self' rel='noreferrer'><a><FaTelegramPlane style={{fill: '#0c1952'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='/' target='_self' rel='noreferrer'><a><FaFacebook style={{fill: '#0c1952'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='https://instagram.com/officialxyzacademy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><a><FaInstagram style={{fill: '#0c1952'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='https://www.linkedin.com/in/xyz-academy-894959242' target='_blank' rel='noreferrer'><a><FaLinkedin style={{fill: '#0c1952'}}/></a></Link>
                </li>
            </ul>
            </div>
        </div>
        {/* end of social icons */}
        {/* menu icon */}
        <div ref={menu} onClick={show} className='flex justify-end basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] md:!hidden'>
            <FaBars style={{fill: 'hsl(34,100%,47%)'}} />
        </div>
        <div ref={close} onClick={hide} className='basis-[50%] hidden cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] flex justify-end  md:!hidden'>
            <RiCloseCircleLine style={{fill: 'hsl(34,100%,47%)'}} />
        </div>
        {/* end of menu icon */}
        <div ref={side} className='w-[100vw] fixed bg-[#0c1952]  border-none z-[100] top-[90px] text-white right-[0px] overflow-hidden absolute sidenavglass max-h-[0px] h-[100vh] md:!hidden transition-[max-height] duration-500 ease-in-out'><Sidenav /></div>
    </div>
  )
}
