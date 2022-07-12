import React, { useState } from 'react'
import "./Login.css";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch(error => alert(error.message))
  }
  return (
    <div className='register'>
      <div className="register-container">
        <img src="https://st.depositphotos.com/2036511/4057/v/600/depositphotos_40575113-stock-illustration-login-button.jpg" alt=''></img>
        <div className="register-info">
          <div className="register-id">
            <input type="text" placeholder="Email Address"
              value={email} onChange={handleEmail} ></input>
            <input type="text" placeholder='Enter your password'
              value={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        <button className="register-button" onClick={register}>Create New Account</button>
        <div className="login-link">
          <p>Already have an account!</p>
          <Link to='/login'>
            <span>LOGIN</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
