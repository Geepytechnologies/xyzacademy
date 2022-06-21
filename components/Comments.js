import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineComment} from 'react-icons/ai'

const Comment= [
    {
        name: 'Chukwuma Praise',
        comment: 'Excellent tutors, tranquil community and a well structured program. I just want to commend the CEO for establishing this project and having it shape lives for the long term in the Financial world.',
        profile: 'Student @FUNAI',
    },
    {
        name: 'Obasi Mmeso',
        comment: "You are all doing a great job and i commend your work Also. I was wondering if you can be doing like a little promo where you'll be giving members of the challenge a chance to be in your masterclass or be giving members account with little funds",
        profile: 'Student @EBSU',
    },
    {
        name: 'Charles Chisom',
        comment: "Thanks to the XYZ community i'm glad to be part of the family and the challenge is just mind blowing. But some of us are yet to be perfect on the classes and i want to urge if there can be a record class and also a live trading. Thanks",
        profile: 'Student @FUTO',
    },
    {
        name: 'Okechukwu Humble',
        comment: "Truthfully i've never seen any academy like this. Top notch tutors just full everywhere, Quality knowledge just dey sink in... Sha i dey act as if i dey normal but deep down i just want make dem flip my account to money i never see for this life",
        profile: 'Business Man',
    },
    {
        name: 'Chukwuma Blessing',
        comment: "Thanks for the opportunity and more you have provided us all.",
        profile: 'Student @UNN',
    }
]

export default function Comments() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        // cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className='mb-[30px]'>
        <div className='flex flex-row justify-center items-center'>
            <AiOutlineComment style={{marginRight: 10,fill: 'hsl(34,100%,47%)',fontSize: 20}} />
            <h2 className='font-[600]'>What our students say</h2>
        </div>
        <div className='w-[95%]'>
        <Slider {...settings} className="">
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className="img0 border-2 border-[#f08800] rounded-full w-[150px] h-[150px]"></div>
                    <p className='font-[600]'>{Comment[0].name}</p>
                    <p>{Comment[0].profile}</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>{Comment[0].comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className="img1 border-2 border-[#f08800] rounded-full w-[150px] h-[150px]"></div>
                    <p className='font-[600]'>{Comment[1].name}</p>
                    <p>{Comment[1].profile}</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>{Comment[1].comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className="img2 border-2 border-[#f08800] rounded-full w-[150px] h-[150px]"></div>
                    <p className='font-[600]'>{Comment[2].name}</p>
                    <p>{Comment[2].profile}</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>{Comment[2].comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className="img3 border-2 border-[#f08800] rounded-full w-[150px] h-[150px]"></div>
                    <p className='font-[600]'>{Comment[3].name}</p>
                    <p>{Comment[3].profile}</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>{Comment[3].comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[400px] w-[300px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className="img4 border-2 border-[#f08800] rounded-full w-[150px] h-[150px]"></div>
                    <p className='font-[600]'>{Comment[4].name}</p>
                    <p>{Comment[4].profile}</p>
                    </div>
                    <div className='flex items-center justify-center h-[40%]'>
                    <div className='basis-[10%] ml-[5px] h-[100%] flex flex-col justify-center items-center'>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                        <div className='border-l-4  border-[#f08800] h-[80%]'></div>
                        <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                    </div>
                    <p className='basis-[90%] text-center'>{Comment[4].comment}</p>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    </div>
  )
}
