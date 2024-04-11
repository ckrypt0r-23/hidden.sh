import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoCheckout = () => {
  const [paymentUrl, setPaymentUrl] = useState('');

  useEffect(() => {
    const createCoinPayment = async () => {
      try {
        const response = await axios.post('/api/coinpayments/create_transaction', {
          amount: 100, // Beispielbetrag
          currency: 'USD',
        });

        setPaymentUrl(response.data.payment_url);
      } catch (error) {
        console.error('Error creating CoinPayments transaction:', error);
      }
    };

    createCoinPayment();
  }, []);

  return (
    <div>
      {paymentUrl && (
        <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
          Pay with Cryptocurrency
        </a>
      )}
    </div>
  );
};

export default CryptoCheckout;
