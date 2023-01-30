import { Icon } from "@iconify/react"
import React from "react"
import "./SocialCard.scss"

const SocialCard = ({ onClick }) => {
    return (
        <div className="socialCardContainer" onClick={onClick}>
            <div className="frontCard"></div>
            <div className="backCard">
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