import React, { useRef, useState } from 'react'
import "./SignUp-Login.css";
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const inputFile = useRef()

  const selectFileHandler = () => {
    inputFile.current.click()
  }

  return (
    <div className='signup-login-container'>
      <div>
        <div className='signup-login-profle-image' onClick={selectFileHandler}></div>
        <p className='signup-login-container-select-image'>Select your profile here</p>
        <input id='file-input' ref={inputFile} required type='file' value={file} onChange={(e) => setFile(e.target.files[0])} />

        <input required type='text' value={name} placeholder='Enter your full name:' onChange={(e) => setName(e.target.value)} />
        <input required type='email' value={email} placeholder='Enter your email:' onChange={(e) => setEmail(e.target.value)} />
        <input required type='text' value={adress} placeholder='Enter your complete adress:' onChange={(e) => setAdress(e.target.value)} />
        <input required type='text' value={city} placeholder='Enter your city name:' onChange={(e) => setCity(e.target.value)} />
        <input required type='number' value={mobNumber} placeholder='Enter your mobile number:' onChange={(e) => setMobNumber(e.target.value)} />
        <input required type='password' value={password} placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

        <button>Sign Up</button>

        <p className='signup-login-redirect-para'>Already have an account? <Link to="/login">Login here!</Link></p>
      </div>
    </div>
  )
}

export default SignUp
