import React from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { userData } from "../../containers/User/userSlice"
import './BookCard.css'

const BookCard = props => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const deleteId = useParams(props.data.id)

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const travel = (destiny) => {

        navigate(destiny)
    }

    const handleDelete = async (deleteId) => {

        await axios.delete(`https://books-reviews-app-proyect.herokuapp.com/api/book/deleteBook/${deleteId}`, requirements)

    }
    if (props.data.name == "") {
        return (

            <Card className="mainCardBox" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.book_cover} className="cover" />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>Autor<br /><strong>{props.data.author}</strong></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Saga<br /><strong>{props.data.series}</strong></ListGroup.Item>
                    <ListGroup.Item>Género<br /><strong>{props.data.genre}</strong></ListGroup.Item>
                    <ListGroup.Item>Fecha publicación<br /><strong>{props.data.year}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={props.data.author_wiki_url}>Wikipedia del autor</Card.Link>
                    <Card.Link href={props.data.shop_url}>Cómpralo</Card.Link><br /><br />
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={() => travel(`/reviews/${props.data.id}`)}>
                            Ver reseñas
                        </Button>
                    </div>
                    <div className="d-grid gap-2 adminBox">
                        <button onClick={() => travel("/reviews")}>
                            Editar libro
                        </button>
                        <button onClick={handleDelete(props.data.id)}>
                            Eliminar libro
                        </button>
                    </div>
                </Card.Body>
            </Card>
        )
    } else {
        return (

            <Card className="mainCardBox" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.book_cover} className="cover" />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>Autor<br /><strong>{props.data.author}</strong></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Saga<br /><strong>{props.data.series}</strong></ListGroup.Item>
                    <ListGroup.Item>Género<br /><strong>{props.data.genre}</strong></ListGroup.Item>
                    <ListGroup.Item>Fecha publicación<br /><strong>{props.data.year}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={props.data.author_wiki_url}>Wikipedia del autor</Card.Link>
                    <Card.Link href={props.data.shop_url}>Cómpralo</Card.Link><br /><br />
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={() => travel(`/reviews/${props.data.id}`)}>
                            Ver reseñas
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default BookCard