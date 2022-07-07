import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/Services.module.css'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'


export default function index() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
