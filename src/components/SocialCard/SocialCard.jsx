import React from "react"
import "./SocialCard.scss"

const SocialCard = ({ onClick }) => {
    return (
        <div className="socialCardContainer" onClick={onClick}>
            <div className="frontCard"></div>
            <div className="backCard"></div>
        </div>
    )
}

export default SocialCard