import React from 'react'
import Challenge from './Challenge'
import Realdeal from './Realdeal'
import {BiCalendar} from 'react-icons/bi'

export default function Events() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row items-center justify-center'>
            <BiCalendar style={{fill:'#f08800', marginRight: 8}} />
            <span>Events</span>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-around w-[100%] py-[20px] bg-[grey]'>
            <Realdeal />
            <Challenge />
        </div>
    </div>
  )
}
