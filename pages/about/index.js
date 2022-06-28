import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/About.module.css'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Video from '../../components/aboutus/Video'
import Header from '../../components/Header'


export default function index() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Video />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
