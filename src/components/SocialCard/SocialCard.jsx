import React from "react"
import { Icon } from "@iconify/react"
import frontCard from "../../../public/Img/frontCard.png"
import backCard from "../../../public/Img/backCard.png"
import "./SocialCard.scss"

const SocialCard = ({ onClick }) => {

    return (
        <div className="socialCardContainer" onClick={onClick}>
            <div
                className="frontCard"
                style={{ backgroundImage: `url(${frontCard})` }}
            >
            </div>
            <div
                className="backCard"
                style={{ backgroundImage: `url(${backCard})` }}
            >
                <a
                    tag='a'
                    href="https://github.com/Alexdck"
                    target="_blank"
                >
                    <Icon icon="ri:github-fill" className="socialIcon socialIconGitHub"></Icon>
                </a>
                <a
                    tag='a'
                    href="https://www.linkedin.com/in/alejandrolaguia/"
                    target="_blank"
                >
                    <Icon icon="ri:linkedin-fill" className="socialIcon socialIconLinkedin"></Icon>
                </a>
            </div>
        </div>
    )
}

export default SocialCard