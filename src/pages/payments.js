import React from 'react';
import { Link } from "react-router-dom";
  
const Payments = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <Link to="/">  <img
        id="Programs-logo"
        src="https://blogs.worldbank.org/sites/default/files/2021-06/government_payments_shutterstock_252335677_780.jpg"
        style={{width: '75vw', height: '90%'}}
        alt="gym-1" />  </Link>
      <div>
      <h1 style={{ fontSize: '35px', margin: '30px 0'}}>Payments</h1>
      <h5 style={{ fontSize: '20px', margin: '20px 0'}}>Choose your payment method</h5>
      <ul style={{ listStyle: 'none', margin: '35px 0', fontSize: '25px'}}>
        <li>MasterCard</li>
        <li>Cash</li>
        <li>ApplePay</li>
        <li>GooglePay</li>
        <li>Visa</li>
        <li>PayPal</li>
      </ul>
      </div>
    </div>
  );
};
  
export default Payments;