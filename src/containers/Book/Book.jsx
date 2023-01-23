import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../User/userSlice"
import FlipCard from "../../components/FlipCard/FlipCard"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import Spinner from "../../components/Spinner/Spinner"
import axios from "axios"
import "./Book.scss"
import { Form } from "react-bootstrap"

const Book = () => {

    const dispatch = useDispatch()

    const [booksData, setbooksData] = useState({
        books: []
    })

    const [search, setSearch] = useState("")

    const showBooks = async () => {

        try {
            const response = await axios.get('https://bookapi.up.railway.app/api/book/showAllBooks')

            setbooksData({
                books: response.data.data
            })
            dispatch(login(
                {
                    bookData: response.data
                }
            ))

        } catch (error) {
            console.log(error)
        }
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
            data.year.toLowerCase().includes(search.toLocaleLowerCase()) ||
            data.series.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    useEffect(() => {
        showBooks()
    }, [])

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol className="searchBarCol">
                    <p className="textSearchBar">
                        Realiza una búsqueda por título, género, saga o fecha
                    </p>
                    <div className="searchBar">
                        <input
                            className="form-control"
                            type="text"
                            value={search}
                            placeholder="Búsqueda por título, autor, género, saga o fecha de publicación"
                            onChange={handleChange}
                        />
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                {results.length === 0 &&
                    <div className="bookSpinner">
                        <p className="loadingText">Cargando contenido</p>
                        <Spinner />

                    </div>
                }
            </MDBRow>
            <MDBRow className="bookCardsRowContainer row-cols-1 row-cols-md-4 g-4">
                {
                    results.map((books, i) =>
                    (
                        <MDBCol
                            className="mb-2 mb-lg-0 colCard"
                            sm={7} md={6} lg={5} xl={4} xxl={3}
                            key={i}>
                            <FlipCard books={books} key={i} />
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default Book