import React from 'react'
import './Styles/Services.css'

function Services() {
    return (

      <div className="Services">
        <h1 className="ServicesTitle">Nos Services</h1>
        <div className="ServicesContainer">
            <div className="ServiceCard" id="MaritimeService">
                <div className="ServiceCardContent">
                    <h2 className="ServiceCardTitle">Transport Maritime</h2>
                </div>
            </div>
            <div className="ServiceCard" id="AirService">
            <div className="ServiceCardContent">
                    <h2 className='ServiceCardTitle'>Transport Aerien</h2>
                </div>
            </div>
            <div className="ServiceCard" id="LandService">
                <div className="ServiceCardContent">
                    <h2 className="ServiceCardTitle">Transport Terrestre</h2>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Services;