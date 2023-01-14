import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import BookCard from "../BookCard/BookCard"
import "./FlipCard.scss"

const FlipCard = ({ books }) => {

    const [showState, setShowState] = useState(true)

    return (
        <div className="flipCardContainer">
            <CSSTransition
                in={showState}
                timeout={300}
                classNames="flip"
            >
                <BookCard
                    books={books}
                    onClick={() => {
                        setShowState((e) => !e)
                    }} />
            </CSSTransition>
        </div>
    )
}

export default FlipCard