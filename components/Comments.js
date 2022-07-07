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
        comment: "I thought all this was a joke until I did the $10-$100 challenge. Honestly my financial life was lifted. Currently I am doing the $100-$1000 challenge and it has been awesome already.",
        profile: 'Student @EBSU',
    },
    {
        name: 'Charles Chisom',
        comment: "Thanks to XYZ Academy, I am glad to be a part of this community and the journey is mind blowing.",
        profile: 'Student @FUTO',
    },
    {
        name: 'Okechukwu Humble',
        comment: "Truthfully the beauty of xyz academy is that it provides its students with top notch tutors, quality and comprehensive knowledge. I act like I am ok, but deep down I want them to flip my account to a huge sum of money. I know at the end of my training... I'll be able to do it just like them.",
        profile: 'Business Man',
    },
    {
        name: 'Chukwuma Blessing',
        comment: "I am grateful to the XYZ academy for the opportunity and more you have provided for us all",
        profile: 'Student @UNN',
    }
]

export default function Comments() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        // autoplaySpeed: 7000,
        // cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
      };
  return (
    <div className='mb-[30px]'>
        <div className='flex flex-row justify-center items-center'>
            <AiOutlineComment style={{marginRight: 10,fill: 'hsl(34,100%,47%)',fontSize: 20}} />
            <h2 className='font-[600]'>What our students say</h2>
        </div>
        <div className='w-[90%] mt-[30px]'>
        <Slider {...settings} className="pb-[60px]">
            <div>
                <div className='h-[400px] w-[300px] pb-[20px]' >
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
                <div className='h-[400px] w-[300px] pb-[20px]' >
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
                <div className='h-[400px] w-[300px] pb-[20px]' >
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
                <div className='h-[auto] w-[300px] pb-[20px]' >
                    <div className='flex flex-col h-[60%] items-center justify-center'>
                    <div className="img3 border-2 border-[#f08800] rounded-full w-[150px] h-[150px]"></div>
                    <p className='font-[600]'>{Comment[3].name}</p>
                    <p>{Comment[3].profile}</p>
                    </div>
                    <div className='flex items-center mt-[10px] justify-center h-[auto]'>
                        <div className='basis-[10%] ml-[5px] h-[auto] flex flex-col justify-center items-center'>
                            <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mb-[2px]'></div>
                            <div className='border-l-4  border-[#f08800] h-[120px]'></div>
                            <div className='bg-[#f08800] rounded-full w-[10px] h-[10px] mt-[2px] '></div>
                        </div>
                        <p className='basis-[90%] text-center'>{Comment[3].comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[400px] w-[300px] pb-[20px]' >
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
