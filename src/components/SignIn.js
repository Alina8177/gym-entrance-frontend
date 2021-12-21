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
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.template.net%2Fdesign-templates%2Flogo%2Ffitness-logo-template%2F&psig=AOvVaw2URCAohgY_UP_N4qmU_zbi&ust=1640181341252000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjhhuSF9fQCFQAAAAAdAAAAABAN"
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
              api
                .get(`/users/login/`, {
                  params: { userName: userName, password: password },
                })
                .then(({ data }) => {
                  console.log(data);
                  if (data.status === 200) {data.loggedIn =true ; props.handleLogin(data) ; navigation('/logged-in')}
                //   <Route exact path={'/'} element={<Landing data={data}/>} />
                   
                //   localStorage.setItem("user", JSON.stringify({ userName, password }))
                   
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
