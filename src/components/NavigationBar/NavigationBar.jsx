import React from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userData } from '../../containers/User/userSlice'
import "./NavigationBar.scss"

const NavigationBar = () => {

    let navigate = useNavigate()

    const identification = useSelector(userData)

    const dispatch = useDispatch()

    if (!identification.token) {

        return (
            <Navbar bg="dark" expand="sm" className="navBarBox">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav collapsed">
                        <Nav className="me-auto interiorNav">
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => navigate("/login")}
                            >
                                Iniciar sesión
                            </Nav.Link>
                            <Nav.Link
                                className="navBarLink navBarLink2 navBarLink3"
                                onClick={() => navigate("/books")}
                            >
                                Biblioteca
                            </Nav.Link>
                            <Nav.Link
                                className="navBarLink2"
                                eventKey={2}
                                onClick={() => navigate("/register")}
                            >
                                Registrarse
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )

    } else {
        return (

            <Navbar bg="dark" expand="sm" className="navBarBox">
                <Container >
                    <Navbar.Brand onClick={() => navigate("/myProfile")}>
                        <img
                            className="navBarImg"
                            src={identification.infoData.profile_img}
                            alt="profileImg"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav collapsed">
                        <Nav className="me-auto interiorNav">
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => navigate("/myProfile")}
                            >
                                {identification.infoData.name}
                            </Nav.Link>
                            <Nav.Link
                                className="navBarLink navBarLink2 navBarLink3"
                                onClick={() => navigate("/books")}
                            >
                                Biblioteca
                            </Nav.Link>
                            <Nav.Link
                                className="navBarLink navBarLink2"
                                onClick={() => navigate("/newBook")}
                            >
                                Añadir libro
                            </Nav.Link>
                            <Nav.Link
                                eventKey={2}
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
