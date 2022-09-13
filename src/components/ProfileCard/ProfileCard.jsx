import React from "react"
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
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
} from 'mdb-react-ui-kit'
import './ProfileCard.scss'

const ProfileCard = props => {

    return (

        <motion.div
            className="vh-100 mainBox"
            style={{
                background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)'
            }}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0, type: 'spring', stiffness: 30 }}
        >
            <MDBContainer className="py-5 h-100 cardContainer">
                <MDBCard className="mb-3 cardProfile " style={{ borderRadius: '.5em' }}>
                    <MDBRow className="g-0">

                        <MDBCol md="4" className="gradient-custom text-center text-white"
                            style={{ borderTopLeftRadius: '.5em', borderBottomLeftRadius: '.5em' }}>
                            <MDBCardImage
                                src={props.data.profile_img}
                                alt="Avatar"
                                className="my-5 profileImg"
                                style={{ width: '10em' }}
                                fluid
                            />
                            <br />
                            <hr className="mt-0 mb-4" />
                            <MDBTypography tag="h4">{props.data.name}</MDBTypography>
                            <br />
                            <hr className="mt-0 mb-4" />
                            <MDBTypography tag="h5">{props.data.last_name}</MDBTypography>
                            <br />
                            <hr className="mt-0 mb-4" />
                            <MDBTypography tag="h6">{props.data.country}</MDBTypography>
                            <br />
                        </MDBCol>

                        <MDBCol md="8" className="infoProfileBox">

                            <MDBCardBody className="p-4">
                                <MDBTypography className='dataHead' tag="h6">Datos personales</MDBTypography>
                                <hr className="mt-0 mb-4 bodyHr" />
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
                                <MDBTypography className='dataHead' tag="h6">Información adicional</MDBTypography>
                                <hr className="mt-0 mb-4 bodyHr" />
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

                                    <a className='socialIconsBox' target='_blank' href={props.data.twitter_account}>
                                        <Icon className='socialIcon' icon="ant-design:twitter-outlined" />
                                    </a>
                                    <a className='socialIconsBox' target='_blank' href={props.data.facebook_account} >
                                        <Icon className='socialIcon' icon="akar-icons:facebook-fill" />
                                    </a>
                                    <a className='socialIconsBox' target='_blank' href={props.data.instagram_account}>
                                        <Icon className='socialIcon' icon="ant-design:instagram-outlined" />
                                    </a>

                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </motion.div>
    )
}

export default ProfileCard