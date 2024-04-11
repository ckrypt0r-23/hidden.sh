import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from './productsSlice';
import { addToCart } from './cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector(selectAllProducts);
  const product = products.find((product) => product.id === parseInt(id));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
