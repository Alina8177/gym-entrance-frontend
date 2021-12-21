import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  const [loggedInUser, setLoggedInUser] = useState ({})

 const handleLogin = (data) => {
   setLoggedInUser(data)
 }

  return (
    <div className="App">
      <Route exact path={'/sign-in'} element={<SignIn handleLogin={handleLogin}/>} />
        <Route exact path={'/sign-up'} element={<SignUp handleLogin={handleLogin}  />} />
    </div>
  );
}

export default App;
