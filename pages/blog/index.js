import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/Services.module.css'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import Image from 'next/image'


export default function Index() {
  const data = [
  {
    image: '/article1.png',
    title: 'Understanding Blockchain Technology ',
    author: 'Goodness Assor',
  },
  {
    image: '/bg1.jpg',
    title: 'Can I Be Profitable Trading With Signals? ',
    author: 'Chinonyerem Obioha',
  },
  {
    image: '/bg1.jpg',
    title: 'The unique disparity between tokens and coins. ',
    author: 'Goodness Assor',
  },
  {
    image: '/bg1.jpg',
    title: 'Making my first cryptocurrency investment ',
    author: 'Goodness Assor',
  },
  {
    image: '/bg1.jpg',
    title: 'Importance of Trading Plans ',
    author: 'Chinonyerem Obioha',
  },
  {
    image: '/bg1.jpg',
    title: 'How to Manage Risks in a Volatile Market ',
    author: 'Chinonyerem Obioha',
  },
  {
    image: '/bg1.jpg',
    title: 'Making life-changing money with airdrops ',
    author: 'Benita Iheka',
  },
  {
    image: '/bg1.jpg',
    title: 'DEFI VS CEFI ',
    author: 'Benita Iheka',
  },
  {
    image: '/bg1.jpg',
    title: 'Job Opporunities In DEFI',
    author: 'Benita Iheka',
  },
  {
    image: '/bg1.jpg',
    title: 'Collecting Freebies From CoinMarketCap and CoinGecko',
    author: 'Chinonyerem Obioha',
  },
  {
    image: '/bg1.jpg',
    title: 'Shitcoin Trading Profitability ',
    author: 'Benita Iheka',
  }
]
  const Blog = () => {
    return (
      <div className='flex items-center justify-center my-[40px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {data.map((item, index) => (
            <div key={index} className=''>
              <div className='w-[300px] h-[300px] relative'>
                <Image src={item.image} layout='fill' objectFit='cover' style={{backgroundPosition: 'center'}} />
              </div>
              <div className='w-[300px]'>
              <h2 className='font-[700] text-[20px]'>{item.title}</h2>
              <div className='font-danc font-[600]'>By {item.author}</div>
              </div>
            </div>
          ))}
       </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Header />
      <Navbar active="blog" />
      <Blog />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden w-[100%]'>
        <Bottomnav />
      </div>
    </div>
  )
}
