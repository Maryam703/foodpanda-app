import React, { useState } from 'react'
import "./SignUp-Login.css"
import { Link, useNavigate } from 'react-router-dom';
import ApiLoader from '../../ApiLoader/ApiLoader';
import myAxios from '../../MyAxios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  let userData = {
    email,
    password
  }

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      let response = await myAxios.post("/user/login-user", userData)
      let { user } = response.data;
   
      localStorage.setItem("user", JSON.stringify(user))

      if (user?.role === "user") {
        console.log("user")
        navigate("/")
      } else if (user?.role === "shopadmin") {
        navigate("/shopadmin-dashboard");
      } else if (user?.role === "rider") {
        navigate("/rider-dashboard")
      } else {
        navigate("/login")
      }
    
      setLoading(false)
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
       {loading && <ApiLoader /> }
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
    </>
  )
}
