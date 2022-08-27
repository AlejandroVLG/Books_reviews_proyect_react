import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { userData } from "../User/userSlice";
import { useSelector } from "react-redux";

import "./Review.css"

const Review = props => {
    
    try {

        const [reviewData, setReviewsData] = useState({
            reviews: []
        })

        const identification = useSelector(userData);

        let requirements = {
            headers: {
                "Authorization": `Bearer ${identification.token}`
            }
        }
        
        const showReviews = async () => {

            const response = await axios.get(`https://books-reviews-app-proyect.herokuapp.com/api/review/showAllReviews/`, requirements)

            setReviewsData({
                reviews: response.data.data
            })
        }

        useEffect(() => {
            showReviews()
        }, [])

        return (
            <div className="reviewsBox">

                {reviewData.reviews.length === 0 && <p>Cargando...</p>}
                {
                    reviewData.reviews.map((reviews, i) =>
                    (
                        <div key={i}>
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

export default Review;