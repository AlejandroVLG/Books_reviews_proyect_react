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
                <div className="homeButon" onClick={() => travel("/")}>Portada</div>
                <div className="bookButon" onClick={() => travel("/books")}>Libros</div>
                <div className="registerButon" onClick={() => travel("/register")}>Registrarse</div>
                <div className="loginButon" onClick={() => travel("/login")}>Login</div>
            </nav>
        )
    } else {

        return (
            <nav className="navigationBar">
                <div className="homeButon" onClick={() => travel("/")}>Portada</div>
                <div className="bookButon" onClick={() => travel("/books")}>Libros</div>
                <div className="myProfileButon" onClick={() => travel("/myProfile")}>Mi cuenta</div>
                <div className="newBook" onClick={() => travel("/newBook")}>Añadir libro</div>
                <div className="logoutButon" onClick={() => dispatch(logOut())}>Logout</div>
            </nav>
        )
    }
}

export default NavigationBar
