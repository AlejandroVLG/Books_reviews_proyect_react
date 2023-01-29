import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import SocialCard from "../SocialCard/SocialCard"
import "./FlipCard.scss"

const FlipCard = () => {

    const [showState, setShowState] = useState(true)

    return (
        <div className="flipCardContainer">
            <CSSTransition
                in={showState}
                timeout={300}
                classNames="flip"
            >
                <SocialCard
                    onClick={() => {
                        setShowState((e) => !e)
                    }} />
            </CSSTransition>
        </div>
    )
}

export default FlipCard