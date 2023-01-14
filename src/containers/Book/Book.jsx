import React, { useEffect, useState } from "react"
import axios from "axios"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import Spinner from "../../components/Spinner/Spinner"
import FlipCard from "../../components/FlipCard/FlipCard"
import { useDispatch } from "react-redux"
import { login } from "../User/userSlice"
import "./Book.scss"

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
            <MDBRow >
                <MDBCol>
                    <input
                        className="form-control searchBar"
                        type="text"
                        value={search}
                        placeholder="Búsqueda por título, autor, género, saga o fecha de publicación"
                        onChange={handleChange}
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                {results.length === 0 &&
                    <div>
                        <p className="loadingText">Cargando contenido</p>
                        <Spinner />

                    </div>
                }
            </MDBRow>
            <MDBRow className="row-cols-1 row-cols-md-4 g-4">
                {
                    results.map((books, i) =>
                    (
                        <MDBCol className="mb-2 mb-lg-0 colCard" xs={12} sm={12} md={12} lg={3} xl={3} xxl={2}>
                            <FlipCard books={books} key={i} />
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default Book