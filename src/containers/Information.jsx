import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.scss';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information__content">
        <div className="Information__head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information__form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information__buttons">
          <div className="Information__back">Regresar</div>
          <Link to="/checkout/payment">
            <div className="Information__next">Pagar</div>
          </Link>
        </div>
      </div>
      <div className="Information__sidebar">
        <h3>Pedido:</h3>
        <div className="Information__item">
          <div className="Information__element">
            <h4>ITEM NAME</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
