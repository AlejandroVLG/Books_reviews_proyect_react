import React from "react"
import ModalHome from '../../components/ModalHome/ModalHome'
import { motion } from "framer-motion"
import "./Home.scss"

const Home = props => {

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: "50vh",
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 20,
            },
        }
    }
    return (
        <div className="homeMainBox">
            <motion.div
                className="modalHome"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <ModalHome />

            </motion.div>
        </div>
    )
}

export default Home