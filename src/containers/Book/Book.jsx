import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../User/userSlice"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import Spinner from "../../components/Spinner/Spinner"
import axios from "axios"
import "./Book.scss"
import BookCard from "../../components/BookCard/BookCard"

const Book = () => {

    const dispatch = useDispatch()

    const [booksData, setbooksData] = useState({
        books: []
    })

    const [search, setSearch] = useState("")

    const showBooks = async () => {

        try {
            const response = await axios.get('http://127.0.0.1:8000/api/book/showAllBooks')

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
        <MDBContainer fluid className="mainBookContainer">
            <MDBRow className="booksRow">
                <MDBCol md={8} lg={7} xl={6} xxl={6} className="searchBarCol">
                    <div className="blankBox"></div>
                    <p className="textSearchBar">
                        Realiza una búsqueda por título, género, saga o fecha
                    </p>
                    <div className="searchBar">
                        <input
                            className="form-control"
                            type="text"
                            value={search}
                            placeholder="Buscar libro"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="blankBox"></div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                {results.length === 0 &&
                    <div className="bookSpinner">
                        <div className="blankBox"></div>
                        <p className="loadingText">Cargando...</p>
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
                            md={12} lg={12} xl={12} xxl={12}
                            key={i}>
                            <BookCard books={books} key={i} />
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default Book