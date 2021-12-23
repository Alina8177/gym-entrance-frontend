import React from 'react';
import { Link } from "react-router-dom";
  
const Programs = () => {
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
        id="Programms-logo"
        src="https://images.unsplash.com/photo-1602668253129-0730d95f1b27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczNnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        style={{width: '65vw', height: '70%'}}
        alt="gym-1" />  </Link>
      <div>
      <h1 style={{ fontSize: '35px', margin: '30px 0'}}>Choose best programs for you</h1>
      <ul style={{ listStyle: 'none', margin: '35px 0', fontSize: '25px'}}>
        <li>Cardio</li>
        <li>Yoga</li>
        <li>Weight</li>
        <li>Box</li>
        <li>Dance</li>
        <li>Total body sprint</li>
        <li>Upper body in the zone</li>
        <li>Lower body sprint</li>
        <li>Core throwdown</li>
      </ul>
      </div>
    </div>
  );
};
  
export default Programs;