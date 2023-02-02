import React from "react"
import { Icon } from "@iconify/react"
import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit'
import "./AboutProyect.scss"

const AboutTheProyect = () => {

    return (
        <div className="aboutCardContainer">
            <MDBCard className="mb-3 aboutCard " style={{ borderRadius: '.5em' }}>
                <MDBRow className="g-0 aboutCardBody" style={{ borderRadius: '.5em' }}>
                    <MDBCol>
                        <MDBCardBody className="p-4 ">

                            <MDBTypography className='aboutPHeader'>
                                Proyecto final de Alejandro Laguía García
                            </MDBTypography>
                            <hr className="mt-0 mb-5" />
                            <div className="bodyTopDiv">
                                <div className="bodyDiv1">
                                    <MDBTypography className="text-muted titleMuted">
                                        Librearías utilizadas
                                    </MDBTypography>
                                    <MDBCardText className="topBodyText">
                                        React Redux Bootstrap
                                        <br />
                                        Framer-motion Axios
                                        <br />
                                        Jsonwebtoken MDB SASS
                                    </MDBCardText>
                                </div>
                                <div className="bodyDiv2">
                                    <MDBTypography className="text-muted titleMuted">
                                        Lenguajes utilizados
                                    </MDBTypography>
                                    <MDBTypography className='abouIconsDiv' >
                                        <Icon icon="logos:html-5" className="iconImage"></Icon>
                                        <Icon icon="logos:javascript" className="iconImage"></Icon>
                                        <Icon icon="vscode-icons:file-type-sass" className="iconImage"></Icon>
                                    </MDBTypography>
                                </div>
                                <div className="bodyDiv3">
                                    <MDBTypography className="text-muted titleMuted" >
                                        Coding school
                                    </MDBTypography>
                                    <MDBCardText className="topBodyText">GeeksHubs Academy</MDBCardText>
                                </div>
                            </div>
                            <MDBCol className="mb-3">
                                <MDBTypography className="aboutTextHeader">
                                    SOBRE EL PROYECTO
                                </MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBCardText className="aboutText">
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
                            <hr className="mt-6 mb-4" />
                            <div className="mainLinkDiv">
                                <div className="linkDiv">
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect_react"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill" className="iconImage"></Icon>
                                    </a>
                                    <p className="linkText">Proyecto Front-end</p>
                                </div>
                                <div className="linkDiv">
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill" className="iconImage"></Icon>
                                    </a>
                                    <p className="linkText">Proyecto Back-end</p>
                                </div>
                                <div className="linkDiv">
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill" className="iconImage"></Icon>
                                    </a>
                                    <p className="linkText">Perfil Github</p>
                                </div>
                                <div className="linkDiv">
                                    <a
                                        tag='a'
                                        href="https://www.linkedin.com/in/alejandrolaguia/"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:linkedin-fill" className="iconImage"></Icon>
                                    </a>
                                    <p className="linkText">Perfil LinkedIN</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </div>
    )
}

export default AboutTheProyect