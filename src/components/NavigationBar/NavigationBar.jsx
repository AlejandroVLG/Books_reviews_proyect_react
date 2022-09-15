import React from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userData } from '../../containers/User/userSlice'

import "./NavigationBar.scss"

const NavigationBar = () => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const dispatch = useDispatch()

    const travel = (destiny) => {

        navigate(destiny)
    }

    if (!identification.token) {

        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="navBarBox">
                <Container className="navBarContainer">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navBarLink" onClick={() => travel("/books")}>Biblioteca</Nav.Link>
                            <NavDropdown title="Desplegable" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Prueba 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Prueba 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Prueba 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className="navBarLink" onClick={() => travel("/login")}>Iniciar sesión</Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => travel("/register")}>Registrarse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )

    } else {
        return (

            <Navbar sticky="top" bg="dark" expand="lg" className="navBarBox">
                <Container>
                    <Navbar.Brand onClick={() => travel("/myProfile")}>
                        <img className="navBarImg" src={identification.infoData.profile_img} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => travel("/myProfile")}
                            >
                                {identification.infoData.name}
                            </Nav.Link>
                            <Nav.Link className="navBarLink navBarLink2 navBarLink3" onClick={() => travel("/books")}>Biblioteca</Nav.Link>
                            <Nav.Link className="navBarLink navBarLink2" onClick={() => travel("/newBook")}>Añadir libro</Nav.Link>
                            <Nav.Link
                                eventKey={2}
                                className="navBarLink2"
                                onClick={e => { travel("/"); dispatch(logOut()) }}
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
