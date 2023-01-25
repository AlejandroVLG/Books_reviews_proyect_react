import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit"
import axios from "axios"
import './ReviewCard.scss'


const ReviewCard = props => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const [reviewErrorState, setReviewErrorState] = useState({})

    const [showModalState, setShowModalState] = useState()

    const deleteId = props.data.id

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const handleOpen = () => setShowModalState(true)

    const handleClose = () => setShowModalState(false)

    const handleDeleteReview = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/review/deleteReview/${deleteId}`, requirements)

            if (!reviewErrorState.isError) {

                setReviewErrorState({
                    isError: false,
                    message: `La reseña ha sido eliminada`
                })
                setTimeout(() => {
                    navigate("/books")

                }, 1500)

            } else {

                setReviewErrorState({
                    isError: true,
                    message: `Ha habido un error eliminando la reseña`
                })
            }
        } catch (error) {

            setReviewErrorState({
                isError: true,
                message: `Ha habido un error eliminando la reseña`
            })
        }
    }

    if (identification.infoData.name == props.data.name) {

        return (

            <MDBCard
                fluid
                className="mb-10 mainReviewCard"
                style={{ borderRadius: '.5em' }}
            >
                <>
                    <Modal show={showModalState} onHide={handleClose} >
                        <div className="deleteModalBox">
                            <Modal.Header closeButton>
                                <Modal.Title>AVISO</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="deleteModalBody">¿Seguro que quieres eliminar esta reseña?</Modal.Body>
                            <Modal.Footer className="deleteModalFooter">
                                <Button className="deleteModalButton" variant="danger" onClick={handleDeleteReview}>
                                    Sí
                                </Button>
                                <Button className="deleteModalButton" variant="dark" onClick={handleClose}>
                                    No
                                </Button>
                            </Modal.Footer>
                            <div>
                                {
                                    reviewErrorState.isError ?
                                        (<p style={{ color: "red", fonWeight: "bold" }}>{reviewErrorState.message}</p>)
                                        :
                                        (<p style={{ color: "rgb(30, 186, 30)", fonWeight: "bold" }}>{reviewErrorState.message}</p>)
                                }
                            </div>
                        </div>
                    </Modal>
                </>
                <MDBRow className="g-0">
                    <MDBCol
                        md="4"
                        className="text-center text-white reviewColData"
                        style={{ borderRadius: '.5em', borderBottomLeftRadius: '.5em' }}
                    >
                        <MDBCardImage
                            fluid
                            className="my-5 reviewCardImg"
                            src={props.data.book_cover}
                            alt="Avatar"
                            style={{ width: '12em' }}
                        />
                        <hr className="mt-0 mb-3" />
                        <br />
                        <MDBTypography className="bookTitleReview" tag="h3">
                            {props.data.title}
                        </MDBTypography>
                        <br />
                        <hr className="mt-0 mb-6" />
                        <br />
                        <button
                            className='mx-2 reviewCardBtn'
                            variant='dark'
                            onClick={() => navigate(`/editReview/${props.data.id}`)}
                        >
                            Editar reseña
                        </button>

                        <br /><br />
                        <hr className="mt-0 mb-3" />
                        <br />
                        <button
                            className='mx-2 reviewCardBtn'
                            variant="dark"
                            onClick={handleOpen}
                        >
                            Eliminar reseña
                        </button>
                        <br /><br />
                    </MDBCol>
                    <MDBCol md="8">

                        <MDBCardBody className="p-4">
                            <br />
                            <MDBCardText className="text-muted">
                                {props.data.synopsis}
                            </MDBCardText>
                            <br />
                            <MDBRow className="pt-1">

                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h5">Título de la reseña</MDBTypography>
                                    <hr className="mt-0 mb-4 bodyHr" />
                                    <MDBCardText className="text-muted">
                                        {props.data.review_title}
                                    </MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h5">Puntuación</MDBTypography>
                                    <hr className="mt-0 mb-4 bodyHr" />
                                    <MDBCardText tag="h1">
                                        {props.data.score}
                                    </MDBCardText>
                                </MDBCol>

                            </MDBRow>

                            <br />
                            <MDBTypography className='dataHead' tag="h6">
                                Reseña
                            </MDBTypography>
                            <br />
                            <hr className="mt-0 mb-4 bodyHr" />

                            <MDBRow className="pt-1">
                                <MDBCol size="12" className="mb-3">
                                    <MDBCardText className="text-muted">
                                        {props.data.message}
                                    </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        )
    } else {
        return (
            <div className="reviewsBox">
                <Card id="reviewCardBox">
                    <Card.Img
                        className="reviewCardImg"
                        variant="top"
                        src={props.data.book_cover}
                    />
                    <Card.Body className="reviewCardData">
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Title>{props.data.review_title}</Card.Title>
                        <Card.Text>{props.data.message}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div >
                            <small className="text-muted" id="scoreBox">
                                <div>
                                    <strong>Puntuación: </strong>
                                    {props.data.score}
                                </div>
                            </small>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default ReviewCard