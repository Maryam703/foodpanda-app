import React, { useRef, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import "./SignUp-Login.css";
import axios from 'axios';
import ApiLoader from '../../ApiLoader/ApiLoader';
import myAxios from '../../MyAxios';

function SignUpForShop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false)
  const inputFile = useRef()
  const navigate = useNavigate()

  const selectFileHandler = () => {
    inputFile.current.click()
  }

  const createShopHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    const userData = {
      name,
      email,
      avatar,
      password,
      adress,
      city,
      contact,
      role: "shopadmin"
    }

    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });

    try {
      setLoading(true)
      let res = await myAxios.post("/shop/create-new-shop", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      let user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user))

      navigate("/shopadmin-dashboard");
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <> {loading && <ApiLoader />}
    <Form className='signup-login-container' onSubmit={createShopHandler}>
      <div>
        <div className='signup-login-profle-image'></div>
        <p className='signup-login-container-select-image' onClick={selectFileHandler}>Select your profile for your restaurant here</p>
        <input id='file-input' ref={inputFile} type='file' onChange={(e) => setAvatar(e.target.files[0])} />
        <input required type='text' value={name} placeholder='Enter restaurant name:' onChange={(e) => setName(e.target.value)} />
        <input required type='email' value={email} placeholder='Enter a valid email:' onChange={(e) => setEmail(e.target.value)} />
        <input required type='text' value={adress} placeholder='Enter complete adress:' onChange={(e) => setAdress(e.target.value)} />
        <input required type='text' value={city} placeholder='Enter city name:' onChange={(e) => setCity(e.target.value)} />
        <input required type='number' value={contact} placeholder='Enter contact number:' onChange={(e) => setContact(e.target.value)} />
        <input required type='password' value={password} placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

        <button>Create</button>

      </div>
    </Form>
    </>
  )
}

export default SignUpForShop

