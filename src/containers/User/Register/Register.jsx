import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
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
    instagram_account: ""
  })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/')
    }
  }, [])

  const handleInput = (event) => {
    setRegister(
      {
        ...register,
        [event.target.name]: event.target.value
      }
    )
  }

  const userRegister = (event) => {
    event.preventDefault()

    //Esta expresión regular ayuda a validar un email
    /*     if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
          setRegister({
            ...register,
            isError: true,
            message: 'Wrong e-mail'
          });
          return;
        }
    
        if (register.password.length > 6) {
          if (! /[\d()+-]/g.test(register.password)) {
            setRegister({
              ...register,
              isError: true,
              message: 'Wrong password'
            });
            return;
          };
    
        } else {
          setRegister({
            ...register,
            isError: true,
            message: 'Password must be at least 6 characters long'
          });
          return;
        } */

    setRegister({
      ...register,
      isError: false,
      errorMsg: ''
    });
    


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

        <div className="inputLabelBox">
          <label>
            Name
          </label>
          <input className='registerInput' type="text" id='name' placeholder='Name' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Lastname
          </label>
          <input className='registerInput' type="text" id='lastname' placeholder='Lastname' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Nickname
          </label>
          <input className='registerInput' type="text" id='nickname' placeholder='Nickname' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Email
          </label>
          <input className='registerInput' type="text" id='email' placeholder='Email' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Password
          </label>
          <input className='registerInput' type="password" id='password' placeholder='Password' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Genre
          </label>
          <input className='registerInput' type="text" id='genre' placeholder='Genre' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Age
          </label>
          <input className='registerInput' type="text" id='age' placeholder='Age' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Country
          </label>
          <input className='registerInput' type="text" id='country' placeholder='Country' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Favourite author
          </label>
          <input className='registerInput' type="text" id='favouriteAuthor' placeholder='Favourite author' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Favourite genre
          </label>
          <input className='registerInput' type="text" id='favouriteGenre' placeholder='Favourite genre' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Currently reading
          </label>
          <input className='registerInput' type="text" id='currentlyReading' placeholder='Currently reading' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Facebook account
          </label>
          <input className='registerInput' type="text" id='facebookAccount' placeholder='Facebook account' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Twitter account
          </label>
          <input className='registerInput' type="text" id='twitterAccount' placeholder='Twitter account' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <label>
            Instagram account
          </label>
          <input className='registerInput' type="text" id='instagramAccount' placeholder='Instagram account' onChange={handleInput} />
        </div>

        <div className="inputLabelBox">
          <button className='sendButtom' type="submit" >Register</button >
        </div>

      </form>

{/*       <p>{register.isError ? register.message : ''}</p>
      <p>{identification.isError ? identification.errorMessage : identification.successMessage}</p> */}

    </div>
  )
}

export default Register