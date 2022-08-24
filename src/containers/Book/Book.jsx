import axios from "axios";
import React, { useEffect, useState } from "react";

import BooksCard from "../../components/BooksCard/BooksCard";

import "./Book.css"

function Book() {
    
    const [booksData, setbooksData] = useState({
        books: []
    })

    useEffect(() => {
        axios.get('https://books-reviews-app-proyect.herokuapp.com/api/book/showAllBooks')
            .then(resp => {
                setbooksData({
                    books: resp.data.data
                })
                
            })

    }, [])
    console.log(booksData)

    return (
        <div className="bookMainBox">
            <div className="bookContentBox">
                <div className="bookDataBox">
                    <h1>Libros</h1>
                    <div className="bookCard">
                        {booksData.length === 0 && <p>Cargando...</p>}
                        {
                            booksData.books.map((books, i) =>
                            (
                                <li key={i}>
                                    <BooksCard data={books} key={i}/>
                                </li>
                            )
                            )
                        }
                    </div>
                </div>
                <div className="bookSearchBox">Search</div>
            </div>
            <div className="bookFooterBox">Footer</div>
        </div>
    )
}

export default Book;