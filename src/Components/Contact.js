import React from 'react'
import './Styles/Contact.css'
import Footer from './Footer.js'
import Copyrights from './Copyrights'
import Pin from './Images/pin.png'
import Phone from './Images/phone.png'
import Mail from './Images/mail.png'

function Contact() {
    return (
      <div className="Contact">
        <div className="HQContact">
          <div className="HQText">
            <h2>HQ</h2>
            <p>
              <img src={Pin} width={15} height={15} alt="HQ Sidi Daoud" id="HQSididaoud"></img> <b>Sidi Daoud:</b> Rue Okba Ibn Nafaa, Sidi Daoud, La Marsa, Tunis<br></br>
              <img src={Pin} width={15} height={15} alt="HQ Rades" id="HQRades"></img> <b>Rades:</b> Rades Port, Rades, Tunis<br></br>
              <img src={Pin} width={15} height={15} alt="HQ Centre Ville" id="HQCV"></img> <b>Centre Ville:</b> Avenue Habib Bourguiba, Tunis
            </p>
            <p>
              <img src={Phone} width={15} height={15} alt="Phone" id="HQPhone"></img> <b>+216 </b> 24 40 21 00
            </p>
            <p>
              <img src={Mail} width={15} height={15} alt="Mail" id="HQMail"></img> info@jnfreight.tn
            </p>
          </div>
          <iframe
            width={600}
            height={450}
            
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            title='HQ'
            src='https://www.google.com/maps/d/embed?mid=1PMaUYty-3YRqO-dRNCoyB4jlQcdL07c&ehbc=2E312F'>
          </iframe>
        </div>
        <Footer />
        <Copyrights />
      </div>
    );
  }
  
  export default Contact;