import React from 'react'
import logoGrey from './Images/logo-grey.png'
import './Styles/Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className="Footer">
        <div className="Footer-logo-section">
            <img src={logoGrey} width="200px" height="200px" alt="logo"></img>
            <p>All contents of this site cannot be used without permission.</p>
        </div>

        <div className="FooterContact">
            <h2>Contact</h2>
            <p>JN Freight<br></br>
            Rue Okba Ibn Nafaa, Sidi Daoud 2046, La Marsa, Tunis<br></br>
            +216 24 40 21 00<br></br>
            info@jnfreight.tn
            </p>
        </div>

        <div className="FooterLinks">
          <h2>Liens Utiles</h2>
          <Link to="/" className="FooterLink">+ Acceuil</Link>
          <Link to="/fleet" className="FooterLink">+ Fleet</Link>
          <Link to="/services" className="FooterLink">+ Services</Link>
          <Link to="/contact" className="FooterLink">+ Contact</Link>
        </div>
      </div>
    );
  }
  
  export default Footer;