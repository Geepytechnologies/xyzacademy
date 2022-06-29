import React from 'react'

export default function Popup() {
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center fixed absolute top-[0] left-[0] z-[999] bg-[rgba(0,0,0,0.4)]'>
        <div className="bg-[red] w-[80%] h-[400px] m-auto "></div>
    </div>
  )
}
