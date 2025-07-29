import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Button from '../../shared/btn/Button';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';


export default function Banner() {
    const [data, setData] = useState([])
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isBeginning, setBeginning] = useState(true)
    const [isEnd, setEnd] = useState(false)
    useEffect(() => {
        fetch('/banner.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleSlideChange = (swiper) => {
        setBeginning(swiper.isBeginning)
        setEnd(swiper.isEnd)
    }
    return (
        <>
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
                            data?.map(a => {
                                return <SwiperSlide key={a.id} className='mt-8'>
                                    <div className='bg-[#f2f4f6] lg:h-[500px] w-full grid grid-cols-1 lg:grid-cols-2  items-center gap-4 lg:gap-8 p-4'>
                                        <div className='h-[470px] w-full'>
                                            <img
                                                className='w-full h-full rounded-md object-cover'
                                                src={a.image}
                                                alt="" />
                                        </div>
                                        <div className='w-full space-y-5'>
                                            <h1 className='text-4xl lg:text-6xl font-bold'>{a.title}</h1>
                                            <p>{a.description}</p>
                                            <Button text={'Shop Now'} />
                                        </div>

                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </>
                </Swiper>
                {/* Custom Buttons */}
                <div className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2">
                    <button
                        ref={prevRef}
                        disabled={isBeginning}
                        className={` ${isBeginning ? 'bg-gray-300 cursor-not-allowed pointer-events-none'
                            :
                            'bg-[#B0DD1D] text-white'} p-2 rounded-full hover:bg-gray-800`}>
                        <BiArrowToLeft />
                    </button>
                </div>
                <div className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2">
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
        </>
    );
}