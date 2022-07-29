import React from 'react'
import {useRouter} from 'next/router'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

export default function Sidebar(props) {
  const router = useRouter();
  const myItems = [
    {
      id: 1,
      course: 'Spot trading',
      description: "Become a profitable spot trader in 90 days even if you don't know anything in crypto trading now!",
      route: '/courses/spot-trading'
    },
    {
      id: 2,
      course:"DeFi",
      description: "Make more money and more of it as a defi analyst",
      route: '/courses/defi'
    },
    {
      id: 3,
      course:"Crypto Arbitration",
      description: "Learn how to profitably buy and sell coins and become your own boss",
      route: '/courses/crypto-arbitration'
    },
    {
      id: 4,
      course:"Futures",
      description: "Become a better risk manager and make more money on future trades even if you have burnt your portfolio by trying",
      route: '/courses/futures'
    },
    {
      id: 5,
      course:"Forex trading",
      description: "Learn from the best forex traders across the globe and become one of the best forex trader in three months",
      route: '/courses/forex-trading'
    },
    {
      id: 6,
      course:"Synthetic indices",
      description: "Learn the proven ways to become very rich through synthetic indices",
      route: '/courses/synthethic-indices'
    },
    {
      id: 7,
      course:"Technical analysis",
      description: "Learn the most effective way of risk management and stay profitable in the market",
      route: '/courses/technical-analysis'
    },
    {
      id: 8,
      course:"Graphics Design",
      description: "Learn the secret of graphical representation of your brand that will make you go global in your first 3 months",
      route: '/courses/graphics-design'
    },
    {
      id: 9,
      course:"Web development",
      description: "Learn the easiest way of front end and back end coding",
      route: '/courses/web-development'
    }
  ]
  function check(el){
    return el.course != props.course;
  }
  return (
    <div className="border w-[100%] md:w-[60%] lg:w-[100%] ml-[5px] p-[10px] my-[20px]">
        <p className="font-[600]">Other Courses</p>
       { myItems.filter(check).map((item,index)=>
      (<div key={index} onClick={()=> router.push(item.route)} className='flex lg:flex-col flex-col md:flex-row mb-[30px] border rounded-lg p-[3px]' >
           <div className='h-[200px] w-[100%] lg:h-[200px] lg:w-[100%] md:h-[auto] relative rounded-lg mr-[6px] md:w-[30%] bg-[#0c195280]  '>
              <div className="h-[100%] absolute top-0 rounded-lg mr-[3px] w-[100%] bg-center bg-cover bg-[url('/logowhite.png')] "></div>
           </div>
           <div className="md:w-[70%] w-[100%] lg:w-[100%] flex flex-col lg:items-center items-center md:items-start">
                <p className="font-[600] text-[20px]">{item.course}</p>
                <div className="flex flex-row">
                    <BsStarFill style={{fill: '#f08800'}} />
                    <BsStarFill style={{fill: '#f08800'}} />
                    <BsStarFill style={{fill: '#f08800'}} />
                    <BsStarFill style={{fill: '#f08800'}} />
                    <BsStarFill style={{fill: '#f08800'}} />
                    {/* <BsStarHalf style={{fill: '#f08800'}} /> */}
                </div>          
                <p className='text-center md:text-left lg:text-center'>{item.description}</p>
           </div>
        </div>
    )
    )} 
    </div>
  )
}
