import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner'
import { registerUser } from '../userSlice'
import "./Register.scss"

const Register = props => {

  try {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [register, setRegister] = useState(
      {
        name: "",
        nick_name: "",
        email: "",
        password: "",
        profile_img: ""
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

    const userRegister = (event) => {

      event.preventDefault()

      if (! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(register.name)) {

        setRegister(
          {
            ...register,
            isError: true,
            message: "Nombre incorrecto"
          }
        )
        return
      }

      if (! /^[a-zA-Z0-9\_\-]{4,16}$/.test(register.nick_name)) {

        setRegister(
          {
            ...register,
            isError: true,
            message: "Nickname incorrecto"
          }
        )
        return
      }

      if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
        setRegister(
          {
            ...register,
            isError: true,
            message: "E-mail incorrecto"
          }
        )
        return
      }

      if (register.password.length >= 6) {

        if (! /^.{4,12}$/g.test(register.password)) {

          setRegister(
            {
              ...register,
              isError: true,
              message: "Contraseña no permitida"
            }
          )
          return
        }
      } else {

        setRegister(
          {
            ...register,
            isError: true,
            message: "La contraseña debe tener al menos 6 carácteres"
          }
        )
        return
      }

      setRegister(
        {
          ...register,
          isError: false,
          profile_img: "../../../../public/Img/ProfileImg.jpg",
          successMsg: "Registro completado correctamente"
        }
      )

      dispatch(registerUser
        (
          register.name,
          register.nick_name,
          register.email,
          register.password,
          register.profile_img
        )
      )
    }

    useEffect(() => {

      if (register.isError === true) {

        setTimeout(() => {
          navigate("/register")

        }, 1000)
      } else if (register.successMsg == "Registro completado correctamente") {

        setTimeout(() => {
          navigate("/login")

        }, 1000)
      }
    })

    return (

      <Form fluid className='registerForm' onSubmit={userRegister}>
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
              />
              <Form.Text className="text-muted">
                Debe contener mínimo de 6 carácteres.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
            <Form.Group className="mb-3 boxButton">
              <button className='sendButtom' variant="primary" type="submit">
                Registrarse
              </button>
              <div className='registerMessage'>
                {
                  register.isError ?
                    (<p style={{ color: "red" }}>{register.message}</p>)
                    :
                    (<p style={{ color: "green" }}>{register.successMsg}</p>)
                }
                {register.isError === "" && <p><Spinner /></p>}
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    )
  } catch (error) {
    console.log(error)
  }
}

export default Register