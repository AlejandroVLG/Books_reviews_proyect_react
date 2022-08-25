import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import './ReviewCard.css'

const ReviewCard = props => {

    return (
        <div className="reviewsBox">
            <Card className="reviewCardBox"  >
                <Card.Img className="reviewCardImg" variant="top" src={props.data.book_cover} />
                <Card.Body className="reviewCardData">
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.data.synopsis}</Card.Text>
                    <Card.Title>{props.data.review_title}</Card.Title>
                    <Card.Text>{props.data.message}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><strong>Puntuación: </strong>{props.data.score}</small>
                </Card.Footer>
            </Card>
        </div>

    )
}

export default ReviewCard