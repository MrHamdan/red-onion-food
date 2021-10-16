import React from 'react';
import './Items.css'
import { Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const Items = () => {
    return (
        <div className="d-flex justify-content-center pt-10 pb-10">
            <Navbar>
                <Nav>
                    <Nav.Link as={HashLink} to="/breakfast#breakfast" className="mx-3 fw-bold text-danger">Breakfast</Nav.Link>
                    <Nav.Link as={HashLink} to="/lunch#lunch" className="mx-3 fw-bold text-danger">Lunch</Nav.Link>
                    <Nav.Link as={HashLink} to="/dinner#dinner" className="mx-3 fw-bold text-danger">Dinner</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Items;