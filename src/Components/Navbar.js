import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Styles/Navbar.css';
import "bootstrap/dist/js/bootstrap";

function Navbar() {
    const handleClick = () => {
        const dropdown = document.querySelector('.nav');
        dropdown.classList.toggle('active');
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-light bg-light" id="navbar">
            <a className="navbar-brand" href="/">JN Freight</a>
            <div className="menu-button" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            <ul className="nav justify-content-center">
                
                <li className="nav-item" id="nav-item-start">
                    <Link to="/" className="nav-link active">Acceuil</Link>
                </li>
                <li className="nav-item" id="nav-item">
                    <Link to="/fleet" className="nav-link">Fleet</Link>
                </li>
                <li className="nav-item" id="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item" id="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item" id="nav-item-end">
                    <Link to="/clientSpace" className="nav-link">Espace Client</Link>
                </li>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;