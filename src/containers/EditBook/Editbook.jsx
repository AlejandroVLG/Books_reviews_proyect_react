import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { userData } from '../User/userSlice'
import "./EditBook.scss"

const EditBook = props => {

    try {

        const identification = useSelector(userData)

        const { id } = useParams()

        const [editedBookState, setEditedBookState] = useState({
            title: '',
            series: '',
            author: '',
            genre: '',
            year: '',
            book_cover: '',
            author_wiki_url: '',
            shop_url: '',

        })

        const handleChange = (e) => {
            setEditedBookState({
                ...editedBookState,
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
            await axios.put(`https://books-reviews-app-proyect.herokuapp.com/api/book/editBookById/${id}`, editedBookState, requirements)
        }

        return (
            <div className='mainEditBookBox'>
                <div className='editBookFormBox'>
                    <div className='editBookForm' >

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label className='editBookLabel'>Título</Form.Label>
                                <Form.Control className='editBookInput' type="text" name='title' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Título oficial del libro en España
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 editBookBoxButton">
                                <button className='editBookSendButtom' variant="primary" type="submit">
                                    Actualizar
                                </button>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label className='editBookLabel'>Sinopsis</Form.Label>
                                <Form.Control as="textarea" rows={3} className='editBookInput' type="text" name='synopsis' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Resumen del libro en Español
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicNickname">
                                <Form.Label className='editBookLabel'>Saga</Form.Label>
                                <Form.Control className='editBookInput' type="text" name='series' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Indica la saga a la que pertenece
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='editBookLabel'>Autor</Form.Label>
                                <Form.Control className='editBookInput' type="text" name='author' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Autor del libro
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='editBookLabel'>Género literario</Form.Label>
                                <Form.Select
                                    className='editBookInput'
                                    name='genre'
                                    placeholder='Escribe aquí'
                                    onChange={handleChange}>
                                    <option value="Autobiografía">Autobiografía</option>
                                    <option value="Aventuras">Aventuras</option>
                                    <option value="Ciencia ficción">Ciencia ficción</option>
                                    <option value="Policíaca">Policíaca</option>
                                    <option value="Educativa">Educativa</option>
                                    <option value="Fantasía">Fantasía</option>
                                    <option value="Histórica">Histórica</option>
                                    <option value="Humor">Humor</option>
                                    <option value="Infantil">Infantil</option>
                                    <option value="Misterio">Misterio</option>
                                    <option value="Novela negra">Novela negra</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Terror">Terror</option>
                                </Form.Select>
                                <Form.Text className="text-muted">
                                    Selecciona uno de entre los géneros indicados
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='editBookLabel'>Fecha de publicación</Form.Label>
                                <Form.Control className='editBookInput' type="date" min="01-01-1800" max="31-12-2050" name='year' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Fecha de publicación de la edición Española
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='editBookLabel'>Portada</Form.Label>
                                <Form.Control className='editBookInput' type="text" name='book_cover' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Imagen oficial de la cubierta
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='editBookLabel'>Wikipedia del autor</Form.Label>
                                <Form.Control className='editBookInput' type="text" name='author_wiki_url' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Enlace de la wikipidia oficial del autor
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='editBookLabel'>A la venta en</Form.Label>
                                <Form.Control className='editBookInput' type="text" name='shop_url' placeholder='Escribe aquí' onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Enlace de compra a una web
                                </Form.Text>
                            </Form.Group>
                        </Form>


                        <Form.Group className="mb-3 editBookBoxButton">
                            <button className='editBookSendButtom' variant="primary" type="submit">
                                Añadir libro
                            </button>
                        </Form.Group>

                    </div>
                </div>
            </div >
        )

    } catch (error) {
        console.log(error)
    }
}

export default EditBook