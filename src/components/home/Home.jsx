import React from 'react';
import Banner from '../banner/Banner';
import LandsCapeProducts from '../landscape-products/LandsCapeProducts';
import Products from '../agricultural-products/Products';
import Trusted from '../trusted-Section/Trusted';

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <LandsCapeProducts />
      <Trusted />
    </div>
  );
};

export default Home;