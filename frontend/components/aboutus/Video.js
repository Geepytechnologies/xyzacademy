import React from 'react'

export default function Video() {
  return (
    <div>
        <video className='w-[100%] '  autoPlay muted controls>
            <source src="/project.mp4" type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg" /> */}
            {/* Your browser does not support this Video. */}
        </video>
    </div>
  )
}
