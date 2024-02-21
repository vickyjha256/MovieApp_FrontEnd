import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href='/' style={{ "color": 'gold' }}>
                        <FontAwesomeIcon icon={faVideoSlash}>
                            FilmyDuniya
                        </FontAwesomeIcon>
                    </Navbar.Brand>
                    <NavbarToggle aria-controls='navbarScroll' />
                    <NavbarCollapse id='navbarScroll'>
                        <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }} navbarScroll >
                            <NavLink className="nav-link" to="/"> Home </NavLink>
                            <NavLink className="nav-link" to="/watchlist"> Watch List </NavLink>
                        </Nav>
                        <Button variant='outline-info' className='me-2'> Login </Button>
                        <Button variant='outline-info' className='me-2'> Register </Button>
                        
                    </NavbarCollapse>
                </Container>

            </Navbar>
        </>
    )
}

export default Header;