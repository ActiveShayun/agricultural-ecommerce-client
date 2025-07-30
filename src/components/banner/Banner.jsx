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
import AnimatedText from '../../shared/animateText/AnimateText';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SliderPrev from '../../shared/sliderButton/SliderPrev';
import SliderNext from '../../shared/sliderButton/SliderNext';
// ..
AOS.init({
    once: true
});


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
                                    <div
                                        data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                        className='bg-[#f2f4f6] lg:h-[500px] w-full grid grid-cols-1 lg:grid-cols-2  items-center gap-4 lg:gap-8 p-4'>
                                        <div className='h-[470px] w-full'>
                                            <img
                                                className='w-full h-full rounded-md object-cover'
                                                src={a.image}
                                                alt="" />
                                        </div>
                                        <div className='w-full space-y-5'>
                                            <div className='text-4xl lg:text-6xl font-bold flex'>
                                                <AnimatedText text={a.title} />
                                            </div>
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
                <div className="absolute z-10 top-1/2 left-1 transform -translate-y-1/2">
                    <SliderPrev
                        isBeginning={isBeginning}
                        prevRef={prevRef} />
                </div>
                <div className="absolute z-10 top-1/2  right-1 transform -translate-y-1/2">
                    <SliderNext
                        nextRef={nextRef}
                        isEnd={isEnd} />
                </div>
            </div>
        </>
    );
}