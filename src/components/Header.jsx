import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header__title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header__checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" title="checkout" />
        </Link>
        {cart.length > 0 && (
          <div className="Header__alert">
            {cart.reduce((sum, item) => sum + item.count, 0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
