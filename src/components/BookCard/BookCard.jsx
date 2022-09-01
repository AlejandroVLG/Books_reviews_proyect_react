import React from "react"
import { bookCard, faceFrontCard, frontImgCard, frontH3Card, faceBackCard, backH3Card, textBackCard, linkDivCard, linkCard } from "../../styledComponents/styledComponents"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import './BookCard.css'


const BookCard = props => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const travel = (destiny) => {

        navigate(destiny)
    }

    const handleDelete = async () => {

        await axios.delete('https://books-reviews-app-proyect.herokuapp.com/api/book/deleteBook', requirements)

    }

    return (
        <div className="mainBox">
            <bookCard>
                <faceFrontCard>
                    <frontImgCard src={props.data.book_cover}/>
                    <frontH3Card>{props.data.title}</frontH3Card>
                </faceFrontCard>
                <faceBackCard>
                    <backH3Card>{props.data.series}</backH3Card>
                    <textBackCard>{props.data.genre}</textBackCard>
                    <linkDivCard className="link">
                        <linkCard href={props.data.shop_url}>Cómpralo</linkCard>
                    </linkDivCard>
                </faceBackCard>
            </bookCard>
        </div>
    )
}

export default BookCard