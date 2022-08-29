import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';

import "./NewBook.css";

const NewBook = props => {

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
        <div className='MyProfile'>

            <h3>{componentTitle}</h3><hr />

            <form className='newBookForm' onSubmit={handleSubmit}>
                <input type="text" placeholder='Title' name='title' onChange={handleChange} />
                <textarea type="text" placeholder='Synopsis' name='synopsis' onChange={handleChange} />
                <input type="text" placeholder='Series' name='series' onChange={handleChange} />
                <input type="text" placeholder='Author' name='author' onChange={handleChange} />
                <input type="text" placeholder='Genre' name='genre' onChange={handleChange} />
                <input type="text" placeholder='Year' name='year' onChange={handleChange} />
                <input type="text" placeholder='Book cover' name='book_cover' onChange={handleChange} />
                <input type="text" placeholder='Author wiki url' name='author_wiki_url' onChange={handleChange} />
                <input type="text" placeholder='shop url' name='shop_url' onChange={handleChange} />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default NewBook; 