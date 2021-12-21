import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  return (
    <div >

        <div className="signup-header">
        <div className="header-div">
        <Link  to="/">  <img
          id="gym-logo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.template.net%2Fdesign-templates%2Flogo%2Ffitness-logo-template%2F&psig=AOvVaw2URCAohgY_UP_N4qmU_zbi&ust=1640181341252000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjhhuSF9fQCFQAAAAAdAAAAABAN"
          alt="gym-1"
        />  </Link>
          
          <h1> Gym </h1>
        </div>
        
        </div>

        <h2> User Registration </h2>

      <div className="signup-input">
        <h4>Create username</h4>
        <input onChange={(e) => setUsername(e.target.value)} />
        <h4>Create password</h4>
        <input onChange={(e) => setPassword(e.target.value)} />

        <button id="register-button"
          onClick={() => {
            if (!userName.length || !password.length) {
              alert("Please enter username or password");
            } else {
              api.post("/users", { userName, password }).then(({ data }) => {
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
          register
        </button> 

    
        <div className="register-footer-div">
             </div>
       
     
      </div>

      
    </div>
  );
};

export default SignUp;