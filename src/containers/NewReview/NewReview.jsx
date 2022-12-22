import React, { useEffect, useState } from "react"
import axios from "axios"
import { Col, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { userData } from "../User/userSlice"
import "./NewReview.scss"

const NewReview = props => {

    try {

        let navigate = useNavigate()

        const identification = useSelector(userData)

        const { id } = useParams()

        const [reviewState, setReviewState] = useState({
            book_id: id,
            review_title: '',
            score: '',
            message: ''
        })

        useEffect(() => {

            if (reviewState.successMsg == 'Reseña añadida correctamente') {

                setTimeout(() => {
                    navigate("/books")

                }, 500)
            }
        })

        const handleChange = (e) => {
            setReviewState({
                ...reviewState,
                [e.target.name]: e.target.value
            })
        }

        let requirements = {
            headers: {
                "Authorization": `Bearer ${identification.token}`,
            },
        }

        const handleSubmit = async (e) => {
            e.preventDefault()

            await axios.post("https://bookapi.up.railway.app/api/review/createReview", reviewState, requirements)
        }

        const validation = () => {

            if (reviewState.review_title || reviewState.score || reviewState.message === '') {

                setReviewState({
                    ...reviewState,
                    isError: true,
                    errorMessage: 'Ha habido un error'
                })
            }

            setReviewState({
                ...reviewState,
                isError: false,
                successMsg: 'Reseña añadida correctamente'
            })
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
                                onClick={validation}
                            >
                                Publicar
                            </button>
                            <div className='newBookMessage'>
                                {
                                    reviewState.isError ?
                                        (<p style={{ color: "red" }}>{reviewState.errorMessage}</p>)
                                        :
                                        (<p style={{ color: "green" }}>{reviewState.successMsg}</p>)
                                }
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        )

    } catch (error) {
        console.log(error)
    }
}

export default NewReview