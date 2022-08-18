import React from "react";
import { useNavigate } from "react-router-dom";

import "./NavigationBar.css"

const NavigationBar = () => {

    let navigate = useNavigate()

    const travel = (destiny) => {

        navigate(destiny)
    }

    return (
        <nav className="navigationBar">
            <div className="homeButon" onClick={() => travel("/")}>Home</div>
            <div className="bookButon" onClick={() => travel("/books")}>Book</div>
            <div className="myProfileButon" onClick={() => travel("/myProfile")}>MyProfile</div>
            <div className="registerButon" onClick={() => travel("/register")}>Register</div>
            <div className="loginButon" onClick={() => travel("/login")}>Login</div>
        </nav>
    )
}

export default NavigationBar
