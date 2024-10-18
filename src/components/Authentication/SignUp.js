import React, { useState, useRef } from 'react'
import "./SignUp-Login.css";
import { Form, Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [avatar, setAvatar] = useState(null);
  const inputFile = useRef();
  const navigate = useNavigate()

  const selectFileHandler = () => {
    inputFile.current.click()
  }

  const signUpHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name)
    formData.append("email", email)
    formData.append("avatar", avatar)
    formData.append("password", password)
    formData.append("adress", adress)
    formData.append("city", city)
    formData.append("contact", contact)
    formData.append("role", "user")

    try {
        let res = await axios.post("http://localhost:7000/api/v1/user/sign-up", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.statusCode === 200) {
        navigate("/")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form className='signup-login-container' onSubmit={signUpHandler}>
      <div>
        <div className='signup-login-profle-image'></div>
        <p className='signup-login-container-select-image' onClick={selectFileHandler}>Select yor profile picture here</p>
        <input id='file-input' ref={inputFile} type='file' onChange={(e) => setAvatar(e.target.files[0])} />
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
