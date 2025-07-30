import { FiAward } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

const Trusted = () => {
    const [startCount, setStartCount] = useState(false);
    const countRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], observerInstant) => {
                if (entry.isIntersecting) {
                    setStartCount(true)
                    observerInstant.disconnect()
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'

            }
        );
        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current)
            }
        }
    }, [])

    return (
        <div className='py-20 bg-gradient-to-tl from-[#002b55] to-[#07417a] rounded-md px-4'>
            <div>
                <h2 className='text-[42px] font-medium text-white lg:text-center mb-4'>
                    Trusted by over 6K+ customers</h2>
            </div>
            <div className='text-white lg:flex justify-center items-center gap-12 space-y-4 lg:space-y-0 '>
                <div className='flex items-center gap-4'>
                    <span className='w-20 h-20 rounded-full bg-white
                     flex items-center justify-center text-black text-3xl'>
                        <FiAward />
                    </span>
                    <p>
                        <span className='text-3xl font-medium block'>Premium</span>
                        <span>Products</span>
                    </p>
                </div>
                <div ref={countRef} className='flex items-center gap-4'>
                    <span className='w-20 h-20 rounded-full bg-white
                     flex items-center justify-center text-black text-3xl'>
                        <CiFaceSmile />
                    </span>
                    <div className="text-3xl font-medium block">
                        {startCount && <CountUp delay={0} end={4000} />}
                        <span className="ml-1">+ Google Review</span>
                    </div>

                </div>
                <div className='flex items-center gap-4'>
                    <span className='w-20 h-20 rounded-full bg-white
                     flex items-center justify-center  text-black text-3xl'>
                        <CiDeliveryTruck />
                    </span>
                    <p>
                        <span className='text-3xl font-medium block'>Delivery</span>
                        <span>Across India</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Trusted;