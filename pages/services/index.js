import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/Services.module.css'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Form from '../../components/Form'


export default function index() {
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
      <Navbar />
      <Form />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
