import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;