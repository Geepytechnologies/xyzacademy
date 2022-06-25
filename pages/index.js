import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about/About'
import Bottomnav from '../components/bottomnav/Bottomnav'
import Footer from '../components/footer/Footer'
import Goals from '../components/Goals'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Courses from '../components/courses/Courses'
import Services from '../components/services/Services'
import Comments from '../components/Comments'
import Challenge from '../components/Challenge'
import Payment from '../components/Payment'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xyzacademy</title>
        <meta name="description" content="XYZ Academy" />
        <link rel="icon" href="./logo1.png" />
      </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
      <Navbar />  
      <About />
      <Goals />
      <Challenge />
      <Services />
      <Courses />
      <Comments />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
