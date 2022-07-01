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
  const Vision =()=>{
    return(
      <div>
        <p>Our Vision</p>
        <p>To raise thousands of youths to be financially free and stable by exposing them to the  "financial market and tech-world" by giving them the intensive knowledge needed in order to be profitable consistenly.</p>
      </div>
    )
  }
  const Mission = ()=>{
    return(
      <div>
        <p>Mission statement</p>
        <p>To raise thousands of youths to be financially free and stable by exposing them to the financial market and the tech-world. This can be achieved by:</p>
        <ul>
          <li>Creating standard and professional courses in these spaces and offering it to them at affordable rates.</li>
          <li>Hosting challenges that are geared towards improving the lives of members of the community.</li>
          <li>conducting conferences both physical and virtual to enlighten the community on better ways to make it big in the tech world and in the crypto space.</li>
          <li>Unveiling the blockchain world to the community. Not just focusing on the trading sector but on the creative sector too.</li>
        </ul>
      </div>
    )
  }
  const Aboutxyz = ()=>{
    return(
      <div>
        <p>XYZ Academy is a brand that gives you the opportunity to master, Practice and earn from the Financial market.</p>
        <p>We also teach tech skills that will help you to make more money by solving problems in business and society at large.</p>
        <div>
          <p>Courses:</p>
          <ul>
            <li>Crypto trading</li>
            <li>Forex</li>
            <li>synthetic Indices</li>
            <li>stocks and</li>
            <li>Commodities</li>
          </ul>
          <p>Give us 90 days of your time and the world will see a better you</p>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Header />
      <Navbar active="about" />
      <Video />
      <Aboutxyz />
      <Vision />
      <Mission />
      <FAQ />
      <Footer />
      <div className='fixed bottom-[0px] w-[100%] sm:hidden'>
        <Bottomnav />
      </div>
    </div>
  )
}
