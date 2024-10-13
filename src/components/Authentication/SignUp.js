import React, { useState } from 'react'
import "./SignUp-Login.css";
import { Form, Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate()

  const userData = {
    name, 
    email,
    password,
    adress,
    city,
    contact,
    role : "user"
  }

  const signUpHandler = (e) => {
    e.preventDefault();
    console.log(userData)
    navigate("/")
  }

  return (
    <Form className='signup-login-container' onSubmit={signUpHandler}>
      <div>
        <div className='signup-login-profle-image'></div>
        <p className='signup-login-container-select-image'>Welcome to foodpanda app</p>
        <input type='text' value={name} required placeholder='Enter your full name:' onChange={(e) => setName(e.target.value)} />
        <input type='email' value={email} required placeholder='Enter your email:' onChange={(e) => setEmail(e.target.value)} />
        <input type='text' value={adress} required placeholder='Enter your complete adress:' onChange={(e) => setAdress(e.target.value)} />
        <input type='text' value={city} required placeholder='Enter your city name:' onChange={(e) => setCity(e.target.value)} />
        <input type='number' value={contact} required placeholder='Enter your mobile number:' onChange={(e) => setContact(e.target.value)} />
        <input type='password' value={password} required placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

        <button>Sign Up</button>

        <p className='signup-login-redirect-para'>Already have an account? <Link to="/login">Login here!</Link></p>
      </div>
    </Form>
  )
}

export default SignUp
