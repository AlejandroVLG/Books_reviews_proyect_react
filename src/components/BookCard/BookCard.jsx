import axios from "axios"
import React from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBCardSubTitle,
    MDBTypography,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import { Icon } from '@iconify/react'
import { useState } from "react"
import './BookCard.scss'
import { Button, Col, Row } from "react-bootstrap"

const BookCard = ({ onClick, books }) => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const deleteId = books.id

    const [deleteDataState, setDeleteDataState] = useState({})

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const handleDeleteBook = async () => {
        try {
            await axios.delete(`https://bookapi.up.railway.app/api/book/deleteBook/${deleteId}`, requirements)

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
                                        <Icon className="Icons" icon="mdi:wikipedia" />
                                    </a>
                                    <p>Wikipedia del autor</p>
                                </MDBCol>
                                <MDBCol size="6" className="mb-1">
                                    <a
                                        tag='a'
                                        href={books.shop_url}
                                        target="_blank"
                                    >
                                        <Icon className="Icons" icon="ri:amazon-fill"></Icon>
                                    </a>
                                    <p>Enlace de compra</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBCardSubTitle>Ver más</MDBCardSubTitle>
                        </MDBCardBody>
                    </MDBCard >

                    <div className="backCard">
                        <MDBCardBody className="bookCardBody">
                            <MDBCardTitle>
                                <Row>
                                    <div className='BookMessage'>
                                        {
                                            deleteDataState.isError ?
                                                (<p style={{ color: "red" }}>{deleteDataState.message}</p>)
                                                :
                                                (<p style={{ color: "green" }}>{deleteDataState.message}</p>)
                                        }
                                    </div>
                                    <Col className="iconEditCol" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <button
                                            className='bookCardBtn'
                                            variant="dark"
                                            onClick={() => navigate(`/editMyProfile/${books.id}`)}
                                        >
                                            <img className="editIcon" src="../../../public/Img/editIcon.jpeg" alt="editIcon" />
                                        </button>

                                    </Col>
                                    <Col className="iconDelCol" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <button
                                            className='bookCardBtn'
                                            variant="dark"
                                            onClick={handleDeleteBook}
                                        >
                                            <img className="deleteIcon" src="../../../public/Img/deleteIcon.png" alt="editIcon" />
                                        </button>

                                    </Col>
                                </Row>
                                {books.title}
                            </MDBCardTitle>
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
                                    <Button
                                        className='bookCardBtn'
                                        variant="dark"
                                        onClick={() => navigate(`/reviews/${books.id}`)}
                                    >
                                        Ver reseña
                                    </Button>

                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <Button
                                        className='bookCardBtn'
                                        variant="dark"
                                        onClick={() => navigate(`/newReview/${books.id}`)}
                                    >
                                        Añadir reseña
                                    </Button>
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
                                        <Icon className="Icons" icon="mdi:wikipedia" />
                                    </a>
                                    <p>Wikipedia del autor</p>
                                </MDBCol>
                                <MDBCol size="6" className="mb-1">
                                    <a
                                        tag='a'
                                        href={books.shop_url}
                                        target="_blank"
                                    >
                                        <Icon className="Icons" icon="ri:amazon-fill"></Icon>
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
                                    <Icon className="Icons" icon="mdi:wikipedia" />
                                </a>
                                <p>Wikipedia del autor</p>
                            </MDBCol>
                            <MDBCol size="6" className="mb-1">
                                <a
                                    tag='a'
                                    href={books.shop_url}
                                    target="_blank"
                                >
                                    <Icon className="Icons" icon="ri:amazon-fill"></Icon>
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
                    </MDBCardBody>
                </div>
            </div>
        )
    }
}

export default BookCard