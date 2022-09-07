import axios from "axios";
import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { userData } from "../User/userSlice";

import "./NewReview.css"

const NewReview = props => {

    try {
        const identification = useSelector(userData);

        const {id} = useParams()

        const [reviewState, setReviewState] = useState({
            book_id: id,
            review_title: '',
            score: '',
            message: ''
        })
        const handleChange = (e) => {
            setReviewState({
                ...reviewState,
                [e.target.name]: e.target.value
            })
        }

        let requirements = {
            headers: {
                "Authorization": `Bearer ${identification.token}`
            }
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            await axios.post("https://books-reviews-app-proyect.herokuapp.com/api/review/createReview", reviewState, requirements);
        }

        return (

            <div className='mainNewReviewBox'>

                <div className='newReviewBox'>

                    <Form className="newReviewFormBox" onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicReviewTitle">
                            <Form.Label className='newReviewLabel'>Título</Form.Label>
                            <Form.Control className='newReviewInput' type="text" name='review_title' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Elige un título para tu reseña
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label className='newReviewLabel'>Reseña</Form.Label>
                            <Form.Control as="textarea" rows={3} className='newReviewInput' type="text" name='message' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Redacta una reseña con tú valoración
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicScore">
                            <Form.Label className='newReviewLabel'>Puntuación</Form.Label>
                            <Form.Select className='newReviewInput'
                                aria-label="Default select example"
                                name='score'
                                onChange={handleChange}>
                                <option>Abrir el desplegable</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Puntua del 1 al 10 siendo 1 la nota más baja
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 newReviewBoxButton">
                            <button className='newReviewSendButtom' variant="primary" type="submit">
                                Publicar resela
                            </button>
                        </Form.Group>

                    </Form>

                </div>

            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

export default NewReview