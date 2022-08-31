import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userData } from '../../containers/User/userSlice';

import "./NavigationBar.css"

const NavigationBar = () => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const dispatch = useDispatch()

    const travel = (destiny) => {

        navigate(destiny)
    }
    if (!identification?.token) {

        return (
            <nav className="navigationBar">
                <hr className="hrLine" />
                <div className="homeButon" onClick={() => travel("/")}>Portada</div>
                <hr className="hrLine" />
                <div className="bookButon" onClick={() => travel("/books")}>Biblioteca</div>
                <hr className="hrLine" />
                <div className="registerButon" onClick={() => travel("/register")}>Registrarse</div>
                <hr className="hrLine" />
                <div className="loginButon" onClick={() => travel("/login")}>Login</div>
                <hr className="hrLine" />
            </nav>
        )
    } else {

        return (
            <nav className="navigationBar">
                <hr className="hrLine" />
                <div className="homeButon" onClick={() => travel("/")}>Portada</div>
                <hr className="hrLine" />
                <div className="bookButon" onClick={() => travel("/books")}>Biblioteca</div>
                <hr className="hrLine" />
                <div className="myProfileButon" onClick={() => travel("/myProfile")}>Mi cuenta</div>
                <hr className="hrLine" />
                <div className="newBook" onClick={() => travel("/newBook")}>Añadir libro</div>
                <hr className="hrLine" />
                <div className="logoutButon" onClick={() => dispatch(logOut())}>Logout</div>
                <hr className="hrLine" />
            </nav>
        )
    }
}

export default NavigationBar
