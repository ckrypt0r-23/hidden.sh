import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from './productsSlice';

const ProductList = () => {
  const products = useSelector(selectAllProducts);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
