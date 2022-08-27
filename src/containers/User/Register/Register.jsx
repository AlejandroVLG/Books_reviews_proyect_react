import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { registerUser, userData } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import "./Register.css";

const Register = props => {

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("");

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

    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
      setRegister({
        ...register,
        isError: true,
        msgIsError: 'Introduce un e-mail válido'
      });
      setTimeout(() => {
        setRegister({
          ...register,
          msgIsError: ""
        });
      }, 1500)
      return;
    }

    if (register.password.length >= 6) {
      if (! /[\d()+-]/g.test(register.password)) {
        setRegister({
          ...register,
          isError: true,
          msgIsError: 'Introduce un password válido'
        });
        setTimeout(() => {
          setRegister({
            ...register,
            msgIsError: ""
          });
        }, 1500)
        return;
      };

    } else {
      setRegister({
        ...register,
        isError: true,
        msgIsError: 'El password ha de contener al menos 6 carácteres'
      });
      setTimeout(() => {
        setRegister({
          ...register,
          msgIsError: ""
        });
      }, 1500)
      return;
    }

    setRegister({
      ...register,
      isError: false,
      msgIsError: ''
    });

    if (register.name == "") {
      setErrorMessage('Es obligatorio rellenar este campo');
      setTimeout(() => {
        setErrorMessage('');
      }, 1500)
      return;
    } else if (register.nick_name == "") {
      setErrorMessage('Es obligatorio rellenar este campo');
      setTimeout(() => {
        setErrorMessage('');
      }, 1500)
      return;
    } else if (register.email == "") {
      setErrorMessage('Es obligatorio rellenar este campo');
      setTimeout(() => {
        setErrorMessage('');
      }, 1500)
      return;
    } else if (register.password == "") {
      setErrorMessage('Es obligatorio rellenar este campo');
      setTimeout(() => {
        setErrorMessage('');
      }, 1500)
      return;
    };
    console.log(typeof (register.email));

    setErrorMessage('Registro completado');

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
          <label className='labelStyle' htmlFor='name'>Nombre</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='name' placeholder='Name' name='name' onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='lastname'>Apellidos</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='lastname' placeholder='Lastname' name="last_name" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='nickname'>Nick</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='nickname' placeholder='Nickname' name="nick_name" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='email'>E-mail</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='email' placeholder='Email' name="email" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='password'>Contraseña</label>
          <div className='inputBox'>
            <input className='registerInput' type="password" id='password' placeholder='Password' name="password" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='genre'>Género</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='genre' placeholder='Genre' name="genre" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='age'>Edad</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='age' placeholder='Age' name="age" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='country'>País</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='country' placeholder='Country' name="country" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='favouriteAuthor'>Autor favorito</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='favouriteAuthor' placeholder='Favourite author' name="favourite_author" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='favouriteGenre'>Género favorito</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='favouriteGenre' placeholder='Favourite genre' name="favourite_genre" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='currentlyReading'>Actualmente leyendo</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='currentlyReading' placeholder='Currently reading' name="currently_reading" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='facebookAccount'>Cuenta de Facebook</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='facebookAccount' placeholder='Facebook account' name="facebook_account" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='twitterAccount'>Cuenta de Twitter</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='twitterAccount' placeholder='Twitter account' name="twitter_account" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className="inputLabelBox">
          <label className='labelStyle' htmlFor='instagramAccount'>Cuenta de Instagram</label>
          <div className='inputBox'>
            <input className='registerInput' type="text" id='instagramAccount' placeholder='Instagram account' name="instagram_account" onChange={handleInput} />
            <FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckCircle} />
          </div>
          <p className='infoTextBox'>asdasdads</p>
        </div>

        <div className='errorMsgBox'>
          <p className='errorMsg'>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b className='errorBoldBox'>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </div>

        <div className="buttonBox">
          <button className='sendButton' type="submit" >Register</button >
          <p className='successMsg'>Formulario enviado correctamente</p>
        </div>

      </form>


      <p>{register.isError ? register.message : ''}</p>
      <p>{identification.isError ? identification.errorMessage : identification.successMessage}</p>

    </div>
  )
}

export default Register