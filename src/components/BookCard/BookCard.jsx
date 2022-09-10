import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBTypography,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit'; import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import './BookCard.scss'

const BookCard = props => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const deleteId = props.data.id

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const travel = (destiny) => {

        navigate(destiny)
    }

    //Only the SuperAdmin/Admin can delete a book
    const handleDelete = async () => {

        await axios.delete(`https://books-reviews-app-proyect.herokuapp.com/api/book/deleteBook/${deleteId}`, requirements)
    }

    if (identification.infoData.id == 1) {

        return (


            <MDBCard className="mb-10" style={{ borderRadius: '.5em' }}>
                <MDBRow className="g-0">

                    <MDBCol md="3" className="gradient-custom text-center text-white bookColData"
                        style={{ borderTopLeftRadius: '.5em', borderBottomLeftRadius: '.5em' }}>
                        <MDBCardImage src={props.data.book_cover}
                            alt="Avatar" className="my-5 bookCardImg" style={{ width: '12em' }} fluid />
                        <hr className="mt-0 mb-3" />
                        <br />
                        <MDBTypography tag="h5">{props.data.title}</MDBTypography>
                        <br />
                        <hr className="mt-0 mb-6" />
                        <MDBTypography>Saga</MDBTypography>
                        <MDBTypography>{props.data.series}</MDBTypography>
                        <hr className="mt-0 mb-3" />
                        <br />
                        <MDBTypography>{props.data.author}</MDBTypography>
                        <br />
                    </MDBCol>

                    <MDBCol md="9">

                        <MDBCardBody className="p-4">
                            <br />
                            <MDBTypography className='dataHead' tag="h6">Información </MDBTypography>
                            <hr className="mt-0 mb-4 bodyHr" />
                            <MDBRow className="pt-1">

                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Género</MDBTypography>
                                    <MDBCardText className="text-muted">{props.data.genre}</MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Fecha de publicación</MDBTypography>
                                    <MDBCardText className="text-muted">{props.data.year}</MDBCardText>
                                </MDBCol>
                                <hr className="mt-0 mb-4 bodyHr" />
                                <MDBCol size="6" className="mb-3">
                                    <MDBBtn className="bookLinkBtn" tag='a' href={props.data.author_wiki_url} target="_blank">
                                        Wiki del autor
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBBtn className="bookLinkBtn" tag='a' href={props.data.shop_url} target="_blank">
                                        Enlace de venta
                                    </MDBBtn>
                                </MDBCol>

                            </MDBRow>
                            
                            <br />
                            <MDBTypography className='dataHead' tag="h6">Synopsis</MDBTypography>
                            <hr className="mt-0 mb-4 bodyHr" />

                            <MDBRow className="pt-1">
                                <MDBCol size="12" className="mb-3">
                                    <MDBCardText className="text-muted">{props.data.synopsis}</MDBCardText>
                                </MDBCol>
                            </MDBRow>


                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>

        )
    } else {

        return (

            <MDBContainer className="py-5 h-100 cardContainer">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5em' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5em', borderBottomLeftRadius: '.5em' }}>
                                    <MDBCardImage src={props.data.profile_img}
                                        alt="Avatar" className="my-5" style={{ width: '8em' }} fluid />
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
        )
    }
}

export default BookCard