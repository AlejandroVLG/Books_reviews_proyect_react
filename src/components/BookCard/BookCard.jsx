import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userData } from "../../containers/User/userSlice"
import './BookCard.css'

const BookCard = props => {

    let navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const identification = useSelector(userData)

    const deleteId = props.data.id

    let requirements = {
        headers: {
            "Authorization": `Bearer ${identification.token}`
        }
    }

    const travel = (destiny) => {

        navigate(destiny)
    }

    //Only the SuperAdmin/Admin can delete a book
    const handleDelete = async () => {

        await axios.delete(`https://books-reviews-app-proyect.herokuapp.com/api/book/deleteBook/${deleteId}`, requirements)
    }

    if (identification.infoData.id == 1) {

        return (

            <div layout className="mainCardBox">
                <motion.div
                    className="card"
                    layout
                    transition={{ layout: { duration: 3, type: "spring" } }}
                    style={{
                        borderRadius: "1em",
                        boxShadow: '0px 10px 30px rgba(0,0,0 0.5)'
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.h2 layout="position">Framer</motion.h2>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="expand"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ opacity: 0 }}
                                Layout
                            >
                                <p>
                                    {props.data.synopsis}
                                </p>
                                <p>
                                    asfsdgfdsfgsdfgsdfgdsfg
                                </p>
                                <button>asdads</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        )
    } else {

        return (

            <div layout className="mainCardBox">
                <motion.div
                    className="card"
                    layout
                    transition={{ layout: { duration: 2, type: "spring" } }}
                    style={{
                        borderRadius: "1em",
                        boxShadow: '0px 10px 30px rgba(0,0,0 0.5)',
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img className="cardImg" src={props.data.book_cover} alt="" />
                    <motion.h2 layout="position">{props.data.title}</motion.h2>
                        {isOpen && (
                            <motion.div
                                className="expand"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ opacity: 0 }}
                                Layout
                            >
                                <p>
                                    {props.data.author}
                                </p>
                                <p>
                                    asfsdgfdsfgsdfgsdfgdsfg
                                </p>
                                <button>asdads</button>
                            </motion.div>
                        )}
                </motion.div>
            </div>
        )
    }
}

export default BookCard