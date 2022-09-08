import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { loginUser, userData, } from "../userSlice"
import { Form } from 'react-bootstrap'
import "./Login.css"

const Login = () => {

  const [credentials, setCredentials] = useState(
    {
      email: '',
      password: ''
    }
  )

  const dispatch = useDispatch()

  const identification = useSelector(userData)

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
        navigate("/")

      }, 500)
    }
  })

  const log = () => {

    if (credentials.password.length > 6) {

      if (! /[\d()+-]/g.test(credentials.password)) {

        setCredentials(
          {
            ...credentials,
            isError: true,
            message: "Contraseña incorrecta"
          }
        )
        return
      }

    } else {

      setCredentials(
        {
          ...credentials,
          isError: true,
          message: "La contraseña debe tener al menos 6 carácteres"
        }
      )
      return
    }

    setCredentials(
      {
        ...credentials,
        isError: false,
        successMsg: "Te has identificado correctamente"
      }
    )

    dispatch(loginUser(
      {
        email: credentials.email,
        password: credentials.password
      }
    ))
  }

  return (

    <div className='mainLoginBox'>
      <div className='loginBox'>
        <div className='login'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='loginLabel'>Correo electrónico</Form.Label>
            <Form.Control className='loginInput' type="email" name='email' placeholder='Escribe aquí' onChange={updateCredentials} />
            <Form.Text className="text-muted">
              Introduce tu E-mail
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='loginLabel'>Contraseña</Form.Label>
            <Form.Control className='loginInput' type="password" name='password' placeholder='Escribe aquí' onChange={updateCredentials} />
            <Form.Text className="text-muted">
              Introduce tu contraseña
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 boxLoginButton">
            <button className='loginButton' variant="primary" onClick={() => log()}>
              Iniciar sesión
            </button>
            <div className='loginMessage'>{credentials.isError ? (<p style={{ color: "red" }}>{credentials.message}</p>) : (<p style={{ color: "green" }}>{credentials.successMsg}</p>)}</div>
          </Form.Group>

        </div>
      </div>
    </div>
  )
}


export default Login