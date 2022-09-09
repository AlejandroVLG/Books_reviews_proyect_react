import { motion } from 'framer-motion';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBTypography,
    MDBIcon
} from 'mdb-react-ui-kit';
import React from "react"
import './ProfileCard.css'

const ProfileCard = props => {

    return (

        <motion.div
            className="vh-100 mainBox"
            style={{ background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)'
            }}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0, type: 'spring', stiffness: 30 }}
        >
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src={props.data.profile_img}
                                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <br />
                                    <hr className="mt-0 mb-4" />
                                    <MDBTypography tag="h5">{props.data.name}</MDBTypography>
                                    <br />
                                    <hr className="mt-0 mb-4" />
                                    <MDBCardText>{props.data.last_name}</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                    <br />
                                    <hr className="mt-0 mb-4" />
                                    <MDBCardText>{props.data.country}</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Datos personales</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Apodo</MDBTypography>
                                                <MDBCardText className="text-muted">{props.data.nick_name}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Edad</MDBTypography>
                                                <MDBCardText className="text-muted">{props.data.age}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBCol size="12" className="mb-3">
                                            <MDBTypography tag="h6">Correo electrónico</MDBTypography>
                                            <MDBCardText className="text-muted">{props.data.email}</MDBCardText>
                                        </MDBCol>
                                        <MDBTypography tag="h6">Gustos</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Género favorito</MDBTypography>
                                                <MDBCardText className="text-muted">{props.data.favourite_genre}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Autor favorito</MDBTypography>
                                                <MDBCardText className="text-muted">{props.data.favourite_author}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="12" className="mb-3">
                                                <MDBTypography tag="h6">Leyendo en la actualidad</MDBTypography>
                                                <MDBCardText className="text-muted">{props.data.currently_reading}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" />{props.data.facebook_account}</a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" />{props.data.twitter_account}</a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" />{props.data.instagram_account}</a>
                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </motion.div>
    )
}

export default ProfileCard