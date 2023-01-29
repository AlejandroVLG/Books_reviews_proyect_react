import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"
import { Icon } from "@iconify/react"
import React from "react"
import "./SocialCard.scss"

const SocialCard = ({ onClick }) => {
    return (
        <div className="socialCardContainer" onClick={onClick}>
            <div className="frontCard">
            </div>
            <div className="backCard">
            </div>
        </div>
    )
}

export default SocialCard