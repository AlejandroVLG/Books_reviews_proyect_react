import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { login, userData, } from "../userSlice"
import { Col, Container, Form, Row } from 'react-bootstrap'
import Spinner from '../../../components/Spinner/Spinner'
import "./Login.scss"
import axios from 'axios'

const Login = () => {

  const [credentials, setCredentials] = useState(
    {
      email: '',
      password: ''
    }
  )

  const dispatch = useDispatch()

  const identification = useSelector(userData)

  const navigate = useNavigate()

  const updateCredentials = (e) => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    )
  }

  useEffect(() => {

    if (identification.token !== '') {

      setTimeout(() => {
        navigate("/books")

      }, 500)
    }
  })

  const log = async () => {

    if (credentials.password.length >= 6) {

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

    let body = {
      email: credentials.email,
      password: credentials.password
    }

    const userToken = await axios.post("https://bookapi.up.railway.app/api/login", body)

    if (userToken.status === 200) {

      const identification = userToken.data

      let requirements = {
        headers: {
          "Authorization": `Bearer ${identification.token}`
        }
      }

      const userInfoData = await axios.get('https://bookapi.up.railway.app/api/user/myProfile', requirements)

      dispatch(login(
        {
            token: userToken.data.token,
            infoData: userInfoData.data
        }
    ))
    }
  }

  return (

    <Container fluid className='loginBox'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='loginLabel'>Correo electrónico</Form.Label>
            <Form.Control
              className='loginInput'
              type="email"
              name='email'
              placeholder='Escribe aquí'
              onChange={updateCredentials}
            />
            <Form.Text className="text-muted">
              Introduce tu E-mail
            </Form.Text>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='loginLabel'>Contraseña</Form.Label>
            <Form.Control
              className='loginInput'
              type="password"
              name='password'
              placeholder='Escribe aquí'
              onChange={updateCredentials}
            />
            <Form.Text className="text-muted">
              Introduce tu contraseña
            </Form.Text>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
          <Form.Group className="mb-3 boxLoginButton">
            <button className='loginButton' variant="primary" onClick={() => log()}>
              Iniciar sesión
            </button>
            <div className='loginMessage'>
              {
                credentials.isError ?
                  (<p style={{ color: "red" }}>{credentials.message}</p>)
                  :
                  (<p style={{ color: "green" }}>{credentials.successMsg}</p>)
              }
              {credentials.isError === "" && <p><Spinner /></p>}
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}

export default Login