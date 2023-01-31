import React from "react"
import { Icon } from "@iconify/react"
import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBTypography,
    MDBIcon
} from 'mdb-react-ui-kit'
import "./AboutProyect.scss"

const AboutTheProyect = () => {

    return (
        <div className="aboutCardContainer">
            <MDBCard className="mb-3 aboutCard " style={{ borderRadius: '.5em' }}>
                <MDBRow className="g-0 aboutCardBody" style={{ borderRadius: '.5em' }}>
                    <MDBCol>
                        <MDBCardBody className="p-4 ">

                            <MDBTypography className='dataHead'>
                                Proyecto final de Alejandro Laguía García
                            </MDBTypography>
                            <hr className="mt-0 mb-5" />
                            <MDBRow className="pt-1">
                                <MDBCol className="mb-3"
                                    sm={12} md={6} lg={4} xl={4} xxl={4}>
                                    <MDBTypography className="text-muted h5">
                                        Lenguajes utilizados
                                    </MDBTypography>
                                    <MDBTypography className='mb-0 abouIconsDiv' >
                                        <Icon icon="logos:html-5" className="iconImage"></Icon>
                                        <Icon icon="logos:javascript" className="iconImage"></Icon>
                                        <Icon icon="vscode-icons:file-type-sass" className="iconImage"></Icon>
                                    </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                    sm={12} md={6} lg={4} xl={4} xxl={4}
                                    className="mb-3">
                                    <MDBTypography className="text-muted h5" >
                                        Coding school
                                    </MDBTypography>
                                    <MDBCardText>GeeksHubs Academy</MDBCardText>
                                </MDBCol>
                                <MDBCol className="mb-3"
                                    sm={12} md={12} lg={4} xl={4} xxl={4}>
                                    <MDBTypography className="text-muted h5">
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
                                <MDBTypography className="h4">
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
                                <MDBCol className="mb-3"
                                    sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect_react"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill" className="iconImage"></Icon>
                                    </a>
                                    <p>Proyecto Front-end</p>
                                </MDBCol>

                                <MDBCol className="mb-3"
                                    sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <a
                                        tag='a'
                                        href="https://github.com/Alexdck/Books_reviews_proyect"
                                        target="_blank"
                                    >
                                        <Icon icon="ri:github-fill" className="iconImage"></Icon>
                                    </a>
                                    <p>Proyecto Back-end</p>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mt-6 mb-4" />
                        </MDBCardBody>
                        <MDBRow>
                            <MDBCol className="mb-3"
                                sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <a
                                    tag='a'
                                    href="https://github.com/Alexdck"
                                    target="_blank"
                                >
                                    <Icon icon="ri:github-fill" className="iconImage"></Icon>
                                </a>
                                <p>Perfil Github</p>
                            </MDBCol>
                            <MDBCol className="mb-3"
                                sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <a
                                    tag='a'
                                    href="https://www.linkedin.com/in/alejandrolaguia/"
                                    target="_blank"
                                >
                                    <Icon icon="ri:linkedin-fill" className="iconImage"></Icon>
                                </a>
                                <p>Perfil LinkedIN</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </div>
    )
}

export default AboutTheProyect