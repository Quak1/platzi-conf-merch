import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import handleSumTotal from '../utils/handleSumTotal';

import '../styles/components/Payment.scss';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const paypalOptions = {
    clientId:
      'AU94RJsBSAJyhFex6Jq-G6TBVxdmv753LgW3FtUE-oIz58rek8npk2HZxnVDNSJs4QVHL9PMFBRLV_uA',
    intent: 'capture',
    currency: 'USD',
  };

  const paypalStyles = {
    layout: 'vertical',
    shape: 'pill',
  };

  const handlePaymentSucces = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
    }
  };

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: handleSumTotal(),
          },
        },
      ],
    });
  };

  return (
    <div className="Payment">
      <div className="Payment__content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment__item" key={item.id}>
            <div className="Payment__element">
              <h4>
                {item.title} (${item.price}) x {item.count}
              </h4>
              <span>${item.price * item.count}</span>
            </div>
          </div>
        ))}
        <div className="Payment__button">
          <PayPalButton
            amount={handleSumTotal(cart)}
            options={paypalOptions}
            style={paypalStyles}
            createOrder={() => console.log('Payment start')}
            onSuccess={(data) => console.log('Succes: ' + data)}
            onError={(error) => console.log('Error: ' + error)}
            onCancel={(data) => console.log('Cancel: ' + data)}
            // createOrder={(data, actions) => handleCreateOrder(data, actions)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
