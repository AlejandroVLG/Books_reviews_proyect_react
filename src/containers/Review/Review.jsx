import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import Spinner from "../../components/Spinner/Spinner"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import "./Review.scss"

const Review = () => {

    const { id } = useParams()

    const [reviewData, setReviewsData] = useState({
        reviews: []
    })

    const [dataState, setDataState] = useState("")

    const showReviews = async () => {

        try {

            const response = await axios.get(`https://bookapi.up.railway.app/api/review/searchReviewByBookId/${id}`)

            setReviewsData({
                reviews: response.data.data
            })
        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {

        setDataState("Cargando contenido")

        setTimeout(() => {
            setDataState("No hay reseñas publicadas")
        }, 2500);

        showReviews()
    }, [])

    return (

        <MDBContainer fluid>
            <MDBRow>
                <MDBCol on >
                    {reviewData.reviews.length === 0 &&
                        <div className="reviewsSpinner">
                            <p className="loadingText">{dataState}</p>
                            <Spinner />
                        </div>
                    }
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    {
                        reviewData.reviews.map((review, i) =>
                        (
                            <div className="reviewsBox" key={i}>
                                <ReviewCard key={i} data={review} />
                            </div>
                        ))
                    }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Review