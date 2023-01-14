import axios from "axios"
import React from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import { Icon } from '@iconify/react'
import { useState } from "react"
import './BookCard.scss'
import { Col, Row } from "react-bootstrap"

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
                    <Row>
                        <Col>
                            <MDBCard MDBCard className="frontCard" >
                                <MDBCardImage className="cardImg" position='top' alt='...' src={books.book_cover} />
                                <MDBCardBody>
                                    <MDBCardTitle>{books.title}</MDBCardTitle>
                                    <MDBCardText>
                                    </MDBCardText>
                                </MDBCardBody>
                                <MDBRow className="linksBookCardRow">
                                    <MDBCol size="6" className="mb-3">
                                        <a
                                            tag='a'
                                            href={books.author_wiki_url}
                                            target="_blank"
                                        >
                                            <Icon className="Icons" icon="mdi:wikipedia" />
                                        </a>
                                        <p>Wikipedia del autor</p>
                                    </MDBCol>
                                    <MDBCol size="6" className="mb-3">
                                        <a
                                            tag='a'
                                            href={books.shop_url}
                                            target="_blank"
                                        >
                                            <Icon className="Icons" icon="ri:amazon-fill"></Icon>
                                        </a>
                                        <p>Cómpralo</p>
                                    </MDBCol>
                                </MDBRow>
                                <div className="backCard">back</div>
                                <div className='BookMessage'>
                                    {
                                        deleteDataState.isError ?
                                            (<p style={{ color: "red" }}>{deleteDataState.message}</p>)
                                            :
                                            (<p style={{ color: "green" }}>{deleteDataState.message}</p>)
                                    }
                                </div>
                                <MDBBtn
                                    className='mx-2 bookCardBtn2'
                                    color='dark'
                                    onClick={() => navigate(`/editBook/${books.id}`)}
                                >
                                    Editar libro
                                </MDBBtn>
                                <MDBBtn
                                    className='mx-2 bookCardBtn3'
                                    color='dark'
                                    onClick={handleDeleteBook}
                                >
                                    Eliminar libro
                                </MDBBtn>
                            </MDBCard >

                        </Col>
                    </Row>
                    <div className="backCard">back</div>
                </div>

            )
        } else {

            return (
                <div className="cardContainer" onClick={onClick}>
                    <MDBCard MDBCard className="frontCard" >
                        <MDBCardImage className="cardImg" position='top' alt='...' src={books.book_cover} />
                        <MDBCardBody>
                            <MDBCardTitle>{books.title}</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBRow className="linksBookCardRow">
                            <MDBCol size="6" className="mb-3">
                                <a
                                    tag='a'
                                    href={books.author_wiki_url}
                                    target="_blank"
                                >
                                    <Icon className="Icons" icon="mdi:wikipedia" />
                                </a>
                                <p>Wikipedia del autor</p>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                                <a
                                    tag='a'
                                    href={books.shop_url}
                                    target="_blank"
                                >
                                    <Icon className="Icons" icon="ri:amazon-fill"></Icon>
                                </a>
                                <p>Cómpralo</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard >
                    <div className="backCard">back</div>
                </div >
            )
        }
    } else {

        return (
            <div className="cardContainer" onClick={onClick}>
                <Row>
                    <Col>
                        <MDBCard MDBCard className="frontCard" >
                            <MDBCardImage className="cardImg" position='top' alt='...' src={books.book_cover} />
                            <MDBCardBody>
                                <MDBCardTitle>{books.title}</MDBCardTitle>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBRow className="linksBookCardRow">
                                <MDBCol size="6" className="mb-3">
                                    <a
                                        tag='a'
                                        href={books.author_wiki_url}
                                        target="_blank"
                                    >
                                        <Icon className="Icons" icon="mdi:wikipedia" />
                                    </a>
                                    <p>Wikipedia del autor</p>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <a
                                        tag='a'
                                        href={books.shop_url}
                                        target="_blank"
                                    >
                                        <Icon className="Icons" icon="ri:amazon-fill"></Icon>
                                    </a>
                                    <p>Cómpralo</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard >
                    </Col>
                </Row>
                <div className="backCard">back</div>
            </div>
        )
    }
}

export default BookCard