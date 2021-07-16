import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Components/Login.css";

const Login = () => {

    const history = useHistory();
    const[user,setUser] = useState({
      username:'',
      password:''
    })
  const handleOnchange = (e) =>{
    const {name,value} =e.target
    setUser((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
   console.log(user)
  }
   const handleClick=()=> {
     if(user.username =="shri" && user.password == "1234")
     {
      history.push("/Dash");
     }
     else{
       alert("Invalid Password");
     }
      
    }


  return (
    <div>
      <div class="container">
        <div class="card">
          <h1 class="card-title">Hello Again!</h1>
          <small class="card-subtitle">
            Enter your credentials and get access
          </small>
          <form class="card-form">
            <label for="username">Username</label>
            <div class="card-input-container username">
              <input
                type="text"
                placeholder="Enter your username"
                id="username"
                name="username"
                onChange={handleOnchange}
              />
            </div>
            <label for="password">Password</label>
            <div class="card-input-container password">
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                onChange={handleOnchange}
              />
            </div>
            <button class="card-button"onClick={handleClick}>Sign In</button>
            <small class="card-forgot-password">
              Forgot your passwrod ? <a>Reset Password</a>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
