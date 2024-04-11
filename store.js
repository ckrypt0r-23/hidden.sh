import { createStore } from 'redux';
import cartReducer from './cartSlice';

const store = createStore(cartReducer);

export default store;
