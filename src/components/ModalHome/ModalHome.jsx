import React from "react"
import { useNavigate } from "react-router"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit'
import './ModalHome.scss'

const ModalHome = () => {

    let navigate = useNavigate()

    return (
        <div className="modalHome">
            <motion.div
                className="motionDiv"
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
            >
                <MDBContainer fluid className="py-5 h-100 modalCardContainer">
                    <MDBCard className="mb-3 modalCard " style={{ borderRadius: '.5em' }}>
                        <MDBRow className="g-0 modalRowBox">
                            <MDBCol
                                className="modalColBox"
                                xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}
                            >
                                <MDBCardBody className="p-4">

                                    <MDBTypography className='dataHead'>
                                        Proyecto final Alejandro Laguía García
                                    </MDBTypography>
                                    <hr className="mt-0 mb-5 bodyHr" />
                                    <MDBRow className="pt-1">
                                        <MDBCol
                                            className="mb-3"
                                            xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}
                                        >
                                            <MDBTypography className="modalTitle" tag="h6">
                                                Coding school
                                            </MDBTypography>
                                            <MDBCardText>GeeksHubs Academy</MDBCardText>
                                        </MDBCol>
                                        <MDBCol
                                            className="mb-3"
                                            xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}
                                        >
                                            <MDBTypography className="modalTitle" tag="h6">
                                                Lenguajes utilizados
                                            </MDBTypography>
                                            <MDBCardText tag="h5">HTML CSS JS</MDBCardText>
                                        </MDBCol>
                                        <MDBCol
                                            className="mb-3"
                                            xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}
                                        >
                                            <MDBTypography className="modalTitle" tag="h6">
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
                                    <MDBCol
                                        className="mb-3"
                                        xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}
                                    >
                                        <MDBTypography className='dataHead aboutTheProject'>
                                            SOBRE EL PROYECTO
                                        </MDBTypography>
                                        <hr className="mt-0 mb-4 bodyHr" />
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
                                        <MDBCol
                                            className="mb-3"
                                            xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}
                                        >
                                            <a
                                                tag='a'
                                                href="https://github.com/Alexdck/Books_reviews_proyect_react"
                                                target="_blank"
                                            >
                                                <Icon className="Icons" icon="ri:github-fill"></Icon>
                                            </a>
                                            <p>Proyecto Front-end</p>
                                        </MDBCol>

                                        <MDBCol
                                            className="mb-3"
                                            xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}
                                        >
                                            <a
                                                tag='a'
                                                href="https://github.com/Alexdck/Books_reviews_proyect"
                                                target="_blank"
                                            >
                                                <Icon className="Icons" icon="ri:github-fill"></Icon>
                                            </a>
                                            <p>Proyecto Back-end</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mt-6 mb-4 bodyHr" />
                                </MDBCardBody>
                                <MDBRow>
                                    <MDBCol
                                        className="mb-3"
                                        xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}
                                    >
                                        <a
                                            tag='a'
                                            href="https://github.com/Alexdck"
                                            target="_blank"
                                        >
                                            <Icon className="Icons" icon="ri:github-fill"></Icon>
                                        </a>
                                        <p>Cuenta Github</p>
                                    </MDBCol>
                                    <MDBCol
                                        className="mb-3"
                                        xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}
                                    >
                                        <a
                                            tag='a'
                                            href="https://www.linkedin.com/in/alejandrolaguia/"
                                            target="_blank"
                                        >
                                            <Icon className="Icons" icon="ri:linkedin-fill"></Icon>
                                        </a>
                                        <p>Perfil LinkedIN</p>
                                    </MDBCol>
                                    <MDBCol
                                        className="mb-3"
                                        xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}
                                    >
                                        <MDBBtn
                                            className='me-2 modalBtn'
                                            active
                                            onClick={() => navigate("/books")}
                                        >
                                            Entrar
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </motion.div>
        </div >
    )
}

export default ModalHome