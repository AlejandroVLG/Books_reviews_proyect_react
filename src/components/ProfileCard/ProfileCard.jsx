import React from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import './ProfileCard.css'

const ProfileCard = props => {


    return (

        <Card className="text-center">
            <Card.Header><strong>{props.data.nick_name}</strong></Card.Header>
            <Card.Body>
                <Card.Title>
                    <strong>{props.data.name}</strong>
                    <br /><strong>{props.data.last_name}</strong>
                </Card.Title>
                <ListGroup className="list-group-flush">
                <hr />
                    <ListGroup.Item>E-mail <br /><strong>{props.data.email}</strong></ListGroup.Item>
                    <ListGroup.Item>Género <br /><strong>{props.data.gender}</strong></ListGroup.Item>
                    <ListGroup.Item>Edad <br /><strong>{props.data.age}</strong></ListGroup.Item>
                    <ListGroup.Item>País <br /><strong>{props.data.country}</strong></ListGroup.Item>
                    <ListGroup.Item>Autor favorito <br /><strong>{props.data.favourite_author}</strong></ListGroup.Item>
                    <ListGroup.Item>Leyendo en la actualidad <br /><strong>{props.data.currently_reading}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Link href={props.data.facebook_account}>Facebook</Card.Link>
                <Card.Link href={props.data.twitter_account}>Twitter</Card.Link>
                <Card.Link href={props.data.instagram_account}>Instagram</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard