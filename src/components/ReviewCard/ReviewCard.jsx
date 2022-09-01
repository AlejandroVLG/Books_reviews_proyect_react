import React from "react"
import { Button, Card } from "react-bootstrap"
import './ReviewCard.css'


const ReviewCard = props => {

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
                                <Button variant="warning">Editar</Button>{' '}
                                <Button variant="danger">Eliminar</Button>{' '}
                            </div>
                        </small>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    )
}

export default ReviewCard