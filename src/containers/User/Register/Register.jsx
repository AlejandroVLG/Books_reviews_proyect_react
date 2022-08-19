import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, userData } from '../userSlice';

import "./Register.css";

const Register = props => {

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const identification = useSelector(userData)

  const [register, setRegister] = useState({
    name: "",
    last_name: "",
    nick_name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    country: "",
    favourite_author: "",
    favourite_genre: "",
    currently_reading: "",
    facebook_account: "",
    twitter_account: "",
    instagram_account: "",
  })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/')
    }
  }, [])

  const handleInput = (e) => {
    setRegister(
      {
        ...register,
        [e.target.value]: e.target.value
      }
    )
  }

  const userRegister = (event) => {
    event.preventDefault()

    //Esta expresión regular ayuda a validar un email
   /*  if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
      setRegister(
        {
          ...register,
          isError: true,
          message: "Wrong e-mail"
        }
      );
      return;
    } */

   /*  if (register.password.length >= 6) {

      //Esta expresión regular ayuda a validar un password (número + letras en este caso)
      if (! /[\d()+-]/g.test(register.password)) {

        setRegister(
          {
            ...register,
            isError: true,
            message: "Wrong password"
          }
        );
        return;
      };

    } else {

      setRegister(
        {
          ...register,
          isError: true,
          message: "Password must be at least 6 characters long"
        }
      );
      return;
    } */

    setRegister(
      {
        ...register,
        isError: false,
        errorMsg: ""
      }
    )

    dispatch(registerUser
      (
        register.name,
        register.last_name,
        register.nick_name,
        register.email,
        register.password,
        register.gender,
        register.age,
        register.country,
        register.favourite_author,
        register.favourite_genre,
        register.currently_reading,
        register.facebook_account,
        register.twitter_account,
        register.instagram_account
      )
    )

  }

  return (
    <div className='mainRegisterBox'>
      <form className='registerForm' onSubmit={userRegister}>
        <input className='registerInput' type="text" id='name' placeholder='name' onChange={handleInput} />
        <input className='registerInput' type="text" id='lastName' placeholder='Last name' onChange={handleInput} />
        <input className='registerInput' type="text" id='nickName' placeholder='Nick name' onChange={handleInput} />
        <input className='registerInput' type="text" id='email' placeholder='Email' onChange={handleInput} />
        <input className='registerInput' type="text" id='password' placeholder='Password' onChange={handleInput} />
        <input className='registerInput' type="text" id='genre' placeholder='Genre' onChange={handleInput} />
        <input className='registerInput' type="text" id='age' placeholder='Age' onChange={handleInput} />
        <input className='registerInput' type="text" id='country' placeholder='Country' onChange={handleInput} />
        <input className='registerInput' type="text" id='favouriteAuthor' placeholder='Favourite author' onChange={handleInput} />
        <input className='registerInput' type="text" id='favouriteGenre' placeholder='Favourite genre' onChange={handleInput} />
        <input className='registerInput' type="text" id='currentlyReading' placeholder='Currently reading' onChange={handleInput} />
        <input className='registerInput' type="text" id='facebookAccount' placeholder='Facebook account' onChange={handleInput} />
        <input className='registerInput' type="text" id='twitterAccount' placeholder='Twitter account' onChange={handleInput} />
        <input className='registerInput' type="text" id='instagramAccount' placeholder='Instagram account' onChange={handleInput} />
        <input className='sendButtom' type="submit" id='save' value="register" />
      </form>

      <p>{register.isError ? register.message : ''}</p>
      <p>{identification.isError ? identification.errorMessage : identification.successMessage}</p>

    </div>
  )
}

export default Register