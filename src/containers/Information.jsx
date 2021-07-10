import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AppContext from '../context/AppContext';
import '../styles/components/Information.scss';

const Information = () => {
  const {
    state: { cart },
    addBuyer,
  } = useContext(AppContext);

  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    addBuyer(data);
    history.push('/checkout/success');
  };

  return (
    <div className="Information">
      <div className="Information__content">
        <div className="Information__head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nombre completo:</label>
            <input {...register('name', { required: true })} type="text" />

            <label htmlFor="email">Correo Electronico:</label>
            <input {...register('email', { required: true })} type="text" />

            <label htmlFor="address">Direccion:</label>
            <input {...register('addres', { required: true })} type="text" />

            <label htmlFor="city">Ciudad:</label>
            <input {...register('city', { required: true })} type="text" />

            <label htmlFor="country">Pais:</label>
            <input {...register('country', { required: true })} type="text" />

            <label htmlFor="state">Estado:</label>
            <input {...register('state', { required: true })} type="text" />

            <label htmlFor="cp">Codigo Postal:</label>
            <input {...register('cp', { required: true })} type="number" />

            <label htmlFor="phone">Telefono:</label>
            <input {...register('phone', { required: true })} type="number" />

            <input type="submit" value="Continuar al pago" />
          </form>
        </div>
        <div className="Information__buttons">
          <div className="Information__back">
            <Link to="/checkout">Regresar</Link>
          </div>
        </div>
      </div>
      <div className="Information__sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information__item" key={item.id}>
            <div className="Information__element">
              <h4>
                {item.title} (${item.price}) x {item.count}
              </h4>
              <span>${item.price * item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
