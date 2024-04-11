import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from './cartSlice';
import { removeFromCart } from './cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
