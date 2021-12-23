import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate()
  return (
    <div>
      <div className="signup-header">
        <div className="header-div">
        <Link  to="/">  <img
          id="gym-logo"
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          style={{ width: '60vw'}}
          alt="gym-1"
        />  </Link>

          <h1> No Pain No Gain </h1>
        </div>
      </div>

      <h2> User Login</h2>

      <div className="signup-input">
        <h4>Enter username</h4>
        <input onChange={(e) => setUsername(e.target.value)} />
        <h4>Enter password</h4>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />

        <button
          id="register-button"
          onClick={() => {
            if (!userName.length || !password.length) {
              alert("Please enter username or password");
            } else {
              api.post("api/auth/token/", { email: userName, password }).then(({ data }) => {
                console.log(data);
                localStorage.setItem(
                  "user",
                  JSON.stringify({ userName, password })
                );
                navigation("/");
              });
            }
           }}
        >
          login
        </button> 
      </div>

    </div>
  );
};

export default SignIn;
