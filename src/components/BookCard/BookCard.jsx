import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { userData } from "../../containers/User/userSlice"
import { Button, Col, Modal, Row } from "react-bootstrap"
import { Icon } from '@iconify/react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBRow,
    MDBCardSubTitle,
    MDBTypography,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit'
import axios from "axios"
import './BookCard.scss'

const BookCard = ({ onClick, books }) => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const deleteId = books.id

    const [deleteDataState, setDeleteDataState] = useState({})

    const [showModalState, setShowModalState] = useState()

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const handleOpen = () => setShowModalState(true)

    const handleClose = () => setShowModalState(false)

    const handleDeleteBook = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/book/deleteBook/${deleteId}`, requirements)

            if (!deleteDataState.isError) {

                setDeleteDataState({
                    isError: false,
                    message: `El libro ${books.title} ha sido eliminado`
                })
                setTimeout(() => {
                    navigate("/newBook")

                }, 1000)

            } else {
                setDeleteDataState({
                    isError: true,
                    message: `Ha habido un error eliminando el libro`
                })
            }
        } catch (error) {

            setDeleteDataState({
                isError: true,
                message: `Ha habido un error eliminando el libro`
            })
        }
    }

    if (identification.infoData) {

        if (identification.infoData.id === 1) {

            return (
                <div className="cardContainer" onClick={onClick}>
                    <MDBCard className="frontCard" >
                        <MDBCardImage className="cardImg" position='top' alt='...' src={books.book_cover} />
                        <MDBCardBody>
                            <MDBCardTitle>{books.title}</MDBCardTitle>
                            <br />
                            <hr className="mt-0 mb-3" />
                            <MDBCardText>
                            </MDBCardText>
                            <MDBRow className="linksBookCardRow">
                                <MDBCol size="6" className="mb-1">
                                    <a
                                        tag='a'
                                        href={books.author_wiki_url}
                                        target="_blank"
                                    >
                                        <Icon className="linkIcons" icon="mdi:wikipedia" />
                                    </a>
                                    <p>Wikipedia del autor</p>
                                </MDBCol>
                                <MDBCol size="6" className="mb-1" >
                                    <a
                                        tag='a'
                                        href={books.shop_url}
                                        target="_blank"

                                    >
                                        <Icon className="linkIcons" icon="ri:amazon-fill"></Icon>
                                    </a>
                                    <p>Enlace de compra</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBCardSubTitle>Ver más</MDBCardSubTitle>
                        </MDBCardBody>
                    </MDBCard >

                    <div className="backCard">
                        <>
                            <Modal show={showModalState} onHide={handleClose} >
                                <div className="deleteModalBox">
                                    <Modal.Header closeButton>
                                        <Modal.Title>AVISO</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="deleteModalBody">¿Seguro que quieres eliminar este libro?</Modal.Body>
                                    <Modal.Footer className="deleteModalFooter">
                                        <Button className="deleteModalButton" variant="danger" onClick={handleDeleteBook}>
                                            Sí
                                        </Button>
                                        <Button className="deleteModalButton" variant="dark" onClick={handleClose}>
                                            No
                                        </Button>
                                    </Modal.Footer>
                                    <div className='BookMessage'>
                                        {
                                            deleteDataState.isError ?
                                                (<p style={{ color: "red" }}>{deleteDataState.message}</p>)
                                                :
                                                (<p style={{ color: "green" }}>{deleteDataState.message}</p>)
                                        }
                                    </div>
                                </div>
                            </Modal>
                        </>
                        <MDBCardBody className="bookCardBody">
                            <MDBCardTitle>
                                <MDBRow xl={12}>
                                    <MDBCol xl={6}>
                                        <button
                                            className='bookCardBtn'
                                            variant="dark"
                                            onClick={() => navigate(`/editBook/${books.id}`)}
                                        >
                                            <img className="editIcon" src="../../Img/editIcon.jpeg" alt="editIcon" />
                                        </button>

                                    </MDBCol>
                                    <MDBCol xl={6}>
                                        <button
                                            className='bookCardBtn'
                                            variant="dark"
                                            onClick={handleOpen}
                                        >
                                            <img className="deleteIcon" src="../../Img/deleteIcon.png" alt="editIcon" />
                                        </button>

                                    </MDBCol>
                                </MDBRow>
                            </MDBCardTitle>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Autor
                                    </MDBTypography>
                                    <MDBCardText >{books.author}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Saga
                                    </MDBTypography>
                                    <MDBCardText>{books.series}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Fecha publicación
                                    </MDBTypography>
                                    <MDBCardText>{books.year}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Género
                                    </MDBTypography>
                                    <MDBCardText>{books.genre}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Sinopsis
                                    </MDBTypography>
                                    <br />
                                    <br />
                                    <MDBCardText className="cardSynopsis">
                                        {books.synopsis}
                                    </MDBCardText>
                                </MDBListGroupItem>
                            </MDBListGroup>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <button
                                        className='butonCoolEffect'
                                        onClick={() => navigate(`/reviews/${books.id}`)}
                                    >
                                        Ver <br /> reseñas
                                    </button>

                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <button
                                        className='butonCoolEffect'
                                        onClick={() => navigate(`/newReview/${books.id}`)}
                                    >
                                        Añadir reseña
                                    </button>
                                </Col>
                            </Row>
                        </MDBCardBody>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="cardContainer" onClick={onClick}>
                    <MDBCard className="frontCard" >
                        <MDBCardImage className="cardImg" position='top' alt='...' src={books.book_cover} />
                        <MDBCardBody>
                            <MDBCardTitle>{books.author}</MDBCardTitle>
                            <br />
                            <hr className="mt-0 mb-3" />
                            <MDBCardText>
                            </MDBCardText>
                            <MDBRow className="linksBookCardRow">
                                <MDBCol size="6" className="mb-1">
                                    <a
                                        tag='a'
                                        href={books.author_wiki_url}
                                        target="_blank"
                                    >
                                        <Icon className="linkIcons" icon="mdi:wikipedia" />
                                    </a>
                                    <p>Wikipedia del autor</p>
                                </MDBCol>
                                <MDBCol size="6" className="mb-1">
                                    <a
                                        tag='a'
                                        href={books.shop_url}
                                        target="_blank"
                                    >
                                        <Icon className="linkIcons" icon="ri:amazon-fill"></Icon>
                                    </a>
                                    <p>Enlace de compra</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBCardSubTitle>Ver más</MDBCardSubTitle>
                        </MDBCardBody>
                    </MDBCard >

                    <div className="backCard">
                        <MDBCardBody className="bookCardBody">
                            <MDBCardTitle>{books.title}</MDBCardTitle>
                            <MDBListGroup >
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Saga
                                    </MDBTypography>
                                    <MDBCardText>{books.series}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Fecha publicación
                                    </MDBTypography>
                                    <MDBCardText>{books.year}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Género
                                    </MDBTypography>
                                    <MDBCardText>{books.genre}</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <MDBTypography tag="h6" className="text-muted">
                                        Sinopsis
                                    </MDBTypography>
                                    <br />
                                    <br />
                                    <MDBCardText className="cardSynopsis">
                                        {books.synopsis}
                                    </MDBCardText>
                                </MDBListGroupItem>
                            </MDBListGroup>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <button
                                        className='butonCoolEffect'
                                        onClick={() => navigate(`/reviews/${books.id}`)}
                                    >
                                        Ver <br /> reseñas
                                    </button>

                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <button
                                        className='butonCoolEffect'
                                        onClick={() => navigate(`/newReview/${books.id}`)}
                                    >
                                        Añadir reseña
                                    </button>
                                </Col>
                            </Row>
                        </MDBCardBody>
                    </div>
                </div>
            )
        }
    } else {

        return (
            <div className="cardContainer" onClick={onClick}>
                <MDBCard className="frontCard" >
                    <MDBCardImage className="cardImg" position='top' alt='...' src={books.book_cover} />
                    <MDBCardBody>
                        <MDBCardTitle>{books.author}</MDBCardTitle>
                        <br />
                        <hr className="mt-0 mb-3" />
                        <MDBCardText>
                        </MDBCardText>
                        <MDBRow className="linksBookCardRow">
                            <MDBCol size="6" className="mb-1">
                                <a
                                    tag='a'
                                    href={books.author_wiki_url}
                                    target="_blank"
                                >
                                    <Icon className="linkIcons" icon="mdi:wikipedia" />
                                </a>
                                <p>Wikipedia del autor</p>
                            </MDBCol>
                            <MDBCol size="6" className="mb-1">
                                <a
                                    tag='a'
                                    href={books.shop_url}
                                    target="_blank"
                                >
                                    <Icon className="linkIcons" icon="ri:amazon-fill"></Icon>
                                </a>
                                <p>Enlace de compra</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBCardSubTitle>Ver más</MDBCardSubTitle>
                    </MDBCardBody>
                </MDBCard >

                <div className="backCard">
                    <MDBCardBody className="bookCardBody">
                        <MDBCardTitle>{books.title}</MDBCardTitle>
                        <MDBListGroup >
                            <MDBListGroupItem>
                                <MDBTypography tag="h6" className="text-muted">
                                    Saga
                                </MDBTypography>
                                <MDBCardText>{books.series}</MDBCardText>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <MDBTypography tag="h6" className="text-muted">
                                    Fecha publicación
                                </MDBTypography>
                                <MDBCardText>{books.year}</MDBCardText>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <MDBTypography tag="h6" className="text-muted">
                                    Género
                                </MDBTypography>
                                <MDBCardText>{books.genre}</MDBCardText>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <MDBTypography tag="h6" className="text-muted">
                                    Sinopsis
                                </MDBTypography>
                                <br />
                                <br />
                                <MDBCardText className="cardSynopsis">
                                    {books.synopsis}
                                </MDBCardText>
                            </MDBListGroupItem>
                        </MDBListGroup>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <button
                                    className='butonCoolEffect'
                                    onClick={() => navigate(`/reviews/${books.id}`)}
                                >
                                    Ver <br /> reseñas
                                </button>

                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <button
                                    className='butonCoolEffect'
                                    onClick={() => navigate(`/newReview/${books.id}`)}
                                >
                                    Añadir reseña
                                </button>
                            </Col>
                        </Row>
                    </MDBCardBody>
                </div>
            </div>
        )
    }
}

export default BookCard