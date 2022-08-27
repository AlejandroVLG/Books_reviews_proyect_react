import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';

import "./NewBook.css";

const NewBook = props => {

    const componentTitle = 'Añadir libro'

    const [bookState, setBookState] = useState({
        title: '',
        series: '',
        author: '',
        genre: '',
        year: '',
        bookCover: '',
        authorWikiUrl: '',
        shopUrl: '',

    })

    const { title, author } = bookState

    const getFormData = e => {

        e.preventDefault()

        let target = e.target

        let title = target.title.value
        let synopsis = target.synopsis.value
        let series = target.series.value
        let author = target.author.value
        let genre = target.genre.value
        let year = target.year.value
        let bookCover = target.bookCover.value
        let authorWikiUrl = target.authorWikiUrl.value
        let shopUrl = target.shopUrl.value

        let book = {
            id: new Date().getTime(),
            title: title,
            synopsis: synopsis,
            series: series,
            author: author,
            genre: genre,
            year: year,
            bookCover: bookCover,
            authorWikiUrl: authorWikiUrl,
            shopUrl: shopUrl
        }
        setBookState(book)
    }
    const identification = useSelector(userData);

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    useEffect((body) => {
        axios.post("https://books-reviews-app-proyect.herokuapp.com/api/book/createBook", body, requirements)
            .then(resp => {
                setBookState({
                    ...bookState,
                    [resp.target.name]: resp.target.value
                })

            })
    }, [])


    return (
        <div className='MyProfile'>

            <h3>{componentTitle}</h3><hr />

            <strong>
                {(title && author) && "You've added: " + title}
            </strong>

            <form className='newBookForm' >
                <input type="text" placeholder='Title' name='title' />
                <textarea type="text" placeholder='Synopsis' name='synopsis' />
                <input type="text" placeholder='Series' name='series' />
                <input type="text" placeholder='Author' name='author' />
                <input type="text" placeholder='Genre' name='genre' />
                <input type="text" placeholder='Year' name='year' />
                <input type="text" placeholder='Book cover' name='bookCover' />
                <input type="text" placeholder='Author wiki url' name='authorWikiUrl' />
                <input type="text" placeholder='shop url' name='shopUrl' />
                <input type="submit" value="Send" onSubmit={getFormData}/>
            </form>
        </div>
    )
}

export default NewBook; 