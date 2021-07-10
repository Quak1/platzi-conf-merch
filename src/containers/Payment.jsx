import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/components/Payment.scss';

const Payment = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <div className="Payment">
      <div className="Payment__content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment__button">Boton de pago con Paypal</div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
