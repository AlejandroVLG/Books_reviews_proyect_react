import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { userData } from '../User/userSlice'
import "./EditReview.scss"

const EditReview = props => {

    try {

        const identification = useSelector(userData)

        const { id } = useParams()

        const [editedReviewState, setEditedReviewState] = useState({
            book_id: id,
            review_title: '',
            score: '',
            message: ''
        })

        const handleChange = (e) => {
            setEditedReviewState({
                ...editedReviewState,
                [e.target.name]: e.target.value
            })
        }

        let requirements = {
            headers: {
                "Authorization": `Bearer ${identification.token}`,
            }
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            await axios.put(`https://bookapi.up.railway.app/api/Review/editReviewById/${id}`, editedReviewState, requirements)
        }

        return (
            <div className='mainEditReviewBox'>
                <div className='editReviewFormBox'>
                    <div className='editReviewForm' >
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicReviewTitle"
                            >
                                <Form.Label className='editReviewLabel'>
                                    Título
                                </Form.Label>
                                <Form.Control
                                    className='editReviewInput'
                                    type="text"
                                    name='review_title'
                                    placeholder='Escribe aquí'
                                    onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                    Elige un título para tu reseña
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicScore">
                                <Form.Label className='editReviewLabel'>
                                    Puntuación
                                </Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className='editReviewInput'
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
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label className='editReviewLabel'>
                                    Reseña
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    cols={5}
                                    className='editReviewInput textArea'
                                    type="text"
                                    name='message'
                                    placeholder='Escribe aquí'
                                    onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                    Redacta una reseña con tú valoración
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 editReviewBoxButton">
                                <button
                                    className='editReviewSendButtom'
                                    variant="primary"
                                    type="submit"
                                >
                                    Editar
                                </button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div >
        )
    } catch (error) {
        console.log(error)
    }
}

export default EditReview