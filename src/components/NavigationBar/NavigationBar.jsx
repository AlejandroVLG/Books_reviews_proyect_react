import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userData } from '../../containers/User/userSlice'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./NavigationBar.scss"
import { useState } from "react"

const NavigationBar = () => {

    const navigate = useNavigate()

    const [activeViewState, setActiveViewState] = useState()

    const identification = useSelector(userData)

    const dispatch = useDispatch()

    if (!identification.token) {

        return (
            <Navbar bg="dark" expand="lg" className="navBarBox">
                <Container>
                    <div className="collapseDiv">
                        <h2 className="collapseText">{activeViewState}</h2>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav collapsed">
                        <Nav className="me-auto interiorNav">
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => { navigate("/Books_reviews_proyect_react/"), setActiveViewState("Inicio") }}
                            >
                                Inicio
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => { navigate("/login"), setActiveViewState("Inicio de sesión") }}
                            >
                                Iniciar sesión
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink navBarLink2 navBarLink3"
                                onClick={() => { navigate("/books"), setActiveViewState("Biblioteca") }}
                            >
                                Biblioteca
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink2"
                                onClick={() => { navigate("/register"), setActiveViewState("Crear nuevo usuario") }}
                            >
                                Registrarse
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink2"
                                onClick={() => { navigate("/about"), setActiveViewState("Sobre el proyecto") }}
                            >
                                Sobre el proyecto
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )

    } else {
        return (

            <Navbar bg="dark" expand="lg" className="navBarBox">
                <Container >
                    <Navbar.Brand onClick={() => navigate("/myProfile")}>
                        <img
                            className="navBarImg"
                            src={identification.infoData.profile_img}
                            alt="profileImg"
                        />
                    </Navbar.Brand>
                    <div className="collapseDiv">
                        <p className="collapseText">{activeViewState}</p>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav collapsed">
                        <Nav className="me-auto interiorNav">
                            <hr />
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => { navigate("/Books_reviews_proyect_react/"), setActiveViewState("Inicio") }}
                            >
                                Inicio
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => { navigate("/myProfile"), setActiveViewState("Mi Perfil") }}
                            >
                                {identification.infoData.name}
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink navBarLink2 navBarLink3"
                                onClick={() => { navigate("/books"), setActiveViewState("Biblioteca") }}
                            >
                                Biblioteca
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => { navigate("/newBook"), setActiveViewState("Añadir Libro") }}
                            >
                                Añadir libro
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink2"
                                onClick={() => { navigate("/about"), setActiveViewState("Sobre el proyecto") }}
                            >
                                Sobre el proyecto
                            </Nav.Link>
                            <hr />
                            <Nav.Link
                                className="navBarLink2"
                                onClick={e => { navigate("/login"); dispatch(logOut()) }}
                            >
                                Cerrar sesión
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar
