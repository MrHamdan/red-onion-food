import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar expand="lg">
                <Container className="header-container">
                    <div>
                        <Navbar.Brand as={Link} to="/home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#icon"><i className="fas fa-cart-plus mx-3 fw-bold"></i></Nav.Link>
                                {user?.email ?
                                    <Button onClick={logOut} variant="danger">Logout</Button> :
                                    <Nav.Link as={Link} to="/login" className="mx-3 fw-bold">Login</Nav.Link>
                                }
                                <Button className="rounded-pill px-4 mx-3 fw-bold" variant="danger">Sign Up</Button>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;