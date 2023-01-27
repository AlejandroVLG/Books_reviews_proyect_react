import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import AboutCard from "../AboutCard/AboutCard"
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
                <AboutCard
                    onClick={() => {
                        setShowState((e) => !e)
                    }} />
            </CSSTransition>
        </div>
    )
}

export default FlipCard