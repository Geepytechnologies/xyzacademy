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
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />  
      <About />
      <Goals />
      <Challenge />
      {/* <Services /> */}
      <Courses />
      <Comments />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
