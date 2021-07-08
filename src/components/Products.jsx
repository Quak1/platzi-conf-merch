import React, { useContext } from 'react';

import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.scss';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  console.log(state.cart);

  return (
    <div className="Products">
      <div className="Products__items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
