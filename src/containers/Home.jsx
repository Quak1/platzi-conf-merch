import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  return (
    <>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
