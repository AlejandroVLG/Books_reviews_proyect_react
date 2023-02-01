import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { userData } from "../../containers/User/userSlice"
import { Button, Modal } from "react-bootstrap"
import { Icon } from '@iconify/react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit'
import axios from "axios"
import './BookCard.scss'

const BookCard = ({ books }) => {

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

    // delete book modal handlers 
    const handleOpen = () => setShowModalState(true)
    const handleClose = () => setShowModalState(false)

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

    if (!identification.token) {

        return (
            <MDBCard
                className="mainBookCard"
                style={{ borderRadius: '.5em' }}
            >
                <MDBRow className="g-0">
                    <MDBCol
                        md="5"
                        className="cardImageCol"
                        style={{ borderRadius: '.5em' }}
                    >
                        <MDBCardImage
                            src={books.book_cover}
                            alt="Avatar"
                            className="mb-0 cardImg"
                        />
                    </MDBCol>
                    <MDBCol
                        md="7"
                        className="bookInfoBox"
                        style={{ borderRadius: '.5em' }}
                    >
                        <br />
                        <MDBTypography tag="h2">{books.title}</MDBTypography>
                        <MDBCardBody className="p-0 bookCardBody">
                            <br />
                            <MDBTypography className='dataHead' tag="h6">
                                Información
                            </MDBTypography>
                            <hr className="mt-3 mb-4" />
                            <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h5">Autor</MDBTypography>
                                    <MDBCardText className="text-muted">
                                        {books.author}
                                    </MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h5">Género</MDBTypography>
                                    <MDBCardText className="text-muted">
                                        {books.genre}
                                    </MDBCardText>
                                </MDBCol>
                                <MDBCol size="12" className="mb-3">
                                    <MDBTypography tag="h5">Saga</MDBTypography>
                                    <MDBCardText className="text-muted">
                                        {books.series}
                                    </MDBCardText>
                                </MDBCol>
                                <MDBCol size="12" className="mb-0">
                                    <hr className="mt-0 mb-4" />
                                    <MDBTypography tag="h5">
                                        Fecha de publicación
                                    </MDBTypography>
                                    <MDBCardText className="text-muted">
                                        {books.year}
                                    </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <br />
                        </MDBCardBody>
                    </MDBCol>

                    <MDBTypography className='dataHead mt-3' md="12" tag="h6">
                        Sinopsis
                    </MDBTypography>
                    <br />
                    <hr className="mt-0 mb-4 bodyHr" />
                    <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-3">
                            <MDBCardText className="text-muted overflow-scroll synopsisText">
                                {books.synopsis}
                            </MDBCardText>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol size="6" className="mb-3">
                        <a tag='a' href={books.author_wiki_url} target="_blank">
                            <Icon className="icons" icon="mdi:wikipedia" />
                        </a>
                        <p>Wikipedia del autor</p>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                        <a tag='a' href={books.shop_url} target="_blank">
                            <Icon className="icons" icon="ri:amazon-fill"></Icon>
                        </a>
                        <p>Cómpralo</p>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        )
    } else {
        if (identification.infoData.id === 1) {

            return (
                <MDBCard
                    className="mb-10 mainBookCard"
                    style={{ borderRadius: '.5em' }}
                >
                    <Modal show={showModalState} onHide={handleClose} >
                        <div className="bookModalBox">
                            <Modal.Header closeButton>
                                <Modal.Title>AVISO</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBookBody">¿Seguro que quieres eliminar este libro?</Modal.Body>
                            <Modal.Footer className="modalBookFooter">
                                <Button className="modalButton" variant="danger" onClick={handleDeleteBook}>
                                    Si
                                </Button>
                                <Button className="modalButton" variant="dark" onClick={handleClose}>
                                    No
                                </Button>
                            </Modal.Footer>
                            <div className='newBookMessage'>
                                {
                                    deleteDataState.isError ?
                                        (<p style={{ color: "red" }}>{deleteDataState.message}</p>)
                                        :
                                        (<p style={{ color: "green" }}>{deleteDataState.message}</p>)
                                }
                            </div>
                        </div>
                    </Modal>
                    <MDBRow className="g-0">
                        <MDBCol
                            md="5"
                            className="gradient-custom cardImageCol"
                            style={{ borderRadius: '.5em' }}
                        >
                            <MDBCardImage
                                src={books.book_cover}
                                alt="Avatar"
                                className="mt-4 mb-0 cardImg"
                                fluid
                            />
                        </MDBCol>
                        <MDBCol
                            md="7"
                            className="bookInfoBox"
                            style={{ borderRadius: '.5em' }}
                        >
                            <MDBRow className="bookBtnDiv">
                                <MDBCol className="my-3 mx-0">
                                    <button
                                        className='mx-2 adminButton'
                                        color='dark'
                                        onClick={() => navigate(`/editBook/${books.id}`)}
                                    >
                                        <img className="bookCardEditBtnImg" src="../../../public/Img/editButton.png" alt="editBtn" />
                                    </button>
                                </MDBCol>
                                <MDBCol className="my-3 mx-0">
                                    <button
                                        className='mx-2 adminButton'
                                        color='dark'
                                        onClick={handleOpen}
                                    >
                                        <img className="bookCardDeleteImg" src="../../../public/Img/deleteButton.png" alt="deleteBtn" />
                                    </button>
                                </MDBCol>
                            </MDBRow>
                            <MDBTypography tag="h2">{books.title}</MDBTypography>
                            <br />
                            <MDBCardBody className="p-0 bookCardBody">
                                <br />
                                <MDBTypography className='dataHead' tag="h6">
                                    Información
                                </MDBTypography>
                                <hr className="mt-3 mb-4" />
                                <MDBRow className="pt-1">
                                    <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h5">Autor</MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.author}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h5">Género</MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.genre}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="12" className="mb-3">
                                        <MDBTypography tag="h5">Saga</MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.series}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="12" className="mb-0">
                                        <hr className="mt-0 mb-4" />
                                        <MDBTypography tag="h5">
                                            Fecha de publicación
                                        </MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.year}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <br />
                            </MDBCardBody>
                        </MDBCol>

                        <MDBTypography className='dataHead mt-3' md="12" tag="h6">
                            Sinopsis
                        </MDBTypography>
                        <br />
                        <hr className="mt-0 mb-4 bodyHr" />
                        <MDBRow className="pt-1">
                            <MDBCol size="12" className="mb-3">
                                <MDBCardText className="text-muted overflow-scroll synopsisText">
                                    {books.synopsis}
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <MDBCol size="6" className="mb-3">
                            <a tag='a' href={books.author_wiki_url} target="_blank">
                                <Icon className="icons" icon="mdi:wikipedia" />
                            </a>
                            <p>Wikipedia del autor</p>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                            <a tag='a' href={books.shop_url} target="_blank">
                                <Icon className="icons" icon="ri:amazon-fill"></Icon>
                            </a>
                            <p>Cómpralo</p>
                        </MDBCol>
                        <hr className="mt-0 mb-3" />
                        <MDBCol size="6" className="">
                            <button
                                className='bookCardBtn my-3'
                                onClick={() => navigate(`/reviews/${books.id}`)}
                            >
                                Ver reseñas
                            </button>
                        </MDBCol>
                        <MDBCol size="6">
                            <button
                                className='bookCardBtn my-3'
                                onClick={() => navigate(`/newReview/${books.id}`)}
                            >
                                Añadir reseña
                            </button>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            )
        } else {

            return (
                <MDBCard
                    className="mb-10 mainBookCard"
                    style={{ borderRadius: '.5em' }}
                >
                    <MDBRow className="g-0">
                        <MDBCol
                            md="5"
                            className="gradient-custom cardImageCol"
                            style={{ borderRadius: '.5em' }}
                        >
                            <MDBCardImage
                                src={books.book_cover}
                                alt="Avatar"
                                className="mt-4 mb-0 cardImg"
                                fluid
                            />
                        </MDBCol>
                        <MDBCol
                            md="7"
                            className="bookInfoBox"
                            style={{ borderRadius: '.5em' }}
                        >
                            <br />
                            <MDBTypography tag="h2">{books.title}</MDBTypography>
                            <MDBCardBody className="p-0 bookCardBody">
                                <br />
                                <MDBTypography className='dataHead' tag="h6">
                                    Información
                                </MDBTypography>
                                <hr className="mt-3 mb-4" />
                                <MDBRow className="pt-1">
                                    <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h5">Autor</MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.author}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h5">Género</MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.genre}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="12" className="mb-3">
                                        <MDBTypography tag="h5">Saga</MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.series}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="12" className="mb-0">
                                        <hr className="mt-0 mb-4" />
                                        <MDBTypography tag="h5">
                                            Fecha de publicación
                                        </MDBTypography>
                                        <MDBCardText className="text-muted">
                                            {books.year}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <br />
                            </MDBCardBody>
                        </MDBCol>

                        <MDBTypography className='dataHead mt-3' md="12" tag="h6">
                            Sinopsis
                        </MDBTypography>
                        <br />
                        <hr className="mt-0 mb-4 bodyHr" />
                        <MDBRow className="pt-1">
                            <MDBCol size="12" className="mb-3">
                                <MDBCardText className="text-muted overflow-scroll synopsisText">
                                     {books.synopsis}
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <MDBCol size="6" className="mb-3">
                            <a tag='a' href={books.author_wiki_url} target="_blank">
                                <Icon className="icons" icon="mdi:wikipedia" />
                            </a>
                            <p>Wikipedia del autor</p>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                            <a tag='a' href={books.shop_url} target="_blank">
                                <Icon className="icons" icon="ri:amazon-fill"></Icon>
                            </a>
                            <p>Cómpralo</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            )
        }
    }
}
export default BookCard