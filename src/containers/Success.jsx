import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddres from '../Hooks/useGoogleAddres';
import '../styles/components/Success.scss';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const location = useGoogleAddres(buyer[0].addres);
  console.log(buyer);
  return (
    <div className="Succes">
      <div className="Success__content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success__map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
