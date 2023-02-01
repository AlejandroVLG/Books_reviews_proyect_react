import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userData } from '../User/userSlice'
import { Col, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import "./EditUser.scss"

const EditUser = () => {

    const identification = useSelector(userData)

    const { id } = useParams()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [editedUserState, setEditedUserState] = useState({
        name: '',
        last_name: '',
        nick_name: '',
        password: '',
        gender: '',
        age: '',
        country: '',
        favourite_author: '',
        favourite_genre: '',
        currently_reading: '',
        facebook_account: '',
        twitter_account: '',
        instagram_account: '',
        profile_img: ''
    })

    // avatar image state
    const [avatarImgState, setAvatarImgState] = useState("")

    const showUserData = async () => {

        let oldDataResponse = await axios.get(`https://bookapi.up.railway.app/api/user/showUserById/${id}`, requirements)

        setEditedUserState({
            name: oldDataResponse.data.data.name,
            last_name: oldDataResponse.data.data.last_name || "Info no disponible",
            nick_name: oldDataResponse.data.data.nick_name,
            password: oldDataResponse.data.data.password,
            gender: oldDataResponse.data.data.gender || "Info no disponible",
            age: oldDataResponse.data.data.age || "Info no disponible",
            country: oldDataResponse.data.data.country || "Info no disponible",
            favourite_author: oldDataResponse.data.data.favourite_author || "Info no disponible",
            favourite_genre: oldDataResponse.data.data.favourite_genre || "Info no disponible",
            currently_reading: oldDataResponse.data.data.currently_reading || "Info no disponible",
            facebook_account: oldDataResponse.data.data.facebook_account || "blank",
            twitter_account: oldDataResponse.data.data.twitter_account || "blank",
            instagram_account: oldDataResponse.data.data.instagram_account || "blank",
            profile_img: oldDataResponse.data.data.profile_img,
        })
    }

    useEffect(() => {
        showUserData()
    }, [])

    const handleChange = (e) => {
        setEditedUserState({
            ...editedUserState,
            [e.target.name]: e.target.value
        })
        setAvatarImgState({
            ...avatarImgState,
            [e.target.name]: e.target.value
        })
    }

    // clearing function for validations messages
    const clearValidationMessageHandler = () => {

        setTimeout(() => {
            setEditedUserState({
                message: ""
            })
        }, 1000);
    }

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`,
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            await axios.put(`https://bookapi.up.railway.app/api/user/editMyProfile`, editedUserState, requirements)

            if (!editedUserState.isError) {

                setEditedUserState({
                    ...editedUserState,
                    isError: false,
                    message: 'El usuario ha sido modificado'
                })
                setTimeout(() => {

                    dispatch(logOut())
                    navigate("/books")
                }, 1500)

            } else {
                setEditedUserState({
                    ...editedUserState,
                    isError: true,
                    message: "Ha habido un error"
                })
            }
        } catch (error) {

            setEditedUserState({
                ...editedUserState,
                isError: true,
                message:
                    error.response.data.message.name ||
                    error.response.data.message.last_name ||
                    error.response.data.message.nick_name ||
                    error.response.data.message.password ||
                    error.response.data.message.gender ||
                    error.response.data.message.age ||
                    error.response.data.message.country ||
                    error.response.data.message.favourite_author ||
                    error.response.data.message.favourite_genre ||
                    error.response.data.message.currently_reading ||
                    error.response.data.message.facebook_account ||
                    error.response.data.message.twitter_account ||
                    error.response.data.message.instagram_account ||
                    error.response.data.message.profile_img ||
                    error.response.data.message
            })
        }
    }

    if (identification.token === "") {

        return (navigate("/login"))
    } else {

        return (
            <Form className='editProfileForm' onSubmit={handleSubmit} >
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicName" >
                            <Form.Label className='editProfileLabel'>
                                Nombre
                            </Form.Label >
                            <Form.Control
                                className='editProfileInput'
                                type="text" name='name'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar nombre
                            </Form.Text>
                        </Form.Group >
                    </Col >
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label className='editProfileLabel'>
                                Apellidos
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="text"
                                name='last_name'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar apellidos
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicGender">
                            <Form.Label className='editProfileLabel'>
                                Género
                            </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className='editProfileInput'
                                name='gender'
                                onClick={clearValidationMessageHandler}
                                onChange={handleChange}>
                                <option>Abrir el desplegable</option>
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                                <option value="Prefiero no indicarlo">Prefiero no indicarlo</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Modificar género
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='editProfileLabel'>
                                Contraseña
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="password"
                                name='password'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Introducir nueva contraseña
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label className='editProfileLabel'>
                                Fecha de nacimiento
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="date"
                                min="01-01-1800"
                                max="31-12-2050"
                                name='age'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar fecha de nacimiento
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label className='editProfileLabel'>
                                Residencia actual
                            </Form.Label>
                            <Form.Select
                                className='editProfileInput'
                                name='country'
                                onClick={clearValidationMessageHandler}
                                onChange={handleChange}>
                                <option>Abrir el desplegable</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Modificar país de residencia
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicFavouriteAuthor">
                            <Form.Label className='editProfileLabel'>
                                Autor favorito
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="text"
                                name='favourite_author'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar autor favorito
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicFavouriteGenre">
                            <Form.Label className='editProfileLabel'>
                                Género literario favorito
                            </Form.Label>
                            <Form.Select
                                className='editProfileInput'
                                name='favourite_genre'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            >
                                <option>Abrir el desplegable</option>
                                <option value="Autobiografía">Autobiografía</option>
                                <option value="Aventuras">Aventuras</option>
                                <option value="Ciencia ficción">Ciencia ficción</option>
                                <option value="Policíaca">Policíaca</option>
                                <option value="Educativa">Educativa</option>
                                <option value="Fantasía">Fantasía</option>
                                <option value="Histórica">Histórica</option>
                                <option value="Humor">Humor</option>
                                <option value="Infantil">Infantil</option>
                                <option value="Misterio">Misterio</option>
                                <option value="Novela negra">Novela negra</option>
                                <option value="Romance">Romance</option>
                                <option value="Terror">Terror</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Modificar género literario favorito
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicCurrentlyReading">
                            <Form.Label className='editProfileLabel'>
                                ¿Qué estás leyendo actualmente?
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="text"
                                name='currently_reading'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar leyendo actualmente
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicFacebookAccount">
                            <Form.Label className='editProfileLabel'>
                                Cuenta de Facebook
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="text"
                                name='facebook_account'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar cuenta de Facebook
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicTwitterAccount">
                            <Form.Label className='editProfileLabel'>
                                Cuenta de Twitter
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="text"
                                name='twitter_account'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar cuenta de Twitter
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicInstagramAccount">
                            <Form.Label className='editProfileLabel'>
                                Cuenta de Instagram
                            </Form.Label>
                            <Form.Control
                                className='editProfileInput'
                                type="text"
                                name='instagram_account'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                                onClick={clearValidationMessageHandler}
                            />
                            <Form.Text className="text-muted">
                                Modificar cuenta de Instagram
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3 imgBox" controlId="formBasicProfileImg">
                            <Form.Label className='editProfileLabel'>
                                Imagen de perfil
                            </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className='editProfileInput'
                                name='profile_img'
                                onClick={clearValidationMessageHandler}
                                onChange={handleChange}>
                                <option>Abrir el desplegable</option>
                                <option value="../../..public/Img/avatar1.jpg" className='avatar avatar1'>Imagen 1</option>
                                <option value="../../..public/Img/avatar2.jpg" className='avatar avatar2'>Imagen 2</option>
                                <option value="../../..public/Img/avatar3.jpg" className='avatar avatar3'>Imagen 3</option>
                                <option value="../../..public/Img/avatar4.jpg" className='avatar avatar4'>Imagen 4</option>
                                <option value="../../..public/Img/avatar5.jpg" className='avatar avatar5'>Imagen 5</option>
                                <option value="../../..public/Img/avatar6.jpg" className='avatar avatar6'>Imagen 6</option>
                                <option value="../../..public/Img/avatar7.jpg" className='avatar avatar7'>Imagen 7</option>
                                <option value="../../..public/Img/avatar8.jpg" className='avatar avatar8'>Imagen 8</option>
                                <option value="../../..public/Img/avatar9.jpg" className='avatar avatar9'>Imagen 9</option>
                                <option value="../../..public/Img/avatar10.jpg" className='avatar avatar10'>Imagen 10</option>
                                <option value="../../..public/Img/avatar11.jpg" className='avatar avatar11'>Imagen 11</option>
                                <option value="../../..public/Img/avatar12.jpg" className='avatar avatar12'>Imagen 12</option>
                                <option value="../../..public/Img/avatar13.jpg" className='avatar avatar13'>Imagen 13</option>
                                <option value="../../..public/Img/avatar14.png" className='avatar avatar14'>Imagen 14</option>
                                <option value="../../..public/Img/avatar15.jpg" className='avatar avatar15'>Imagen 15</option>
                                <option value="../../..public/Img/avatar16.jpg" className='avatar avatar16'>Imagen 16</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Selecciona una imagen de perfil
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="avatarImgBox" >
                        <img src={avatarImgState.profile_img} className='avatarImg' />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                        <Form.Group className="mb-3 editProfileBoxButton">
                            <button
                                className='editProfileSendButtom'
                                variant="primary"
                                type="submit"
                            >
                                Actualizar datos
                            </button>
                            <div className='editProfileMessage'>
                                {
                                    editedUserState.isError ?
                                        (<p style={{ color: "red" }}>{editedUserState.message}</p>)
                                        :
                                        (<p style={{ color: "green" }}>{editedUserState.message}</p>)
                                }
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form >
        )
    }
}

export default EditUser