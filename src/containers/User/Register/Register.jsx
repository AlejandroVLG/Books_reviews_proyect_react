import { Formulary, BoxButtonCentered, RegisterButton, SuccessMsg, ErrorMsg } from '../../../styledComponents/styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import InputStyledComponent from '../../../components/InputStyledComponent/InputStyledComponent';
import React, { useEffect, useState } from 'react';
import { registerUser } from '../userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import "./Register.css";

const Register = props => {

  try {
    const dispatch = useDispatch()

    let navigate = useNavigate()

    const regularExpression = {
      name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters, spacing between words and accentuation allowed.
      nickname: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letters, numbers, " - " and " _ " allowed.
      password: /^.{4,12}$/, // Mín characters 4, max 12.
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // E-mail format required.
    }

    const [nameData, setNameData] = useState({ field: '', valid: null })
    const [nicknameData, setNicknameData] = useState({ field: '', valid: null })
    const [emailData, setEmailData] = useState({ field: '', valid: null })
    const [passwordData, setPasswordData] = useState({ field: '', valid: null })
    const [passwordData2, setPasswordData2] = useState({ field: '', valid: null })
    const [formularyValid, setFormularyValid] = useState(null);

    const [register, setRegister] = useState({
      name: "",
      nick_name: "",
      email: "",
      password: ""
    })

    useEffect(() => {
      if (localStorage.getItem("token")) {
        navigate('/')
      }
    }, [])

    const handleInputRegister = (event) => {
      setRegister(
        {
          ...register,
          [event.target.state]: event.target.value
        }
      )
    }

    // VALIDATIONS

    const password2Validation = () => {
      if (passwordData2.field.length > 0) {
        if (passwordData.field !== passwordData2.field) {
          setPasswordData2((prevState) => {
            return { ...prevState, valid: 'false' }
          });
        } else {
          setPasswordData2((prevState) => {
            return { ...prevState, valid: 'true' }
          });
        }
      }
    }

    const onSubmitValidations = (e) => {
      e.preventDefault();

      if (
        nameData.valid === 'true' &&
        nicknameData.valid === 'true' &&
        emailData.valid === 'true' &&
        passwordData.valid === 'true' &&
        passwordData2.valid === 'true'

      ) {
        setFormularyValid(true);
        setNameData({ field: '', valid: null });
        setNicknameData({ field: '', valid: '' });
        setEmailData({ field: '', valid: null });
        setPasswordData({ field: '', valid: null });
        setPasswordData2({ field: '', valid: 'null' });
        setRegister({
          ...register,
        });
        
        dispatch(registerUser
          (
            register.name,
            register.nick_name,
            register.email,
            register.password
          )
        )

      } else {
        setFormularyValid(false);
      }
    }

    return (

      <div className='mainBox'>
        <div className='mainRegisterBox' >

          <Formulary className='registerForm' onSubmit={onSubmitValidations}>

            <InputStyledComponent
              state={nameData}
              changeValidation={setNameData}
              changeRegister={handleInputRegister}
              type="text"
              label="Nombre"
              placeholder="Introduzca su nombre"
              name="name"
              errorLeyend="El nombre solo puede contener letras y espacios."
              regularExpression={regularExpression.name}
            />
            <InputStyledComponent
              state={nicknameData}
              changeValidation={setNicknameData}
              changeRegister={handleInputRegister}
              type="text"
              label="Apodo"
              placeholder="Introduzca su apodo"
              name="nick_name"
              errorLeyend="El apodo puede constar de números letras o guión bajo y con una longitud de entre 4 y 16 carácteres"
              regularExpression={regularExpression.nickname}
            />
            <InputStyledComponent
              state={emailData}
              changeValidation={setEmailData}
              changeRegister={handleInputRegister}
              type="email"
              label="Email"
              placeholder="Introduzca su email"
              name="email"
              errorLeyend="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
              regularExpression={regularExpression.email}
            />
            <InputStyledComponent
              state={passwordData}
              changeValidation={setPasswordData}
              changeRegister={handleInputRegister}
              type="password"
              label="Contraseña"
              placeholder="Introduzca su contraseña"
              name="password"
              errorLeyend="La contraseña tiene que ser de 4 a 12 dígitos."
              regularExpression={regularExpression.password}
            />
            <InputStyledComponent
              state={passwordData2}
              changeValidation={setPasswordData2}
              type="password"
              label="Repetir contraseña"
              placeholder="Introduzca otra vez su contraseña"
              name="password2"
              errorLeyend="Ambas contraseñas deben ser iguales."
              functionData={password2Validation}
            />
            {formularyValid === false && <ErrorMsg>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </ErrorMsg>}
            <BoxButtonCentered>
              <RegisterButton type="submit">Registrarse</RegisterButton>
              {formularyValid === true && <SuccessMsg>Formulario enviado exitosamente!</SuccessMsg>}
            </BoxButtonCentered>

          </Formulary>

        </div>
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}

export default Register