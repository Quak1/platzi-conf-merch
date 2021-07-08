import React from 'react';

import '../styles/components/Success.scss';

const Success = () => {
  return (
    <div className="Succes">
      <div className="Success__content">
        <h2>NOMBRE, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success__map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
