import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const { cart } = state;

  const addToCart = (payload) => {
    const stateId = cart.findIndex((item) => {
      return item.id === payload.id;
    });

    if (stateId === -1) {
      setState({
        ...state,
        cart: [...state.cart, { ...payload, count: 1 }],
      });
    } else {
      const items = [...cart];

      const item = { ...cart[stateId] };
      item.count += 1;
      items[stateId] = item;

      setState({ ...state, cart: items });
    }
  };

  const removeFromCart = (payload) => {
    const stateId = cart.findIndex((item) => {
      return item.id === payload.id;
    });

    if (cart[stateId].count > 1) {
      const items = [...cart];

      const item = { ...cart[stateId] };
      item.count -= 1;
      items[stateId] = item;

      setState({ ...state, cart: items });
    } else {
      setState({
        ...state,
        cart: state.cart.filter((items) => items.id !== payload.id),
      });
    }
  };

  const addBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addBuyer,
    state,
  };
};

export default useInitialState;
