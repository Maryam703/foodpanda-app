import React, { useRef, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import "./SignUp-Login.css";

function SinUpRider() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState(null);
    const inputFile = useRef()
    const navigate = useNavigate()

    // const selectFileHandler = () => {
    //     inputFile.current.click()
    // }

    const userData = {
        name, 
        email,
        avatar,
        password,
        adress,
        city,
        contact,
        role : "rider"
      }

    const signUpHandler = (e) => {
        e.preventDefault();
        console.log(userData);
        navigate("/orders")
    }

    return (
        <Form className='signup-login-container' onSubmit={signUpHandler}>
            <div>
                <div className='signup-login-profle-image'></div>
                <p className='signup-login-container-select-image'>Welcome to foodpanda app</p>
                {/* id='file-input'  for display none of input*/}
                <input ref={inputFile} required name="avatar" type='file' value={avatar} onChange={(e) => setAvatar(e.target.files[0])} />
                <input required type='text' value={name} placeholder='Enter restaurant name:' onChange={(e) => setName(e.target.value)} />
                <input required type='email' value={email} placeholder='Enter a valid email:' onChange={(e) => setEmail(e.target.value)} />
                <input required type='text' value={adress} placeholder='Enter complete adress:' onChange={(e) => setAdress(e.target.value)} />
                <input required type='text' value={city} placeholder='Enter city name:' onChange={(e) => setCity(e.target.value)} />
                <input required type='number' value={contact} placeholder='Enter contact number:' onChange={(e) => setContact(e.target.value)} />
                <input required type='password' value={password} placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

                <button>SignUp Rider</button>

            </div>
        </Form>
    )
}

export default SinUpRider


