import axios from "axios"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import React, { useEffect, useState } from "react"
import BookCard from "../../components/BookCard/BookCard"
import "./Book.scss"

const Book = props => {

    try {
        const [booksData, setbooksData] = useState({
            books: []
        })

        const [search, setSearch] = useState("")

        const showBooks = async () => {

            const response = await axios.get('https://books-reviews-app-proyect.herokuapp.com/api/book/showAllBooks')

            setbooksData({
                books: response.data.data
            })
        }

        const handleChange = e => {
            setSearch(e.target.value)
        }

        let results = []

        if (!search) {
            results = booksData.books

        } else {
            results = booksData.books.filter((data) =>

                data.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
                data.author.toLowerCase().includes(search.toLocaleLowerCase()) ||
                data.genre.toLowerCase().includes(search.toLocaleLowerCase()) ||
                data.year.toLowerCase().includes(search.toLocaleLowerCase())
            )
        }

        useEffect(() => {
            showBooks()
        }, [])

        return (
            <div className="bookMainBox">

                <input
                    className="form-control searchBar"
                    type="text"
                    value={search}
                    placeholder="Datos de la búsqueda"
                    onChange={handleChange}
                />
                <div className="bookContentBox">

                    {results.length === 0 && <p>Cargando...</p>}
                    {
                        results.map((books, i) =>
                        (
                            <div key={i}>
                                <MDBContainer className="py-1 h-100 bookCardContainer">
                                    <MDBRow className="justify-content-center align-items-center h-100">
                                        <MDBCol lg="12" className="mb-2 mb-lg-0 colCard" >
                                            <BookCard data={books} key={i} />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        )
                        )
                    }

                </div>

            </div>
        )

    } catch (error) {
        console.log(error)
    }
}

export default Book;