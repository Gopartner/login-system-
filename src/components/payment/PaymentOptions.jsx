// src/components/payment/PaymentOptions.js
import React from 'react';

const PaymentOptions = () => {
  const paymentMethods = ['Kartu Kredit', 'Dompet Digital', 'Cryptocurrency'];

  return (
    <div>
      <h2>Pilih Metode Pembayaran</h2>
      <ul>
        {paymentMethods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentOptions;
