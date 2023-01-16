import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import { userData } from "../User/userSlice"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import Spinner from "../../components/Spinner/Spinner"
import "./Review.scss"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"

const Review = () => {


    const { id } = useParams()

    const identification = useSelector(userData)

    const [reviewData, setReviewsData] = useState({
        reviews: []
    })

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const showReviews = async () => {

        const response = await axios.get(`https://bookapi.up.railway.app/api/review/searchReviewByBookId/${id}`, requirements)

        setReviewsData({
            reviews: response.data.data
        })
    }

    useEffect(() => {
        showReviews()
    }, [])

    console.log(reviewData.reviews)

    return (

        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    {reviewData.reviews.length === 0 &&
                        <div className="reviewsSpinner">
                            <p className="loadingText">Cargando contenido</p>
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
                        )
                        )
                    }

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}

export default Review