import axios from "axios"
import React from "react"
import { Button, Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import './ReviewCard.css'


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

    return (
        <div className="reviewsBox">

            <Card id="reviewCardBox">
                <Card.Img className="reviewCardImg" variant="top" src={props.data.book_cover} />
                <Card.Body className="reviewCardData">
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.data.synopsis}</Card.Text>
                    <Card.Title>{props.data.review_title}</Card.Title>
                    <Card.Text>{props.data.message}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div >
                        <small className="text-muted" id="scoreBox">
                            <div><strong>Puntuación: </strong>{props.data.score}</div>
                            <div className="buttonsBox">
                                <Button variant="warning" onClick={() => travel(`/editReview/${props.data.id}`)}>Editar</Button>
                                <Button variant="danger" onClick={handleDelete} >Eliminar</Button>{' '}
                            </div>
                        </small>
                    </div>
                </Card.Footer>
            </Card>

        </div>

    )
}

export default ReviewCard