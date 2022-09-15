import React from "react"
import axios from "axios"
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit"
import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import './ReviewCard.scss'


const ReviewCard = props => {

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

    const handleDelete = async () => {

        await axios.delete(`https://books-reviews-app-proyect.herokuapp.com/api/review/deleteReview/${deleteId}`, requirements)

    }

    if (identification.infoData.name == props.data.name) {
        return (
            <MDBCard fluid className="mb-10 mainReviewCard" style={{ borderRadius: '.5em' }}>
                <MDBRow className="g-0">

                    <MDBCol md="4" className="text-center text-white reviewColData"
                        style={{ borderTopLeftRadius: '.5em', borderBottomLeftRadius: '.5em' }}>
                        <MDBCardImage src={props.data.book_cover}
                            alt="Avatar" className="my-5 reviewCardImg" style={{ width: '12em' }} fluid />
                        <hr className="mt-0 mb-3" />
                        <br />
                        <MDBTypography className="bookTitleReview" tag="h5">{props.data.title}</MDBTypography>
                        <br />
                        <hr className="mt-0 mb-6" />
                        <br />
                        <MDBBtn className='mx-2 reviewCardBtn' color='dark' onClick={() => travel(`/editReview/${props.data.id}`)}>
                            Editar reseña
                        </MDBBtn>

                        <br /><br />
                        <hr className="mt-0 mb-3" />
                        <br />
                        <MDBBtn className='mx-2 reviewCardBtn' color='dark' onClick={handleDelete}>
                            Eliminar reseña
                        </MDBBtn>
                        <br /><br />
                    </MDBCol>

                    <MDBCol md="8">

                        <MDBCardBody className="p-4">
                            <br />
                            <MDBTypography className='dataHead' tag="h6">Valoración </MDBTypography>
                            <br />
                            <hr className="mt-0 mb-4 bodyHr" />
                            <MDBRow className="pt-1">

                                <MDBCol size="6" className="mb-3">
                                    <MDBCardText className="text-muted">{props.data.review_title}</MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h5">Puntuación</MDBTypography>
                                    <MDBCardText className="text-muted">{props.data.score}</MDBCardText>
                                </MDBCol>

                            </MDBRow>

                            <br />
                            <MDBTypography className='dataHead' tag="h6">Reseña</MDBTypography>
                            <br />
                            <hr className="mt-0 mb-4 bodyHr" />

                            <MDBRow className="pt-1">
                                <MDBCol size="12" className="mb-3">
                                    <MDBCardText className="text-muted">{props.data.message}</MDBCardText>
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
                    <Card.Img className="reviewCardImg" variant="top" src={props.data.book_cover} />
                    <Card.Body className="reviewCardData">
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Title>{props.data.review_title}</Card.Title>
                        <Card.Text>{props.data.message}</Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        <div >
                            <small className="text-muted" id="scoreBox">
                                <div><strong>Puntuación: </strong>{props.data.score}</div>

                            </small>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default ReviewCard