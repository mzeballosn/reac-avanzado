import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import { useNavigate} from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import './style.css';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navegate = useNavigate(); 

  const paypalOptions = {
    clientId: 'AUdnbQJGxYvwI9FWjtyDnybO9NbmXGtHnsVy-Yo6jC0jGJAfvlR9xox4FPPQleTzuVu5t5sLXPQ-JHBH',
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    'layout': 'vertical',
    'color':  'blue',
    'shape':  'pill',
    'label':  'paypal'
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navegate('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className=''>
          <PayPalButton
            paypalOptions={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}            
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
