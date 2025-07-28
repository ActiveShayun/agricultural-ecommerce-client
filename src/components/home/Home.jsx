import React from 'react';
import Banner from '../banner/Banner';
import LandsCapeProducts from '../landscape-products/LandsCapeProducts';
import Products from '../agricultural-products/Products';
import Trusted from '../trusted-Section/Trusted';
import WhyUs from '../why-us/WhyUs';

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <LandsCapeProducts />
      <Trusted />
      <WhyUs/>
    </div>
  );
};

export default Home;