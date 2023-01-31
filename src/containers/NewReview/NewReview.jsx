import React, { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { useSelector } from "react-redux"
import { userData } from "../User/userSlice"
import { Col, Form, Row } from "react-bootstrap"
import axios from "axios"
import "./NewReview.scss"

const NewReview = () => {

    const navigate = useNavigate()

    const identification = useSelector(userData)

    const { id } = useParams()

    const [reviewState, setReviewState] = useState({
        book_id: id,
        review_title: '',
        score: '',
        message: '',
        resultMessage: ""
    })

    const handleChange = (e) => {
        setReviewState({
            ...reviewState,
            [e.target.name]: e.target.value
        })
    }

    // clearing function for validations messages
    const clearValidationMessageHandler = () => {

        setTimeout(() => {
            setReviewState(
                {
                    resultMessage: ""
                }
            )
        }, 1000);
    }

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`,
        },
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://127.0.0.1:8000/api/review/createReview", reviewState, requirements)

            if (!reviewState.isError) {

                setReviewState({
                    ...reviewState,
                    isError: false,
                    resultMessage: 'Reseña añadida correctamente'
                })
                setTimeout(() => {
                    navigate("/books")

                }, 1500)

            } else if (
                reviewState.review_title ||
                reviewState.score ||
                reviewState.message == ""
            ) {
                setReviewState({
                    ...reviewState,
                    isError: true,
                    resultMessage: 'Rellena todos los campos para continuar'
                })
            }
            else {
                setReviewState({
                    ...reviewState,
                    isError: true,
                    resultMessage: 'Ha habido un error'
                })
            }
        } catch (error) {
            if (
                reviewState.review_title ||
                reviewState.score ||
                reviewState.message == ""
            ) {
                setReviewState({
                    ...reviewState,
                    isError: true,
                    resultMessage: 'Rellena todos los campos para continuar'
                })
            } else {
                setReviewState({
                    ...reviewState,
                    isError: true,
                    resultMessage: error.message
                })
            }
        }
    }

    return (

        <Form className="newReviewFormBox" onSubmit={handleSubmit}>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                    <Form.Group className="mb-3" controlId="formBasicReviewTitle">
                        <Form.Label className='newReviewLabel'>Título</Form.Label>
                        <Form.Control
                            className='newReviewInput'
                            type="text"
                            name='review_title'
                            placeholder='Escribe aquí'
                            onChange={handleChange}
                            onClick={clearValidationMessageHandler}
                        />
                        <Form.Text className="text-muted">
                            Elige un título para tu reseña
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >

                    <Form.Group className="mb-3" controlId="formBasicScore">
                        <Form.Label className='newReviewLabel'>Puntuación</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            className='newReviewInput'
                            name='score'
                            onClick={clearValidationMessageHandler}
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
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                    <Form.Group className="mb-3 " controlId="formBasicMessage">
                        <Form.Label className='newReviewLabel'>Reseña</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            className='newReviewInput review'
                            type="text"
                            name='message'
                            placeholder='Escribe aquí'
                            onChange={handleChange}
                            onClick={clearValidationMessageHandler}
                        />
                        <Form.Text className="text-muted">
                            Redacta una reseña con tú valoración
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                    <Form.Group className="mb-3 newReviewBoxButton">
                        <button
                            className='newReviewSendButtom'
                            variant="primary"
                            type="submit"
                        >
                            Publicar
                        </button>
                        <div className='newBookMessage'>
                            {
                                reviewState.isError ?
                                    (<p style={{ color: "red" }}>{reviewState.resultMessage}</p>)
                                    :
                                    (<p style={{ color: "green" }}>{reviewState.resultMessage}</p>)
                            }
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default NewReview