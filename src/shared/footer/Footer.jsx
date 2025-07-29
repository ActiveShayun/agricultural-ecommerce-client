import React from 'react';
import { MdHouseboat } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../btn/Button';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-16 bg-linear-to-t from-[#002b55] to-[#0a4a88] py-10 lg:py-24 text-white px-4 lg:px-8 rounded-md'>
            {/* col 1 */}
            <div className='lg:col-span-2'>
                <h4 className='text-3xl font-medium'>Join Our JF Products</h4>
                <p className='mb-8'>We’ll tell you about store updates and discounts</p>
                <input
                    className='px-4 py-3 rounded-full bg-[#1a4166] w-full mb-4'
                    type="text"
                    placeholder='Enter your email' />
                <div>
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-sm text-white border border-white mr-4 " />
                    <label htmlFor="">Yes, subscribe me to your newsletter.</label>
                </div>
                <button className='bg-white py-2 w-full rounded-full mt-4 cursor-pointer text-black font-medium'>Join Now</button>

                {/* Our Branches section */}
                <div className='flex items-center gap-8 mt-4 lg:mt-20'>
                    <div className="flex flex-col justify-center font-bold">
                        <p className='text-3xl text-center flex'>
                            <MdHouseboat className='text-8xl relative top-6' />
                        </p>
                        <p className='text-4xl relative left-6'>
                            <samp className='text-[#B0DD1D] '>
                                J
                            </samp>
                            F
                        </p>
                    </div>
                    <div className='relative top-4'>
                        <h5 className='text-[20px] font-semibold'>Our Branches</h5>
                        <p>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
                    </div>
                </div>
            </div>
            {/* col 2 */}
            <div className='flex flex-col gap-4 lg:col-span-1'>
                <h5 className='text-3xl font-medium'>Information</h5>
                <Link>Home</Link>
                <Link>Shop</Link>
                <Link>Our Story</Link>
                <Link>Blogs</Link>
                <Link>Contact</Link>
            </div>
            {/* col 3 */}
            <div className='flex flex-col justify-between gap-4 lg:col-span-1'>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-3xl font-medium'>Helpful</h5>
                    <Link>FAQs</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Shipping Policy</Link>
                    <Link>My Account</Link>
                </div>
                <Button text={'Contact Us'} />
            </div>

        </div>
    );
};

export default Footer;