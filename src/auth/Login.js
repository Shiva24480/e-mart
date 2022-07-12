import React, { useEffect, useState } from 'react'
import "./Login.css";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [{ user }, dispatch] = useStateValue();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/');
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch(error => alert(error.message))
  }

  const handelDefaultLogin = () => {
    setEmail("test@gmail.com");
    setPassword("123456");
    // signIn();
  }
  return (
    <div className='login'>
      <div className="login-container">
        <img src="https://st.depositphotos.com/2036511/4057/v/600/depositphotos_40575113-stock-illustration-login-button.jpg" alt=''></img>
        <div className="login-info">
          <div className="login-id">
            <input type="text" placeholder="Email Address"
              value={email} onChange={handleEmail} ></input>
            <input type="text" placeholder='Enter your password'
              value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button onClick={signIn} >Continue</button>
        </div>
        <div className="register-link">
          <p>Create new account!</p>
          <Link to='/register'>
            <span>REGISTER</span>
          </Link>
        </div>
        <button onClick={handelDefaultLogin}>Default Login</button>
      </div>
    </div>
  )
}

export default Login
