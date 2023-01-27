import React from "react"
import { Icon } from "@iconify/react"
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit'
import "./AboutCard.scss"

const AboutCard = ({ onClick }) => {


    return (
        <MDBContainer className="aboutCardContainer" onClick={onClick}>
            <MDBCard className="mb-3 aboutCard frontCard" style={{ borderRadius: '.5em' }}>
                <MDBRow className="g-0 aboutCardBody" style={{ borderRadius: '.5em' }}>
                    <MDBCol>
                        <MDBCardBody className="p-4 ">

                            <MDBTypography className='dataHead'>
                                Proyecto final Alejandro Laguía García
                            </MDBTypography>
                            <hr className="mt-0 mb-5" />
                            <MDBRow className="pt-1">
                                <MDBCol
                                    className="mb-3">
                                    <MDBTypography tag="h6">
                                        Coding school
                                    </MDBTypography>
                                    <MDBCardText>GeeksHubs Academy</MDBCardText>
                                </MDBCol>
                                <MDBCol className="mb-3">
                                    <MDBTypography tag="h6">
                                        Lenguajes utilizados
                                    </MDBTypography>
                                    <MDBCardText tag="h5">HTML CSS JS</MDBCardText>
                                </MDBCol>
                                <MDBCol className="mb-3">
                                    <MDBTypography tag="h6">
                                        Librearías utilizadas
                                    </MDBTypography>
                                    <MDBCardText tag="h5">
                                        React Redux Bootstrap
                                        <br />
                                        Framer-motion Axios
                                        <br />
                                        Jsonwebtoken MDB SASS
                                    </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <MDBCol className="mb-3">
                                <MDBTypography>
                                    SOBRE EL PROYECTO
                                </MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBCardText >
                                    Aplicación creada con el fin usarla como catálogo de reseñas personal.
                                    Adicionalmente la web permite el registro de nuevos usuarios por si
                                    en un futuro decido que sea púbica, los nuevos usuarios que se registraran
                                    también podrían añadir nuevos libros y sus respectivas reseñas.
                                    <br />
                                    El proyecto consta de 2 partes, un back-end hecho en PHP/Laravel con su deploy
                                    subido a Heroku, y el front-end realizado en react con su deploy realizado en
                                    github pages.
                                </MDBCardText>
                            </MDBCol>
                            <MDBRow>
                                <MDBCol className="mb-3">
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect_react"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill"></Icon>
                                    </a>
                                    <p>Proyecto Front-end</p>
                                </MDBCol>

                                <MDBCol className="mb-3" >
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill"></Icon>
                                    </a>
                                    <p>Proyecto Back-end</p>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mt-6 mb-4" />
                        </MDBCardBody>
                        <MDBRow>
                            <MDBCol className="mb-3">
                                <a
                                    tag='a'
                                    href="https://github.com/Alexdck"
                                    target="_blank"
                                >
                                    <Icon icon="ri:github-fill"></Icon>
                                </a>
                                <p>Cuenta Github</p>
                            </MDBCol>
                            <MDBCol className="mb-3">
                                <a
                                    tag='a'
                                    href="https://www.linkedin.com/in/alejandrolaguia/"
                                    target="_blank"
                                >
                                    <Icon icon="ri:linkedin-fill"></Icon>
                                </a>
                                <p>Perfil LinkedIN</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCard>

            <MDBCard className="mb-3 aboutCard backCard" style={{ borderRadius: '.5em' }}>
                <MDBRow className="g-0 aboutCardBody" style={{ borderRadius: '.5em' }}>
                    <MDBCol>
                        <MDBCardBody className="p-4 ">
                            <MDBCol className="mb-3">
                                <MDBTypography>
                                    SOBRE EL PROYECTO
                                </MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBCardText >
                                    Aplicación creada con el fin usarla como catálogo de reseñas personal.
                                    Adicionalmente la web permite el registro de nuevos usuarios por si
                                    en un futuro decido que sea púbica, los nuevos usuarios que se registraran
                                    también podrían añadir nuevos libros y sus respectivas reseñas.
                                    <br />
                                    El proyecto consta de 2 partes, un back-end hecho en PHP/Laravel con su deploy
                                    subido a Heroku, y el front-end realizado en react con su deploy realizado en
                                    github pages.
                                </MDBCardText>
                            </MDBCol>
                            <MDBRow>
                                <MDBCol className="mb-3">
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect_react"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill"></Icon>
                                    </a>
                                    <p>Proyecto Front-end</p>
                                </MDBCol>

                                <MDBCol className="mb-3" >
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill"></Icon>
                                    </a>
                                    <p>Proyecto Back-end</p>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mt-6 mb-4" />
                        </MDBCardBody>
                        <MDBRow>
                            <MDBCol className="mb-3">
                                <a
                                    tag='a'
                                    href="https://github.com/Alexdck"
                                    target="_blank"
                                >
                                    <Icon icon="ri:github-fill"></Icon>
                                </a>
                                <p>Cuenta Github</p>
                            </MDBCol>
                            <MDBCol className="mb-3">
                                <a
                                    tag='a'
                                    href="https://www.linkedin.com/in/alejandrolaguia/"
                                    target="_blank"
                                >
                                    <Icon icon="ri:linkedin-fill"></Icon>
                                </a>
                                <p>Perfil LinkedIN</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBCon>
    )
}

export default AboutCard