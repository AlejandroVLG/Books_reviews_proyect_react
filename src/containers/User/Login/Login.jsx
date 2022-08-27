import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData, } from "../userSlice";

import "./Login.css";

const Login = () => {

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const [msgError, setMsgError] = useState("");

  const dispatch = useDispatch();

  const identification = useSelector(userData);

  let navigate = useNavigate()

  const updateCredentials = (e) => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    )
  }

  useEffect(() => {

    if (identification?.token !== '') {
      setTimeout(() => {
        navigate("/");

      }, 200)
    };
  });

  const log = () => {

    if (credentials.password.length > 6) {

      if (! /[\d()+-]/g.test(credentials.password)) {
        setMsgError('Wrong password');
        return;
      };

    } else {
      setMsgError('Password must be at least 6 characters long');
      return;
    }

    setMsgError("");

    dispatch(loginUser({
      email: credentials.email,
      password: credentials.password
    }
    ));
  };

  return (
    <div className='loginDesign'>

      {/* <pre>{JSON.stringify(credentials, null, 2)}</pre> */}
      <input type='text' name='email' title='email' placeholder='Client email' onChange={updateCredentials} lenght='30' />
      <input type='password' name='password' title='password' placeholder='Password' onChange={updateCredentials} lenght='30' />
      <button variant="primary" className="loginButton" onClick={() => log()}>Login</button>
      <div className='error'>{msgError}</div>

    </div>
  )
}

export default Login; 