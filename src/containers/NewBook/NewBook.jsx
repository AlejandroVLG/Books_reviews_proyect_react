import axios from 'axios'
import { Formulary, BoxButtonCentered, RegisterButton, SuccessMsg, ErrorMsg } from '../../styledComponents/styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import InputNewBook from '../../components/InputNewBook/InputNewBook'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { userData } from '../User/userSlice'

import "./NewBook.css"

const NewBook = props => {

    try {
        const regularExpression = {
            text: /^[A-Za-z0-9\s]+$/g, // Letters, numbers, spacing between words and accentuation allowed.
            date: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,  // Letters, numbers and between words spacing allowed.
            url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g // Url format required.
        }

        const [titleData, setTitleData] = useState({ field: '', valid: null })
        const [seriesData, setSeriesData] = useState({ field: '', valid: null })
        const [authorData, setAuthorData] = useState({ field: '', valid: null })
        const [genreData, setGenreData] = useState({ field: '', valid: null })
        const [yearData, setYearData] = useState({ field: '', valid: null })
        const [bookCoverData, setBookCoverData] = useState({ field: '', valid: null })
        const [authorWikiUrlData, setAuthorWikiUrlData] = useState({ field: '', valid: null })
        const [shopUrlData, setShopUrlData] = useState({ field: '', valid: null })
        const [formularyValid, setFormularyValid] = useState(null)

        const identification = useSelector(userData)

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
        const handleNewBookState = (e) => {
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

        // VALIDATIONS

        const onSubmitValidations = (e) => {
            e.preventDefault()

            if (
                titleData.valid === 'true' &&
                seriesData.valid === 'true' &&
                authorData.valid === 'true' &&
                genreData.valid === 'true' &&
                yearData.valid === 'true' &&
                bookCoverData.valid === 'true' &&
                authorWikiUrlData.valid === 'true' &&
                shopUrlData.valid === 'true'

            ) {
                setFormularyValid(true);
                setTitleData({ field: '', valid: null })
                setAuthorData({ field: '', valid: '' })
                setGenreData({ field: '', valid: '' })
                setYearData({ field: '', valid: '' })
                setBookCoverData({ field: '', valid: '' })
                setAuthorData({ field: '', valid: '' })
                setShopUrlData({ field: '', valid: null })

                axios.post("https://books-reviews-app-proyect.herokuapp.com/api/book/createBook", bookState, requirements)

            } else {
                setFormularyValid(false)
            }
        }

        return (

            <div className='newBookBox'>
                <div className='mainRegisterBox' >

                    <Formulary className='newBookForm' onSubmit={onSubmitValidations}>

                        <InputNewBook
                            state={titleData}
                            changeValidation={setTitleData}
                            changeRegister={handleNewBookState}
                            type="text"
                            label="Título"
                            placeholder="Introduzca el título del libro"
                            name="title"
                            errorLeyend="Este campo solo puede contener letras, numeros y espacios"
                            regularExpression={regularExpression.text}
                        />
                        <InputNewBook
                            state={seriesData}
                            changeValidation={setSeriesData}
                            changeRegister={handleNewBookState}
                            type="text"
                            label="Saga literaria"
                            placeholder="Introduzca la saga, de no existir añadir el título"
                            name="series"
                            errorLeyend="Este campo solo puede contener letras, numeros y espacios"
                            regularExpression={regularExpression.text}
                        />
                        <InputNewBook
                            state={authorData}
                            changeValidation={setAuthorData}
                            changeNewBook={handleNewBookState}
                            type="text"
                            label="Autor"
                            placeholder="Introduzca el autor de la obra"
                            name="author"
                            errorLeyend="Este campo solo puede contener letras, numeros y espacios"
                            regularExpression={regularExpression.text}
                        />
                        <InputNewBook
                            state={genreData}
                            changeValidation={setGenreData}
                            changeNewBook={handleNewBookState}
                            type="text"
                            label="Género"
                            placeholder="Introduzca el género litearario"
                            name="genre"
                            errorLeyend="Este campo solo puede contener letras, numeros y espacios"
                            regularExpression={regularExpression.text}
                        />
                        <InputNewBook
                            state={yearData}
                            changeValidation={setYearData}
                            changeNewBook={handleNewBookState}
                            type="text"
                            label="Año"
                            placeholder="Introduzca el año de cración"
                            name="year"
                            errorLeyend="Este campo solo puede contener letras, numeros y espacios"
                            regularExpression={regularExpression.date}
                        />
                        <InputNewBook
                            state={bookCoverData}
                            changeValidation={setBookCoverData}
                            changeNewBook={handleNewBookState}
                            type="text"
                            label="Portada del libro"
                            placeholder="Introduzca enlace a la portada"
                            name="book_cover"
                            errorLeyend="Este campo debe ser una URL"
                            regularExpression={regularExpression.url}
                        />
                        <InputNewBook
                            state={authorWikiUrlData}
                            changeValidation={setAuthorWikiUrlData}
                            changeNewBook={handleNewBookState}
                            type="text"
                            label="Enlace a la wiki del autor"
                            placeholder="Introduzca el año de cración"
                            name="author_wiki_url"
                            errorLeyend="Este campo debe ser una URL"
                            regularExpression={regularExpression.url}
                        />
                        <InputNewBook
                            state={shopUrlData}
                            changeValidation={setShopUrlData}
                            changeNewBook={handleNewBookState}
                            type="text"
                            label="Enlace a la tienda"
                            placeholder="Introduzca un enlace de compra"
                            name="shop_url"
                            errorLeyend="Este campo debe ser una URL"
                            regularExpression={regularExpression.url}
                        />
                        {formularyValid === false && <ErrorMsg>
                            <p>
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                <b>Error:</b> Por favor rellena el formulario correctamente.
                            </p>
                        </ErrorMsg>}
                        <BoxButtonCentered>
                            <RegisterButton type="submit">Nuevo libro</RegisterButton>
                            {formularyValid === true && <SuccessMsg>Formulario enviado exitosamente!</SuccessMsg>}
                        </BoxButtonCentered>

                    </Formulary>

                </div>
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

export default NewBook; 