import React from "react"
import { useNavigate } from "react-router"
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

    const travel = (destiny) => {

        navigate(destiny)
    }

    return (

        <div className="modalHome">
            <MDBContainer fluid className="py-5 h-100 modalCardContainer">
                <MDBCard className="mb-3 modalCard " style={{ borderRadius: '.5em' }}>
                    <MDBRow className="g-0 modalRowBox">
                        <MDBCol md="12" className="modalColBox">
                            <MDBCardBody className="p-4">
                                <MDBTypography className='dataHead'>Proyecto final Alejandro Laguía García</MDBTypography>
                                <hr className="mt-0 mb-5 bodyHr" />
                                <MDBRow className="pt-1">
                                    <MDBCol size="4" className="mb-3">
                                        <MDBTypography className="modalTitle" tag="h6">Coding school</MDBTypography>
                                        <MDBCardText>GeeksHubs Academy</MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="4" className="mb-3">
                                        <MDBTypography className="modalTitle" tag="h6">Librearías utilizadas</MDBTypography>
                                        <MDBCardText tag="h5">
                                            React Redux Bootstrap
                                            <br />
                                            Framer-motion Axios
                                            <br />
                                            Jsonwebtoken MDB SASS
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="4" className="mb-3">
                                        <MDBTypography className="modalTitle" tag="h6">Lenguajes utilizados</MDBTypography>
                                        <MDBCardText tag="h5">HTML CSS JS</MDBCardText>
                                    </MDBCol>
                                </MDBRow>

                                <MDBTypography className='dataHead aboutTheProject' tag="h6">SOBRE EL PROYECTO</MDBTypography>
                                <hr className="mt-0 mb-4 bodyHr" />
                                <MDBCardText >
                                    Aplicación creada con el fin usarla como catálogo de reviews personal. 
                                    Adicionalmente la web permite el registro de nuevos usuarios por si 
                                    en un futuro decido que sea púbica, los nuevos usuarios que se registraran
                                    también podrían añadir nuevos libros y sus respectivas reseñas.
                                </MDBCardText>
                                <MDBBtn size='lg' className='me-2 modalBtn' active onClick={() => travel("/books")}>
                                    Biblioteca
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default ModalHome