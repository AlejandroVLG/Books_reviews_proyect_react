import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { userData } from '../User/userSlice'

import "./NewBook.css"

const NewBook = props => {

    try {

        const componentTitle = 'Añadir libro'

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

                <div className='mainNewBookFormBox'>

                    <Form className='newBookForm' onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label className='newBookLabel'>Título</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='title' placeholder='Título del libro' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                blabla.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label className='newBookLabel'>Sinopsis</Form.Label>
                            <Form.Control as="textarea" rows={3} className='newBookInput' type="text" name='synopsis' placeholder='Resumen del libro' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                blabla.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNickname">
                            <Form.Label className='newBookLabel'>Saga</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='series' placeholder='Saga a la que pertenece' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                blabla.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='newBookLabel'>Autor</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='author' placeholder='Autor de la obra' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Formato de E-mail válido obligatorio.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='newBookLabel'>Género literario</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='genre' placeholder='Género literario al que pertenece' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Debe ser mínimo de 6 carácteer.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='newBookLabel'>Año de publicación</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='year' placeholder='Año en el que se publicó' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Debe ser mínimo de 6 carácteer.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='newBookLabel'>Imagen de la cubierta</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='book_cover' placeholder='Añadir una imagen de portada' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Debe ser mínimo de 6 carácteer.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='newBookLabel'>Wikipedia del autor</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='author_wiki_url' placeholder='Enlace a la wiki del autor' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Debe ser mínimo de 6 carácteer.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='newBookLabel'>A la venta en</Form.Label>
                            <Form.Control className='newBookInput' type="text" name='shop_url' placeholder='Enlace a una tienda que lo venda' onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Debe ser mínimo de 6 carácteer.
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