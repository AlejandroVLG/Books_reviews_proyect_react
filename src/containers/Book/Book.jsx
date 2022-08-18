import React from "react";

import "./Book.css"

const Book = props => {
    return (
        <div className="bookMainBox">
            <div className="bookContentBox">
                <div className="bookDataBox">Data</div>
                <div className="bookSearchBox">Search</div>
            </div>
            <div className="bookFooterBox">Footer</div>
        </div>
    )
}

export default Book;