import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/About.module.css'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Video from '../../components/aboutus/Video'
import Header from '../../components/Header'
import FAQ from '../../components/FAQ'


export default function index() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar active="about" />
      <Video />
      <FAQ />
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
