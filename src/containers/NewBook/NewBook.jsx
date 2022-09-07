import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { userData } from '../User/userSlice'

import "./NewBook.css"

const NewBook = props => {

    try {

        const identification = useSelector(userData);

        const [bookState, setBookState] = useState({
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
            setBookState({
                ...bookState,
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
            await axios.post("https://books-reviews-app-proyect.herokuapp.com/api/book/createBook", bookState, requirements);
        }

        return (

            <div className='mainNewBookBox'>

                <div className='newBookFormBox'>

                    <Form className='newBookForm' onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label className='newBookLabel'>Título</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='title' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Título oficial del libro en España
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSynopsis">
                            <Form.Label className='newBookLabel'>Sinopsis</Form.Label>
                            <Form.Control as="textarea" rows={3} className='newBookInput' type="text" name='synopsis' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Resumen del libro en Español
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSeries">
                            <Form.Label className='newBookLabel'>Saga</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='series' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Indica la saga a la que pertenece
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label className='newBookLabel'>Autor</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='author' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Autor del libro
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicGenre">
                            <Form.Label className='newBookLabel'>Género literario</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className='newBookInput'
                                name='genre'
                                onChange={handleChange}>
                                <option>Abrir el desplegable</option>
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

                        <Form.Group className="mb-3" controlId="formBasicYear">
                            <Form.Label className='newBookLabel'>Fecha de publicación</Form.Label>
                            <Form.Control className='newBookInput' type="date" min="01-01-1800" max="31-12-2050" name='year' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Fecha de publicación de la edición Española
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicBookCover">
                            <Form.Label className='newBookLabel'>Portada</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='book_cover' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Imagen oficial de la cubierta
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAuthorWikiUrl">
                            <Form.Label className='newBookLabel'>Wikipedia del autor</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='author_wiki_url' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Enlace de la wikipidia oficial del autor
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicShopUrl">
                            <Form.Label className='newBookLabel'>A la venta en</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='shop_url' placeholder='Escribe aquí' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Enlace de compra a una web
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 newBookBoxButton">
                            <button className='newBookSendButtom' variant="primary" type="submit">
                                Añadir libro
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

export default NewBook; 