import React from 'react';
import { Link } from "react-router-dom";
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
    
        alignItems: 'Right',
        height: '100vh'
      }} >
      <Link to="/">  <img
        id="about-logo"
        src="https://images.unsplash.com/photo-1631326657220-84eae59d507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcwM3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="gym-1" />  </Link>
      <div style={{ display: "flex", flexDirection: 'column', gap: 10, alignItems: "center", marginTop: 15, height: '500px', padding: '35px', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '35px', margin: '30px 0'}}>Welcome to the Gym World.</h1>
      <p style={{ fontSize: '25px'}}>Hi, we’re The Best Fitness, and we believe that exercise isn’t just about how it makes you look, but also how it makes you feel. Blink is a motivating space with a staff of mood-lifters. We take pride in challenging fitness industry norms and celebrating every unique body.</p>
      </div>
    </div>
  );
};
  
export default About;