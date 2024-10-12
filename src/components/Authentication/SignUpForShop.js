import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp-Login.css";

function SignUpForShop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const inputFile = useRef()
  const navigate = useNavigate()

  const selectFileHandler = () => {
    inputFile.current.click()
  }

  const createShopHandler = (e) => {
    e.preventDefault();
    navigate("/shopkeeper/add-product")
  }

  return (
    <div className='signup-login-container'>
      <div>
        <div className='signup-login-profle-image' onClick={selectFileHandler}></div>
        <p className='signup-login-container-select-image'>Select your profile for your restaurant here</p>
        <input id='file-input' ref={inputFile} required type='file' value={file} onChange={(e) => setFile(e.target.files[0])} />
        <input required type='text' value={name} placeholder='Enter restaurant name:' onChange={(e) => setName(e.target.value)} />
        <input required type='email' value={email} placeholder='Enter a valid email:' onChange={(e) => setEmail(e.target.value)} />
        <input required type='text' value={adress} placeholder='Enter complete adress:' onChange={(e) => setAdress(e.target.value)} />
        <input required type='text' value={city} placeholder='Enter city name:' onChange={(e) => setCity(e.target.value)} />
        <input required type='number' value={mobNumber} placeholder='Enter contact number:' onChange={(e) => setMobNumber(e.target.value)} />
        <input required type='password' value={password} placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

        <button onClick={createShopHandler}>Create</button>

         </div>
    </div>
  )
}

export default SignUpForShop

