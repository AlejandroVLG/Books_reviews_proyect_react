import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import { userData } from "../User/userSlice"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import Spinner from "../../components/Spinner/Spinner"
import "./Review.scss"

const Review = () => {

    try {
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

        return (

            <div >
                {reviewData.length === 0 && <p><Spinner /></p>}
                {
                    reviewData.reviews.map((reviews, i) =>
                    (
                        <div className="reviewsBox" key={i}>
                            <ReviewCard key={i} data={reviews} />
                        </div>
                    )
                    )
                }
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

export default Review