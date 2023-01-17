import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner'
import "./Register.scss"

const Register = () => {

  const navigate = useNavigate()

  const [register, setRegister] = useState(
    {
      name: "",
      nick_name: "",
      email: "",
      password: "",
      profile_img: "",
      registerMessage: ""
    }
  )

  const handleInput = (e) => {
    setRegister(
      {
        ...register,
        [e.target.name]: e.target.value
      }
    )
  }

  const clearValidationMessageHandler = () => {

    if (register.isError === true) {

      setTimeout(() => {

        setRegister({
          ...register,
          registerMessage: ""
        })
      }, 600)
    }
  }

  const userRegister = async (event) => {

    event.preventDefault()

    if (! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(register.name)) {

      setRegister(
        {
          ...register,
          isError: true,
          registerMessage: "Nombre incorrecto"
        }
      )
      return
    }

    if (! /^[a-zA-Z0-9\_\-]{4,16}$/.test(register.nick_name)) {

      setRegister(
        {
          ...register,
          isError: true,
          registerMessage: "Nickname incorrecto"
        }
      )
      return
    }

    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
      setRegister(
        {
          ...register,
          isError: true,
          registerMessage: "E-mail incorrecto"
        }
      )
      return
    }

    if (register.password.length >= 6) {

      if (! /^.{4,16}$/g.test(register.password)) {

        setRegister(
          {
            ...register,
            isError: true,
            registerMessage: "Contraseña no permitida"
          }
        )
        return
      }
    } else {

      setRegister(
        {
          ...register,
          isError: true,
          registerMessage: "La contraseña debe tener al menos 6 carácteres"
        }
      )
      return
    }

    try {

      const user = await axios.post('https://bookapi.up.railway.app/api/register',
        {
          name: register.name,
          nick_name: register.nick_name,
          email: register.email,
          password: register.password,
          profile_img: register.profile_img
        }
      )

      if (!user) {

        setRegister(
          {
            ...register,
            isError: true,
            registerMessage: "Request failed"
          }
        )
      } else {

        setRegister(
          {
            ...register,
            isError: false,
            registerMessage: "Registro completado correctamente"
          }
        )
      }

    } catch (error) {

      if (
        error.response.status == 400
      ) {
        setRegister(
          {
            ...register,
            isError: true,
            registerMessage:
              error.response.data.error.name ||
              error.response.data.error.nick_name ||
              error.response.data.error.email ||
              error.response.data.error.password ||
              error.response.data.error.profile_img
          }
        )
      } else {
        setRegister(
          {
            ...register,
            isError: true,
            registerMessage: error.message
          }
        )
      }
    }
  }

  useEffect(() => {

    if (register.registerMessage == "Registro completado correctamente") {

      setTimeout(() => {
        navigate("/login")

      }, 1000)

    }
  })

  return (

    <Form className='registerForm' onSubmit={userRegister}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='registerLabel'>Nombre</Form.Label>
            <Form.Control
              className='registerInput'
              type="text"
              name='name'
              placeholder='Introduce tu nombre'
              onChange={handleInput}
              onClick={clearValidationMessageHandler}
            />
            <Form.Text className="text-muted">
              Puede contener letras, espacios y signos de acentuación.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
          <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label className='registerLabel'>Nickname</Form.Label>
            <Form.Control
              className='registerInput'
              type="text"
              name='nick_name'
              placeholder='Introduce un apodo'
              onChange={handleInput}
              onClick={clearValidationMessageHandler}
            />
            <Form.Text className="text-muted">
              De 4 a 16 carácteres con letras, números, guión o guión bajo.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='registerLabel'>Correo electrónico</Form.Label>
            <Form.Control
              className='registerInput'
              type="email"
              name='email'
              placeholder='Introduce un email de contacto'
              onChange={handleInput}
              onClick={clearValidationMessageHandler}
            />
            <Form.Text className="text-muted">
              Formato de E-mail válido obligatorio.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='registerLabel'>Contraseña</Form.Label>
            <Form.Control
              className='registerInput'
              type="password"
              name='password'
              placeholder='Password'
              onChange={handleInput}
              onClick={clearValidationMessageHandler}
            />
            <Form.Text className="text-muted">
              Debe contener mínimo de 6 carácteres.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
          <Form.Group className="mb-3 buttonBox">
            <button className='sendButtom' variant="primary" type="submit">
              Registrarse
            </button>
            <div className='registerMessage'>
              {
                register.isError ?
                  (<p style={{ color: "red" }}>{register.registerMessage}</p>)
                  :
                  (<p style={{ color: "green" }}>{register.registerMessage}</p>)
              }
              {register.isError === "" && <div><Spinner /></div>}
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Register