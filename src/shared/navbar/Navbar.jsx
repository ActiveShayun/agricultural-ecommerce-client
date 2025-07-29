'use client';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { MdHouseboat } from "react-icons/md";

const Navbar = () => {
    const deskTopMenu = <>
        <Link href={'/'}>Home</Link>
        <Link href={'/shop'}>Shop</Link>
        <Link href={'/blog'}>Blogs</Link>
        <Link href={'/contact'}>Contact</Link>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow w-full">
                        {deskTopMenu}
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <ul className="menu  menu-horizontal px-1 flex items-center gap-8 text-lg">
                        {deskTopMenu}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center text-center font-bold">
                <p className='text-3xl text-center flex justify-center'>
                    <MdHouseboat />
                </p>
                <p className='text-4xl'>
                    <samp className='text-[#B0DD1D]'>
                        J
                    </samp>
                    F
                </p>
            </div>
            <div className="navbar-end flex items-center gap-8">
                <div className='text-lg flex items-center gap-2'>
                    <p>Login</p>
                    <span>
                        <FaRegUser />
                    </span>

                </div>
                <div>
                    <span>
                        <CiSearch className='text-lg' />
                    </span>
                </div>
                <div className='h-5'>
                    <div>
                        <p>
                            <TbShoppingBag className='text-lg' />
                        </p>
                    </div>
                    <p className='relative bg-gray-600 p-1 flex items-center justify-center h-4 w-4 rounded-full  border -top-7 -right-3 '>
                        <span className='text-white'>
                            0
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;