import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { userData } from '../User/userSlice'
import "./EditReview.scss"

const EditReview = props => {

    try {
        const navigate = useNavigate()

        const identification = useSelector(userData)

        const { id } = useParams()

        const [editedReviewState, setEditedReviewState] = useState({
            book_id: id,
            review_title: ' ',
            score: ' ',
            message: ' '
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

            await axios.put(
                `https://bookapi.up.railway.app/api/review/editReviewById/${id}`,
                editedReviewState,
                requirements
            )
/* 
            if (editResponse.status === 200 || editResponse.status === 201) {

                setEditedReviewState({
                    ...editedReviewState,
                    isError: false,
                    successMsg: 'Reseña editada correctamente'
                })
                setTimeout(() => {
                    navigate("/books")

                }, 500)
            } else if (editResponse.status === 400 || editResponse.status === 500) {

                setEditedReviewState({
                    ...editedReviewState,
                    isError: true,
                    message: 'Ha habido un error, revisa los campos'
                })
            } else if (editResponse.status === 401) {

                setEditedReviewState({
                    ...editedReviewState,
                    isError: true,
                    message: 'Inicia sesión para continuar'
                })
            } */
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
                                    Modifica el título de tu reseña
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
                                    Cambia la puntuación
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
                                    Redacta una nueva reseña
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
                                {/* <div className='editMessage'>
                                    {
                                        editedReviewState.isError ?
                                            (<p style={{ color: "red" }}>{editedReviewState.message}</p>)
                                            :
                                            (<p style={{ color: "green" }}>{editedReviewState.successMsg}</p>)
                                    }
                                </div> */}
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