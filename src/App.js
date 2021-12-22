import React from 'react';
import './App.css';
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Programs from './pages/programs';
import Gyms from './pages/gyms';
import Payments from './pages/payments';
import Orders from './pages/orders';
import SignUp from './pages/signUp';
import SignIn from './components/SignIn'
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/gyms' element={<Gyms/>} />
        <Route path='/payments' element={<Payments/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
      </Routes>
    </Router>
  );
}
  
export default App;
