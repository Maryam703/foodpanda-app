import React, { useState } from 'react'
import "./SignUp-Login.css"
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='signup-login-container'>
            <div>
                <div className='signup-login-profle-image'></div>
                <p className='signup-login-container-select-image'>Welcome to the foodpanda app!</p>

                <input required type='email' value={email} placeholder='Enter your email:' onChange={(e) => setEmail(e.target.value)} />
                <input required type='password' value={password} placeholder='Enter your password:' onChange={(e) => setPassword(e.target.value)} />

                <button>Login</button>

                <p className='signup-login-redirect-para'>Don't have an account? <Link to="/signUp">SignUp here!</Link></p>
            </div>
        </div>
    )
}
