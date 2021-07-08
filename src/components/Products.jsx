import React from 'react';

import Product from './Product';

import '../styles/components/Products.scss';

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="Products">
      <div className="Products__items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
