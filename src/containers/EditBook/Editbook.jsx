import React, { useState } from 'react'
import axios from 'axios'
import { Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { userData } from '../User/userSlice'
import "./EditBook.scss"
import { useEffect } from 'react'

const EditBook = () => {

    const identification = useSelector(userData)

    const { id } = useParams()

    const navigate = useNavigate()

    const [editedBookState, setEditedBookState] = useState({
        title: '',
        series: '',
        author: '',
        genre: '',
        year: '',
        book_cover: '',
        author_wiki_url: '',
        shop_url: '',
        synopsis: ''
    })

    const handleChange = (e) => {
        setEditedBookState({
            ...editedBookState,
            [e.target.name]: e.target.value
        })
    }

    const showBookData = async () => {

        const bookResponse = await axios.get(`https://bookapi.up.railway.app/api/book/showBookById/${id}`)

        setEditedBookState({
            title: bookResponse.data.data.title,
            series: bookResponse.data.data.series,
            author: bookResponse.data.data.author,
            genre: bookResponse.data.data.genre,
            year: bookResponse.data.data.year,
            book_cover: bookResponse.data.data.book_cover,
            author_wiki_url: bookResponse.data.data.author_wiki_url,
            shop_url: bookResponse.data.data.shop_url,
            synopsis: bookResponse.data.data.synopsis
        })
    }

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`,
        }
    }

    useEffect(() => {

        showBookData()

    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            await axios.put(`https://bookapi.up.railway.app/api/book/editBookById/${id}`, editedBookState, requirements)

            if (!editedBookState.isError) {

                setEditedBookState({
                    ...editedBookState,
                    isError: false,
                    message: 'Libro añadido correctamente'
                })

                setTimeout(() => {
                    navigate("/books")

                }, 1500)
            } else {
                setEditedBookState({
                    ...editedBookState,
                    isError: true,
                    message: "Ha habido un error"
                })
            }
        } catch (error) {
            console.log(error)
            setEditedBookState({
                ...editedBookState,
                isError: true,
                message:
                    error.response.data.message.title ||
                    error.response.data.message.series ||
                    error.response.data.message.author ||
                    error.response.data.message.genre ||
                    error.response.data.message.gender ||
                    error.response.data.message.year ||
                    error.response.data.message.book_cover ||
                    error.response.data.message.author_wiki_url ||
                    error.response.data.message.shop_url ||
                    error.response.data.message.synopsis ||
                    error.response.data.message
            })
        }
    }
    if (identification.token === "") {

        return (
            useEffect(() => {
                navigate("/login")
            }, [])
        )
    } else {

        return (
            <Form className='editBookForm' onSubmit={handleSubmit} >
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicTitle" >
                            <Form.Label className='editBookLabel'>
                                Título
                            </Form.Label >
                            <Form.Control
                                className='editBookInput'
                                type="text" name='title'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Título oficial del libro en España
                            </Form.Text>
                        </Form.Group >
                    </Col >
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicSeries">
                            <Form.Label className='editBookLabel'>
                                Saga
                            </Form.Label>
                            <Form.Control
                                className='editBookInput'
                                type="text"
                                name='series'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Indica la saga a la que pertenece
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label className='editBookLabel'>
                                Autor
                            </Form.Label>
                            <Form.Control
                                className='editBookInput'
                                type="text" name='author'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Autor del libro
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicGenre">
                            <Form.Label className='editBookLabel'>
                                Género literario
                            </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className='editBookInput'
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
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicYear">
                            <Form.Label className='editBookLabel'>
                                Fecha de publicación
                            </Form.Label>
                            <Form.Control
                                className='editBookInput'
                                type="date"
                                min="01-01-1800"
                                max="31-12-2050"
                                name='year'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Fecha de publicación de la edición Española
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicBookCover">
                            <Form.Label className='editBookLabel'>
                                Portada
                            </Form.Label>
                            <Form.Control
                                className='editBookInput'
                                type="text"
                                name='book_cover'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Imagen oficial de la cubierta
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicAuthorWikiUrl">
                            <Form.Label className='editBookLabel'>
                                Wikipedia del autor
                            </Form.Label>
                            <Form.Control
                                className='editBookInput'
                                type="text"
                                name='author_wiki_url'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Enlace de la wikipidia oficial del autor
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
                        <Form.Group className="mb-3" controlId="formBasicShopUrl">
                            <Form.Label className='editBookLabel'>
                                A la venta en
                            </Form.Label>
                            <Form.Control
                                className='editBookInput'
                                type="text"
                                name='shop_url'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Enlace de compra en amazon
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                        <Form.Group className="mb-3 " controlId="formBasicSynopsis">
                            <Form.Label className='editBookLabel'>
                                Sinopsis
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                className='newBookInput editBookSynopsis'
                                type="text"
                                name='synopsis'
                                placeholder='Escribe aquí'
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Resumen del libro en Español
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                        <Form.Group className="mb-3 editBookBoxButton">
                            <button className='editBookSendButtom' variant="primary" type="submit">
                                Actualizar datos
                            </button>
                            <div className='editBookMessage'>
                                {
                                    editedBookState.isError ?
                                        (<p style={{ color: "red" }}>{editedBookState.message}</p>)
                                        :
                                        (<p style={{ color: "green" }}>{editedBookState.message}</p>)
                                }
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form >
        )
    }
}

export default EditBook