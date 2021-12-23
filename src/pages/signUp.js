import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  return (
    <>
    <div>
        <div className="signup-header">
        <div className="header-div">
        <Link  to="/">  <img
          id="gym-logo"
          src="https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgxfHxneW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="gym-1"
        />  </Link>
          
          <h1> Gym Six Packs</h1>
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
              api.post("api/auth/", { email: userName, password, "re_password": password }).then(({ data }) => {
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
    </>
  )
};

export default SignUp;