import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        <div className="bg-color">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="300" height="300" />
                </a>
            </div>
        </div>
    );
};

export default Footer;