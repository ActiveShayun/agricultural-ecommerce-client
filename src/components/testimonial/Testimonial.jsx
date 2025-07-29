import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@mui/material';


const Testimonial = () => {
    const [data, setData] = useState([])
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isBeginning, setBeginning] = useState(true)
    const [isEnd, setEnd] = useState(false)
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleSlideChange = (swiper) => {
        setBeginning(swiper.isBeginning)
        setEnd(swiper.isEnd)
    }
    return (
        <div className="my-16">
            <h3 className="text-[42px] font-medium lg:text-center text-left lg:mb-10 mb-4">Why Customers Love ❤️ Us?</h3>
            <div className="relative">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.navigation.prevEl = prevRef.current,
                            swiper.navigation.nextEl = nextRef.current
                    }}
                    onSlideChange={handleSlideChange}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <>
                        {
                            data?.map(r => {
                                return <SwiperSlide key={r.id}>
                                    <div className='lg:h-[500px] w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
                                        <div className='w-full h-full flex flex-col justify-between bg-[#f2f4f6] col-span-2 text-left p-14 rounded-md'>
                                            <div>
                                                <p>
                                                    <FaQuoteLeft className='w-8 h-16 mb-7 text-[#b0dd1d]' />
                                                </p>
                                                <p>{r.review}</p>
                                            </div>
                                            <div>
                                                <h4 className='text-3xl font-semibold mb-2'>
                                                    {r.name}
                                                </h4>
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={r.reviewStar}
                                                    precision={0.5}
                                                    readOnly />
                                            </div>
                                        </div>
                                        {/* image container */}
                                        <div className='h-[500px] w-full col-span-1'>
                                            <div className='max-w-full h-full p-4 overflow-hidden relative group'>
                                                <img
                                                    className='w-full h-full mx-auto rounded-md object-cover group-hover:scale-125 scale-100
                                                transition transform duration-600 ease-in-out'
                                                    src={r.photo} alt={r.name} />
                                                <div className='bg-black absolute
                                       top-0 left-0 w-full h-full rounded-md opacity-20'></div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </>
                </Swiper>
                {/* Custom Buttons */}
                <div className="absolute z-10 bottom-8 left-[40%] lg:left-[55%] transform -translate-y-1/2">
                    <button
                        ref={prevRef}
                        disabled={isBeginning}
                        className={` ${isBeginning ? 'bg-gray-300 cursor-not-allowed pointer-events-none'
                            :
                            'bg-[#B0DD1D] text-white'} p-2 rounded-full hover:bg-gray-800`}>
                        <BiArrowToLeft />
                    </button>
                </div>
                <div className="absolute z-10 bottom-8 right-[40%] lg:right-[38%] transform -translate-y-1/2">
                    <button
                        ref={nextRef}
                        disabled={isEnd}
                        className={` ${isEnd ? 'bg-gray-300 cursor-not-allowed pointer-events-none'
                            :
                            'bg-[#B0DD1D] text-white'} p-2 rounded-full hover:bg-gray-800`}>
                        <BiArrowToRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;