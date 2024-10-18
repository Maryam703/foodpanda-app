import React, { useState } from 'react'
import "./SignUp-Login.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import myAxios from '../../MyAxios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let userData = {
    email,
    password
  }

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await myAxios.post("/user/login-user", userData)
      let { user } = response.data;

      localStorage.setItem("user", JSON.stringify(user))

      if (user?.role === "user") {
        navigate("/")
      } else if (user?.role === "shopkeeper") {
        navigate("/shopkeeper-dashboard")
      } else if (user?.role === "rider") {
        navigate("/rider/orders")
      } else {
        navigate("/login")
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='signup-login-container'>
      <div>
        <div className='signup-login-profle-image'></div>
        <p className='signup-login-container-select-image'>Welcome to the foodpanda app!</p>

        <input required type='email' value={email} placeholder='Enter your email:' onChange={(e) => setEmail(e.target.value)} />
        <input required type='password' value={password} placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

        <button onClick={loginHandler}>Login</button>

        <p className='signup-login-redirect-para'>Don't have an account? <Link to="/signUp">SignUp here!</Link></p>
      </div>
    </div>
  )
}
