import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../../styles/Services.module.css'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import Header from '../../components/Header'
import Image from 'next/image'
import { useRouter } from 'next/router'


export default function Index() {
  const data = [
  {
    image: '/article1.png',
    title: 'Understanding Blockchain Technology ',
    author: 'Goodness Assor',
    url: '/blog/article1'
  },
  {
    image: '/BLOGPOST2.jpg',
    title: 'Can I Be Profitable Trading With Signals? ',
    author: 'Chinonyerem Obioha',
    url: '/blog/article2'
  },
  {
    image: '/cryptocoins.jpg',
    title: 'The unique disparity between tokens and coins. ',
    author: 'Goodness Assor',
    url: '/blog/article3'
  },
  {
    image: '/BLOG-POST1G.jpg',
    title: 'Making my first cryptocurrency investment ',
    author: 'Goodness Assor',
    url: '/blog/article4'
  },
  {
    image: '/tradebtc.jpg',
    title: 'Importance of Trading Plans ',
    author: 'Chinonyerem Obioha',
    url: '/blog/article5'
  },
  {
    image: '/IMG_1305.jpg',
    title: 'How to Manage Risks in a Volatile Market ',
    author: 'Chinonyerem Obioha',
    url: '/blog/article6'
  },
  {
    image: '/IMG_1295.jpg',
    title: 'Making life-changing money with airdrops ',
    author: 'Benita Iheka',
    url: '/blog/article7'
  },
  {
    image: '/IMG_1283.jpg',
    title: 'DEFI VS CEFI ',
    author: 'Benita Iheka',
    url: '/blog/article8'
  },
  {
    image: '/defi2.jpg',
    title: 'Job Opporunities In DEFI',
    author: 'Benita Iheka',
    url: '/blog/article9'
  },
  {
    image: '/cmc.jpg',
    title: 'Collecting Freebies From CoinMarketCap and CoinGecko',
    author: 'Chinonyerem Obioha',
    url: '/blog/article10'
  },
  {
    image: '/shit.jpeg',
    title: 'Shitcoin Trading Profitability ',
    author: 'Benita Iheka',
    url: '/blog/article11'
  }
]
  const Blog = () => {
    const Wall = ()=>(
      <div className='h-[300px] w-[100%] lg:h-[300px] lg:w-[100%] md:h-[300px] relative rounded-lg mr-[6px] md:w-[100%] bg-[#0c195280]  '>
        <div className="h-[100%] absolute top-0 rounded-lg mr-[3px] w-[100%] bg-center bg-cover bg-[url('/logowhite.png')] "></div>
      </div>
    )
    const router = useRouter();
    return (
      <>
      <div className='flex flex-col items-center justify-center mb-[40px]'>
        <p className='font-[700] p-[10px] text-[20px]'>XYZ Academy Blog</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data.map((item, index) => (
            <div onClick={()=> router.push(item.url)} key={index} className='cursor-pointer'>
              {item.image !== '' ? <div className='w-[300px] h-[300px] relative object-center'>
                <Image src={item.image} layout='fill' objectFit='cover' objectPosition={'center'} className='rounded-lg' />
              </div> : <Wall />}
              <div className='w-[300px]'>
              <h2 className='font-[700] text-[20px]'>{item.title}</h2>
              <div className='font-danc font-[600]'>By {item.author}</div>
              </div>
            </div>
          ))}
       </div>
      </div>
      </>
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
