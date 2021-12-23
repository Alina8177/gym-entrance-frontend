import React from 'react';
import { Link } from "react-router-dom";

const Orders = () => {

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh'
      }} >
      <Link to="/">  <img
        id="about-logo"
        src="https://images.unsplash.com/photo-1630882868199-b30653d4fe3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyN3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="gym-1" />  </Link>
      <div id='order'> 
      <h1>Your Orders</h1>
      <ul>
        <li>Yoga</li>
        <li>Total Body Sprint</li>
      </ul>
      </div>
    </div>
  );
};
  
export default Orders;