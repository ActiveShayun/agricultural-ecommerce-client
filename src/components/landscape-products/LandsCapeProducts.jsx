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
import Card from '../../shared/productsCard/Card';

export default function LandsCapeProducts() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isBeginning, setBeginning] = useState(true)
    const [isEnd, setEnd] = useState(false)
    const [data, setData] = useState([])
    console.log(data);


    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleSlideChange = (swiper) => {
        setBeginning(swiper.isBeginning)
        setEnd(swiper.isEnd)
    }
    return (
        <>
            <div className='relative mb-20'>
                <h2 className='text-[42px] font-medium mb-4'>
                   Landscape Products</h2>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={false}
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
                    className="mySwiper px-0 mx-0"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        620: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                    <>

                        {
                            data?.map(p => {
                                return <SwiperSlide key={p.id} className='w-full mx-3 rounded-md   p-4 bg-[#F2F4F6]'>
                                    <Card
                                        title={p.title}
                                        image={p.image}
                                        minPrice={p.minPrice}
                                        maxPrice={p.maxPrice}
                                    />
                                </SwiperSlide>
                            })
                        }
                    </>
                </Swiper>
                {/* Custom Buttons */}
                <div className="absolute z-10 top-1/2 left-1 transform -translate-y-1/2">
                    <button
                        ref={prevRef}
                        disabled={isBeginning}
                        className={` ${isBeginning ? 'bg-gray-300 cursor-not-allowed pointer-events-none'
                            :
                            'bg-[#B0DD1D] text-white'} p-2 rounded-full hover:bg-gray-800`}>
                        <BiArrowToLeft />
                    </button>
                </div>
                <div className="absolute z-10 top-1/2  right-1 transform -translate-y-1/2">
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
