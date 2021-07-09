import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const { id } = payload;
    const { cart } = state;

    if (cart.hasOwnProperty(id)) {
      setState({
        ...state,
        cart: {
          ...cart,
          [id]: {
            ...cart[id],
            count: cart[id].count + 1,
          },
        },
      });
    } else {
      setState({
        ...state,
        cart: {
          ...cart,
          [id]: { ...payload, count: 1 },
        },
      });
    }
  };

  const removeFromCart = (payload) => {
    const { id } = payload;
    const { cart } = state;

    if (cart[payload.id].count > 1) {
      setState({
        ...state,
        cart: {
          ...cart,
          [id]: { ...cart[id], count: cart[id] - 1 },
        },
      });
    } else {
      setState({
        ...state,
        cart: cart.filter((items) => items.id !== payload.id),
      });
    }
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
